using demo1.Models.QrCode;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace demo1.Models.Views
{
    public class AutocompleteModel : BaseModel
    {
        public User User { get; set; }
        public List<User> Coachs { get; set; }
    }
}