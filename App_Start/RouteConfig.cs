using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace demo1
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.MapMvcAttributeRoutes();
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.IgnoreRoute("{*botdetect}", new { botdetect = @"(.*)BotDetectCaptcha\.ashx" });

            routes.MapRoute(
               name: "Home",
               url: "home",
               defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional },
               namespaces: new[] { "demo1.Controllers" }
            );

            routes.MapRoute(
               name: "Default",
               url: "{controller}/{action}/{id}",
               defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional },
               namespaces: new[] { "demo1.Controllers" }
            );

            //routes.MapRoute(
            //   name: "Default",
            //   url: "{controller}/{action}/{id}",
            //   defaults: new { area = "Admin", controller = "Login", action = "Login", id = UrlParameter.Optional },
            //   namespaces: new[] { "demo1.Areas.Admin.Controllers" }
            //).DataTokens.Add("area", "Admin");

        }
    }
}
