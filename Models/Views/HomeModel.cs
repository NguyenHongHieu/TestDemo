using demo1.Models.QrCode;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace demo1.Models.Views
{
    public class HomeModel : BaseModel
    {
        public User User { get; set; }
        public List<User> Users { get; set; }
        public User Coach { get; set; }
        public Dictionary<string, string> ConfigName { get; set; }
        public Dictionary<int, string> Role { get; set; }
        public Dictionary<int, string> TypeStatusDisplay { get; set; }
        public Dictionary<int, string> IsReadNotification { get; set; }

        public long CountNuti { get; set; }
        public long CountNotUserNuti { get; set; }
        public long CountContact { get; set; }
        public int SumProduct { get; set; }
        public int SumProductBuy { get; set; }
        public int SumProductSell { get; set; }


    }
}