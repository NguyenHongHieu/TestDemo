using demo1.Models.QrCode;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace demo1.Models.Views
{
    public class UserModel
    {
        public User User { get; set; }
        public List<User> Users { get; set; }
        public List<User> Coachs { get; set; }
        public List<User> UserCoachs { get; set; }
        public Dictionary<int, string> BaseStatus { get; set; }
        public Dictionary<int, string> Roles { get; set; }

        public string Action { get; set; }
        public string Button { get; set; }
    }
}