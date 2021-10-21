using demo1.CodeLogic;
using demo1.CodeLogic.Attributes;
using demo1.CodeLogic.Commons;
using demo1.CodeLogic.Customs;
using demo1.CodeLogic.Entity;
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
    public class LeaveController : BaseController
    {
        private string defauthPath = "/leave";
        // GET: Admin/Attendance
        [AuthorizeCustom(IRoles = new int[] { (int)Role.Employee }, IRoleSystem = (int)SystemRole.System)]
        public ActionResult Index()
        {
            SetTitle("List Leaves");
            var param = new LeaveParam().BindData(DATA);
            ViewBag.SearchParam = param;
            var baseStatus = Utils.EnumToDictionary<StatusLeave>();
            var leaves = LeaveRepository.UseInstance.GetListByFieldsOrDefault(new List<CondParam>
            {
                new CondParam{Field = "IDUser" , Value = CUser.ID, CompareType = (int)CompareTypes.Equal, TypeSQL = (int)TypeSQl.Number},
                new CondParam{Field = "EndDate" , Value = param.StartDate, CompareType = (int)CompareTypes.LowerThan, TypeSQL = (int)TypeSQl.Date, NotUsed = param.StartDate.IsNullOrEmpty()},
                new CondParam{Field = "StartDate" , Value = Utils.StringToStrDateTimeAddDay(param.EndDate), CompareType = (int)CompareTypes.GreaterThan, TypeSQL = (int)TypeSQl.Date, NotUsed = param.EndDate.IsNullOrEmpty()},
                new CondParam{Field = "Status", Value = param.Status, CompareType = (int)CompareTypes.Equal, TypeSQL = (int)TypeSQl.Number, NotUsed = param.Status == 0}
            }, Paging, "ISNULL(Updated,Created) DESC") ?? new List<Leave>();
            return GetCustResultOrView(new ViewParam()
            {
                Data = new LeaveModel()
                {
                    Leaves = leaves,
                    User = CUser,
                    BaseStatus = baseStatus,
                    Action = defauthPath,
                },
                ViewName = "Index",
                ViewNameAjax = "Leaves",
            });
        }

        [AuthorizeCustom(IRoles = new int[] { (int)Role.Employee }, IRoleSystem = (int)SystemRole.System)]
        public ActionResult Create()
        {
            SetTitle("Add new leave");
            var baseStatus = Utils.EnumToDictionary<StatusLeave>();
            return GetCustResultOrView(new ViewParam()
            {
                Data = new LeaveModel()
                {
                    Leave = new Leave(),
                    BaseStatus = baseStatus,
                    Action = "/Admin/Leave/Save",
                    Button = "Add",
                    Button2 = "Add and Sent",
                },
                ViewName = "Create",
                ViewNameAjax = "Create",
            });
        }

        [ValidateInput(false)]
        public ActionResult Save()
        {
            var leave = new Leave().BindData(DATA);

            leave.Contents = Uri.UnescapeDataString(leave.Contents);
            leave.IDUser = CUser == null ? 0 : CUser.ID;
            leave.Created = DateTime.Now;
            leave.CreatedBy = CUser == null ? 0 : CUser.ID;

            if (Request.Form["IsSent"] != null)
            {
                leave.Status = (int)StatusLeave.SendHR;
            }
            else
            {
                leave.Status = (int)StatusLeave.Created;
            }
            var (check, mess) = IsValidate(leave);
            if (check)
            {
                SetError(mess);
                SetUrlResponse("/leave/add");
                return GetResultOrReferrerDefault("/leave/add");
            }
            else if (LeaveRepository.UseInstance.Insert(leave))
            {
                SetSuccess("Create new leave successfully");
            }
            else
            {
                SetError("New leave creation failed");
            }
            //return GetResultOrReferrerDefault("/Admin/Blog/Create");
            SetUrlResponse(defauthPath);
            return GetResultOrReferrerDefault(defauthPath);
        }

        [AuthorizeCustom(IRoles = new int[] { (int)Role.Employee }, IRoleSystem = (int)SystemRole.System)]
        public ActionResult Update(int ID)
        {
            SetTitle("Update leave");
            var baseStatus = Utils.EnumToDictionary<StatusLeave>();

            var leave = LeaveRepository.UseInstance.GetById(ID);
            if (Equals(leave, null))
            {
                SetError("Data no longer exists");
                return GetResultOrReferrerDefault(defauthPath);
            }
            return GetCustResultOrView(new ViewParam()
            {
                Data = new LeaveModel()
                {
                    Leave = leave,
                    BaseStatus = baseStatus,
                    Action = "/Admin/Leave/Change",
                    Button = "Update",
                    Button2 = "Update and Sent",
                },
                ViewName = "Create",
                ViewNameAjax = "Create",
            });
        }

        [ValidateInput(false)]
        public ActionResult Change()
        {
            var ID = Utils.GetInt(DATA, "ID");
            var leave = LeaveRepository.UseInstance.GetById(ID);
            leave = leave.BindData(DATA, false);

            leave.Contents = Uri.UnescapeDataString(leave.Contents);
            leave.Updated = DateTime.Now;
            leave.UpdatedBy = CUser == null ? 0 : CUser.ID;
            if (Request.Form["IsSent"] != null)
            {
                leave.Status = (int)StatusLeave.SendHR;
            }
            else
            {
                leave.Status = (int)StatusLeave.Created;
            }

            var (check, mess) = IsValidate(leave);
            if (check)
            {
                SetError(mess);
            }
            else if (LeaveRepository.UseInstance.Update(leave))
            {
                SetSuccess("Leave update successful");
                SetUrlResponse(defauthPath);
                return GetResultOrReferrerDefault(defauthPath);
            }
            else
            {
                SetError("Leave update failed");
            }
            SetUrlResponse("/leave/update/" + leave.ID);
            return GetResultOrReferrerDefault("/leave/update/" + leave.ID);
        }

        private (bool, string) IsValidate(Leave leave)
        {
            if (Utils.IsNullOrEmpty(leave.Title))
            {
                return (true, "Title cannot be left blank");
            }
            if (Utils.IsNullOrEmpty(leave.Contents))
            {
                return (true, "Contents cannot be left blank");
            }
            if (leave.StartDate > leave.EndDate)
            {
                return (true, "The start date cannot be greater than the end date");
            }
            var leaves = LeaveRepository.UseInstance.GetListByFieldsOrDefault(new List<CondParam>
            {
                new CondParam{Field = "ID" , Value = leave.ID, CompareType = (int)CompareTypes.NotEqual, TypeSQL = (int)TypeSQl.Number, NotUsed = leave.ID == 0},
                new CondParam{Field = "IDUser" , Value = CUser.ID, CompareType = (int)CompareTypes.Equal, TypeSQL = (int)TypeSQl.Number},
                new CondParam{Field = "EndDate" , Value = Utils.DateToString(leave.StartDate), CompareType = (int)CompareTypes.LowerThan, TypeSQL = (int)TypeSQl.Date},
                new CondParam{Field = "StartDate" , Value = Utils.DatetimeToStrDateTimeAddDay(leave.EndDate), CompareType = (int)CompareTypes.GreaterThan, TypeSQL = (int)TypeSQl.Date},
            });
            if (leaves.Count >= 1)
            {
                return (true, "Your registration time has been duplicated");
            }
            return (false, string.Empty);
        }

        [AuthorizeCustom(IRoles = new int[] { (int)Role.Employee }, IRoleSystem = (int)SystemRole.System)]
        public ActionResult IsDelete()
        {
            var id = Utils.GetInt(DATA, "ID");
            var leave = LeaveRepository.UseInstance.GetById(id);
            if (Equals(leave, null))
            {
                SetError("Data no longer exists");
                return GetResultOrReferrerDefault(defauthPath);
            }
            return GetDialogResultOrView(new ViewParam
            {
                Data = new BaseModel
                {
                    ID = id,
                    Title = string.Format("Delete leave information"),
                    Content = string.Format("Are you sure you want to delete the data \"{0}\"?", leave.Title),
                    Url = "/Admin/Leave/Delete"
                },
                ViewName = "IsDelete",
                ViewNameAjax = "IsDelete",
                Width = 400
            });

        }

        public ActionResult Delete()
        {
            var id = Utils.GetInt(DATA, "ID");
            var leave = LeaveRepository.UseInstance.GetById(id);
            if (Equals(leave, null))
            {
                SetError("Data no longer exists");
                return GetResultOrReferrerDefault(defauthPath);
            }
            if (LeaveRepository.UseInstance.Delete(leave.ID))
            {
                SetSuccess("Delete data successfully");
            }
            else
            {
                SetError("Delete data failed");
            }

            return GetResultOrReferrerDefault(defauthPath);
        }
    }
}