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
    public class HomeController : BaseController
    {
        // GET: Admin/Home
        [AuthorizeCustom(IRoles = new int[] { (int)Role.Admin }, IRoleSystem = (int)SystemRole.System)]
        public ActionResult Index()
        {
            SetTitle("Management");
            var users = UserRepository.UseInstance.GetListByFieldsOrDefault(new List<CondParam>
            {
            },null, "ISNULL(Updated,Created) DESC") ?? new List<User>();
      
            return GetCustResultOrView(new ViewParam()
            {
                Data = new HomeModel()
                {
                    Users = users
                },
                ViewName = "Index",
            });
        }

        [AuthorizeCustom(IsUser = true)]
        public ActionResult Profile()
        {
            SetTitle("Profile");
            var user = CUserWithDB;
            var role = Utils.EnumToDictionary<Role>();
            var baseStatus = Utils.EnumToDictionary<BaseStatus>();
            return GetCustResultOrView(new ViewParam()
            {
                Data = new HomeModel
                {
                    User = user,
                    Role = role,
                    BaseStatus = baseStatus,
                },
                ViewName = "Profile",
            });
        }

        [ValidateInput(false)]
        public ActionResult ChangeProfile()
        {
            var ID = Utils.GetInt(DATA, "ID");
            var user = UserRepository.UseInstance.GetById(ID);
            var pathImgPrev = user.PathImg;
            var fileNamePrev = user.FileNameImg;
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
            if (UserRepository.UseInstance.Update(user))
            {
                Session["CurrentUser"] = user;
                SetSuccess("Successfully edited personal information");
            }
            else
            {
                SetError("Editing personal information failed");
            }
            return GetResultOrReferrerDefault("/profile");
        }

        public ActionResult ChangePassword()
        {
            var user = CUserWithDB;
            var password = Utils.GetString(DATA, "Password");
            var passwordNew = Utils.GetString(DATA, "PasswordNew");
            var passwordConfirm = Utils.GetString(DATA, "PasswordConfirm");
            if (Equals(user, null))
            {
                SetError("Information no longer exists");
                return GetResultOrReferrerDefault("/profile");
            }
            var (check, mess) = IsValidateChangePassword(user, password, passwordNew, passwordConfirm);
            if (check)
            {
                SetError(mess);
            }
            else
            {
                user.Password = passwordNew;
                if (UserRepository.UseInstance.Update(user))
                {
                    SetSuccess(string.Format("Change password successfully"));
                }
                else
                {
                    SetError(string.Format("Password change failed"));
                }
            }

            return GetResultOrReferrerDefault("/profile");
        }

        private (bool, string) IsValidateChangePassword(User user, string password, string passwordNew, string passwordConfirm)
        {
            if (passwordNew.Trim() != passwordConfirm.Trim())
            {
                return (true, "Confirm password is incorrect");
            }
            if (password.Trim() != user.Password.Trim())
            {
                return (true, "Current password is incorrect");
            }
            if (CUtils.CheckUtf8(passwordNew))
            {
                return (true, "Password must not contain special characters");
            }
            return (false, string.Empty);
        }

    }
}