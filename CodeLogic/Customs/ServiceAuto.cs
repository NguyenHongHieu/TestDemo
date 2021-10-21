using System;
using System.Collections.Generic;
using System.Linq;
using System.Timers;
using System.Web;

namespace demo1.CodeLogic.Customs
{
    public class ServiceAuto
    {
        private static Timer _timer;
        private static object _locker = new object();
        public static void SetService(double periodMinutes)
        {
            if (periodMinutes <= 0)
                return;
            if (_timer != null)
                StopService();

            _timer = new Timer();
            _timer.Elapsed += StartService;
            _timer.Interval = TimeSpan.FromMinutes(periodMinutes).TotalMilliseconds;
            _timer.Enabled = true;
        }
        public static void StartService(object sender, ElapsedEventArgs e)
        {

            if (_timer != null)
                _timer.Stop();
            try
            {
                lock (_locker)
                {

                    

                }
            }
            catch (Exception ex)
            {

            }
            if (_timer != null)
                _timer.Start();
        }

        public static void StopService()
        {
            _timer.Stop();
            _timer.Dispose();
        }
    }
}