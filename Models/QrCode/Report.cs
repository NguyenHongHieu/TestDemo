using NPoco;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace demo1.Models.QrCode
{
    [PrimaryKey("ID", AutoIncrement = true)]
    [TableName("Report")]
    public class Report : QrCodeDataContext<Report>
    {
        [Column] public int ID { get; set; }

        [Column] public int IDWorkDay { get; set; }

        [Column]
        [AllowHtml] public string Contents { get; set; }
        [Column] public int Status { get; set; }

        [Column] public DateTime Created { get; set; }

        [Column] public int CreatedBy { get; set; }

        [Column] public DateTime? Updated { get; set; }

        [Column] public int? UpdatedBy { get; set; }

    }
}