using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace demo1.Models.Views
{
    public class CalendarWorkDayModel
    {
        public string title { get; set; }
        public DateTime? start { get; set; }
        public DateTime? end { get; set; }
        public bool allDay { get; set; }
        public string color { get; set; }
        public string textColor { get; set; }
        public string url { get; set; }
    }
}