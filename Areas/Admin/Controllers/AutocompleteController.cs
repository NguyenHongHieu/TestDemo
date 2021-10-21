using demo1.CodeLogic.Commons;
using demo1.Models.QrCode;
using demo1.Models.Views;
using demo1.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using static demo1.CodeLogic.Enums.Enums;

namespace demo1.Areas.Admin.Controllers
{
    public class AutocompleteController : BaseController
    {
        // GET: Admin/Autocomplete
        public ActionResult RenderByUserRole(int id = 0)
        {
            var user = new User()
            {
                IDRole = id,
            };
            return GetCustResultOrView(new ViewParam
            {
                Data = new AutocompleteModel
                {
                    User = user,
                },
                ViewName = "RenderByUserRole",
                ViewNameAjax = "RenderByUserRole",
            });
        }

    }
}