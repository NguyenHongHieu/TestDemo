using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace demo1.CodeLogic.Commons
{
    public class HistoryParam
    {
        public int IDUser { get; set; }
        public int Type { get; set; }
        public int IsReplaceHistory { get; set; }
        public int IDCoach { get; set; }
        public int IDGroup { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
    }
}