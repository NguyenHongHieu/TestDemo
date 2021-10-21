using demo1.CodeLogic;
using demo1.CodeLogic.Attributes;
using demo1.CodeLogic.Commons;
using demo1.CodeLogic.Customs;
using demo1.Models;
using demo1.Models.QrCode;
using demo1.Models.Views;
using demo1.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using static demo1.CodeLogic.Enums.Enums;

namespace demo1.Areas.Admin.Controllers
{
    public class UserController : BaseController
    {
        private string defauthPath = "/user";

        #region Account
        [AuthorizeCustom(IRoles = new int[] { (int)Role.Admin }, IRoleSystem = (int)SystemRole.System)]
        public ActionResult Index()
        {
            SetTitle("Account Management");
            var param = new UserParam().BindData(DATA);
            ViewBag.SearchParam = param;
            var baseStatus = Utils.EnumToDictionary<BaseStatus>();
            var roles = Utils.EnumToDictionary<Role>();

            var users = UserRepository.UseInstance.GetListByFieldsOrDefault(new List<CondParam>
            {
                new CondParam{Field = "Name" , Value = param.Name, CompareType = (int)CompareTypes.Like, TypeSQL = (int)TypeSQl.String, NotUsed = param.Name.IsNullOrEmpty()},
                new CondParam{Field = "Phone" , Value = param.Phone , CompareType = (int)CompareTypes.Equal, TypeSQL = (int)TypeSQl.String, NotUsed = param.Phone.IsNullOrEmpty()},
                new CondParam{Field = "Status", Value = param.Status, CompareType = (int)CompareTypes.Equal, TypeSQL = (int)TypeSQl.Number, NotUsed = param.Status == 0},
                new CondParam{Field = "IDRole", Value = param.IDRole, CompareType = (int)CompareTypes.Equal, TypeSQL = (int)TypeSQl.Number, NotUsed = param.IDRole == 0},
                new CondParam{Field = "IDRole", Value = (int)SystemRole.System, CompareType = (int)CompareTypes.NotEqual, TypeSQL = (int)TypeSQl.Number},
            }, Paging, "ISNULL(Updated,Created) DESC") ?? new List<User>();

         

            return GetCustResultOrView(new ViewParam()
            {
                Data = new UserModel()
                {
                    Roles = roles,
                    Users = users,
                    BaseStatus = baseStatus,
                    Action = defauthPath,
                },
                ViewName = "Index",
                ViewNameAjax = "Users",
            });
        }


        [AuthorizeCustom(IRoles = new int[] { (int)Role.Admin }, IRoleSystem = (int)SystemRole.System)]
        public ActionResult Create()
        {
            SetTitle("Add new account");
            var baseStatus = Utils.EnumToDictionary<BaseStatus>();
            var roles = Utils.EnumToDictionary<Role>();
            var users = UserRepository.UseInstance.GetListByFieldsOrDefault(new List<CondParam> {
            }) ?? new List<User>();

            return GetCustResultOrView(new ViewParam()
            {

                Data = new UserModel()
                {
                    User = new User(),
                    Users = users,
                    Roles = roles,
                    BaseStatus = baseStatus,
                    Action = "/Admin/User/Save",
                    Button = "Add",

                },
                ViewName = "Create",
                ViewNameAjax = "Create",
            });
        }

        public ActionResult Save()
        {

            var user = new User().BindData(DATA);
            var base64Avatar = Utils.GetString(DATA, "PathImg");
            var fileName = Utils.GetString(DATA, "FileNameImg");
            var urlFile = base64Avatar.IsNullOrEmpty() ? null : SaveThumb(base64Avatar, fileName);
            user.FileNameImg = fileName;
            user.PathImg = urlFile;
            //user.IDRole = user.IDRole == 0 ? (int)Role.Student : user.IDRole;
            user.Created = DateTime.Now;
            user.CreatedBy = CUser == null ? 0 : CUser.ID;

            var (check, mess) = IsValidate(user);
            if (check)
            {
                SetError(mess);
                SetUrlResponse("/user/add");
                return GetResultOrReferrerDefault("/user/add");
            }
            else if (UserRepository.UseInstance.Insert(user))
            {
                SetSuccess("New account created successfully");
            }
            else
            {
                SetError("New account creation failed");
            }
            //return GetResultOrReferrerDefault("/Admin/Blog/Create");
            SetUrlResponse(defauthPath);
            return GetResultOrReferrerDefault(defauthPath);


        }


        [AuthorizeCustom(IRoles = new int[] { (int)Role.Admin }, IRoleSystem = (int)SystemRole.System)]
        public ActionResult Update(int ID)
        {
            SetTitle("Update account");
            var baseStatus = Utils.EnumToDictionary<BaseStatus>();
            var users = UserRepository.UseInstance.GetListByFieldsOrDefault(new List<CondParam> {
            }) ?? new List<User>();
            var roles = Utils.EnumToDictionary<Role>();

            var user = UserRepository.UseInstance.GetById(ID);

            if (Equals(user, null))
            {
                SetError("Account information no longer exists");
                return GetResultOrReferrerDefault(defauthPath);
            }
            return GetDialogResultOrView(new ViewParam
            {
                ViewName = "Create",
                ViewNameAjax = "Create",
                Data = new UserModel
                {
                    User = user,
                    Users = users,
                    Roles = roles,
                    BaseStatus = baseStatus,
                    Action = "/Admin/User/Change",
                    Button = "Update",
                }
            });
        }

        public ActionResult Change()
        {
            var ID = Utils.GetInt(DATA, "ID");
            var user = UserRepository.UseInstance.GetById(ID);
            var pathImgPrev = user.PathImg;
            var fileNamePrev = user.FileNameImg;
            var status = user.Status;
            user = user.BindData(DATA, false);

            var base64Avatar = Utils.GetString(DATA, "PathImg");
            var fileName = Utils.GetString(DATA, "FileNameImg");
            if (!base64Avatar.IsNullOrEmpty())
            {
                var urlFile = base64Avatar.IsNullOrEmpty() ? null : SaveThumb(base64Avatar, fileName);
                user.FileNameImg = fileName;
                user.PathImg = urlFile;
            }
            else
            {
                user.FileNameImg = fileNamePrev;
                user.PathImg = pathImgPrev;
            }
            user.Updated = DateTime.Now;
            user.UpdatedBy = CUser == null ? 0 : CUser.ID;

            var (check, mess) = IsValidate(user, status);
            if (check)
            {
                SetError(mess);
                SetUrlResponse("/user/update/"+ ID);
                return GetResultOrReferrerDefault("/user/update/" + ID);
            }
            else if (UserRepository.UseInstance.Update(user))
            {
                SetSuccess("Account update successful");

            }
            else
            {
                SetError("Account update failed");
            }
            SetUrlResponse(defauthPath);
            return GetResultOrReferrerDefault(defauthPath);
        }

        private (bool, string) IsValidate(User user, int status = 0)
        {
            if (Utils.IsNullOrEmpty(user.Username))
            {
                return (true, "Username cannot be left blank");
            }
            else if (Utils.IsNullOrEmpty(user.Password))
            {
                return (true, "Password cannot be left blank");
            }
            else if (Utils.IsNullOrEmpty(user.Name))
            {
                return (true, "Name cannot be left blank");
            }
            else if (Utils.IsNullOrEmpty(user.Phone))
            {
                return (true, "Phone cannot be left blank");
            }
            else if (Utils.IsNullOrEmpty(user.Address))
            {
                return (true, "Address cannot be left blank");
            }
            else if (user.Status == 0)
            {
                return (true, "Status cannot be left blank");
            }
            if (status != 0 && user.Status != status && user.ID == CUser.ID)
            {
                return (true, "Can't change status for logged in account");
            }
            if (CUtils.CheckUtf8(user.Password) || CUtils.CheckUtf8(user.Username))
            {
                return (true, "Username/password cannot be written with special characters");
            }
            var checkUsername = UserRepository.UseInstance.GetListByFieldsOrDefault(new List<CondParam>
            {
                new CondParam { Field="Username", Value=user.Username, CompareType= (int)CompareTypes.Equal, TypeSQL = (int)TypeSQl.String },
                new CondParam { Field="ID", Value=user.ID, CompareType= (int)CompareTypes.NotEqual, TypeSQL = (int)TypeSQl.Number, NotUsed = user.ID == 0 },
            });
            if (checkUsername.Count >= 1)
            {
                return (true, "This username already exists");
            }
            var checkPhone = UserRepository.UseInstance.GetListByFieldsOrDefault(new List<CondParam>
            {
                new CondParam { Field="Phone", Value=user.Phone, CompareType= (int)CompareTypes.Equal, TypeSQL = (int)TypeSQl.String },
                new CondParam { Field="ID", Value=user.ID, CompareType= (int)CompareTypes.NotEqual, TypeSQL = (int)TypeSQl.Number, NotUsed = user.ID == 0 },
            });
            if (checkPhone.Count >= 1)
            {
                return (true, "This phone number already exists");
            }
            if (user.IDRole == 0)
            {
                return (true, "Account has not been selected");
            }
         

            return (false, string.Empty);
        }


        [AuthorizeCustom(IRoles = new int[] { (int)Role.Admin }, IRoleSystem = (int)SystemRole.System)]
        public ActionResult IsDelete()
        {
            var id = Utils.GetInt(DATA, "ID");
            var user = UserRepository.UseInstance.GetById(id);
            if (Equals(user, null))
            {
                SetError("Account information no longer exists");
                return GetResultOrReferrerDefault("/Admin/User/Index");
            }
            return GetDialogResultOrView(new ViewParam
            {
                Data = new BaseModel
                {
                    ID = id,
                    Title = string.Format("Delete account information"),
                    Content = string.Format("Are you sure you want to delete the account information \"{0}\"?", user.Name),
                    Url = "/Admin/User/Delete"
                },
                ViewName = "IsDelete",
                ViewNameAjax = "IsDelete",
                Width = 400
            });

        }

        public ActionResult Delete()
        {
            var id = Utils.GetInt(DATA, "ID");
            var user = UserRepository.UseInstance.GetById(id);
            if (user.IDRole == (int)SystemRole.System)
            {
                SetWarn("Can't delete system account");
                return GetResultOrReferrerDefault(defauthPath);
            }
            if (Equals(user, null))
            {
                SetError("Account information no longer exists");
                return GetResultOrReferrerDefault(defauthPath);
            }
            if (UserRepository.UseInstance.Delete(user.ID))
            {
                SetSuccess(string.Format("Delete account information \"{0}\" successfully", user.Name));
            }
            else
            {
                SetError(string.Format("Account deletion \"{0}\" failed", user.Name));
            }
            SetUrlResponse(defauthPath);
            return GetResultOrReferrerDefault(defauthPath);
        }


        [AuthorizeCustom(IRoles = new int[] { (int)Role.Admin }, IRoleSystem = (int)SystemRole.System)]
        public ActionResult ChangeStatus(int ID, int Status)
        {
            var user = UserRepository.UseInstance.GetById(ID);
            user.Status = Status;
            user.Updated = DateTime.Now;
            user.UpdatedBy = CUser == null ? 0 : CUser.ID;

            if (user.ID == CUser.ID)
            {
                SetWarn("Unable to update status for logged in account");
            }
            else if (UserRepository.UseInstance.Update(user))
            {
                SetSuccess("Account status update successful");
            }
            else
            {
                SetError("Account status update failed");
            }
            SetUrlResponse(defauthPath);
            return GetResultOrReferrerDefault(defauthPath);
        }
        #endregion



        [AuthorizeCustom(IRoles = new int[] { (int)Role.Admin }, IRoleSystem = (int)SystemRole.System)]
        public ActionResult ListRole()
        {
            SetTitle("List roles");

            var roles = Utils.EnumToDictionary<Role>();
            ViewBag.Roles = roles;
            return GetCustResultOrView(new ViewParam()
            {
                ViewName = "ListRole",
                ViewNameAjax = "ListRoles",
            });
        }
    }
}