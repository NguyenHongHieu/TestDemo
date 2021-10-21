//using demo1.Models.Admin;
using demo1.Models.QrCode;
using demo1.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using static demo1.CodeLogic.Enums.Enums;

namespace demo1.CodeLogic.Attributes
{
    public class AuthorizeCustom : AuthorizeAttribute
    {
        public int[] Modules { get; set; }
        public int[] IRoles { get; set; }
        public int IRoleSystem { get; set; }
        public bool INullUser { get; set; } = false;
        public bool IsUser { get; set; } = false;
        public override void OnAuthorization(AuthorizationContext filterContext)
        {
            if (Equals(filterContext.HttpContext.Session["CurrentUser"], null))
            {
                filterContext.HttpContext.Session["CurrentUser"] = new User();
            }
            base.OnAuthorization(filterContext);
        }
        protected override bool AuthorizeCore(HttpContextBase httpContext)
        {
            return IsAuthorize(httpContext);
        }
        protected override void HandleUnauthorizedRequest(AuthorizationContext filterContext)
        {
            //base.HandleUnauthorizedRequest(filterContext);
             var user = (User)filterContext.HttpContext.Session["CurrentUser"];
            if (user.ID == 0)
            {
                filterContext.Result = new RedirectToRouteResult(
                   new RouteValueDictionary
                   {
                        { "action", "Index" },
                        { "controller", "Home" },
                        { "area", "" },
                   });
            }
            else if (SystemConfig.IsRole(user, (int)Enums.Enums.Role.Employee))
            {
                filterContext.Result = new RedirectToRouteResult(
                   new RouteValueDictionary
                   {
                        { "action", "Index" },
                        { "controller", "Group" },
                        { "area", "Admin" },
                   });
            }
            else if (SystemConfig.IsRole(user, new int[] { (int)Enums.Enums.Role.HR }))
            {
                filterContext.Result = new RedirectToRouteResult(
                   new RouteValueDictionary
                   {
                        { "action", "Index" },
                        { "controller", "Employee" },
                        { "area", "Admin" },
                   });
            }
            else if (SystemConfig.IsRole(user, new int[] { (int)Enums.Enums.Role.Manager }))
            {
                filterContext.Result = new RedirectToRouteResult(
                   new RouteValueDictionary
                   {
                        { "action", "Index" },
                        { "controller", "User" },
                        { "area", "Admin" },
                   });
            }
            else if (SystemConfig.IsRole(user, new int[] { (int)Enums.Enums.Role.Admin }))
            {
                filterContext.Result = new RedirectToRouteResult(
                   new RouteValueDictionary
                   {
                        { "action", "Index" },
                        { "controller", "User" },
                        { "area", "Admin" },
                   });
            }
        }
        protected override HttpValidationStatus OnCacheAuthorization(HttpContextBase httpContext)
        {
            return base.OnCacheAuthorization(httpContext);
        }
        private bool IsUserExist(List<User> baseUsers, ref User user, ref string message)
        {
            try
            {
                if (INullUser && user.ID == 0)
                {
                    return true;
                }
                if (IsUser && user.ID != 0)
                {
                    return true;
                }
                var isAuthorize = false;
                //var userCheck = user;
                //if (!Equals(baseUsers, null))
                //{
                //    var userInDB = baseUsers.FirstOrDefault(t =>
                //                          t.Username.ToLower() == userCheck.Username.ToLower()
                //                       && t.Password.ToLower() == userCheck.Password.ToLower());

                //    if (Equals(userInDB, null))
                //    {
                //        message = string.Format("Sai tài tên tài khoản hoặc mật khẩu");
                //        return false;
                //    }
                //    else
                //    {
                //        user = userInDB;
                        var idRole = user.IDRole;
                        if (idRole.Equals(IRoleSystem))
                        {
                            isAuthorize = true;
                        }
                        else if (IRoles.Contains(idRole))
                        {
                            isAuthorize = true;
                        }
                        else
                        {
                            isAuthorize = false;
                        }

                        //var access = userInDB.Access.Split(',').Select(t => int.Parse(t));
                        //var roles = userInDB.Roles.Split(',').Select(t => int.Parse(t));
                        //if (userInDB.IsAdmin)
                        //{
                        //    isAuthorize = true;
                        //}
                        //else
                        //{
                        //    for (int i = 0; i < Modules.Length; i++)
                        //    {
                        //        if (access.Contains(Modules[i]))
                        //        {
                        //            if (!Equals(IRoles,null))
                        //            {
                        //                for (int j = 0; j < IRoles.Length; j++)
                        //                {
                        //                    if (roles.Contains(IRoles[j]))
                        //                    {
                        //                        isAuthorize = true;
                        //                    }
                        //                }
                        //            }
                        //            else
                        //            {
                        //                isAuthorize = true;
                        //            }
                        //        }
                        //    }
                        //}
                        if (isAuthorize)
                        {
                            message = string.Format("Truy cập thành công");
                        }
                        else
                        {
                            message = string.Format("Bạn không có quyền truy cập Chức năng này");
                            
                        }
                //    }
                //}
                return isAuthorize;
            }
            catch
            {
                return false;
            }
        }
        private bool IsAuthorize(HttpContextBase httpContext)
        {
            try
            {
                var isAuthorize = false;
                var baseUsers = (List<User>)httpContext.Session["Base_Users"];
                var currrentUser = (User)httpContext.Session["CurrentUser"];
                var message = "";
                isAuthorize = IsUserExist(baseUsers, ref currrentUser, ref message);
                httpContext.Session["LoginMessage"] = message;
                httpContext.Session["CurrentUser"] = currrentUser;
                return isAuthorize;
            }
            catch (Exception e)
            {
                var mess = e.Message;
                return false;
            }
        }
    }
}