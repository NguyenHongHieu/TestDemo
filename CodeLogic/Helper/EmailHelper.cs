using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Configuration;
using System.Linq;
using System.Net.Mail;
using System.Web;

namespace demo1.CodeLogic.Helper
{
    public static class EmailHelper
    {
        public static bool IsValidEmailAddress(string address) => address != null && new EmailAddressAttribute().IsValid(address);

        private static readonly string _from = ConfigurationManager.AppSettings["EmailForm"]; // Email của Sender (của bạn)
        private static readonly string _pass = ConfigurationManager.AppSettings["EmailPassword"]; // Mật khẩu Email của Sender (của bạn)

        public static bool Send(string sendto, string subject, string content)
        {
            //sendto: Email receiver (người nhận)
            //subject: Tiêu đề email
            //content: Nội dung của email, bạn có thể viết mã HTML
            //Nếu gửi email thành công, sẽ trả về kết quả: OK, không thành công sẽ trả về thông tin l�-i
            try
            {
                MailMessage mail = new MailMessage();
                SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");

                mail.From = new MailAddress(_from);
                mail.To.Add(sendto);
                mail.Subject = subject;
                mail.IsBodyHtml = true;
                mail.Body = content;

                mail.Priority = MailPriority.High;

                SmtpServer.Port = 587;
                SmtpServer.Credentials = new System.Net.NetworkCredential(_from, _pass);
                SmtpServer.EnableSsl = true;

                SmtpServer.Send(mail);
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }

        }
    }
}