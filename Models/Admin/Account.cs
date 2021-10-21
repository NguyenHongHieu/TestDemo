using NPoco;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace demo1.Models.Admin
{
    [TableName("Account")]
    [PrimaryKey("ID")]
    public class Account:AdminDataContext<Account>
    {
        [Column]
        public int ID { get; set; }
        [Column]
        public int IDChannel { get; set; }
        [Column]
        public string UserName { get; set; }
        [Column]
        public string FullName { get; set; }
        [Column]
        public string PassWord { get; set; }
        [Column]
        public string Email { get; set; }
        [Column]
        public string Phone { get; set; }
        [Column]
        public string Address { get; set; }
        [Column]
        public string Roles { get; set; }
        [Column]
        public string Access { get; set; }
        [Column]
        public bool IsAdmin { get; set; }
        [Ignore]
        public bool InSession { get; set; }
        [Column]
        public string SearchMeta { get; set; }
        public List<string> FieldSearchs
        {
            get
            {
                return new List<string>
            {
                    "UserName","FullName","Email"
            };
            }
        }
    }
}