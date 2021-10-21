var Script = function () {


    /* initialize the external events
     -----------------------------------------------------------------*/

    $('#external-events div.external-event').each(function () {

        // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
        // it doesn't need to have a start or end
        var eventObject = {
            title: $.trim($(this).text()) // use the element's text as the event title
        };

        // store the Event Object in the DOM element so we can get to it later
        $(this).data('eventObject', eventObject);

        // make the event draggable using jQuery UI
        $(this).draggable({
            zIndex: 999,
            revert: true,      // will cause the event to go back to its
            revertDuration: 0  //  original position after the drag
        });

    });


    /* initialize the calendar
     -----------------------------------------------------------------*/

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $(document).find("#calendar-workday ").each(function () {
        var datas = JSON.parse($('#calendar-workday').attr('data-workdays'));
        $('#calendar-workday').fullCalendar({
            locale: 'vi',
            header: {
                left: '',
                center: '',
                right: ''
                //left: 'prevYear,prev,next,nextYear today',
                //center: 'title',
                //right: 'month,basicWeek,basicDay'
            },
            titleFormat: {
                month: 'MM / yyyy',
                week: "MM / '('dd [ yyyy]{ '&#8212;' dd')' / yyyy}",
                day: 'dddd, MM / dd / yyyy'
            },
            height: 650,
            editable: false,
            droppable: false, // this allows things to be dropped onto the calendar !!!
            drop: function (date, allDay) { // this function is called when something is dropped

                // retrieve the dropped element's stored Event Object
                var originalEventObject = $(this).data('eventObject');

                // we need to copy it, so that multiple events don't have a reference to the same object
                var copiedEventObject = $.extend({}, originalEventObject);

                // assign it the date that was reported
                copiedEventObject.start = date;
                copiedEventObject.allDay = allDay;

                // render the event on the calendar
                // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                $('#calendar-workday').fullCalendar('renderEvent', copiedEventObject, true);

                // is the "remove after drop" checkbox checked?
                if ($('#drop-remove').is(':checked')) {
                    // if so, remove the element from the "Draggable Events" list
                    $(this).remove();
                }

            },
            //firstDay: 1,
            //monthNames: ['Tháng Một', 'Tháng Hai', 'Tháng Ba', 'Tháng Bốn', 'Tháng Năm', 'Tháng Sáu',
            //    'Tháng Bảy', 'Tháng Tám', 'Tháng Chín', 'Tháng Mười', 'Tháng Mười một', 'Tháng Mười hai'],
            //monthNamesShort: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7',
            //    'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
            //dayNames: ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'],
            //dayNamesShort: ['CN', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
            events: datas,
            //events: [
            //    {
            //        title: 'All Day Event',
            //        start: new Date(y, m, 1)
            //    },
            //    {
            //        title: 'Long Event',
            //        start: new Date(y, m, d - 5),
            //        end: new Date(y, m, d - 2)
            //    },
            //    {
            //        id: 999,
            //        title: 'Repeating Event',
            //        start: new Date(y, m, d - 3, 16, 0),
            //        allDay: false
            //    },
            //    {
            //        id: 999,
            //        title: 'Repeating Event',
            //        start: new Date(y, m, d + 4, 16, 0),
            //        allDay: false
            //    },
            //    {
            //        title: 'Meeting',
            //        start: new Date(y, m, d, 10, 30),
            //        allDay: false
            //    },
            //    {
            //        title: 'Lunch',
            //        start: new Date(y, m, d, 12, 0),
            //        end: new Date(y, m, d, 14, 0),
            //        allDay: false,
            //        color: 'yellow',
            //        textColor: 'black'
            //    },
            //    {
            //        title: 'Birthday Party',
            //        start: new Date(y, m, d + 1, 19, 0),
            //        end: new Date(y, m, d + 1, 22, 30),
            //        allDay: false
            //    },
            //    {
            //        title: 'Click for Google',
            //        start: new Date(y, m, 28),
            //        end: new Date(y, m, 29),
            //        url: 'http://google.com/'
            //    }
            //]
        });
    });



}();