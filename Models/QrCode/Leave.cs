using NPoco;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace demo1.Models.QrCode
{
    [PrimaryKey("ID", AutoIncrement = true)]
    [TableName("Leave")]
    public class Leave : QrCodeDataContext<Leave>
    {
        [Column] public int ID { get; set; }

        [Column] public int IDUser { get; set; }

        [Column] public DateTime? StartDate { get; set; }

        [Column] public DateTime? EndDate { get; set; }

        [Column] public string Title { get; set; }

        [Column]
        [AllowHtml] public string Contents { get; set; }

        [Column] public string Note { get; set; }

        [Column] public int Status { get; set; }

        [Column] public DateTime Created { get; set; }

        [Column] public int CreatedBy { get; set; }

        [Column] public DateTime? Updated { get; set; }

        [Column] public int? UpdatedBy { get; set; }

    }
}