using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace demo1.Models.Views
{
    public class BaseModel
    {
        public int ID { get; set; }
        public string IDs { get; set; }
        public string Url { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string Target { get; set; } = "";
        public string Class { get; set; } = "";
        public bool IsMulti { get; set; } = false;


        public Dictionary<string, string> KeyValues { get; set; }
        public Dictionary<int, string> BaseStatus { get; set; }

        public string Action { get; set; }
        public string Button { get; set; }
        public string Button2 { get; set; }
    }
}