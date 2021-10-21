using demo1.CodeLogic;
using demo1.CodeLogic.Attributes;
using demo1.CodeLogic.Commons;
using demo1.Models;
using demo1.Models.QrCode;
using demo1.CodeLogic.Customs;
using demo1.Models.Views;
using demo1.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using static demo1.CodeLogic.Enums.Enums;
using Newtonsoft.Json;

namespace demo1.Areas.Admin.Controllers
{
    public class WorkDayController : BaseController
    {
        private string defauthPath = "/work-day";

        [AuthorizeCustom(IRoles = new int[] { (int)Role.Employee }, IRoleSystem = (int)SystemRole.System)]
        public ActionResult Index()
        {
            SetTitle("List Work Days");
            var dateNow = DateTime.Now;

            var workDayFirst = WorkDayRepository.UseInstance.GetFirstOrDefault("CheckIn");
            var yearFirst = workDayFirst.CheckIn.HasValue ? workDayFirst.CheckIn.Value.Year : dateNow.Year;

            var months = Enumerable.Range(1, 12).ToList();
            var years =  Enumerable.Range(yearFirst, dateNow.Year + 1 - yearFirst).ToList();

            var param = new WorkDayParam().BindData(DATA);
            if (param.Year == 0)
                param.Year = dateNow.Year;
            if (param.Month == 0)
                param.Month = dateNow.Month;
            ViewBag.SearchParam = param;

            var workDays = WorkDayRepository.UseInstance.GetListByFieldsOrDefault(new List<CondParam>
            {
                new CondParam{Field = "Year(CheckIn)" , Value = param.Year, CompareType = (int)CompareTypes.Equal, TypeSQL = (int)TypeSQl.Number},
                new CondParam{Field = "Month(CheckIn)" , Value = param.Month , CompareType = (int)CompareTypes.Equal, TypeSQL = (int)TypeSQl.Number},
                new CondParam{Field = "IDUser", Value = CUser.ID, CompareType = (int)CompareTypes.Equal, TypeSQL = (int)TypeSQl.Number},
            }, Paging, "ISNULL(Updated,Created) DESC");
            var reports = ReportRepository.UseInstance.GetListByFieldsOrDefault(new List<CondParam> { 
                new CondParam { Field = "IDWorkDay", Value = workDays.Select(x => x.ID), CompareType = (int)CompareTypes.In, TypeSQL = (int)TypeSQl.Number  }
            });
            var statusWorkDays = Utils.EnumToDictionary<StatusWorkDay>();

            var calendarWorkDayModels = new List<CalendarWorkDayModel>();
            foreach(var workDay in workDays)
            {
                var calendarWorkDayModel = new CalendarWorkDayModel
                {
                    title = statusWorkDays.GetValue(workDay.Status),
                    start = workDay.CheckIn,
                    allDay = true
                };
                switch (workDay.Status)
                {
                    case (int)StatusWorkDay.NoAttendance:
                        calendarWorkDayModel.color = "#dc3545";
                        calendarWorkDayModel.textColor = "#fff";
                        break;
                    case (int)StatusWorkDay.CheckedIn:
                        calendarWorkDayModel.title = statusWorkDays.GetValue(workDay.Status) + Environment.NewLine +
                        " - Check In: " + Utils.DateTimeToString(workDay.CheckIn, "HH:mm") + Environment.NewLine +
                        " - Check Out: " + Utils.DateTimeToString(workDay.CheckOut, "HH:mm");
                        calendarWorkDayModel.color = "#6c757d";
                        calendarWorkDayModel.textColor = "#fff";
                        break;
                    case (int)StatusWorkDay.MisAttendance:
                        calendarWorkDayModel.title = statusWorkDays.GetValue(workDay.Status) + Environment.NewLine +
                        " - Check In: " + Utils.DateTimeToString(workDay.CheckIn, "HH:mm") + Environment.NewLine +
                        " - Check Out: " + Utils.DateTimeToString(workDay.CheckOut, "HH:mm");
                        calendarWorkDayModel.color = "#ffc107";
                        calendarWorkDayModel.textColor = "#fff";
                        break;
                    case (int)StatusWorkDay.EnAttendance:
                        calendarWorkDayModel.title = statusWorkDays.GetValue(workDay.Status) + Environment.NewLine +
                        " - Check In: " + Utils.DateTimeToString(workDay.CheckIn, "HH:mm") + Environment.NewLine +
                        " - Check Out: " + Utils.DateTimeToString(workDay.CheckOut, "HH:mm");
                        calendarWorkDayModel.color = "#28a745";
                        calendarWorkDayModel.textColor = "#fff";
                        break;
                    case (int)StatusWorkDay.OnLeave:
                        calendarWorkDayModel.color = "#007bff";
                        calendarWorkDayModel.textColor = "#fff";
                        break;
                }
                calendarWorkDayModels.Add(calendarWorkDayModel);

                if (workDay.Status == (int)StatusWorkDay.OnLeave)
                    continue;

                var report = reports.FirstOrDefault(x => x.IDWorkDay == workDay.ID);
                var calendarWorkDayReportModel  = new CalendarWorkDayModel
                {
                    start = workDay.CheckIn,
                    allDay = true
                };
                if(report == null)
                {
                    calendarWorkDayReportModel.title = "No report";
                    calendarWorkDayReportModel.color = "#dc35454f";
                    calendarWorkDayReportModel.textColor = "#000";
                    calendarWorkDayReportModel.url = "/report/add";
                }
                else
                {
                    switch (report.Status)
                    {
                        case (int)StatusReport.Send:
                            calendarWorkDayReportModel.title = "Sent reports";
                            calendarWorkDayReportModel.color = "#28a74554";
                            calendarWorkDayReportModel.textColor = "#000";
                            break;
                        case (int)StatusReport.Draft:
                            calendarWorkDayReportModel.title = "Not sent report";
                            calendarWorkDayReportModel.color = "#ffc10759";
                            calendarWorkDayReportModel.textColor = "#000";
                            calendarWorkDayReportModel.url = "/report/update/" + report.ID;
                            break;
                    }
                }

                calendarWorkDayModels.Add(calendarWorkDayReportModel);
            }

            return GetCustResultOrView(new ViewParam()
            {
                Data = new WorkDayModel()
                {
                    CalendarWorkDayModels = JsonConvert.SerializeObject(calendarWorkDayModels),
                    WorkDays = workDays,
                    Months = months,
                    Years = years,
                    Action = defauthPath,
                },
                ViewName = "Index",
                ViewNameAjax = "WorkDays",
            });
            //return View();
        }
    }
}