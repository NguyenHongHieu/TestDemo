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
    public class ReportController : BaseController
    {
        private string defauthPath = "/report";
        // GET: Admin/Attendance
        [AuthorizeCustom(IRoles = new int[] { (int)Role.Employee }, IRoleSystem = (int)SystemRole.System)]
        public ActionResult Index()
        {
            SetTitle("List Reports");
            var param = new ReportParam().BindData(DATA);
            ViewBag.SearchParam = param;
            var baseStatus = Utils.EnumToDictionary<StatusReport>();
            var workDays = WorkDayRepository.UseInstance.GetListByFieldsOrDefault(new List<CondParam>
            {
                new CondParam{Field = "IDUser" , Value = CUser.ID, CompareType = (int)CompareTypes.Equal, TypeSQL = (int)TypeSQl.Number},
                new CondParam{Field = "CheckIn" , Value = param.StartDate, CompareType = (int)CompareTypes.LowerThan, TypeSQL = (int)TypeSQl.Date, NotUsed = param.StartDate.IsNullOrEmpty()},
                new CondParam{Field = "CheckIn" , Value = Utils.StringToStrDateTimeAddDay(param.EndDate), CompareType = (int)CompareTypes.GreaterThan, TypeSQL = (int)TypeSQl.Date, NotUsed = param.EndDate.IsNullOrEmpty()},
            }, Paging, "ISNULL(Updated,Created) DESC") ?? new List<WorkDay>();
            var reports = ReportRepository.UseInstance.GetListByFieldsOrDefault(new List<CondParam>
            {
                new CondParam{Field = "IDWorkDay" , Value = workDays.Select(x => x.ID), CompareType = (int)CompareTypes.In, TypeSQL = (int)TypeSQl.Number},
                new CondParam{Field = "Status", Value = param.Status, CompareType = (int)CompareTypes.Equal, TypeSQL = (int)TypeSQl.Number, NotUsed = param.Status == 0}
            }, Paging, "ISNULL(Updated,Created) DESC") ?? new List<Report>();
            return GetCustResultOrView(new ViewParam()
            {
                Data = new ReportModel()
                {
                    Reports = reports,
                    WorkDays = workDays,
                    User = CUser,
                    BaseStatus = baseStatus,
                    Action = defauthPath,
                },
                ViewName = "Index",
                ViewNameAjax = "Reports",
            });
        }

        [AuthorizeCustom(IRoles = new int[] { (int)Role.Employee }, IRoleSystem = (int)SystemRole.System)]
        public ActionResult Create()
        {
            SetTitle("Add new report");
            var workDays = WorkDayRepository.UseInstance.GetListByFieldsOrDefault(new List<CondParam>
            {
                new CondParam{Field = "IDUser" , Value = CUser.ID, CompareType = (int)CompareTypes.Equal, TypeSQL = (int)TypeSQl.Number},
                new CondParam{Field = "IDLeave" , Value = 0, CompareType = (int)CompareTypes.Equal, TypeSQL = (int)TypeSQl.Number},
                new CondParam{Sql = "NOT EXISTS  (Select 1 from Report Where WorkDay.ID = Report.IDWorkDay)"},
            });
            var baseStatus = Utils.EnumToDictionary<StatusReport>();
            return GetCustResultOrView(new ViewParam()
            {
                Data = new ReportModel()
                {
                    Report = new Report(),
                    WorkDays = workDays,
                    BaseStatus = baseStatus,
                    Action = "/Admin/Report/Save",
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
            var report = new Report().BindData(DATA);

            report.Contents = Uri.UnescapeDataString(report.Contents);
            report.Created = DateTime.Now;
            report.CreatedBy = CUser == null ? 0 : CUser.ID;

            if (Request.Form["IsSent"] != null)
            {
                report.Status = (int)StatusReport.Send;
            }
            else
            {
                report.Status = (int)StatusReport.Draft;
            }
            var (check, mess) = IsValidate(report);
            if (check)
            {
                SetError(mess);
                SetUrlResponse("/report/add");
                return GetResultOrReferrerDefault("/report/add");
            }
            else if (ReportRepository.UseInstance.Insert(report))
            {
                SetSuccess("Create new report successfully");
            }
            else
            {
                SetError("New report creation failed");
            }
            SetUrlResponse(defauthPath);
            return GetResultOrReferrerDefault(defauthPath);
        }


        [AuthorizeCustom(IRoles = new int[] { (int)Role.Employee }, IRoleSystem = (int)SystemRole.System)]
        public ActionResult Update(int ID)
        {
            SetTitle("Update report");
            var baseStatus = Utils.EnumToDictionary<StatusReport>();
            var report = ReportRepository.UseInstance.GetById(ID);
            var workDays = WorkDayRepository.UseInstance.GetListByFieldsOrDefault(new List<CondParam>
            {
                new CondParam{Field = "IDUser" , Value = CUser.ID, CompareType = (int)CompareTypes.Equal, TypeSQL = (int)TypeSQl.Number},
                new CondParam{Field = "IDLeave" , Value = 0, CompareType = (int)CompareTypes.Equal, TypeSQL = (int)TypeSQl.Number},
                new CondParam{Sql = $"NOT EXISTS  (Select 1 from Report Where WorkDay.ID = Report.IDWorkDay) OR ID = {report.IDWorkDay}"},
            });
            if (Equals(report, null))
            {
                SetError("Data no longer exists");
                return GetResultOrReferrerDefault(defauthPath);
            }
            return GetCustResultOrView(new ViewParam()
            {
                Data = new ReportModel()
                {
                    Report = report,
                    BaseStatus = baseStatus,
                    WorkDays = workDays,
                    Action = "/Admin/Report/Change",
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
            var report = ReportRepository.UseInstance.GetById(ID);
            report = report.BindData(DATA, false);

            report.Contents = Uri.UnescapeDataString(report.Contents);
            report.Updated = DateTime.Now;
            report.UpdatedBy = CUser == null ? 0 : CUser.ID;
            if (Request.Form["IsSent"] != null)
            {
                report.Status = (int)StatusReport.Send;
            }
            else
            {
                report.Status = (int)StatusReport.Draft;
            }

            var (check, mess) = IsValidate(report);
            if (check)
            {
                SetError(mess);
            }
            else if (ReportRepository.UseInstance.Update(report))
            {
                SetSuccess("Report update successful");
                SetUrlResponse(defauthPath);
                return GetResultOrReferrerDefault(defauthPath);
            }
            else
            {
                SetError("Report update failed");
            }
            SetUrlResponse("/report/update/" + report.ID);
            return GetResultOrReferrerDefault("/report/update/" + report.ID);
        }

        private (bool, string) IsValidate(Report report)
        {
            if (report.IDWorkDay == 0)
            {
                return (true, "Work Day cannot be left blank");
            }
            if (Utils.IsNullOrEmpty(report.Contents))
            {
                return (true, "Contents cannot be left blank");
            }
            var reports = ReportRepository.UseInstance.GetListByFieldsOrDefault(new List<CondParam>
            {
                new CondParam{Field = "ID" , Value = report.ID, CompareType = (int)CompareTypes.NotEqual, TypeSQL = (int)TypeSQl.Number, NotUsed = report.ID == 0},
                new CondParam{Field = "IDWorkDay" , Value = report.IDWorkDay, CompareType = (int)CompareTypes.Equal, TypeSQL = (int)TypeSQl.Number},
            });
            if (reports.Count >= 1)
            {
                return (true, "The selected working day has been reported");
            }
            return (false, string.Empty);
        }

        [AuthorizeCustom(IRoles = new int[] { (int)Role.Employee }, IRoleSystem = (int)SystemRole.System)]
        public ActionResult IsDelete()
        {
            var id = Utils.GetInt(DATA, "ID");
            var report = ReportRepository.UseInstance.GetById(id);
            if (Equals(report, null))
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
                    Content = string.Format("Are you sure you want to delete the data ?"),
                    Url = "/Admin/Report/Delete"
                },
                ViewName = "IsDelete",
                ViewNameAjax = "IsDelete",
                Width = 400
            });

        }

        public ActionResult Delete()
        {
            var id = Utils.GetInt(DATA, "ID");
            var report = ReportRepository.UseInstance.GetById(id);
            if (Equals(report, null))
            {
                SetError("Data no longer exists");
                return GetResultOrReferrerDefault(defauthPath);
            }
            if (ReportRepository.UseInstance.Delete(report.ID))
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