using demo1.Models.QrCode;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace demo1.Models.Views
{
    public class WorkDayModel : BaseModel
    {
        public List<WorkDay> WorkDays { get; set; }
        public WorkDay WorkDay { get; set; }
        public List<User> Users { get; set; }
        public User User { get; set; }
        public List<int> Months { get; set; }
        public List<int> Years { get; set; }
        public string CalendarWorkDayModels { get; set; }
    }
}