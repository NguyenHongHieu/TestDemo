using NPoco;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace demo1.Models.QrCode
{
    [PrimaryKey("ID", AutoIncrement = true)]
    [TableName("QrCode")]
    public class QrCode : QrCodeDataContext<QrCode>
    {
        [Column] public int ID { get; set; }

        [Column] public Guid Keys { get; set; }

        [Column] public string IP { get; set; }

        [Column] public byte[] Port { get; set; }

        [Column] public int Status { get; set; }

        [Column] public DateTime Created { get; set; }

        [Column] public int CreatedBy { get; set; }

        [Column] public DateTime? Updated { get; set; }

        [Column] public int? UpdatedBy { get; set; }

    }
}