using NPoco;
using QuanLyHoaDon.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace demo1.Models.Admin
{
    public class AdminDataContext<T> : ModelDataContext<T> where T : class, new()
    {
        public AdminDataContext(string connectString = "CloudConnectString") : base(connectString)
        {
        }
    }
}