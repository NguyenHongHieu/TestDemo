using demo1.Models.QrCode;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace demo1.Models.Views
{
    public class ReportModel : BaseModel
    {
        public List<Report> Reports { get; set; }
        public Report Report { get; set; }
        public List<WorkDay> WorkDays { get; set; }
        public WorkDay WorkDay { get; set; }
        public List<User> Users { get; set; }
        public User User { get; set; }
    }
}