using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace demo1.Areas.Admin.Controllers
{
    public class SystemController : BaseController
    {
        // GET: Admin/System
        public ActionResult Error()
        {
            SetTitle("Lỗi quyền truy cập");
            return View();
        }
    }
}