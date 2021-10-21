using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace demo1.CodeLogic.Commons
{
    public class LeaveParam : BaseParam
    {
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public int Status { get; set; }
    }
}