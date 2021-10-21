using NPoco;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace demo1.Models.QrCode
{
    [PrimaryKey("ID", AutoIncrement = true)]
    [TableName("WorkDay")]
    public class WorkDay : QrCodeDataContext<WorkDay>
    {
        [Column] public int ID { get; set; }

        [Column] public int IDQrCode { get; set; }

        [Column] public int IDUser { get; set; }

        [Column] public int IDLeave { get; set; }

        [Column] public DateTime? CheckIn { get; set; }

        [Column] public DateTime? CheckOut { get; set; }

        [Column] public int Status { get; set; }

        [Column] public DateTime Created { get; set; }

        [Column] public int CreatedBy { get; set; }

        [Column] public DateTime? Updated { get; set; }

        [Column] public int? UpdatedBy { get; set; }

    }
}