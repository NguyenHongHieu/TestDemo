using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace demo1.Models.QrCode
{
    public class QrCodeDataContext<T> : DatabaseContext<T> where T : class, new()
    {
        public QrCodeDataContext(string connectString = "QrCodeConnectionString") : base(connectString)
        {
        }
    }
}