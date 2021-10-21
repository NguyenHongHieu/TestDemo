
using demo1.CodeLogic.Commons;
using demo1.Models.Admin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace demo1.Models.Views
{
    public class AdminModel
    {
        public List<Account> Accounts { get; set; }
        public Account Account { get; set; }
        public CategoryType CategoryType { get; set; }
        public List<CategoryType> CategoryTypes { get; set; }
        public Dictionary<int,string> Roles { get; set; }
        public Dictionary<int, string> Access { get; set; }
        public SearchParam SearchParam { get; set; }
        public string Url { get; set; }
    }
}