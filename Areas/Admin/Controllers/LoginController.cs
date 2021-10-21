using demo1.CodeLogic;
using demo1.CodeLogic.Attributes;
using demo1.CodeLogic.Commons;
using demo1.CodeLogic.Helper;
using demo1.Models;
using demo1.Models.QrCode;
using demo1.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using static demo1.CodeLogic.Enums.Enums;

namespace demo1.Areas.Admin.Controllers
{
    public class LoginController : BaseController
    {
        [AuthorizeCustom(INullUser = true)]
        public ActionResult Login()
        {
            SetUserLogin();
            ViewBag.CUser = CUser;
            SetTitle("Sign In");
            return GetCustResultOrView(new ViewParam()
            {
                ViewName = "Login"
            });
        }

        [HttpPost]
        public ActionResult Login(User user)
        {
            if (Equals(user.Username, null) || Equals(user.Password, null))
            {
                SetError("Username and password have not been entered");
                return GetResultOrReferrerDefault("login");
            }
            else
            {
                var userCheck = UserRepository.UseInstance.GetFirstByFieldsOrDefault(new List<CondParam>
                {
                    new CondParam { Sql = string.Format("UserName = N'{0}' Or Phone = '{1}'",user.Username,user.Username) },
                    new CondParam { Field = "Password" , Value = user.Password, CompareType = (int)CompareTypes.Equal, TypeSQL = (int)TypeSQl.String }
                });
                if (userCheck.ID == 0)
                {
                    SetError("Wrong username, phone number or password");
                    SetUrlResponse("/login");
                    return GetResultOrReferrerDefault("/login");
                }
                else if (userCheck.Status == (int)BaseStatus.UnActive)
                {
                    SetWarn("Your account has been locked. Please contact Admin");
                    SetUrlResponse("/login");
                    return GetResultOrReferrerDefault("/login");
                }
                else
                {
                    SetUserSession(userCheck);
                    SetSuccess("Logged in successfully");
                    if (SystemConfig.IsRole(userCheck, new int[] { (int)Role.Employee }))
                    {
                        SetUrlResponse("/leave");
                        return GetResultOrReferrerDefault("/leave");
                    }
                    else if (SystemConfig.IsRole(userCheck, new int[] { (int)Role.HR }))
                    {
                        SetUrlResponse("/employee");
                        return GetResultOrReferrerDefault("/employee");
                    }
                    else if (SystemConfig.IsRole(userCheck, new int[] { (int)Role.Manager }))
                    {
                        SetUrlResponse("/user");
                        return GetResultOrReferrerDefault("/user");
                    }
                    else
                    {
                        SetUrlResponse("/user");
                        return GetResultOrReferrerDefault("/user");
                    }
                }
            }

        }

        [HttpPost]
        public ActionResult ForgotPassword(User user)
        {
            if (Equals(user.Email, null))
            {
                SetError("Email information has not been entered");
                return GetResultOrReferrerDefault("/login");
            }
            else
            {
                var check = EmailHelper.IsValidEmailAddress(user.Email);
                if (!check)
                {
                    SetError("Email invalidate");
                    return GetResultOrReferrerDefault("/login");
                }
                var userCheck = UserRepository.UseInstance.GetFirstByFieldOrDefault("Email", user.Email.Replace("@", "@@"), (int)TypeObject.String);
                if (userCheck.ID == 0)
                {
                    SetError("Email does not exist");
                    SetUrlResponse("/login");
                    return GetResultOrReferrerDefault("/login");
                }
                else
                {
                    var newPassword = Extensions.GenerateNumber();
                    check = EmailHelper.Send(userCheck.Email, "Password retrieval", string.Format("Password of account '{0}' is: {1}", userCheck.Username, newPassword));
                    if (check)
                    {
                        userCheck.Password = newPassword;
                        check = UserRepository.UseInstance.Update(userCheck);
                    }
                    if (check)
                    {
                        SetSuccess("Email confirmation successful!");
                    }
                    else
                    {
                        SetError("Email confirmation failed!");
                    }
                    SetUrlResponse("/login");
                    return GetResultOrReferrerDefault("/login");
                }
            }

        }

        public ActionResult LogOut(User user)
        {
            DestroySessionUser(user);
            SetSuccess("Sign out successful");
            return GetResultOrRedirectDefault("/home");
        }

        protected void SetUserSession(User user)
        {
            Session["CurrentUser"] = user;
            ViewBag.CUser = user;
        }
        protected void SetUserLogin()
        {
            ViewBag.LoginMessage = Session["LoginMessage"];
            ViewBag.CUser = Session["CurrentUser"];
        }
        protected void DestroySessionUser(User user)
        {
            Session["CurrentUser"] = null;
            Session["LoginMessage"] = null;
            Session["Base_Users"] = null;
            ViewBag.CUser = null;
        }
    }
}