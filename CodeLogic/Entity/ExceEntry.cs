using demo1.CodeLogic.Customs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace demo1.CodeLogic.Entity
{
    public class BuyProductExcel
    {
        public BuyProductExcel(List<BuyProductExcelModel> buyProductExcelModels)
        {
            BuyProductExcelModels = buyProductExcelModels;
            var header = new Dictionary<string, string>();
            header.Add("RowNumber", "STT");
            header.Add("Title", "Tiêu đề nhập hàng");
            header.Add("Created", "Ngày nhập");
            header.Add("Product", "Sản phẩm");
            header.Add("PriceBuy", "Giá nhập");
            header.Add("Amount", "Số lượng");
            header.Add("Total", "Thành tiền");
            Header = header;
            TitleExcel = new ItemExcel
            {
                Value = "Danh sách nhập hàng",
            };

        }
        public List<BuyProductExcelModel> BuyProductExcelModels { get; set; }
        public Dictionary<string, string> Header { get; set; }

        public ItemExcel TitleExcel { get; set; }

        public class BuyProductExcelModel
        {
            public string RowNumber { get; set; }
            public string Title { get; set; }
            public string Created { get; set; }
            public string Product { get; set; }
            public string PriceBuy { get; set; }
            public string Amount { get; set; }
            public string Total { get; set; }
        }

    }
    public class SellProductExcel
    {
        public SellProductExcel(List<SellProductExcelModel> sellProductExcelModels)
        {
            SellProductExcelModels = sellProductExcelModels;
            var header = new Dictionary<string, string>();
            header.Add("RowNumber", "STT");
            header.Add("Name", "Người mua");
            header.Add("Type", "Loại");
            header.Add("Created", "Ngày bán");
            header.Add("Status", "Trạng thái");
            header.Add("Product", "Sản phẩm");
            header.Add("Price", "Đơn giá");
            header.Add("Amount", "Số lượng");
            header.Add("Total", "Thành tiền");
            Header = header;
            TitleExcel = new ItemExcel
            {
                Value = "Danh sách bán hàng",
            };

        }
        public List<SellProductExcelModel> SellProductExcelModels { get; set; }
        public Dictionary<string, string> Header { get; set; }

        public ItemExcel TitleExcel { get; set; }

        public class SellProductExcelModel
        {
            public string RowNumber { get; set; }
            public string Name { get; set; }
            public string Type { get; set; }
            public string Created { get; set; }
            public string Status { get; set; }
            public string Product { get; set; }
            public string Price { get; set; }
            public string Amount { get; set; }
            public string Total { get; set; }
        }

    }
    public class HistoryStudentExcel
    {
        public HistoryStudentExcel(List<HistoryStudentExcelModel> historyStudentExcelModels)
        {
            HistoryStudentExcelModels = historyStudentExcelModels;
            var header = new Dictionary<string, string>();
            header.Add("RowNumber", "STT");
            header.Add("Name", "Học viên");
            header.Add("Date", "Ngày tập");
            header.Add("Type", "Loại tập luyện");
            header.Add("Group", "Nhóm / Huấn luyện viên");
            Header = header;
            TitleExcel = new ItemExcel
            {
                Value = "Lịch sử tập luyện của học viên",
            };

        }
        public List<HistoryStudentExcelModel> HistoryStudentExcelModels { get; set; }
        public Dictionary<string, string> Header { get; set; }

        public ItemExcel TitleExcel { get; set; }

        public class HistoryStudentExcelModel
        {
            public string RowNumber { get; set; }
            public string Name { get; set; }
            public string Type { get; set; }
            public string Date { get; set; }
            public string Group { get; set; }
        }

    }
    public class HistoryCoachExcel
    {
        public HistoryCoachExcel(List<HistoryCoachExcelModel> historyCoachExcelModels)
        {
            HistoryCoachExcelModels = historyCoachExcelModels;
            var header = new Dictionary<string, string>();
            header.Add("RowNumber", "STT");
            header.Add("Name", "Huấn luyện viên");
            header.Add("Date", "Ngày dạy");
            header.Add("Type", "Loại tập luyện");
            header.Add("Status", "Trạng thái dạy thay");
            header.Add("Group", "Nhóm / Học viên");
            Header = header;
            TitleExcel = new ItemExcel
            {
                Value = "Lịch sử dạy của huấn luyện viên",
            };

        }
        public List<HistoryCoachExcelModel> HistoryCoachExcelModels { get; set; }
        public Dictionary<string, string> Header { get; set; }

        public ItemExcel TitleExcel { get; set; }

        public class HistoryCoachExcelModel
        {
            public string RowNumber { get; set; }
            public string Name { get; set; }
            public string Type { get; set; }
            public string Status { get; set; }
            public string Date { get; set; }
            public string Group { get; set; }
        }

    }
    public class AttendanceExcel
    {
        public AttendanceExcel(List<AttendanceExcelModel> attendanceExcelModels)
        {
            AttendanceExcelModels = attendanceExcelModels;
            var header = new Dictionary<string, string>();
            header.Add("RowNumber", "STT");
            header.Add("Name", "Người dùng");
            header.Add("CheckIn", "Giờ vào");
            header.Add("CheckOut", "Giờ ra");
            header.Add("Status", "Trạng thái");
            header.Add("Created", "Thời điểm tạo");
            Header = header;
            TitleExcel = new ItemExcel
            {
                Value = "Thông tin điểm danh",
            };

        }
        public List<AttendanceExcelModel> AttendanceExcelModels { get; set; }
        public Dictionary<string, string> Header { get; set; }

        public ItemExcel TitleExcel { get; set; }

        public class AttendanceExcelModel
        {
            public string RowNumber { get; set; }
            public string Name { get; set; }
            public string CheckIn { get; set; }
            public string CheckOut { get; set; }
            public string Status { get; set; }
            public string Created { get; set; }
        }

    }
}