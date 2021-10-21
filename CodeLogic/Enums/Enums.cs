using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace demo1.CodeLogic.Enums
{
    public class Enums
    {
        public enum Role
        {
            [Description("Employee")]
            Employee = 1,
            [Description("HR")]
            HR = 2,
            [Description("Admin")]
            Admin = 3,
            [Description("Manager")]
            Manager = 4,
        }

        public enum SystemRole
        {
            [Description("System")]
            System = 6,
        }

        public enum BaseStatus
        {
            [Description("UnActive")]
            UnActive = 1,
            [Description("Active")]
            Active = 2,
        }

        public enum StatusLeave
        {
            [Description("Created")]
            Created = 1,
            [Description("Sent HR")]
            SendHR = 2,
            [Description("Sent Manager")]
            SendManager = 3,
            [Description("Reject")]
            Reject = 4,
            [Description("Confirm")]
            Confirm = 5,
        }

        public enum StatusReport
        {
            [Description("Draft")]
            Draft = 1,
            [Description("Send")]
            Send = 2
        }

        public enum StatusWorkDay
        {
            [Description("No attendance")]
            NoAttendance = 1,
            [Description("Checked in")]
            CheckedIn = 2,
            [Description("Missing attendance")]
            MisAttendance = 3,
            [Description("Enough attendance")]
            EnAttendance = 4,
            [Description("On leave")]
            OnLeave = 5
        }

        public enum StatusAttendance
        {
            [Description("Chấm công thiếu")]
            Miss = 1,
            [Description("Không đủ thời gian")]
            Not = 2,
            [Description("Đủ thời gian")]
            Done = 3,
        }

        public enum TypePath
        {
            [Description("Hình ảnh")]
            Image = 1,
            [Description("Video")]
            Video = 2,
        }


        public enum Day
        {
            [Description("Thứ hai")]
            Hai = 1,
            [Description("Thứ ba")]
            Ba = 2,
            [Description("Thứ tư")]
            Bon = 3,
            [Description("Thứ năm")]
            Nam = 4,
            [Description("Thứ sáu")]
            Sau = 5,
            [Description("Thứ bảy")]
            Bay = 6,
            [Description("Chủ nhật")]
            CN = 0,
        }

        public enum TypeWorkoutSchedule
        {
            [Description("Tập nhóm")]
            Nhom = 1,
            [Description("Tập cá nhân")]
            CaNhan = 2,
        }

        public enum CompareTypes
        {
            Equal = 1,
            NotEqual = 2,
            GreaterThan = 3,
            LowerThan = 4,
            In = 5,
            NotIn = 6,
            Like = 7,
            Greater = 8,
            Lower = 9,
        }
        public enum TypeSQl
        {
            String = 1,
            Number = 2,
            Date = 3,
        }
        public enum TypeObject
        {
            Byte = 0,
            Int = 1,
            Long = 2,
            String = 3,
            Char = 4,
            Float = 5,
            Double = 7,
            DateTime = 8,
            DateTimeNull = 9,
            Bool = 10,
        }
        public enum MvcStringRender
        {
            OrderStatus = 1,
            BillStatus = 2,
            OrderType = 3,
            Quater = 4
        }
        public enum ActionStatus
        {
            [Description("Tạo mới")]
            Create = 1,
            [Description("Cập nhật")]
            Update = 2,
            [Description("Xóa")]
            Delete = 3,
            [Description("Xem")]
            View = 4,
        }
        public enum OrderFileType
        {
            [Description("File trả PNK")]
            IRV = 1,
            [Description("File đơn hàng")]
            Order = 2,
            [Description("File bảng kê")]
            Declaration = 3,
            [Description("File hóa đơn")]
            Bill = 4,
            [Description("File hóa đơn chiết khấu")]
            BillDiscount = 5,
        }
        public enum AccountingDeptStatus
        {
            [Description("Đã nhận")]
            Receive = 1,
            [Description("Đã trả lại")]
            Reject = 2,
            [Description("Đã xác nhận")]
            Confirm = 3,
        }
        public enum OrderType
        {
            [Description("Đơn hàng")]
            Order = 1,
            [Description("Số lượng")]
            Amount = 2,
        }
        public enum Quater
        {
            [Description("Quý 1")]
            Quater1 = 1,
            [Description("Quý 2")]
            Quater2 = 2,
            [Description("Quý 3")]
            Quater3 = 3,
            [Description("Quý 4")]
            Quater4 = 4,
            [Description("Cả năm")]
            All = 5,
        }
        public enum IModule
        {
            [Description("Quản trị hệ thống")]
            QLHD_Manage = 1,
            [Description("Quản lý danh mục")]
            QLHD_Catalog = 2,
            [Description("Bán hàng theo đơn hàng")]
            QLHD_Order = 3,
            [Description("Bán hàng theo số lượng")]
            QLHD_AmountOrder = 4,
            [Description("Phòng kế toán")]
            QLHD_AccountingDept = 5,
            [Description("Chiết khấu")]
            QLHD_Discount = 6,

        }
        public enum IAccess
        {
            [Description("Quản lý hoá đơn")]
            QLHD = 1,
        }
        public enum BillStatus
        {
            [Description("Chưa thanh toán")]
            NotPay = 1,
            [Description("Đã thanh toán")]
            Payed = 2,
            [Description("Xác nhận thanh toán")]
            PayedConfirm = 3
        }

    }
}