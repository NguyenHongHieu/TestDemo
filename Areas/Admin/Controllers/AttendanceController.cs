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
using static demo1.CodeLogic.Entity.AttendanceExcel;
using static demo1.CodeLogic.Enums.Enums;

namespace demo1.Areas.Admin.Controllers
{
    public class AttendanceController : BaseController
    {
        private string defauthPath = "/thong-tin-diem-danh";
        // GET: Admin/Attendance
        [AuthorizeCustom(IRoles = new int[] { (int)Role.Admin, (int)Role.Coach , (int)Role.Receptionist , (int)Role.Sale }, IRoleSystem = (int)SystemRole.System)]
        public ActionResult Index()
        {
            SetTitle("Thông tin điểm danh");
            var param = new AttendanceParam().BindData(DATA);
            ViewBag.SearchParam = param;
            var baseStatus = Utils.EnumToDictionary<StatusAttendance>(); 
            var attendances = WorkDayRepository.UseInstance.GetListByFieldsOrDefault(new List<Models.CondParam>
            {
                new Models.CondParam{Sql = string.Format("IDAttendance in (Select IDAttendance From [User] Where ID = {0})", param.IDUser), NotUsed = param.IDUser == 0},
                new Models.CondParam{Sql = string.Format("IDAttendance in (Select IDAttendance From [User] Where ID = {0})", CUser.ID), NotUsed = new int[]{ (int)SystemRole.System, (int)Role.Admin }.Contains(CUser.IDRole)},
                new Models.CondParam{Field = "Created" , Value = param.StartDate, CompareType = (int)CompareTypes.LowerThan, TypeSQL = (int)TypeSQl.Date, NotUsed = param.StartDate.IsNullOrEmpty()},
                new Models.CondParam{Field = "Created" , Value = Utils.StringToStrDateTimeAddDay(param.EndDate), CompareType = (int)CompareTypes.GreaterThan, TypeSQL = (int)TypeSQl.Date, NotUsed = param.EndDate.IsNullOrEmpty()},
                new Models.CondParam{Field = "Status", Value = param.Status, CompareType = (int)CompareTypes.Equal, TypeSQL = (int)TypeSQl.Number, NotUsed = param.Status == 0}
            }, Paging, "ISNULL(Updated,Created) DESC") ?? new List<Attendance>();
            var users = UserRepository.UseInstance.GetListByFieldsOrDefault(new List<CondParam>
            {
                new CondParam{ Field = "ID", Value= CUser.ID, CompareType = (int)CompareTypes.Equal, TypeSQL = (int)TypeSQl.Number, NotUsed = new int[]{ (int)SystemRole.System, (int)Role.Admin }.Contains(CUser.IDRole) }
            });
            return GetCustResultOrView(new ViewParam()
            {
                Data = new WorkDayModel()
                {
                    Attendances = attendances,
                    Users = users,
                    BaseStatus = baseStatus,
                    Action = defauthPath,
                },
                ViewName = "Index",
                ViewNameAjax = "Attendances",
            });
        }


        [AuthorizeCustom(IRoles = new int[] { (int)Role.Admin, (int)Role.Coach, (int)Role.Receptionist, (int)Role.Sale }, IRoleSystem = (int)SystemRole.System)]
        public ActionResult Update(int ID)
        {
            SetTitle("Chi tiết thông tin điểm danh");
            var baseStatus = Utils.EnumToDictionary<StatusAttendance>();

            var attendance = WorkDayRepository.UseInstance.GetById(ID);
            if (Equals(attendance, null))
            {
                SetError("Thông tin điểm danh không còn tồn tại");
                return GetResultOrReferrerDefault(defauthPath);
            }
            var user = UserRepository.UseInstance.GetFirstByFieldOrDefault("IDAttendance", attendance.IDAttendance, (int)TypeObject.Int);
            return GetDialogResultOrView(new ViewParam
            {
                ViewName = "Update",
                ViewNameAjax = "Update",
                Data = new WorkDayModel
                {
                    Attendance = attendance,
                    BaseStatus = baseStatus,
                    User = user,
                }
            });
        }
    }
}