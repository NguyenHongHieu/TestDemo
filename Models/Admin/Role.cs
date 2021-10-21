using NPoco;
using QuanLyHoaDon.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace demo1.Models.Admin
{
    [TableName("Role")]
    [PrimaryKey("ID")]
    public class Role :ModelDataContext<Role>
    {
        [Column]
        public int ID { get; set; }
        [Column]
        public int IDChannel { get; set; }
        [Column]
        public string Code { get; set; }
        [Column]
        public string Name { get; set; }
        [Column]
        public bool IsAdmin { get; set; }
        [Column]
        public DateTime ? Created { get; set; }
        [Column]
        public int CreatedBy { get; set; }
        [Column]
        public DateTime ? Updated { get; set; }
        [Column]
        public int UpdatedBy { get; set; }

    }
}