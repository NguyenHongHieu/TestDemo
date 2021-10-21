using System.Web.Mvc;

namespace demo1.Areas.Admin
{
    public class AdminAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Admin";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "Login",
                "login",
                new { controller = "Login", action = "Login", id = UrlParameter.Optional }
            );

            context.MapRoute(
                "LogOut",
                "logout",
                new { controller = "Login", action = "LogOut", id = UrlParameter.Optional }
            );

            context.MapRoute(
                "ConfigSystem",
                "config-system",
                new { controller = "Home", action = "ConfigSystem", id = UrlParameter.Optional }
            );
            context.MapRoute(
                "Profile",
                "profile",
                new { controller = "Home", action = "Profile", id = UrlParameter.Optional }
            );

            context.MapRoute(
                "role",
                "role",
                new { controller = "User", action = "ListRole", id = UrlParameter.Optional }
            );

            context.MapRoute(
                "notification",
                "notification",
                new { controller = "Home", action = "Notification", id = UrlParameter.Optional }
            );

            context.MapRoute(
                "user",
                "user",
                new { controller = "User", action = "Index", id = UrlParameter.Optional }
            );


            context.MapRoute(
                "user_create",
                "user/add",
                new { controller = "User", action = "Create", id = UrlParameter.Optional }
            );

            context.MapRoute(
                "user_update",
                "user/update/{ID}",
                new { controller = "User", action = "Update", id = UrlParameter.Optional }
            );

            context.MapRoute(
                "employee",
                "employee",
                new { controller = "Employee", action = "Index", id = UrlParameter.Optional }
            );


            context.MapRoute(
                "employee_create",
                "employee/add",
                new { controller = "Employee", action = "Create", id = UrlParameter.Optional }
            );

            context.MapRoute(
                "employee_update",
                "employee/update/{ID}",
                new { controller = "Employee", action = "Update", id = UrlParameter.Optional }
            );

            context.MapRoute(
                "leave",
                "leave",
                new { controller = "Leave", action = "Index", id = UrlParameter.Optional }
            );


            context.MapRoute(
                "leave_create",
                "leave/add",
                new { controller = "Leave", action = "Create", id = UrlParameter.Optional }
            );

            context.MapRoute(
                "leave_update",
                "leave/update/{ID}",
                new { controller = "Leave", action = "Update", id = UrlParameter.Optional }
            );

            context.MapRoute(
                "report",
                "report",
                new { controller = "Report", action = "Index", id = UrlParameter.Optional }
            );


            context.MapRoute(
                "report_create",
                "report/add",
                new { controller = "Report", action = "Create", id = UrlParameter.Optional }
            );

            context.MapRoute(
                "report_update",
                "report/update/{ID}",
                new { controller = "Report", action = "Update", id = UrlParameter.Optional }
            );

            context.MapRoute(
                "workday",
                "work-day",
                new { controller = "WorkDay", action = "Index", id = UrlParameter.Optional }
            );

            //////

            context.MapRoute(
                "admin",
                "",
                new { controller = "Home" , action = "Index", id = UrlParameter.Optional }
            );

            context.MapRoute(
                "admin_default",
                "Admin/{controller}/{action}/{id}",
                new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}