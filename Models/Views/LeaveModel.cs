using demo1.Models.QrCode;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace demo1.Models.Views
{
    public class LeaveModel : BaseModel
    {
        public List<Leave> Leaves { get; set; }
        public Leave Leave { get; set; }
        public List<User> Users { get; set; }
        public User User { get; set; }
    }
}