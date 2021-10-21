//var Utils = {

//    rmSpace: function (val) {
//        try {
//            while (val.indexOf(" ") !== -1) {
//                val = val.replace(" ", "");
//            }
//        } catch (e) { }
//        return val;
//    },

//    notEmpty: function (val) {
//        return !Utils.isEmpty(val);
//    },
//    isGet: function (form) {
//        return form.attr("method").toLowerCase() == "get";
//    },
//    isPost: function (form) {
//        return form.attr("method").toLowerCase() == "post";
//    },
//    isEmpty: function (val) {

//        if (typeof val == "object")
//            return false;
//        if (typeof val == "function")
//            return false;

//        return val === undefined || jQuery.trim(val).length === 0;
//    },
//    isInteger: function (val) {

//        return !isNaN(val) && !Utils.isEmpty(val);
//    },

//    isChrome: function () {
//        return navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
//    },
//    IsImage: function (extension) {
//        extension = extension.toLowerCase().replace('.', '');
//        switch (extension) {
//            case "ico":
//                return true;
//            case "bmp":
//                return true;
//            case "gif":
//                return true;
//            case "jpe":
//                return true;
//            case "jpeg":
//                return true;
//            case "jpg":
//                return true;
//            case "png":
//                return true;
//        }
//        return false;
//    },
//    IsPdfOrOffice: function (extension) {
//        return Utils.IsPdf(extension) || Utils.IsOffice(extension);
//    },
//    IsPdf: function (extension) {
//        extension = extension.toLowerCase().replace('.', '');
//        return extension == "pdf";
//    },
//    IsOffice: function (extension) {
//        extension = extension.toLowerCase().replace('.', '');
//        switch (extension) {
//            case "rtf":
//                return true;
//            case "odt":
//                return true;
//            case "doc":
//                return true;
//            case "dot":
//                return true;
//            case "docx":
//                return true;
//            case "dotx":
//                return true;
//            case "docm":
//                return true;
//            case "dotm":
//                return true;
//            case "csv":
//                return true;
//            case "odc":
//                return true;
//            case "xls":
//                return true;
//            case "xlsx":
//                return true;
//            case "xlsm":
//                return true;
//            case "odp":
//                return true;
//            case "ppt":
//                return true;
//            case "pptx":
//                return true;
//            case "pptm":
//                return true;
//            case "pot":
//                return true;
//            case "potm":
//                return true;
//            case "potx":
//                return true;
//            case "pps":
//                return true;
//            case "ppsx":
//                return true;
//            case "ppsm":
//                return true;
//        }
//        return false;
//    },
//    IsVideo: function (extension) {
//        extension = extension.toLowerCase().replace('.', '');
//        switch (extension) {
//            case "3g2":
//                return true;
//            case "3gp":
//                return true;
//            case "3gp2":
//                return true;
//            case "3gpp":
//                return true;
//            case "avi":
//                return true;
//            case "asf":
//                return true;
//            case "asr":
//                return true;
//            case "asx":
//                return true;
//            case "dif":
//                return true;
//            case "dv":
//                return true;
//            case "ivf":
//                return true;
//            case "flv":
//                return true;
//            case "m4v":
//                return true;
//            case "lsf":
//                return true;
//            case "lsx":
//                return true;
//            case "m1v":
//                return true;
//            case "m2t":
//                return true;
//            case "m2ts":
//                return true;
//            case "m2v":
//                return true;
//            case "mod":
//                return true;
//            case "mov":
//                return true;
//            case "movie":
//                return true;
//            case "mp2":
//                return true;
//            case "mp2v":
//                return true;
//            case "mp4":
//                return true;
//            case "mp4v":
//                return true;
//            case "mpeg":
//                return true;
//            case "mpe":
//                return true;
//            case "mpa":
//                return true;
//            case "mpg":
//                return true;
//            case "mpv2":
//                return true;
//            case "mqv":
//                return true;
//            case "mts":
//                return true;
//            case "nsc":
//                return true;
//            case "qt":
//                return true;
//            case "ts":
//                return true;
//            case "tts":
//                return true;
//            case "vbk":
//                return true;
//            case "wm":
//                return true;
//            case "wmp":
//                return true;
//            case "wmv":
//                return true;
//            case "wmx":
//                return true;
//            case "wvx":
//                return true;
//        }
//        return false;
//    },
//    IsAudio: function (extension) {
//        extension = extension.toLowerCase().replace('.', '');
//        switch (extension) {
//            case "aa":
//                return true;
//            case "aac":
//                return true;
//            case "aax":
//                return true;
//            case "ac3":
//                return true;
//            case "adt":
//                return true;
//            case "adts":
//                return true;
//            case "aif":
//                return true;
//            case "aifc":
//                return true;
//            case "aiff":
//                return true;
//            case "au":
//                return true;
//            case "caf":
//                return true;
//            case "cdda":
//                return true;
//            case "gsm":
//                return true;
//            case "m3u":
//                return true;
//            case "m3u8":
//                return true;
//            case "m4a":
//                return true;
//            case "m4b":
//                return true;
//            case "m4p":
//                return true;
//            case "m4r":
//                return true;
//            case "mid":
//                return true;
//            case "midi":
//                return true;
//            case "mp3":
//                return true;
//            case "pls":
//                return true;
//            case "ra":
//                return true;
//            case "ram":
//                return true;
//            case "rmi":
//                return true;
//            case "sd2":
//                return true;
//            case "smd":
//                return true;
//            case "smx":
//                return true;
//            case "smz":
//                return true;
//            case "snd":
//                return true;
//            case "wav":
//                return true;
//            case "wave":
//                return true;
//            case "wax":
//                return true;
//            case "wma":
//                return true;
//        }
//        return false;
//    },
//    getSerialize: function (form, event) {
//        var keys = {};
//        var buttons = {};
//        var checkboxs = {};
//        form.find("input, select, textarea,button").each(function () {
//            var el = jQuery(this);
//            var name = el.prop("name");
//            if (!Utils.isEmpty(name)) {
//                var tagName = el.prop("tagName").toLowerCase();

//                if (tagName == "input" || tagName == "textarea") {
//                    var type = el.prop("type").toLowerCase();
                    
                   
//                        if (type == "text" || type == "password" || type == "email" || type == "hidden" || type == "textarea") {
//                            if (!keys.hasOwnProperty(name)) {
//                                keys[name] = [];
//                            }
//                            keys[name].push(el.val());
//                        }
//                        else if (type == "checkbox" || type == "radio") {
//                            if (el.prop("checked")) {
//                                if (!keys.hasOwnProperty(name)) {
//                                    keys[name] = [];
//                                }
//                                keys[name].push(el.val());
//                            }
//                            if (!checkboxs.hasOwnProperty(name)) {
//                                checkboxs[name] = 0;
//                            }
//                            checkboxs[name]++;
//                        }
                   
                    
//                }
//                else if (tagName != "button") {
//                    if (!keys.hasOwnProperty(name)) {
//                        keys[name] = [];
//                    }
//                    keys[name].push(el.val());
//                }
//            }
//        });

//        for (var k in keys) {
//            var vals = keys[k];
//            if (vals.length == 1 || buttons.hasOwnProperty(k)) { //|| !checkboxs.hasOwnProperty(k)
//                keys[k] = vals.join(",");
//            }
//            else {
//                keys[k] = JSON.stringify(vals);
//            }
//        }
//        return keys;
//    },
//    builderQString: function (data) {
//        var queries = [];
//        for (var i in data) {
//            if (i == "RedirectPath")
//                continue;

//            if (!Utils.isEmpty(data[i])) {
//                queries.push(i + "=" + data[i]);
//            }
//        }
//        return ("?" + queries.join("&"));
//    },
//    b64toBlob: function (b64Data, contentType, sliceSize) {

//        contentType = contentType || "";
//        sliceSize = sliceSize || 512;

//        var byteCharacters = atob(b64Data);
//        var byteLength = byteCharacters.length;
//        var byteArrays = [];

//        for (var offset = 0; offset < byteLength; offset += sliceSize) {
//            var slice = byteCharacters.slice(offset, offset + sliceSize);
//            var byteNumbers = new Array(slice.length);
//            for (var i = 0; i < slice.length; i++) {
//                byteNumbers[i] = slice.charCodeAt(i);
//            }
//            var byteArray = new Uint8Array(byteNumbers);
//            byteArrays.push(byteArray);
//        }
//        return new Blob(byteArrays, { type: contentType, encoding: "utf-8" });
//    },
//    sendB64AsFile: function (settings, file) {

//        var fileReader = new FileReader();
//        fileReader.onabort = function (e) {
//            if (settings.onClientAbort) {
//                settings.onClientAbort(e);
//            }
//        };
//        fileReader.onerror = function (e) {
//            if (settings.onClientError) {
//                settings.onClientError(e);
//            }
//        };
//        fileReader.onload = function (e) {
//            if (settings.onClientLoad) {
//                settings.onClientLoad(e);
//            }
//        };
//        fileReader.onloadend = function (e) {
//            if (settings.onClientLoadEnd) {
//                settings.onClientLoadEnd(e);
//            }
//        };
//        fileReader.onloadstart = function (e) {
//            if (settings.onClientLoadStart) {
//                settings.onClientLoadStart(e);
//            }
//        };
//        fileReader.onprogress = function (e) {
//            if (settings.onClientProgress) {
//                settings.onClientProgress(e);
//            }
//        };
//        fileReader.readAsDataURL(file);
//        var xmlHttpRequest = new XMLHttpRequest();
//        xmlHttpRequest.upload.onabort = function (e) {
//            if (settings.onServerAbort) {
//                settings.onServerAbort(e);
//            }
//        };
//        xmlHttpRequest.upload.onerror = function (e) {
//            if (settings.onServerError) {
//                settings.onServerError(e);
//            }
//        };
//        xmlHttpRequest.upload.onload = function (e) {
//            if (settings.onServerLoad) {
//                settings.onServerLoad(e);
//            }
//        };
//        xmlHttpRequest.upload.onloadstart = function (e) {
//            if (settings.onServerLoadStart) {
//                settings.onServerLoadStart(e);
//            }
//        };
//        xmlHttpRequest.upload.onprogress = function (e) {
//            if (settings.onServerProgress) {
//                settings.onServerProgress(e);
//            }
//        };
//        xmlHttpRequest.onreadystatechange = function (e) {
//            if (settings.onServerReadyStateChange) {
//                settings.onServerReadyStateChange(e, xmlHttpRequest.readyState);
//            }
//            if (settings.onSuccess && xmlHttpRequest.readyState === 4 && xmlHttpRequest.status === 200) {
//                try {
//                    settings.onSuccess(e, JSON.parse(xmlHttpRequest.responseText));
//                } catch (e) {
//                    settings.onClientError(e);
//                    var message = jQuery(xmlHttpRequest.responseText).find("#MessageError");
//                    if (message.length > 0) {
//                        alert(message.text());
//                    }
//                }
//            }
//        };

//        xmlHttpRequest.open("POST", settings.postUrl, true);
//        if (file.getAsBinary) {
//            var data = window.dashes + boundary + window.crlf
//                + "Content-Disposition: form-data; name=\""
//                + settings.name + "\";" + "filename=\""
//                + unescape(encodeURIComponent(file.name)) + "\"" + window.crlf
//                + "Content-Type: application/octet-stream" + window.crlf
//                + window.crlf + file.getAsBinary() + window.crlf + window.dashes + boundary
//                + window.dashes;
//            xmlHttpRequest.setRequestHeader("Content-Type", "multipart/form-data;boundary=" + boundary);
//            xmlHttpRequest.sendAsBinary(data);
//        } else if (window.FormData) {
//            var formData = new FormData();
//            formData.append(settings.name, file, file.name);
//            xmlHttpRequest.send(formData);
//        }
//    },
//    reloadPage: function () {

//        window.location.href = Utils.getRedirect();
//    },
//    getRedirect: function () {

//        var href = window.location.href;
//        if (href.indexOf("#") != -1) {
//            href = href.substring(0, href.indexOf("#"));
//        }
//        if (href.indexOf("rand=") != -1) {
//            href = href.replace(/(rand=)[a-z|0-9]+/ig, '$1' + (new Date()).getTime());
//        }
//        else if (href.indexOf("?") != -1) {
//            href += "&rand=" + (new Date()).getTime();
//        }
//        else {
//            href += "?rand=" + (new Date()).getTime();
//        }

//        return href;
//    },
//    getDomain: function () {

//        var domain = window.location.protocol
//        domain += "//";
//        domain += window.location.hostname;
//        if (window.location.port !== "") {
//            domain += ":";
//            domain += window.location.port;
//        }
//        return domain;
//    },
//    toggleMultiTicks: function (table) {

//        var flag = false;
//        var wrapper = table.closest(".dataTables_wrapper");
//        var actions = wrapper.find(".actMultiTicks");
//        var grouper = wrapper.find(".group-checkable");
//        table.find(".checkboxes").each(function () {
//            if (jQuery(this).prop("checked")) {
//                actions.removeClass("hidden");
//                flag = true;
//                return false;
//            }
//        });
//        if (!flag) {
//            actions.addClass("hidden");
//            if (grouper.prop("checked"))
//                grouper.prop("checked", false);
//        }
//    },
//    updateTab: function (container) {
//        if (container.hasClass("useTabs")) {
//            container.tabs();
//        }
//        container.find(".useTabs").tabs();
//    },

//    bootstrapValidator: function (obj) {
//        if (!obj.hasClass("bootstrapValidator")) {
//            obj.addClass("bootstrapValidator").bootstrapValidator();
//        }
//    },
//    updateFormState: function (container) {

//        if (container.hasClass("validateForm")) {
//            Utils.bootstrapValidator(container);
//        }
//        container.find(".validateForm").each(function () {
//            Utils.bootstrapValidator(jQuery(this));
//        });
//        container.find(".form-control textarea:visible, .form-control input[type='text']:visible").each(function () {
//            if (Utils.isEmpty(jQuery(this).val())) {
//                jQuery(this).focus();
//                return false;
//            }
//        });
//        container.find("select").unbind("mousewheel")
//            .bind("mousewheel", "select", function (e) {
//                e.stopPropagation();
//            });

//        var redirectPath = Utils.getRedirect();
//        if (container.prop("tagName") === "FORM") {
//            var redirects = container.find("input[name='RedirectPath']");
//            if (redirects.length == 0) {
//                var inputRedirect = jQuery("<input type='hidden' class='redirectauto' />");
//                inputRedirect.attr("name", "RedirectPath");
//                inputRedirect.val(redirectPath);
//                container.append(inputRedirect);
//            } else if (redirects.hasClass("redirectauto")) {
//                redirects.val(redirectPath);
//            }
//        } else {
//            container.find("form").each(function () {
//                var redirects = jQuery(this).find("input[name='RedirectPath']");
//                if (redirects.length == 0) {
//                    var inputRedirect = jQuery("<input type='hidden' class='redirectauto'/>");
//                    inputRedirect.attr("name", "RedirectPath");
//                    inputRedirect.val(redirectPath);
//                    jQuery(this).append(inputRedirect);
//                } else if (redirects.hasClass("redirectauto")) {
//                    redirects.val(redirectPath);
//                }
//            });
//        }
//        container.find(".validateForm").each(function () {
//            if (!jQuery(this).hasClass("bootstrapValidator"))
//                jQuery(this).addClass("bootstrapValidator").bootstrapValidator();
//        });
//    },
//    updateSelectbox: function (container) {

//        container.find(".selectbox").selectbox({
//            effect: "slide",
//            classHolder: "sbHolder form-control"
//        });
//        container.find(".inputchoises").each(function () {
//            var choises = [];
//            var data = jQuery.parseJSON(jQuery(this).attr("data-choises"));
//            for (var i in data) {
//                var choise = data[i];
//                choises.push({
//                    value: choise.Name,
//                    label: choise.Name,
//                });
//            }
//            var id = jQuery(this).attr("id");
//            if (Utils.isEmpty(id)) {
//                id = "IChoise" + (new Date()).getTime();
//                jQuery(this).attr("id", id);
//            }
//            jQuery("#" + id).autocomplete({
//                source: choises,
//                minLength: 0,
//                select: function (event, ui) {

//                }
//            }).click(function () {
//                jQuery(this).autocomplete("search", "");
//            }).focus(function () {
//                jQuery(this).autocomplete("search", "");
//            });
//        });
//    },
//    updateInputDate: function (container) {
//        container.find(".date").each(function () {
//            var id = jQuery(this).attr("id");
//            if (Utils.isEmpty(id)) {
//                id = "IDate" + (new Date()).getTime();
//                jQuery(this).attr("id", id);
//            }
//            jQuery("#" + id).datetimepicker({
//                timepicker: false,
//                format: "d-m-Y",
//                lang: "vi",
//                scrollInput: false,
//                onChangeDateTime: function (dp, input) {
//                    var name = jQuery(input).attr("name");
//                    var form = jQuery(input).closest("form");
//                    if (form.hasClass("bootstrapValidator")) {
//                        form.bootstrapValidator('revalidateField', name);
//                    }
//                }
//            });
//        });
//        container.find(".datetime").each(function () {

//            var id = jQuery(this).attr("id");
//            if (Utils.isEmpty(id)) {
//                id = "IDatetime" + (new Date()).getTime();
//                jQuery(this).attr("id", id);
//            }
//            jQuery("#" + id).datetimepicker({
//                format: "d-m-Y H:i",
//                lang: "vi",
//                scrollInput: false,
//                onChangeDateTime: function (dp, input) {
//                    var name = jQuery(input).attr("name");
//                    var form = jQuery(input).closest("form");
//                    if (form.hasClass("bootstrapValidator")) {
//                        form.bootstrapValidator('revalidateField', name);
//                    }
//                }
//            });
//        });

//        container.find(".cust-date").each(function () {
//            var format = "d-m-Y";
//            var id = jQuery(this).attr("id");
//            var custFormat = $(this).data("dt-format");
//            if (custFormat != undefined)
//                format = custFormat;
//            jQuery(this).attr("autocomplete", "off");
//            if (Utils.isEmpty(id)) {
//                id = "IMonth" + (new Date()).getTime();
//                jQuery(this).attr("id", id);
//            }
//            jQuery("#" + id).datetimepicker({
//                timepicker: false,
//                format: format,
//                lang: "vi",
//                scrollInput: false
//            });
//        });
//    },
//    updateScrollBar: function (container) {
//        if (container.hasClass("ps-container")) {
//            container.perfectScrollbar("destroy");
//            container.perfectScrollbar({
//                useBothWheelAxes: false, wheelPropagation: true
//            });
//        }
//        else if (container.hasClass("newfeed")) {
//            container.perfectScrollbar({
//                useBothWheelAxes: false, wheelPropagation: true
//            });
//        }
//        container.find(".newfeed").perfectScrollbar({
//            useBothWheelAxes: false, wheelPropagation: true
//        });
//    },
//    updateChart: function (container) {
//        container.find(".chartViewer").each(function () {
//            try {
//                var dataChart = jQuery(this).find(".dataChart").val();
//                if (typeof dataChart != "undefined") {
//                    dataChart = jQuery.parseJSON(dataChart);
//                    jQuery(this).fadeIn("200", function () {

//                        jQuery(this).highcharts(dataChart);
//                        try {
//                            var step = 5;
//                            var max = dataChart.chart.columns;
//                            var chartViewer = jQuery(this);
//                            chartViewer.attr("data-max", max);
//                            chartViewer.attr("data-from", 0);
//                            chartViewer.attr("data-to", step);
//                            chartViewer.attr("data-step", step);
//                            if (max > step) {
//                                chartViewer.append(jQuery("<button type='button'>")
//                                    .addClass("btn btn-xs btn-info prevChart")
//                                    .append(jQuery("<i class='glyphicon glyphicon-arrow-left'></i>")))
//                                chartViewer.append(jQuery("<button type='button'>")
//                                    .addClass("btn btn-xs btn-info nextChart")
//                                    .append(jQuery("<i class='glyphicon glyphicon-arrow-right'></i>")))
//                            }

//                            var chart = jQuery(this).highcharts();
//                            chart.xAxis[0].setExtremes(0, step);
//                        } catch (e) { }
//                    });
//                }
//            } catch (e) {
//                console.log(e);
//            }
//        });
//        container.find(".chartBeyondPlot").each(function () {
//            if (!jQuery(this).hasClass("builded")) {
//                jQuery(this).addClass("builded");

//                try {
//                    var dataChart = jQuery(this).find(".dataChart").val();
//                    if (typeof dataChart != "undefined") {
//                        dataChart = jQuery.parseJSON(dataChart);
//                        jQuery.plot(jQuery(this), dataChart, {
//                            series: {
//                                pie: {
//                                    innerRadius: 0.45,
//                                    show: true,
//                                    stroke: {
//                                        width: 4
//                                    }
//                                }
//                            }
//                        });
//                    }
//                } catch (e) {
//                    console.log(e);
//                }
//            }
//        });
//    },
//    updatePlayer: function (container) {
//        container.find(".media-player").each(function () {
//            var url = jQuery(this).attr("data-value");
//            var video = jQuery(this).attr("data-video");
//            jwplayer(jQuery(this).attr("id")).setup({
//                flashplayer: "/stg/plugins/player.swf",
//                controlbar: "bottom",
//                width: 400,
//                height: video == "1" ? 280 : 24,
//                background: "#fff",
//                autostart: "false",
//                plugins: {
//                    'timeslidertooltipplugin-1': {},
//                    'captions': {
//                        color: "#ffff80",
//                        fontFamily: "Tahoma, Geneva, sans-serif",
//                        fontSize: "17",
//                        fontWeight: "normal"
//                    }
//                },
//                //'proxy.file': "",
//                'file': Cdata.Storage.domain + "/" + url
//            });
//            jQuery(this).addClass("player");
//        });
//    },
//    updateImageViewer: function () {
//        try {
//            var thumbUrl = jQuery("#ViewerIMG").attr("src");
//            var thumbMapUrl = jQuery("#PathThumbMap").val();
//            var settings = {
//                'viewportWidth': '100%',
//                'viewportHeight': '100%',
//                'fitToViewportShortSide': true,
//                'contentSizeOver100': true,
//                'loadingBgColor': '#ffffff',
//                'startScale': .2,
//                'startX': 0,
//                'startY': 0,
//                'animTime': 500,
//                'draggInertia': 10,
//                'zoomLevel': 1,
//                'zoomStep': 0.1,
//                'contentUrl': thumbUrl,
//                'intNavEnable': true,
//                'intNavPos': 'TR',
//                'intNavAutoHide': true,
//                'intNavMoveDownBtt': true,
//                'intNavMoveUpBtt': true,
//                'intNavMoveRightBtt': true,
//                'intNavMoveLeftBtt': true,
//                'intNavZoomBtt': true,
//                'intNavUnzoomBtt': true,
//                'intNavFitToViewportBtt': true,
//                'intNavFullSizeBtt': true,
//                'intNavBttSizeRation': 1,
//                'mapEnable': true,
//                'mapThumb': thumbMapUrl,
//                'mapPos': 'BL',
//                'popupShowAction': 'click',
//                'testMode': false
//            };
//            jQuery('#DocProIMGMap').lhpMegaImgViewer(settings, 'DocProHotspots');
//        }
//        catch (e) {
//            console.log(e);
//        }
//    },
//    updatePDFViewer: function (response) {
//        try {
//            OCR.reset();
//        } catch (e) { }
//        try {
//            window.webViewerLoad(true);
//        } catch (e) {
//            console.log(e);
//        }
//    },
//    viewer: function (data) {

//        try {
//            if (typeof data == "undefined")
//                return;
//            if (typeof data.Path == "undefined")
//                return;

//            var path = data.Path.replace("\\", "/");
//            if (Utils.IsPdfOrOffice(data.Extension)) {
//                path = path.substring(0, path.lastIndexOf(".")) + ".pdf";
//                jQuery("#DEFAULT_URL").val(Cdata.Storage.domain + "/Storage/Files/" + path);
//                window.webViewerLoad(true);
//                jQuery("#viewerContainer").scrollTop(0);
//            }
//            else if (Utils.IsImage(data.Extension)) {
//                Utils.updateImageViewer();
//            }
//            else {
//                Utils.updatePlayer();
//            }
//        } catch (e) {
//            console.log(e);
//        }
//    },
//    openOverlay: function (overide) {

//        if (overide != undefined || jQuery("#Overlay").is(":visible") == false) {
//            jQuery("#Overlay").fadeIn("fast");
//            Utils.autoResize();
//        }
//    },
//    closeOverlay: function (overide) {
//        if (overide != undefined || jQuery(".ui-dialog:visible").length < 1) {
//            jQuery("#Overlay").fadeOut("fast");
//            jQuery(".ui-dialog-content:visible").dialog("close");
//            jQuery(".hiddenDialog").removeClass("hiddenDialog");
//        }
//    },
//    closeCDialog: function (dialoger, invoker) {
//        dialoger.closest(".ui-dialog").removeClass("hiddenDialog");
//        var hiddenDialogs = jQuery(document).find(".hiddenDialog");
//        if (hiddenDialogs.length > 0) {
//            hiddenDialogs.last().removeClass("hidden");
//        } else {
//            Utils.closeOverlay();
//        }
//        if (dialoger.closest(".ui-dialog").hasClass("refresh")) {
//            window.location.href = Utils.getRedirect();
//        }
//        if (invoker) {
//            dialoger.closest(".ui-dialog").find(".ui-dialog-content:visible").dialog("close");
//        }
//    },
//    autoCloseFlash: function () {
//        var flashCount = 0;
//        jQuery(".flash-success").each(function () {
//            flashCount++;
//            jQuery(this).delay(flashCount * 1000).fadeOut("fast");
//        });
//    },
//    autoResize: function () {
//        try {
//            jQuery(".ui-dialog-content:visible").each(function () {
//                jQuery(this).dialog("option", "position", jQuery(this).dialog("option", "position"));
//            });

//        } catch (e) {
//        }
//    },

//    preventScrollOutside: function (target) {
//        target.on('mousewheel DOMMouseScroll', function (e) {
//            var scrollTo = null;

//            if (e.type === 'mousewheel') {
//                scrollTo = (e.originalEvent.wheelDelta * -1);
//            }
//            else if (e.type === 'DOMMouseScroll') {
//                scrollTo = 40 * e.originalEvent.detail;
//            }

//            if (scrollTo) {
//                e.preventDefault();
//                $(this).scrollTop(scrollTo + $(this).scrollTop());
//            }
//        });
//    },

//    validateDataForm: function (form) {

//        form.find("input[type='text'], input[type='password'], textarea, select").each(function () {

//            var num = jQuery(this).removeClass("error").val();
//            num = Utils.rmSpace(num);

//            if (jQuery(this).hasClass('checkngay')) {
//                if (!Utils.isEmpty(num)) {
//                    if (!jQuery.isNumeric(num) || parseInt(num) > 31 || parseInt(num) < 1) {
//                        jQuery(this).addClass("error");
//                    } else {
//                        if (num.length == 1) {
//                            num = "0" + num;
//                        }
//                        jQuery(this).val(num);
//                    }
//                }
//            }
//            else if (jQuery(this).hasClass('checkthang')) {
//                if (!Utils.isEmpty(num)) {
//                    if (!jQuery.isNumeric(num) || parseInt(num) > 12 || parseInt(num) < 1) {
//                        jQuery(this).addClass("error");
//                    } else {
//                        if (num.length == 1) {
//                            num = "0" + num;
//                        }
//                        jQuery(this).val(num);
//                    }
//                }
//            }
//            else if (jQuery(this).hasClass('checknam')) {
//                if (!Utils.isEmpty(num)) {
//                    if (!jQuery.isNumeric(num) || parseInt(num) < 1900 || parseInt(num) > 2015) {
//                        jQuery(this).addClass("error");
//                    } else {
//                        jQuery(this).val(num);
//                    }
//                }
//            }
//            else if (jQuery(this).hasClass('checkint')) {
//                if (!Utils.isEmpty(num)) {
//                    if (!jQuery.isNumeric(num) || num.indexOf(".") != -1 || num.indexOf(",") != -1) {
//                        jQuery(this).addClass("error");
//                    } else {
//                        jQuery(this).val(num);
//                    }
//                }
//            }

//            if (jQuery(this).hasClass('checkrequired')) {
//                if (Utils.isEmpty(num)) {
//                    jQuery(this).addClass("error");
//                }
//                else if (jQuery(this).prop("tagName") == "SELECT" && num == "0") {
//                    jQuery(this).addClass("error");
//                }
//            }

//            if (jQuery(this).hasClass('checkcompare')) {

//                var comparator = jQuery(jQuery(this).attr("data-compare"));
//                var valCompare = comparator.val();
//                if (valCompare != num) {
//                    jQuery(this).addClass("error");
//                    comparator.addClass("error");
//                }
//            }
//        });

//        var elErrors = form.find(".error");
//        if (elErrors.length > 0) {
//            var elError = elErrors.first().focus();
//            if (!elError.is(":visible")) {
//                elError.closest(".group-tab").find(".tab-data").addClass("hidden");
//                var idTab = elError.closest(".tab-data").removeClass("hidden").attr("id");

//                elError.closest(".group-tab").find(".tabitem").removeClass("active");
//                elError.closest(".group-tab").find(".tabitem[data-tab='#" + idTab + "']").addClass("active");
//            }
//            return false;
//        }
//        return true;
//    },
//    setError: function (error) {
//        var str = '<div class="row flash flash-error">' +
//            '<ul>' +
//            '<li>' + error + '</li>' +
//            '</ul>' +
//            '<i class="ui-icon ui-icon-closethick close-flash"></i>' +
//            '</div>';

//        jQuery("#Section").prepend(str);
//    },
//    setSuccess: function (sucess) {
//        var str = '<div class="row flash flash-success">' +
//            '<ul>' +
//            '<li>' + sucess + '</li>' +
//            '</ul>' +
//            '<i class="ui-icon ui-icon-closethick close-flash"></i>' +
//            '</div>';

//        jQuery("#Section").prepend(str);
//    },
//    sectionBuilder: function (response, options) {

//        try {
//            jQuery(".flash-success").remove();
//            jQuery(".flash-error, .flash-warn").each(function () {
//                if (jQuery(this).is(":visible") == false) {
//                    jQuery(this).remove();
//                }
//            });
//            if (response.hasOwnProperty("isTle")) {
//                jQuery(document).prop("title", response.pgTle);
//            }
//            if (response.hasOwnProperty("isMsg")) {
//                jQuery("#Section").prepend(response.htMsg);
//                $(".flash-error").remove();
//                //jQuery("#Section").prepend(response.htMsg);
//                if (!response.isErr)
//                    Utils.closeCurrentDialog(true);
//                Utils.autoCloseFlash();
//            }
//            if (response.hasOwnProperty("isLogout")) {
//                jQuery("<div>").delay(1000).fadeOut("100", function () {
//                    window.location.href = jQuery("#bcrumdLogout").find("a").attr("href");
//                });
//                return;
//            }
//            if (response.hasOwnProperty("isDL")) {
//                var dialoger = jQuery(response.htDL);
//                var idDialoger = dialoger.attr("id");
//                var maxH = jQuery(window).height();
//                if (Utils.notEmpty(idDialoger)) {
//                    jQuery('.ui-dialog:visible').addClass("hidden hiddenDialog");
//                    jQuery('div[aria-describedby="' + idDialoger + '"]').detach();
//                    dialoger.dialog({
//                        width: response.wDL,
//                        resizable: false,
//                        open: function () {
//                            if (maxH < dialoger.height()) {
//                                dialoger.css("height", maxH - 150);
//                            }
//                            Utils.openOverlay();
//                        },
//                        close: function () {

//                            Utils.closeCDialog(jQuery(this));
//                        }
//                    });
//                }
//            }
//        } catch (e) {
//            console.log(e);
//        }

//    },

//    ins2pos: function (insString, selector) {

//        var val = jQuery(selector).val();
//        try {
//            var st = jQuery(selector).getSelectionStart();
//            var ed = jQuery(selector).getSelectionEnd();
//            var before = val.substring(0, st);
//            var after = val.substring(ed, val.length);
//            jQuery(selector).val(before + insString + after);
//            jQuery(selector).setSelection(st + insString.length, st + insString.length);
//        } catch (e) {
//            jQuery(selector).val(val + insString);
//        }
//    },

//    wordCount: function (string) {
//        string = string.replace(/(<([^>]+)>)/ig, " ");
//        string = string.replace(/&nbsp;/ig, " ");
//        string = string.replace(/\s{2,}/g, ' ');
//        string = jQuery.trim(string);
//        var args = string.split(' ');
//        return args.length;
//    },

//    getSumary: function (string, limit) {

//        string = string.replace(/(<([^>]+)>)/ig, " ");
//        string = string.replace(/&nbsp;/ig, " ");
//        string = string.replace(/\s{2,}/g, " ");
//        string = jQuery.trim(string);
//        return string.substring(0, limit);
//    },

//    convertDate: function (strDate, format) {

//        var date = new Date(strDate);
//        return date.toDateFormat(format);
//    },
//    openInNewTab: function (url) {
//        var win = window.open(url, '_blank');
//        win.focus();
//    },

//    KB: 1024,
//    MB: 1024 * 1024,
//    GB: 1024 * 1024 * 1024,
//    TB: 1024 * 1024 * 1024 * 1024,

//    convertSize: function (size) {

//        var bytes = parseInt(size);
//        if (isNaN(bytes))
//            return "0 B";

//        var tb = bytes / Utils.TB;
//        if (tb >= 1) {
//            return tb.toFixed(2) + " TB";
//        }

//        var gb = bytes / Utils.GB;
//        if (gb >= 1) {
//            return gb.toFixed(2) + " GB";
//        }

//        var mb = bytes / Utils.MB;
//        if (mb >= 1) {
//            return mb.toFixed(2) + " MB";
//        }

//        var kb = bytes / Utils.KB;
//        if (kb >= 1) {
//            return kb.toFixed(2) + " KB";
//        }

//        return size + " B";
//    },
//    removeElInArray: function (el, array) {
//        var arrayCopy = [];
//        if (Utils.isEmpty(array) || array.length <= 0) {
//            arrayCopy = [0];
//        } else {
//            for (var i = 0; i < array.length; i++) {
//                if (parseInt(el) != parseInt(array[i])) {
//                    arrayCopy.push(array[i]);
//                }
//            }
//        }
//        return arrayCopy;
//    },
//    addElInArray: function (el, array) {
//        var arrayCopy = [];
//        if (Utils.isEmpty(array) || array.length <= 0) {
//            arrayCopy = [el];
//        } else {
//            if (!array.includes(el)) {
//                array.push(el);
//                arrayCopy = array;
//            }
//        }
//        return arrayCopy;
//    },
//};
//var Cdata = {
//    init: function () {
//        try {
//            var data = jQuery("#CDATA").val();
//            var dataJson = jQuery.parseJSON(data);
//            for (var k in dataJson) {
//                if (dataJson.hasOwnProperty(k)) {
//                    Cdata[k] = dataJson[k];
//                }
//            }
//        } catch (e) {
//        }
//    },
//    SrcPath: function (path) {
//        return Cdata.Storage.urlFile + "/" + path; //+ Cdata.Storage.urlFile
//    }
//};
//String.prototype.capitalize = function () {
//    return this.charAt(0).toUpperCase() + this.slice(1);
//};
//Date.prototype.toDateFormat = function (format) {
//    var yyyy = this.getFullYear().toString();
//    var mm = (this.getMonth() + 1).toString();
//    var dd = this.getDate().toString();
//    var h = this.getHours().toString();
//    var m = this.getMinutes().toString();

//    mm = (mm[1] ? mm : "0" + mm[0]);
//    dd = (dd[1] ? dd : "0" + dd[0]);
//    h = (h[1] ? h : "0" + h[0]);
//    m = (m[1] ? m : "0" + m[0]);

//    var value = "";
//    switch (format) {
//        case "dd-MM-yyyy HH:mm":
//            value = dd + "-" + mm + "-" + yyyy + " " + h + ":" + m;
//            break;
//        default:
//            value = dd + "-" + mm + "-" + yyyy;
//            break;
//    }
//    return value;
//};
//String.prototype.replaceAll = function (str1, str2, ignore) {
//    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"), (ignore ? "gi" : "g")), (typeof (str2) == "string") ? str2.replace(/\$/g, "$$$$") : str2);
//};
//jQuery.fn.extend({
//    reset: function () {
//        try {
//            this.each(function () {
//                this.reset();
//            });
//            jQuery(jQuery(this).attr("data-html-reset")).html("");
//        } catch (e) {
//        }
//    },
//    getData: function () {
//        var data = {};
//        try {
//            this.each(function () {
//                jQuery.each(this.attributes, function () {
//                    var name = this.name.toLowerCase();
//                    if (name.indexOf("data-") === 0) {
//                        var k = "";
//                        var args = name.split("-");
//                        for (var n = 0; n < args.length; n++) {
//                            if (n == 0) continue;
//                            if (n == 1) {
//                                k += args[n];
//                            }
//                            else {
//                                k += args[n].capitalize()
//                            }
//                        }
//                        data[k] = this.value;
//                    }
//                });
//            });
//        } catch (e) {
//        }
//        return data;
//    },
//    getDataUppername: function () {
//        var data = {};
//        try {
//            this.each(function () {
//                jQuery.each(this.attributes, function () {
//                    var name = this.name.toLowerCase();
//                    if (name.indexOf("data-") === 0) {
//                        var k = "";
//                        var args = name.split("-");
//                        for (var n = 0; n < args.length; n++) {
//                            if (n == 0) continue;
//                            var v = args[n];
//                            if (v == "id") {
//                                k += v.toUpperCase();
//                            }
//                            else {
//                                k += v.capitalize()
//                            }
//                        }
//                        data[k] = this.value;
//                    }
//                });
//            });
//        } catch (e) {
//        }
//        return data;
//    }
//});

var Utils = {
    setToastSuccess: function (message) {
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
        toastr["success"](message)
    },
    formatMoney: function (n) {
        var i, f;
        if (n != null) {
            var t = n.toString().replace(".", ""), r = !1, u = [], e = 1, o = null;
            for (t.indexOf(".") > 0 && (r = t.split("."), t = r[0]), t = t.split("").reverse(), i = 0, f = t.length; i < f; i++) t[i] != "," && (u.push(t[i]), e % 3 == 0 && i < f - 1 && u.push(","), e++);
            return o = u.reverse().join(""), o + (r ? "." + r[1].substr(0, 2) : "");
        }
        return n;
    }, setToastError: function (message) {
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "3000",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
        toastr["error"](message);
    },
    setToastWarning: function (message) {
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
        toastr["warning"](message)
    },
    setToastInfor: function (message) {
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
        toastr["info"](message)
    },
    stringToBoolean: function (string) {
        if (string == undefined)
            return '';
        switch (string.toLowerCase().trim()) {
            case "true":
            case "True":
            case "yes":
            case "1":
                return true;
            case "false":
            case "False":
            case "no":
            case "0":
            case null:
                return false;
            default:
                return Boolean(string);
        }
    },
    updateGridTree: function (container) {
        container.find('.tree').treegrid({
            'initialState': 'collapsed',
            'saveState': true,
        });
    },
    rmSpace: function (val) {
        try {
            while (val.indexOf(" ") !== -1) {
                val = val.replace(" ", "");
            }
        } catch (e) {
        }
        return val;
    },
    notEmpty: function (val) {
        return !Utils.isEmpty(val);
    },
    isGet: function (form) {
        return form.attr("method").toLowerCase() == "get";
    },
    isPost: function (form) {
        return form.attr("method").toLowerCase() == "post";
    },
    isEmpty: function (val) {

        if (typeof val == "object")
            return false;
        if (typeof val == "function")
            return false;

        return val === undefined || jQuery.trim(val).length === 0;
    },
    sIsNotEmpty: function (val) {
        return !Utils.sIsEmpty(val);
    },
    sIsEmpty: function (val) {
        return typeof value == 'string' && !value.trim() || typeof value == 'undefined' || value === null || isNaN(val);
    },
    sGranttInvalidDate: function (val) {
        return typeof val !== 'Invalid Date' && !isNaN(val) && typeof val !== 'undefined'
    },
    replaceInvalidGrant: function (val) {
        if (val !== 'Invalid Date' && isNaN(val) && typeof val !== 'undefined') {
            return val;
        } else return "";
    },
    isInteger: function (val) {
        return !isNaN(val) && !Utils.isEmpty(val);
    },
    isChrome: function () {
        return navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
    },
    IsImage: function (extension) {
        extension = extension.toLowerCase().replace('.', '');
        switch (extension) {
            case "ico":
                return true;
            case "bmp":
                return true;
            case "gif":
                return true;
            case "jpe":
                return true;
            case "jpeg":
                return true;
            case "jpg":
                return true;
            case "png":
                return true;
        }
        return false;
    },
    IsPdfOrOffice: function (extension) {
        return Utils.IsPdf(extension) || Utils.IsOffice(extension);
    },
    IsPdf: function (extension) {
        extension = extension.toLowerCase().replace('.', '');
        return extension == "pdf";
    },
    IsOffice: function (extension) {
        extension = extension.toLowerCase().replace('.', '');
        switch (extension) {
            case "rtf":
                return true;
            case "odt":
                return true;
            case "doc":
                return true;
            case "dot":
                return true;
            case "docx":
                return true;
            case "dotx":
                return true;
            case "docm":
                return true;
            case "dotm":
                return true;
            case "csv":
                return true;
            case "odc":
                return true;
            case "xls":
                return true;
            case "xlsx":
                return true;
            case "xlsm":
                return true;
            case "odp":
                return true;
            case "ppt":
                return true;
            case "pptx":
                return true;
            case "pptm":
                return true;
            case "pot":
                return true;
            case "potm":
                return true;
            case "potx":
                return true;
            case "pps":
                return true;
            case "ppsx":
                return true;
            case "ppsm":
                return true;
        }
        return false;
    },
    IsVideo: function (extension) {
        extension = extension.toLowerCase().replace('.', '');
        switch (extension) {
            case "3g2":
                return true;
            case "3gp":
                return true;
            case "3gp2":
                return true;
            case "3gpp":
                return true;
            case "avi":
                return true;
            case "asf":
                return true;
            case "asr":
                return true;
            case "asx":
                return true;
            case "dif":
                return true;
            case "dv":
                return true;
            case "ivf":
                return true;
            case "flv":
                return true;
            case "m4v":
                return true;
            case "lsf":
                return true;
            case "lsx":
                return true;
            case "m1v":
                return true;
            case "m2t":
                return true;
            case "m2ts":
                return true;
            case "m2v":
                return true;
            case "mod":
                return true;
            case "mov":
                return true;
            case "movie":
                return true;
            case "mp2":
                return true;
            case "mp2v":
                return true;
            case "mp4":
                return true;
            case "mp4v":
                return true;
            case "mpeg":
                return true;
            case "mpe":
                return true;
            case "mpa":
                return true;
            case "mpg":
                return true;
            case "mpv2":
                return true;
            case "mqv":
                return true;
            case "mts":
                return true;
            case "nsc":
                return true;
            case "qt":
                return true;
            case "ts":
                return true;
            case "tts":
                return true;
            case "vbk":
                return true;
            case "wm":
                return true;
            case "wmp":
                return true;
            case "wmv":
                return true;
            case "wmx":
                return true;
            case "wvx":
                return true;
        }
        return false;
    },
    IsAudio: function (extension) {
        extension = extension.toLowerCase().replace('.', '');
        switch (extension) {
            case "aa":
                return true;
            case "aac":
                return true;
            case "aax":
                return true;
            case "ac3":
                return true;
            case "adt":
                return true;
            case "adts":
                return true;
            case "aif":
                return true;
            case "aifc":
                return true;
            case "aiff":
                return true;
            case "au":
                return true;
            case "caf":
                return true;
            case "cdda":
                return true;
            case "gsm":
                return true;
            case "m3u":
                return true;
            case "m3u8":
                return true;
            case "m4a":
                return true;
            case "m4b":
                return true;
            case "m4p":
                return true;
            case "m4r":
                return true;
            case "mid":
                return true;
            case "midi":
                return true;
            case "mp3":
                return true;
            case "pls":
                return true;
            case "ra":
                return true;
            case "ram":
                return true;
            case "rmi":
                return true;
            case "sd2":
                return true;
            case "smd":
                return true;
            case "smx":
                return true;
            case "smz":
                return true;
            case "snd":
                return true;
            case "wav":
                return true;
            case "wave":
                return true;
            case "wax":
                return true;
            case "wma":
                return true;
        }
        return false;
    },
    getSerialize: function (form, event) {
        var keys = {};
        var buttons = {};
        var checkboxs = {};
        form.find("input, select, textarea,button").each(function () {
            var el = jQuery(this);
            var name = el.prop("name");
            if (!Utils.isEmpty(name)) {
                var tagName = el.prop("tagName").toLowerCase();
                if (tagName == "input") {
                    var type = el.prop("type").toLowerCase();
                    if (type == "text" || type == "password" || type == "hidden" || type == "number" || type == "email") {
                        if (!keys.hasOwnProperty(name)) {
                            keys[name] = [];
                        }
                        keys[name].push(el.val());
                    } else if (type == "checkbox" || type == "radio") {
                        if (!keys.hasOwnProperty(name)) {
                            keys[name] = [];
                        }
                        if (el.prop("checked")) {
                            keys[name].push(el.val());
                        }
                        else {
                            keys[name].push(0);
                        }
                        if (!checkboxs.hasOwnProperty(name)) {
                            checkboxs[name] = 0;
                        }
                        checkboxs[name]++;
                    }
                } else if (tagName != "button") {
                    if (!keys.hasOwnProperty(name)) {
                        keys[name] = [];
                    }
                    keys[name].push(el.val());
                }
            }
        });

        for (var k in keys) {
            var vals = keys[k];
            if (vals.length == 1 || buttons.hasOwnProperty(k)) { //|| !checkboxs.hasOwnProperty(k)
                keys[k] = vals.join(",");
            } else {
                keys[k] = JSON.stringify(vals);
            }
        }
        return keys;
    },
    builderQString: function (data) {
        var queries = [];
        for (var i in data) {
            if (i == "RedirectPath")
                continue;

            if (!Utils.isEmpty(data[i])) {
                queries.push(i + "=" + data[i]);
            }
        }
        return ("?" + queries.join("&"));
    },
    b64toBlob: function (b64Data, contentType, sliceSize) {
        contentType = contentType || "";
        sliceSize = sliceSize || 512;
        var byteCharacters = atob(b64Data);
        var byteLength = byteCharacters.length;
        var byteArrays = [];

        for (var offset = 0; offset < byteLength; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        return new Blob(byteArrays, { type: contentType, encoding: "utf-8" });
    },
    sendB64AsFile: function (settings, file) {

        var fileReader = new FileReader();
        fileReader.onabort = function (e) {
            if (settings.onClientAbort) {
                settings.onClientAbort(e);
            }
        };
        fileReader.onerror = function (e) {
            if (settings.onClientError) {
                settings.onClientError(e);
            }
        };
        fileReader.onload = function (e) {
            if (settings.onClientLoad) {
                settings.onClientLoad(e);
            }
        };
        fileReader.onloadend = function (e) {
            if (settings.onClientLoadEnd) {
                settings.onClientLoadEnd(e);
            }
        };
        fileReader.onloadstart = function (e) {
            if (settings.onClientLoadStart) {
                settings.onClientLoadStart(e);
            }
        };
        fileReader.onprogress = function (e) {
            if (settings.onClientProgress) {
                settings.onClientProgress(e);
            }
        };
        fileReader.readAsDataURL(file);
        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.upload.onabort = function (e) {
            if (settings.onServerAbort) {
                settings.onServerAbort(e);
            }
        };
        xmlHttpRequest.upload.onerror = function (e) {
            if (settings.onServerError) {
                settings.onServerError(e);
            }
        };
        xmlHttpRequest.upload.onload = function (e) {
            if (settings.onServerLoad) {
                settings.onServerLoad(e);
            }
        };
        xmlHttpRequest.upload.onloadstart = function (e) {
            if (settings.onServerLoadStart) {
                settings.onServerLoadStart(e);
            }
        };
        xmlHttpRequest.upload.onprogress = function (e) {
            if (settings.onServerProgress) {
                settings.onServerProgress(e);
            }
        };
        xmlHttpRequest.onreadystatechange = function (e) {
            if (settings.onServerReadyStateChange) {
                settings.onServerReadyStateChange(e, xmlHttpRequest.readyState);
            }
            if (settings.onSuccess && xmlHttpRequest.readyState === 4 && xmlHttpRequest.status === 200) {
                try {
                    settings.onSuccess(e, JSON.parse(xmlHttpRequest.responseText));
                } catch (e) {
                    settings.onClientError(e);
                    var message = jQuery(xmlHttpRequest.responseText).find("#MessageError");
                    if (message.length > 0) {
                        alert(message.text());
                    }
                }
            }
        };

        xmlHttpRequest.open("POST", settings.postUrl, true);
        if (file.getAsBinary) {
            var data = window.dashes + boundary + window.crlf + "Content-Disposition: form-data; name=\"" + settings.name + "\";" + "filename=\"" + unescape(encodeURIComponent(file.name)) + "\"" + window.crlf + "Content-Type: application/octet-stream" + window.crlf + window.crlf + file.getAsBinary() + window.crlf + window.dashes + boundary + window.dashes;
            xmlHttpRequest.setRequestHeader("Content-Type", "multipart/form-data;boundary=" + boundary);
            xmlHttpRequest.sendAsBinary(data);
        } else if (window.FormData) {
            var formData = new FormData();
            formData.append(settings.name, file, file.name);
            xmlHttpRequest.send(formData);
        }
    },
    reloadPage: function () {

        window.location.href = Utils.getRedirect();
    },
    getRedirect: function () {

        var href = window.location.href;
        if (href.indexOf("#") != -1) {
            href = href.substring(0, href.indexOf("#"));
        }
        if (href.indexOf("&RedirectPath") != -1) {
            href = href.substring(0, href.indexOf("&RedirectPath"));
        }
        if (href.indexOf("?RedirectPath") != -1) {
            return href.substring(href.lastIndexOf("?RedirectPath")).replace("?RedirectPath=", "");
        }
        if (href.indexOf("rand=") != -1) {
            href = href.replace(/(rand=)[a-z|0-9]+/ig, '$1' + (new Date()).getTime());
        } else if (href.indexOf("?") != -1) {
            href += "&rand=" + (new Date()).getTime();
        } else {
            href += "?rand=" + (new Date()).getTime();
        }

        return href;
    },
    getDomain: function () {

        var domain = window.location.protocol
        domain += "//";
        domain += window.location.hostname;
        if (window.location.port !== "") {
            domain += ":";
            domain += window.location.port;
        }
        return domain;
    },
    toggleMultiTicks: function (table) {
        var flag = false;
        var wrapper = table.closest(".dataTables_wrapper");
        var actions = wrapper.find(".actMultiTicks");
        var grouper = wrapper.find(".group-checkable");
        table.find(".checkboxes").each(function () {
            if (jQuery(this).prop("checked")) {
                actions.removeClass("hidden");
                flag = true;
                return false;
            }
        });
        if (!flag) {
            actions.addClass("hidden");
            if (grouper.prop("checked"))
                grouper.prop("checked", false);
        }
    },
    updateTab: function (container) {
        if (container.hasClass("useTabs")) {
            container.tabs();
        }
        container.find(".useTabs").tabs();
    },
    bootstrapValidator: function (obj) {
        if (!obj.hasClass("bootstrapValidator")) {
            obj.addClass("bootstrapValidator").bootstrapValidator();
        }
    },
    destroyValidator: function (container) {
        try {
            if (container.hasClass("bootstrapValidator")) {
                container.removeClass("bootstrapValidator").bootstrapValidator('destroy');
            }
        } catch (e) {
        }
    },
    resetValidator: function (container) {
        try {
            if (container.hasClass("bootstrapValidator")) {
                container.removeClass("bootstrapValidator").bootstrapValidator('destroy');
            }
        } catch (e) {
        }
        Utils.bootstrapValidator(container);
    },
    updateFormState: function (container) {
        if (container.hasClass("validateForm")) {
            Utils.bootstrapValidator(container);
        }
        container.find(".validateForm").each(function () {
            Utils.bootstrapValidator(jQuery(this));
        });
        container.find(".form-control textarea:visible, .form-control input[type='text']:visible").each(function () {
            if (Utils.isEmpty(jQuery(this).val())) {
                jQuery(this).focus();
                return false;
            }
        });
        container.find("select").unbind("mousewheel")
            .bind("mousewheel",
                "select",
                function (e) {
                    e.stopPropagation();
                });

        var redirectPath = Utils.getRedirect();
        if (container.prop("tagName") === "FORM") {
            if (!container.hasClass('notRedirectPath')) {
                var redirects = container.find("input[name='RedirectPath']");
                if (redirects.length == 0) {
                    var inputRedirect = jQuery("<input type='hidden' class='redirectauto' />");
                    inputRedirect.attr("name", "RedirectPath");
                    inputRedirect.val(redirectPath);
                    container.append(inputRedirect);
                } else if (redirects.hasClass("redirectauto")) {
                    redirects.val(redirectPath);
                }
            }
        } else {
            container.find("form").each(function () {
                if (jQuery(this).hasClass('notRedirectPath')) {
                    return true;
                }
                var redirects = jQuery(this).find("input[name='RedirectPath']");
                if (redirects.length == 0) {
                    var inputRedirect = jQuery("<input type='hidden' class='redirectauto'/>");
                    inputRedirect.attr("name", "RedirectPath");
                    inputRedirect.val(redirectPath);
                    jQuery(this).append(inputRedirect);
                } else if (redirects.hasClass("redirectauto")) {
                    redirects.val(redirectPath);
                }
            });
        }
        jQuery(".slChangeFT").trigger("change");
    },
    updateSelectbox: function (container) {

        container.find(".selectbox").selectbox({
            effect: "slide",
            classHolder: "sbHolder form-control"
        });
        container.find(".inputchoises").each(function () {
            var choises = [];
            var data = jQuery.parseJSON(jQuery(this).attr("data-choises"));
            for (var i in data) {
                var choise = data[i];
                choises.push({
                    value: choise.Name,
                    label: choise.Name,
                });
            }
            var id = jQuery(this).attr("id");
            if (Utils.isEmpty(id)) {
                id = "IChoise" + (new Date()).getTime();
                jQuery(this).attr("id", id);
            }
            jQuery("#" + id).autocomplete({
                source: choises,
                minLength: 0,
                select: function (event, ui) {

                }
            }).click(function () {
                jQuery(this).autocomplete("search", "");
            }).focus(function () {
                jQuery(this).autocomplete("search", "");
            });
        });
    },
    updateInputDate: function (container) {
        if (Utils.isEmpty(container))
            container = jQuery(document);
        container.find(".date").each(function () {
            var id = jQuery(this).attr("id");
            jQuery(this).attr("autocomplete", "off");
            if (Utils.isEmpty(id)) {
                id = "IDate" + (new Date()).getTime();
                jQuery(this).attr("id", id);
            }
            jQuery("#" + id).datetimepicker({
                timepicker: false,
                format: "d-m-Y",
                lang: "vi",
                scrollInput: false
            });
        });
        container.find(".datetime").each(function () {
            var id = jQuery(this).attr("id");
            jQuery(this).attr("autocomplete", "off");
            if (Utils.isEmpty(id)) {
                id = "IDatetime" + (new Date()).getTime();
                jQuery(this).attr("id", id);
            }
            jQuery("#" + id).datetimepicker({
                format: "d-m-Y H:i",
                lang: "vi",
                scrollInput: false
            });
        });
        container.find(".monthYear").each(function () {
            var id = jQuery(this).attr("id");
            jQuery(this).attr("autocomplete", "off");
            if (Utils.isEmpty(id)) {
                id = "IMonth" + (new Date()).getTime();
                jQuery(this).attr("id", id);
            }
            jQuery("#" + id).datetimepicker({
                timepicker: false,
                format: "m-Y",
                lang: "vi",
                scrollInput: false
            });
            //jQuery("#" + id).datetimepicker.viewMode('months');
        });
    },
    updateScrollBar: function (container) {
        if (container.hasClass("ps-container")) {
            container.perfectScrollbar("destroy");
            container.perfectScrollbar({
                useBothWheelAxes: false
            });
        }
        if (container.hasClass("useScrollBar")) {
            container.perfectScrollbar({
                useBothWheelAxes: false
            });
        }
        container.find(".useScrollBar").perfectScrollbar({
            useBothWheelAxes: false
        });
    },
    updateIsNumber: function (container) {
        container.find(".isNumberFormat").each(function () {
            $(this).keyup(function () {
                this.value = Utils.formatMoney(this.value);
            });
        });

        $('.isNumber').keypress(function (event) {
            var charCode = (event.which) ? event.which : event.keyCode;
            if (
                (charCode != 45 && charCode != 8 || $(this).val().indexOf('-') != -1) && // “-” CHECK MINUS, AND ONLY ONE.
                (charCode != 46 || $(this).val().indexOf('.') != -1) && // “.” CHECK DOT, AND ONLY ONE.
                (charCode < 48 || charCode > 57))
                return false;
            return true;
        });
        $('.isNumberInteger').keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                return false;
            }
        });
    },
    updateChart: function (container) {
        container.find(".chartViewer").each(function () {
            try {
                var dataChart = jQuery(this).find(".dataChart").val();
                if (typeof dataChart != "undefined") {
                    dataChart = jQuery.parseJSON(dataChart);
                    jQuery(this).fadeIn("200",
                        function () {
                            jQuery(this).highcharts(dataChart);
                            try {
                                var step = 5;
                                var max = dataChart.chart.columns;
                                var chartViewer = jQuery(this);
                                chartViewer.attr("data-max", max);
                                chartViewer.attr("data-from", 0);
                                chartViewer.attr("data-to", step);
                                chartViewer.attr("data-step", step);
                                if (max > step) {
                                    chartViewer.append(jQuery("<button type='button'>")
                                        .addClass("btn btn-xs btn-info prevChart")
                                        .append(jQuery("<i class='glyphicon glyphicon-arrow-left'></i>")))
                                    chartViewer.append(jQuery("<button type='button'>")
                                        .addClass("btn btn-xs btn-info nextChart")
                                        .append(jQuery("<i class='glyphicon glyphicon-arrow-right'></i>")))
                                }
                                var chart = jQuery(this).highcharts();
                                chart.xAxis[0].setExtremes(0, step);
                            } catch (e) {
                            }
                        });
                }
            } catch (e) {
                console.log(e);
            }
        });
        container.find(".chartBeyondPlot").each(function () {
            if (!jQuery(this).hasClass("builded")) {
                jQuery(this).addClass("builded");
                try {
                    var dataChart = jQuery(this).find(".dataChart").val();
                    if (typeof dataChart != "undefined") {
                        dataChart = jQuery.parseJSON(dataChart);
                        if (typeof dataChart != "undefined" && dataChart.length > 0) {
                            jQuery.plot(jQuery(this),
                                dataChart,
                                {
                                    series: {
                                        pie: {
                                            innerRadius: 0.30,
                                            show: true,
                                            stroke: {
                                                width: 4
                                            },
                                            //label: {
                                            //    show:true
                                            //}
                                        }
                                    },
                                    label: 1,
                                    grid: {
                                        hoverable: true,
                                        aboveData: true,
                                        mouseActiveRadius: 0
                                    },
                                });
                            jQuery(this).bind("plothover",
                                function (event, pos, obj) {
                                    if (obj) {
                                        if (typeof obj.series.label == "undefined")
                                            obj.series.label = "";
                                        var percent = parseFloat(obj.series.percent).toFixed(2);
                                        jQuery(this).next().html("<span style='font-weight:bold; color:" + obj.series.color + "'>" + obj.series.label + " (" + percent + "%)</span>");
                                        jQuery(this).next().css('display', 'block');
                                    } else
                                        jQuery(this).next().css('display', 'none');
                                })
                        };
                    }
                } catch (e) {
                    console.log(e);
                }
            }
        });
        container.find(".chartBeyondPlots").each(function () {
            var title = $(this).data('title');
            if (!jQuery(this).hasClass("builded")) {
                jQuery(this).addClass("builded");
                try {
                    var dataChart = jQuery(this).find(".dataChart").val();
                    if (typeof dataChart != "undefined") {
                        dataChart = jQuery.parseJSON(dataChart);
                        if (typeof dataChart != "undefined" && dataChart.length > 0) {
                            jQuery.plot(jQuery(this),
                                dataChart,
                                {
                                    series: {
                                        pie: {
                                            innerRadius: 0.30,
                                            show: true,
                                            stroke: {
                                                width: 4
                                            },
                                            //label: {
                                            //    show: true
                                            //}
                                        }
                                    },
                                    grid: {
                                        hoverable: true,
                                        aboveData: true,
                                        mouseActiveRadius: 0
                                    }
                                });
                            jQuery(this).bind("plothover",
                                function (event, pos, obj) {
                                    if (obj) {
                                        var percent = parseFloat(obj.series.percent).toFixed(2);
                                        if (title == "size") {
                                            var data = obj.series.data[0][1];
                                            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
                                            if (data == 0) return '0 Byte';
                                            var i = parseInt(Math.floor(Math.log(data) / Math.log(1024)));
                                            var result = (data / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
                                            jQuery(this).next().html("<span style='font-weight:bold; color:" + obj.series.color + "'>" + obj.series.label + " - " + result + " (" + percent + "%)</span>");
                                        } else {
                                            jQuery(this).next().html("<span style='font-weight:bold; color:" + obj.series.color + "'>" + obj.series.label + " - " + numberWithCommas(obj.series.data[0][1]) + " " + title + " (" + percent + "%)</span>");
                                        }
                                        jQuery(this).next().css('opacity', '1');
                                    } else
                                        jQuery(this).next().css('opacity', '0');
                                })
                        };
                    }
                } catch (e) {
                    console.log(e);
                }
            }
        });
        container.find(".chartBeyondMorrisHome").each(function () {
            if (!jQuery(this).hasClass("builded")) {
                jQuery(this).addClass("builded");
                try {
                    var data = jQuery(this).find(".dataChart").val();
                    if (typeof data != "undefined") {
                        var jsData = jQuery(this).find(".dataChart");
                        var xkey = jsData.data('xkey');
                        var ykeys = jsData.data('ykeys');
                        var labels = jsData.data('labels');
                        var colors = jsData.data('color');
                        var typeChart = jsData.data('typechart');
                        var options = {
                            element: jQuery(this),
                            data: jQuery.parseJSON(data),
                            xkey: 'Name',
                            ykeys: ['TotalDoc', 'TotalStgDoc'],
                            labels: ['Download Speed', 'Upload Speed'],
                            gridEnabled: false,
                            gridLineColor: 'transparent',
                            lineColors: ['#82c4f8', '#0d92fc'],
                            lineWidth: [0, 0],
                            pointSize: [0, 0],
                            fillOpacity: 1,
                            gridTextColor: '#999',
                            parseTime: false,
                            resize: true,
                            behaveLikeLine: true,
                            hideHover: 'auto'
                        };
                        Morris.Area(options);
                    }
                } catch (e) {
                    console.log(e);
                }
            }
        });
        container.find(".chartBeyondMorris").each(function () {
            if (!jQuery(this).hasClass("builded")) {
                jQuery(this).addClass("builded");
                try {
                    var data = jQuery(this).find(".dataChart").val();
                    if (typeof data != "undefined") {
                        var jsData = jQuery(this).find(".dataChart");
                        var xkey = jsData.data('xkey');
                        var ykeys = jsData.data('ykeys');
                        var labels = jsData.data('labels');
                        var colors = jsData.data('color');
                        var typeChart = jsData.data('typechart');
                        var isFormat = jsData.data('format');
                        var options = {
                            parseTime: false,
                            element: jQuery(this),
                            data: jQuery.parseJSON(data),
                            xkey: xkey,
                            ykeys: ykeys.split(','),
                            labels: labels.split(','),
                            lineColors: colors.split(','),
                            lineWidth: [0, 0],
                            fillOpacity: 1,
                            gridTextColor: '#999',
                            gridIntegers: true,
                            resize: true,
                            behaveLikeLine: true,
                            hideHover: 'auto',
                            barColors: ["#a0d468", "#5db2ff", "#e75b8d", "#fb6e52", "#ffce55", "#1eb39d", "#3b7d9d", "#91b8e1", "#e74c3c", "#ffcd02", "#64ddbb", "#1dabb8", "#d8335b", "#e76b6b", "#a58bd5", "#3172d6", "#8f3fb0", "#c33825", "#9f5b44", "#ff6766"],
                            yLabelFormat: function (y) {
                                if (typeof isFormat == "undefined")
                                    return y != Math.round(y) ? '' : y;
                                else return y;
                            },
                        };
                        if (typeof data != "undefined" && data.length > 0) {
                            switch (typeChart) {
                                case "Bar":
                                    Morris.Bar(options);
                                    break;
                                case "Area":
                                    Morris.Area(options);
                                    break;
                                default:
                                    Morris.Line(options);
                                    break;
                            }
                        };
                    }
                } catch (e) {
                    console.log(e);
                }
            }
        });
        container.find(".chartsBeyondMorris").each(function () {
            if (!jQuery(this).hasClass("builded")) {
                jQuery(this).addClass("builded");
                try {
                    var data = jQuery(this).find(".dataChart").val();
                    if (typeof data != "undefined") {
                        var jsData = jQuery(this).find(".dataChart");
                        var xkey = jsData.data('xkey');
                        var ykeys = jsData.data('ykeys');
                        var labels = jsData.data('labels');
                        var typeChart = jsData.data('typechart');
                        var colors = jsData.data('color');
                        console.log(colors);
                        var options = {
                            parseTime: false,
                            element: jQuery(this),
                            data: jQuery.parseJSON(data),
                            xkey: xkey,
                            ykeys: ykeys,
                            labels: labels,
                            lineColors: colors.split(','),
                            lineWidth: [0, 0, 0],
                            fillOpacity: 1,
                            gridTextColor: '#999',
                            gridIntegers: true,
                            resize: true,
                            behaveLikeLine: true,
                            hideHover: 'auto',
                            barColors: ["#a0d468", "#5db2ff", "#e75b8d", "#fb6e52", "#ffce55", "#1eb39d", "#3b7d9d", "#91b8e1", "#e74c3c", "#ffcd02", "#64ddbb", "#1dabb8", "#d8335b", "#e76b6b", "#a58bd5", "#3172d6", "#8f3fb0", "#c33825", "#9f5b44", "#ff6766"],
                            yLabelFormat: function (y) {
                                if (typeof isFormat == "undefined")
                                    return y != Math.round(y) ? '' : y;
                                else return y;
                            },
                        };

                        if (typeof data != "undefined" && data.length > 0) {
                            switch (typeChart) {
                                case "Bar":
                                    Morris.Bar(options);
                                    break;
                                case "Area":
                                    Morris.Area(options);
                                    break;
                                default:
                                    Morris.Line(options);
                                    break;
                            }
                        };
                    }
                } catch (e) {
                    console.log(e);
                }
            }
        });
        container.find(".chartBeyondDonut").each(function () {
            if (!jQuery(this).hasClass("builded")) {
                jQuery(this).addClass("builded");
                try {
                    var data = jQuery(this).find(".dataChart").val();
                    if (typeof data != "undefined") {
                        var jsData = jQuery(this).find(".dataChart");
                        var colors = jsData.data('color');
                        var options = {
                            element: jQuery(this),
                            data: jQuery.parseJSON(data),
                            colors: colors.split(','),
                            formatter: function (y) { return y + "%" }
                        };
                        Morris.Donut(options);
                        jQuery(this).find('text').css('font-size', '10px !important');
                    }
                } catch (e) {
                    console.log(e);
                }
            }
        });

        container.find(".chartHorizonalPlot").each(function () {
            if (!jQuery(this).hasClass("builded")) {
                jQuery(this).addClass("builded");
                try {
                    var dataChart = jQuery(this).find(".dataChart").val();
                    var nameChart = $(this).data('name');
                    var title = $(this).data('title');
                    if (typeof dataChart != "undefined") {
                        dataChart = jQuery.parseJSON(dataChart);
                        var max = 0;
                        for (var i = 0; i < dataChart.length; i++) {
                            if (dataChart[i][0] > max) {
                                max = dataChart[i][0];
                            }
                        }
                        var dataSet = [
                            { label: title, data: dataChart }
                        ];
                        if (typeof dataChart != "undefined" && dataChart.length > 0) {
                            jQuery.plot($(jQuery(this)),
                                dataSet,
                                {
                                    series: {
                                        bars: {
                                            show: true
                                        },
                                        color: ["#a0d468", "#5db2ff", "#e75b8d", "#fb6e52", "#ffce55", "#1eb39d", "#3b7d9d", "#91b8e1", "#e74c3c", "#ffcd02", "#64ddbb", "#1dabb8", "#d8335b", "#e76b6b", "#a58bd5", "#3172d6", "#8f3fb0", "#c33825", "#9f5b44", "#ff6766"]
                                    },
                                    bars: {
                                        align: "center",
                                        barWidth: 0.5,
                                        horizontal: true,
                                        fillColor: { colors: [{ opacity: 1 }, { opacity: 1 }] },
                                        lineWidth: 1
                                    },
                                    colors: [themeprimary],
                                    xaxis: {
                                        axisLabelUseCanvas: true,
                                        axisLabelFontSizePixels: 12,
                                        axisLabelFontFamily: 'Verdana, Arial',
                                        axisLabelPadding: 10,
                                        tickColor: "#fafafa",
                                        max: max + 1
                                    },
                                    yaxis: {
                                        axisLabelUseCanvas: true,
                                        axisLabelFontSizePixels: 12,
                                        axisLabelFontFamily: 'Verdana, Arial',
                                        axisLabelPadding: 3,
                                        tickColor: "#fafafa",
                                        ticks: nameChart,
                                    },
                                    legend: {
                                        noColumns: 0,
                                        labelBoxBorderColor: "#858585",
                                        position: "ne"
                                    },
                                    grid: {
                                        hoverable: true,
                                        tickColor: gridbordercolor,
                                        borderWidth: 0,
                                        borderColor: gridbordercolor,
                                        backgroundColor: { colors: ["#fff", "#fff"] }
                                    },
                                }
                            );
                            $(jQuery(this)).UseTooltip();
                        };
                    }
                } catch (e) {
                    console.log(e);
                }
            }
        });

        container.find(".planCharts").each(function () {
            //var item = document.getElementById('planCharts');
            var item = $(this);
            var id = item.attr("id");
            var categories = new Array();
            var plans = new Array();
            var actuals = new Array();
            var title = item.attr('data-title');
            var subtitle = item.attr('data-sub-title');
            var dataChart = item.attr('data-value');
            if (typeof dataChart != "undefined") {
                dataChart = jQuery.parseJSON(dataChart);
                for (var i = 0; i < dataChart.length; i++) {
                    categories.push(dataChart[i].Category);
                    plans.push(dataChart[i].Plan);
                    actuals.push(dataChart[i].Actual);
                }
                if (categories.length == 0) {
                    $("#" + id).parent().html("<span>Không có dữ liệu</span>");
                } else {
                    Highcharts.chart(id,
                        {
                            style: {
                                fontFamily: 'Arial'
                            },
                            chart: {
                                type: 'bar'
                            },
                            title: {
                                text: ''
                            },
                            subtitle: {
                                text: ''
                            },
                            xAxis: {
                                categories: categories,
                                title: {
                                    text: null
                                },
                                labels: {
                                    style: {
                                        fontSize: '12px'
                                    }
                                }
                            },
                            yAxis: {
                                min: 0,
                                title: {
                                    text: title,
                                    align: 'high'

                                },
                                labels: {
                                    overflow: 'justify'
                                }
                            },
                            tooltip: {
                                formatter: function () {
                                    var val = this.y;
                                    if (this.y > 0)
                                        val = Highcharts.numberFormat(this.y, 2);
                                    return this.x + ': <b>' + val + '</b>' + subtitle;
                                },
                                useHTML: true
                            },
                            plotOptions: {
                                bar: {
                                    dataLabels: {
                                        enabled: true,
                                        formatter: function () {
                                            if (this.y > 0)
                                                return Highcharts.numberFormat(this.y, 2);
                                            return this.y;
                                        }
                                    }
                                }
                            },
                            legend: {
                                labelFormatter: function () {
                                    return this.name;
                                }
                            },
                            credits: {
                                enabled: false
                            },
                            series: [
                                {
                                    name: 'Thực tế',
                                    data: actuals,
                                    color: "#444"
                                }, {
                                    name: 'Dự kiến',
                                    data: plans,
                                    color: "#5db2ff"
                                }
                            ]
                        });
                    var actuals_color = "#5db2ff",
                        percent = 0;
                    // var cIndex = 0;
                    for (var i = 0; i < dataChart.length; i++) {
                        percent = Math.round(dataChart[i].Actual / dataChart[i].Plan * 100, 3);
                        if (percent < 30) {
                            actuals_color = "#444444"; // Màu đen
                        } else if (percent >= 30 && percent < 50) {
                            actuals_color = "#d43f3a"; // Màu đỏ
                        } else if (percent >= 50 && percent < 80) {
                            actuals_color = "#ff9800"; // Màu cam
                        } else if (percent >= 80 && percent < 100) {
                            actuals_color = "#ffeb3b"; // Màu vàng
                        } else {
                            actuals_color = "#5cb85c"; // Màu xanh
                        }
                        jQuery("#" + id + " .highcharts-series-0.highcharts-bar-series rect").not(".highcharts-legend-item rect").each(function () {
                            var size = jQuery("#" + id + " .highcharts-series-0.highcharts-bar-series rect").length;
                            var index = jQuery(this).index();
                            if (index === i) {
                                jQuery(this).css("fill", actuals_color);
                            }
                        });

                        //jQuery("#" + id + " .highcharts-axis-labels.highcharts-xaxis-labels text tspan").each(function () {
                        //    jQuery(this).html(categories[cIndex]);
                        //    cIndex++;
                        //});
                    }

                }
            }
        });

        container.find(".mutilColumnChart").each(function () {
            var item = $(this);
            var id = item.attr("id");
            series
            var categories = "";
            var series = "";
            var colors = "";
            var colPerCate = 0;
            var title = item.attr('data-title');
            var subtitle = item.attr('data-sub-title');
            var dataChart = item.attr('data-value');
            if (typeof dataChart != "undefined") {
                dataChart = jQuery.parseJSON(dataChart);

                categories = dataChart.categories;
                series = dataChart.series;
                colors = dataChart.colors;
                colPerCate = colors.length / categories.length;
                if (categories.length == 0) {
                    $("#" + id).parent().html("<span>Không có dữ liệu</span>");
                } else {
                    Highcharts.chart(id,
                        {
                            style: {
                                fontFamily: 'Arial'
                            },
                            title: {
                                text: ''
                            },
                            subtitle: {
                                text: ''
                            },
                            xAxis: {
                                categories: categories,
                                title: {
                                    text: null
                                }
                            },
                            yAxis: {
                                min: 0,
                                title: {
                                    text: title,
                                    align: 'high'
                                },
                                labels: {
                                    overflow: 'justify'
                                }
                            },
                            tooltip: {
                                pointFormat: '{series.name}: <b>{point.y:.2f}</b>' + subtitle,
                                useHTML: true
                            },
                            plotOptions: {
                                column: {
                                    grouping: false,
                                    shadow: false,
                                    borderWidth: 0
                                }
                            },
                            legend: {
                                enabled: false
                            },
                            credits: {
                                enabled: true
                            },
                            series: series
                        });
                    //Set màu
                    var colorSelected = 0;
                    for (var i = 0; i < categories.length; i++) {
                        var colActualIndex = 1;
                        for (var j = 1; j <= colPerCate; j++) {
                            jQuery("#" + id + " .highcharts-series-" + colActualIndex + ".highcharts-column-series rect").not(".highcharts-legend-item rect").each(function () {
                                var index = jQuery(this).index();
                                if (index === i) {
                                    jQuery(this).css("fill", colors[colorSelected]);
                                }
                            });
                            colorSelected++;
                            colActualIndex += 2;
                        }
                    }
                }
            }
        });

        container.find(".planColumnChart").each(function () {
            //var item = document.getElementById('planCharts');
            var item = $(this);
            var id = item.attr("id");
            var categories = new Array();
            var plans = new Array();
            var actuals = new Array();
            var title = item.attr('data-title');
            var series = item.attr('data-series');
            var subtitle = item.attr('data-sub-title');
            var dataChart = item.attr('data-value');
            if (typeof dataChart != "undefined") {
                dataChart = jQuery.parseJSON(dataChart);
                for (var i = 0; i < dataChart.length; i++) {
                    categories.push(dataChart[i].Category);
                    plans.push(dataChart[i].Plan);
                    actuals.push(dataChart[i].Actual);
                }
                if (categories.length == 0) {
                    $("#" + id).parent().html("<span>Không có dữ liệu</span>");
                } else {
                    Highcharts.chart(id,
                        {
                            style: {
                                fontFamily: 'Arial'
                            },
                            chart: {
                                type: 'column'
                            },
                            title: {
                                text: ''
                            },
                            subtitle: {
                                text: ''
                            },
                            xAxis: {
                                categories: categories,
                                title: {
                                    text: null
                                },
                                labels: {
                                    style: {
                                        fontSize: '13px',
                                        fontFamily: 'Arial'
                                    },
                                    useHTML: true
                                }
                            },
                            yAxis: {
                                min: 0,
                                title: {
                                    text: title,
                                    align: 'high'
                                },
                                labels: {
                                    overflow: 'justify'
                                }
                            },
                            tooltip: {
                                valueSuffix: subtitle,
                                valueDecimals: 2
                            },
                            plotOptions: {
                                bar: {
                                    dataLabels: {
                                        enabled: true
                                    }
                                },
                                series: {
                                    borderWidth: 0,
                                    dataLabels: {
                                        enabled: true,
                                        format: '{point.y:.2f} ' + subtitle
                                    },
                                    pointWidth: 30
                                }
                            },
                            legend: {
                                layout: 'vertical',
                                align: 'right',
                                verticalAlign: 'top',
                                y: 30,
                                floating: false,
                                borderWidth: 0,
                                backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255,255,255,0)'),
                                shadow: false,
                                enabled: false
                            },
                            series: [
                                {
                                    name: series,
                                    //colorByPoint: true,
                                    data: plans
                                }
                            ]
                        });
                    var actuals_color = "#5db2ff",
                        percent = 0;
                    var cIndex = 0;
                    for (var i = 0; i < dataChart.length; i++) {
                        percent = Math.round(dataChart[i].Actual / dataChart[i].Plan * 100, 3);
                        if (percent < 30) {
                            actuals_color = "#444444"; // Màu đen
                        } else if (percent >= 30 && percent < 50) {
                            actuals_color = "#d43f3a"; // Màu đỏ
                        } else if (percent >= 50 && percent < 80) {
                            actuals_color = "#ff9800"; // Màu cam
                        } else if (percent >= 80 && percent < 100) {
                            actuals_color = "#ffeb3b"; // Màu vàng
                        } else {
                            actuals_color = "#5cb85c"; // Màu xanh
                        }
                        jQuery("#" + id + " .highcharts-series-0.highcharts-bar-series rect").not(".highcharts-legend-item rect").each(function () {
                            var size = jQuery("#planCharts .highcharts-series-0.highcharts-bar-series rect").length;
                            var index = jQuery(this).index();
                            if (index === i) {
                                jQuery(this).css("fill", actuals_color);
                            }
                        });
                        //jQuery("#" + id + " .highcharts-axis-labels.highcharts-xaxis-labels text tspan").each(function () {
                        //    jQuery(this).html(categories[cIndex]);
                        //    cIndex++;
                        //});
                    }

                }
            }
        });

        container.find(".realPer").each(function () {
            try {
                var dataChart = jQuery(this).attr('data-value');
                var target = jQuery(this).attr('data-target');
                var id = $(this).attr("id");

                var datalabel = [],
                    browserData = [],
                    versionsData = [],
                    j,
                    k,
                    drillDataLen,
                    brightness;
                if (typeof dataChart != "undefined") {
                    dataChart = jQuery.parseJSON(dataChart);
                    if (dataChart.length > 0) {
                        var total = 0;
                        for (var i = 0; i < dataChart.length; i++) {
                            if (dataChart[i].y !== 'Infinity')
                                total += dataChart[i].y;
                        }
                        for (var i = 0; i < dataChart.length; i++) {
                            // add browser data
                            browserData.push({
                                name: dataChart[i].drilldown.name,
                                y: dataChart[i].y == 'Infinity' ? 0 : dataChart[i].y,
                                percent: total == 0 ? "" : (dataChart[i].y / total * 100).toFixed(2),
                                plan: dataChart[i].plan.toFixed(2),
                                color: dataChart[i].color
                            });

                            // add version data
                            var color1 = "#ccc";
                            var color2 = "#57b5e3";
                            var hide_text = '';
                            // Màu đen #444444: Tỷ lệ hoàn thành > 30%
                            // Màu đỏ #d43f3a: Tỷ lệ hoàn thành tu 30-50%
                            // Màu cam #ffc107: Tỷ lệ hoàn thành tu 50-80%
                            // Màu vàng #ffeb3b: Tỷ lệ hoàn thành tu 80-100%
                            // Màu xanh #5cb85c: Tỷ lệ hoàn thành tu 100%
                            drillDataLen = dataChart[i].drilldown.data.length;
                            for (j = 0; j < drillDataLen; j += 1) {

                                brightness = 0.2 - (j / drillDataLen) / 5;
                                if (Math.round((dataChart[i].drilldown.data[j] / dataChart[i].y * 100), 2) < 30) {
                                    color2 = "#444444"; // Màu đen
                                } else if (Math.round((dataChart[i].drilldown.data[j] / dataChart[i].y * 100), 3) >= 30 && Math.round((dataChart[i].drilldown.data[j] / dataChart[i].y * 100), 2) < 50) {
                                    color2 = "#d43f3a"; // Màu đỏ                                                                                                                              
                                } else if (Math.round((dataChart[i].drilldown.data[j] / dataChart[i].y * 100), 3) >= 50 && Math.round((dataChart[i].drilldown.data[j] / dataChart[i].y * 100), 2) < 80) {
                                    color2 = "#ff9800"; // Màu cam                                                                                                                             
                                } else if (Math.round((dataChart[i].drilldown.data[j] / dataChart[i].y * 100), 3) >= 80 && Math.round((dataChart[i].drilldown.data[j] / dataChart[i].y * 100), 2) < 100) {
                                    color2 = "#ffeb3b"; // Màu vàng
                                } else {
                                    color2 = "#5cb85c"; // Màu xanh
                                }
                                var percent = dataChart[i].drilldown.money_data[j] / dataChart[i].plan * 100;

                                versionsData.push({
                                    name: j > 0 ? hide_text : dataChart[i].drilldown.categories[j],
                                    y: dataChart[i].drilldown.data[j] == 'Infinity' ? 0 : dataChart[i].drilldown.data[j],
                                    percent: j > 0 ? hide_text : percent.toFixed(2),
                                    color: j % 2 === 0 ? color2 : color1,
                                    dataLabels: {
                                        distance: ((dataChart[i].drilldown.money_data[j] * 1.0 / dataChart[i].plan * 100)).toFixed(2) > 20 ? -30 : 30
                                    }
                                });
                                //Highcharts.Color('#3479b8').brighten(brightness).get()
                            }
                        }
                        Highcharts.chart(target,
                            {
                                chart: {
                                    type: 'pie'
                                },
                                title: {
                                    text: ''
                                },
                                subtitle: {
                                    text: ''
                                },
                                yAxis: {
                                    title: {
                                        text: ''
                                    }
                                },
                                plotOptions: {
                                    pie: {
                                        dataLabels: {
                                            enabled: true
                                        },
                                        shadow: false,
                                        center: ['50%', '50%'],
                                        borderWidth: 3
                                    }
                                },
                                tooltip: {
                                    formatter: function () {
                                        return this.point.percent > 0 ? '' + this.point.name + '<br/><b>' + this.point.percent + '%</b>' : false;
                                    }
                                    //valueSuffix: '%'
                                },
                                series: [
                                    {
                                        name: ' ',
                                        data: browserData,
                                        size: '60%',
                                        dataLabels: {
                                            formatter: function () {
                                                return this.y > 5 ? this.point.percent + '%' : null;
                                            },
                                            color: '#ffffff',
                                            distance: -60
                                        }
                                    }, {
                                        name: ' ',
                                        data: versionsData,
                                        size: '80%',
                                        innerSize: '    60%',
                                        dataLabels: {
                                            formatter: function () {
                                                // display only if larger than 1
                                                return this.point.percent > 0 ? this.point.percent + '%' : null;
                                            }
                                        },
                                        id: 'versions'
                                    }
                                ],
                                responsive: {
                                    rules: [
                                        {
                                            condition: {
                                                maxWidth: 400
                                            },
                                            chartOptions: {
                                                series: [
                                                    {
                                                        id: 'versions',
                                                        dataLabels: {
                                                            enabled: false
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            });
                        //Legend
                        var legendHTML = "";
                        for (var i = 0; i < dataChart.length; i++) {
                            legendHTML += "<div class='Legend_item'><span style='display:inline-block;width:20px;background-color:" + dataChart[i].color + ";'>&nbsp;</span> " + dataChart[i].drilldown.name + "</div>";
                        }
                        jQuery(this).after('<div class="DocproChart_legend">' + legendHTML + '</div>');
                    } else {
                        $("#" + id).parent().html("<span>Không có dữ liệu</span>");
                    }
                }

            } catch (e) {

            }
        });

        container.find(".quyChart").each(function () {
            var dataChart = jQuery(this).attr('data-value');
            var id = $(this).attr("id");
            var datalabel = [],
                browserData = [],
                versionsData = [],
                j,
                k,
                drillDataLen,
                brightness;
            if (typeof dataChart !== "undefined") {
                dataChart = jQuery.parseJSON(dataChart);
                if (dataChart.length > 0) {
                    var total = 0;
                    for (var i = 0; i < dataChart.length; i++) {
                        total += dataChart[i].y;
                    }
                    for (var i = 0; i < dataChart.length; i++) {
                        // add browser data
                        browserData.push({
                            name: dataChart[i].drilldown.name,
                            y: dataChart[i].y,
                            percent: '',
                            plan: dataChart[i].plan.toFixed(2),
                            color: dataChart[i].color
                        });

                        // add version data
                        var color1 = "#ccc";
                        var color2 = "#57b5e3";
                        var hide_text = "";
                        // Màu đen #444444: Tỷ lệ hoàn thành > 30%
                        // Màu đỏ #d43f3a: Tỷ lệ hoàn thành tu 30-50%
                        // Màu cam #ff9800: Tỷ lệ hoàn thành tu 50-80%
                        // Màu vàng #ffeb3b: Tỷ lệ hoàn thành tu 80-100%
                        // Màu xanh #5cb85c: Tỷ lệ hoàn thành tu 100%
                        drillDataLen = dataChart[i].drilldown.data.length;
                        for (j = 0; j < drillDataLen; j += 1) {
                            brightness = 0.2 - (j / drillDataLen) / 5;
                            if (Math.round((dataChart[i].drilldown.data[j] / dataChart[i].y * 100), 3) < 30) {
                                color2 = "#444444"; // Màu đen
                            } else if (Math.round((dataChart[i].drilldown.data[j] / dataChart[i].y * 100), 3) >= 30 && Math.round((dataChart[i].drilldown.data[j] / dataChart[i].y * 100), 3) < 50) {
                                color2 = "#d43f3a"; // Màu đỏ
                            } else if (Math.round((dataChart[i].drilldown.data[j] / dataChart[i].y * 100), 3) >= 50 && Math.round((dataChart[i].drilldown.data[j] / dataChart[i].y * 100), 3) < 80) {
                                color2 = "#ff9800"; // Màu cam
                            } else if (Math.round((dataChart[i].drilldown.data[j] / dataChart[i].y * 100), 3) >= 80 && Math.round((dataChart[i].drilldown.data[j] / dataChart[i].y * 100), 3) < 100) {
                                color2 = "#ffeb3b"; // Màu vàng
                            } else {
                                color2 = "#5cb85c"; // Màu xanh
                            }
                            var percent = dataChart[i].drilldown.money_data[j] / dataChart[i].plan * 100;
                            versionsData.push({
                                name: j > 0 ? hide_text : dataChart[i].drilldown.categories[j],
                                y: dataChart[i].drilldown.data[j],
                                percent: j > 0 ? hide_text : percent.toFixed(2),
                                color: j % 2 == 0 ? color2 : color1,
                                dataLabels: {
                                    distance: Math.round((dataChart[i].drilldown.money_data[j] / dataChart[i].plan * 100), 3) > 20 ? -30 : 30
                                }
                            });
                        }
                    }
                    Highcharts.chart('QuyChartcontainer',
                        {
                            chart: {
                                type: 'pie'
                            },
                            title: {
                                text: ''
                            },
                            subtitle: {
                                text: ''
                            },
                            yAxis: {
                                title: {
                                    text: ''
                                }
                            },
                            plotOptions: {
                                pie: {
                                    shadow: false,
                                    center: ['50%', '50%'],
                                    borderWidth: 3
                                }
                            },
                            tooltip: {
                                useHTML: true,
                                formatter: function () {
                                    return this.point.percent > 0 ? '' + this.point.name + '<br/><b>' + this.point.percent + '%</b>' : this.point.name != "" ? this.point.name : false;
                                }
                                //valueSuffix: '%'
                            },
                            series: [
                                {
                                    name: ' ',
                                    data: browserData,
                                    size: '60%',
                                    dataLabels: {
                                        formatter: function () {
                                            return this.point.plan > 0 ? this.point.plan + ' tỷ' : null;
                                        },
                                        color: '#ffffff',
                                        distance: -60
                                    }
                                }, {
                                    name: ' ',
                                    data: versionsData,
                                    size: '80%',
                                    innerSize: '60%',
                                    dataLabels: {
                                        formatter: function () {
                                            return this.point.percent > 0 ? this.point.percent + '%' : null;
                                        }

                                    },
                                    id: 'versions'
                                }
                            ],
                            responsive: {
                                rules: [
                                    {
                                        condition: {
                                            maxWidth: 400
                                        },
                                        chartOptions: {
                                            series: [
                                                {
                                                    id: 'versions',
                                                    dataLabels: {
                                                        enabled: false
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        });
                    //Legend
                    var legendHTML = "";
                    for (var i = 0; i < dataChart.length; i++) {
                        legendHTML += "<div class='Legend_item'><span style='display:inline-block;width:20px;background-color:" + dataChart[i].color + ";'>&nbsp;</span> " + dataChart[i].drilldown.name + "</div>";
                    }
                    jQuery(this).after('<div class="DocproChart_legend">' + legendHTML + '</div>');
                } else {
                    $("#" + id).parent().html("<span>Không có dữ liệu</span>");
                }
            }
        });

        container.find(".fullBarCharts").each(function () {
            var item = $(this);
            var id = item.attr("id");
            var categories = new Array();
            var plans = new Array();
            var actuals = new Array();
            var commiteds = new Array();
            var title = item.attr('data-title');
            var subtitle = item.attr('data-sub-title');
            var dataChart = item.attr('data-value');
            var series =
                [
                    {
                        name: 'Thực tế',
                        data: actuals,
                        color: "#444"
                    }, {
                        name: 'Kế hoạch',
                        data: commiteds,
                        color: "#C28BFC"
                    }, {
                        name: 'Dự kiến',
                        data: plans,
                        color: "#5db2ff"
                    }
                ];
            if (typeof dataChart != "undefined") {
                dataChart = jQuery.parseJSON(dataChart);
                for (var i = 0; i < dataChart.length; i++) {
                    categories.push(dataChart[i].Category);
                    plans.push(dataChart[i].Plan);
                    actuals.push(dataChart[i].Actual);
                    commiteds.push(dataChart[i].Committed);
                }
                if (Utils.arrIsEmptyOrZeros(commiteds)) {
                    series =
                        [
                            {
                                name: 'Thực tế',
                                data: actuals,
                                color: "#444"
                            }, {
                                name: 'Dự kiến',
                                data: plans,
                                color: "#5db2ff"
                            }
                        ];
                }
                if (categories.length == 0) {
                    $("#" + id).parent().html("<span>Không có dữ liệu</span>");
                } else {
                    Highcharts.chart(id,
                        {
                            style: {
                                fontFamily: 'Arial'
                            },
                            chart: {
                                type: 'bar'
                            },
                            title: {
                                text: ''
                            },
                            subtitle: {
                                text: ''
                            },
                            xAxis: {
                                categories: categories,
                                title: {
                                    text: null
                                },
                                labels: {
                                    style: {
                                        fontSize: '12px'
                                    }
                                }
                            },
                            yAxis: {
                                min: 0,
                                title: {
                                    text: title,
                                    align: 'high'

                                },
                                labels: {
                                    overflow: 'justify'
                                }
                            },
                            tooltip: {
                                formatter: function () {
                                    var val = this.y;
                                    if (this.y > 0)
                                        val = Highcharts.numberFormat(this.y, 2);
                                    return this.x + ': <b>' + val + '</b>' + subtitle;
                                },
                                useHTML: true
                            },
                            plotOptions: {
                                bar: {
                                    dataLabels: {
                                        enabled: true,
                                        formatter: function () {
                                            if (this.y > 0)
                                                return Highcharts.numberFormat(this.y, 2);
                                            return this.y;
                                        }
                                    }
                                }
                            },
                            legend: {
                                labelFormatter: function () {
                                    return this.name;
                                }
                            },
                            credits: {
                                enabled: false
                            },
                            series: series
                        });
                    var actuals_color = "#5db2ff",
                        percent = 0;
                    // var cIndex = 0;
                    for (var i = 0; i < dataChart.length; i++) {
                        percent = Math.round(dataChart[i].Actual / dataChart[i].Committed * 100, 3);
                        if (percent < 30) {
                            actuals_color = "#444444"; // Màu đen
                        } else if (percent >= 30 && percent < 50) {
                            actuals_color = "#d43f3a"; // Màu đỏ
                        } else if (percent >= 50 && percent < 80) {
                            actuals_color = "#ff9800"; // Màu cam
                        } else if (percent >= 80 && percent < 100) {
                            actuals_color = "#ffeb3b"; // Màu vàng
                        } else {
                            actuals_color = "#5cb85c"; // Màu xanh
                        }
                        jQuery("#" + id + " .highcharts-series-0.highcharts-bar-series rect").not(".highcharts-legend-item rect").each(function () {
                            var size = jQuery("#" + id + " .highcharts-series-0.highcharts-bar-series rect").length;
                            var index = jQuery(this).index();
                            if (index === i) {
                                jQuery(this).css("fill", actuals_color);
                            }
                        });

                        //jQuery("#" + id + " .highcharts-axis-labels.highcharts-xaxis-labels text tspan").each(function () {
                        //    jQuery(this).html(categories[cIndex]);
                        //    cIndex++;
                        //});
                    }

                }
            }
        });

        container.find(".mcDrilldownChart").each(function () {
            var colors = ["#a0d468", "#5db2ff", "#e75b8d", "#fb6e52", "#ffce55", "#1eb39d", "#e74c3c", "#ffcd02", "#64ddbb", "#1dabb8", "#d8335b", "#e76b6b", "#a58bd5", "#3172d6", "#8f3fb0", "#c33825", "#9f5b44", "#ff6766", "#3b7d9d", "#91b8e1"];

            var item = $(this);
            var id = item.attr("id");
            var subtitle = item.attr('data-sub-title');
            var dataChart = item.attr('data-value');
            if (typeof dataChart != "undefined") {
                dataChart = jQuery.parseJSON(dataChart);
                var series = dataChart.series;
                var newColorCount = series.length - colors.length;
                //auto gen nếu có nhiều màu hơn số màu có sẵn
                if (dataChart.series.length > colors.length) {
                    for (var i = 0; i < newColorCount; i++) {
                        var randColor;
                        do {
                            randColor = Utils.genRandomColor();
                        } while (colors.indexOf(randColor) >= 0);
                        colors.push(randColor);
                    }
                }
                var drilldown = dataChart.drilldowns;
                Highcharts.setOptions({
                    lang: {
                        drillUpText: '<< Quay lại'
                    },
                    colors: colors
                });
                //var colLength = dataChart.series[0].data.length;
                //var maxcolumn = colLength > 5 ? 5 : (colLength - 1);
                var chart = new Highcharts.Chart({
                    chart: {
                        renderTo: id,
                        type: 'column'
                    },
                    title: {
                        text: ''
                    },
                    xAxis: {
                        title: {
                            useHTML: true
                        },
                        //max: maxcolumn,
                        type: "category",
                        crosshair: true,
                        labels: {
                            //useHTML: true

                        }
                    },
                    //scrollbar: {
                    //    enabled: true
                    //},
                    yAxis: [
                        {
                            min: 0,
                            title: {
                                text: 'Doanh thu (tỷ đồng)'
                            }
                        }
                    ],
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        x: 0,
                        y: 0

                    },
                    tooltip: {
                        formatter: function () {
                            if (this.point.plan != null && parseFloat(this.point.plan) > 0) {
                                return '<span style="font-size:12px">' + this.series.name + '</span><br/><span style="color: black ">' + this.point.name + ': ' + Highcharts.numberFormat(this.point.y) + '/' + Highcharts.numberFormat(this.point.plan) + ' ' + subtitle + ' (' + Highcharts.numberFormat(this.point.percent) + '%)</span>';
                            } else {
                                return '<span style="font-size:12px">' + this.series.name + '</span><br/><span style="color: ' + this.point.textColor + ' ">' + this.point.name + ': ' + Highcharts.numberFormat(this.point.y) + ' ' + subtitle + '</span>';
                            }
                        }
                    },
                    plotOptions: {
                        column: {
                            borderWidth: 0
                        }
                    },
                    series: series,
                    drilldown: drilldown
                });
            }
        });

        container.find(".pieChartHighchart").each(function () {
            var colors = ["#a0d468", "#5db2ff", "#e75b8d", "#fb6e52", "#ffce55", "#1eb39d", "#e74c3c", "#ffcd02", "#64ddbb", "#1dabb8", "#d8335b", "#e76b6b", "#a58bd5", "#3172d6", "#8f3fb0", "#c33825", "#9f5b44", "#ff6766", "#3b7d9d", "#91b8e1"];

            var item = $(this);
            var id = item.attr("id");
            var subtitle = item.attr('data-sub-title');
            var dataChart = item.attr('data-value');
            if (typeof dataChart != "undefined") {
                dataChart = jQuery.parseJSON(dataChart);
                Highcharts.setOptions({
                    colors: colors
                });
                Highcharts.chart(id, {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false,
                        type: 'pie'
                    },
                    title: {
                        text: ''
                    },
                    legend: {
                        //labelFormat: '{color} {index} {symbol}',
                        labelFormatter: function () {
                            var label = this.name;
                            return '<span style="font-weight:normal; font-family: \'Arial\'">' + label + '</span>';
                        }
                        // (!) labelFormat will override labelFormatter if both are used
                    },
                    tooltip: {
                        pointFormat: '{series.name}: {point.y:.2f} tỷ đồng ({point.percentage:.2f}%)'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: false
                            },
                            showInLegend: true
                        }
                    },
                    series: [{
                        name: 'Doanh thu',
                        colorByPoint: true,
                        data: dataChart.data
                    }]
                });
            }
        });
        container.find(".columnChartHighchart").each(function () {
            var colors = ["#a0d468", "#5db2ff", "#e75b8d", "#fb6e52", "#ffce55", "#1eb39d", "#e74c3c", "#ffcd02", "#64ddbb", "#1dabb8", "#d8335b", "#e76b6b", "#a58bd5", "#3172d6", "#8f3fb0", "#c33825", "#9f5b44", "#ff6766", "#3b7d9d", "#91b8e1"];

            var item = $(this);
            var id = item.attr("id");
            var subtitle = item.attr('data-sub-title');
            var dataChart = item.attr('data-value');
            if (typeof dataChart != "undefined") {
                dataChart = jQuery.parseJSON(dataChart);
                Highcharts.setOptions({
                    colors: colors
                });
                Highcharts.chart(id, {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: ''
                    },
                    subtitle: {
                        text: ''
                    },
                    xAxis: {
                        type: 'category'
                    },
                    yAxis: {
                        title: {
                            text: 'Doanh thu (tỷ đồng)'
                        }

                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        series: {
                            borderWidth: 0,
                            dataLabels: {
                                enabled: true,
                                format: '{point.y:.1f}' + subtitle
                            }
                        }
                    },

                    tooltip: {
                        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat: '<span style="color:{point.color}"> {point.name} </span>: <b>{point.y:.2f} ' + subtitle + '</b><br/>'
                    },

                    series: [{
                        name: 'Doanh thu',
                        colorByPoint: true,
                        data: dataChart.data
                    }]
                });
            }
        });


    },
    updatePlayer: function (container) {
        container.find(".media-player").each(function () {
            var url = jQuery(this).attr("data-value");
            var video = jQuery(this).attr("data-video");
            jwplayer(jQuery(this).attr("id")).setup({
                flashplayer: "/stg/plugins/player.swf",
                controlbar: "bottom",
                width: 400,
                height: video == "1" ? 280 : 24,
                background: "#fff",
                autostart: "false",
                plugins: {
                    'timeslidertooltipplugin-1': {},
                    'captions': {
                        color: "#ffff80",
                        fontFamily: "Tahoma, Geneva, sans-serif",
                        fontSize: "17",
                        fontWeight: "normal"
                    }
                },
                //'proxy.file': "",
                'file': Cdata.Storage.domain + "/" + url
            });
            jQuery(this).addClass("player");
        });
    },
    updateImageViewer: function () {
        try {
            var thumbUrl = jQuery("#ViewerIMG").attr("src");
            var thumbMapUrl = jQuery("#PathThumbMap").val();
            var settings = {
                'viewportWidth': '100%',
                'viewportHeight': '100%',
                'fitToViewportShortSide': true,
                'contentSizeOver100': true,
                'loadingBgColor': '#ffffff',
                'startScale': .2,
                'startX': 0,
                'startY': 0,
                'animTime': 500,
                'draggInertia': 10,
                'zoomLevel': 1,
                'zoomStep': 0.1,
                'contentUrl': thumbUrl,
                'intNavEnable': true,
                'intNavPos': 'TR',
                'intNavAutoHide': true,
                'intNavMoveDownBtt': true,
                'intNavMoveUpBtt': true,
                'intNavMoveRightBtt': true,
                'intNavMoveLeftBtt': true,
                'intNavZoomBtt': true,
                'intNavUnzoomBtt': true,
                'intNavFitToViewportBtt': true,
                'intNavFullSizeBtt': true,
                'intNavBttSizeRation': 1,
                'mapEnable': true,
                'mapThumb': thumbMapUrl,
                'mapPos': 'BL',
                'popupShowAction': 'click',
                'testMode': false
            };
            jQuery('#DocProIMGMap').lhpMegaImgViewer(settings, 'DocProHotspots');
        } catch (e) {
            console.log(e);
        }
    },
    updatePDFViewer: function (response) {
        try {
            OCR.reset();
        } catch (e) {
        }
        try {
            window.webViewerLoad(true);
        } catch (e) {
            console.log(e);
        }
    },
    openOverlay: function (overide) {

        if (overide != undefined || jQuery("#Overlay").is(":visible") == false) {
            jQuery("#Overlay").addClass("loadingc").fadeIn("fast");
            Utils.autoResize();
        }
    },
    closeOverlay: function (overide) {
        if (overide != undefined || jQuery(".ui-dialog:visible").length < 1) {
            jQuery("#Overlay").removeClass("loadingc").fadeOut("fast");
            jQuery(".ui-dialog-content:visible").dialog("close");
            jQuery(".hiddenDialog").removeClass("hiddenDialog");
            jQuery("body").removeClass("noscroll");
            jQuery("#myModal").modal("hide");
        }
    },
    closeCurrentDialog: function (overide) {
        if (overide != undefined || jQuery(".ui-dialog:visible").length < 1) {
            jQuery(".ui-dialog-content:visible").dialog('destroy').remove();
            jQuery(".hiddenDialog").removeClass("hiddenDialog");
            jQuery("body").removeClass("noscroll");
        }
    },
    closeCDialog: function (dialoger, invoker) {
        dialoger.closest(".ui-dialog").removeClass("hiddenDialog");
        var hiddenDialogs = jQuery(document).find(".hiddenDialog");
        if (invoker) {
            dialoger.closest(".ui-dialog").find(".ui-dialog-content").dialog('destroy').remove();
        }
        if (hiddenDialogs.length > 0) {
            hiddenDialogs.last().removeClass("hidden");
        } else {
            Utils.closeOverlay();
        }
        if (dialoger.closest(".ui-dialog").hasClass("refresh")) {
            window.location.href = Utils.getRedirect();
        }
    },
    closeAllDialog: function () {
        jQuery(document).find(".ui-dialog.hiddenDialog").find(".ui-dialog-content").dialog('destroy').remove();
    },
    flash_position: function () {
        var bottom = 0;
        var length = jQuery("#Section").children('[class*="flash-"]').length;
        for (i = 0; i < length; i++) {
            jQuery("#Section").children('[class*="flash-"]').eq(i).css('bottom', bottom + 20);
            var height = jQuery("#Section").children('[class*="flash-"]').eq(i).outerHeight(true);
            bottom = bottom + height + 20;

        }
    },
    autoCloseFlash: function () {
        var flashCount = 0;
        jQuery(".flash-success").each(function () {
            flashCount++;
            jQuery(this).delay(flashCount * 500).fadeOut("fast");
        });
    },
    autoCloseAllFlash: function () {
        var flashCount = 0;
        jQuery(".flash").each(function () {
            flashCount++;
            jQuery(this).delay(flashCount * 500).fadeOut("fast");
        });
    },
    autoResize: function () {
        try {
            jQuery(".ui-dialog-content:visible").each(function () {
                jQuery(this).dialog("option", "position", jQuery(this).dialog("option", "position"));
            });

        } catch (e) {
        }
    },
    preventScrollOutside: function (target) {
        target.on('mousewheel DOMMouseScroll', function (e) {
            var scrollTo = null;

            if (e.type === 'mousewheel') {
                scrollTo = (e.originalEvent.wheelDelta * -1);
            }
            else if (e.type === 'DOMMouseScroll') {
                scrollTo = 40 * e.originalEvent.detail;
            }

            if (scrollTo) {
                e.preventDefault();
                $(this).scrollTop(scrollTo + $(this).scrollTop());
            }
        });
    },
    validateDataForm: function (form) {

        form.find("input[type='text'], input[type='password'], textarea, select").each(function () {

            var num = jQuery(this).removeClass("error").val();
            num = Utils.rmSpace(num);

            if (jQuery(this).hasClass('checkngay')) {
                if (!Utils.isEmpty(num)) {
                    if (!jQuery.isNumeric(num) || parseInt(num) > 31 || parseInt(num) < 1) {
                        jQuery(this).addClass("error");
                    } else {
                        if (num.length == 1) {
                            num = "0" + num;
                        }
                        jQuery(this).val(num);
                    }
                }
            } else if (jQuery(this).hasClass('checkthang')) {
                if (!Utils.isEmpty(num)) {
                    if (!jQuery.isNumeric(num) || parseInt(num) > 12 || parseInt(num) < 1) {
                        jQuery(this).addClass("error");
                    } else {
                        if (num.length == 1) {
                            num = "0" + num;
                        }
                        jQuery(this).val(num);
                    }
                }
            } else if (jQuery(this).hasClass('checknam')) {
                if (!Utils.isEmpty(num)) {
                    if (!jQuery.isNumeric(num) || parseInt(num) < 1900 || parseInt(num) > 2015) {
                        jQuery(this).addClass("error");
                    } else {
                        jQuery(this).val(num);
                    }
                }
            } else if (jQuery(this).hasClass('checkint')) {
                if (!Utils.isEmpty(num)) {
                    if (!jQuery.isNumeric(num) || num.indexOf(".") != -1 || num.indexOf(",") != -1) {
                        jQuery(this).addClass("error");
                    } else {
                        jQuery(this).val(num);
                    }
                }
            }

            if (jQuery(this).hasClass('checkrequired')) {
                jQuery(this).siblings("span.error_ms.checkrequired").addClass("hidden");
                if (Utils.isEmpty(num)) {
                    jQuery(this).addClass("error");
                    jQuery(this).siblings("span.error_ms.checkrequired").removeClass("hidden");
                } else if (jQuery(this).prop("tagName") == "SELECT" && num == "0") {
                    jQuery(this).addClass("error");
                    jQuery(this).siblings("span.error_ms.checkrequired").removeClass("hidden");
                }
            }

            if (jQuery(this).hasClass('checkcompare')) {

                var comparator = jQuery(jQuery(this).attr("data-compare"));
                var valCompare = comparator.val();
                if (valCompare != num) {
                    jQuery(this).addClass("error");
                    comparator.addClass("error");
                }
            }
        });

        var elErrors = form.find(".error");
        if (elErrors.length > 0) {
            var elError = elErrors.first().focus();
            if (!elError.is(":visible")) {
                elError.closest(".group-tab").find(".tab-data").addClass("hidden");
                var idTab = elError.closest(".tab-data").removeClass("hidden").attr("id");

                elError.closest(".group-tab").find(".tabitem").removeClass("active");
                elError.closest(".group-tab").find(".tabitem[data-tab='#" + idTab + "']").addClass("active");
            }
            return false;
        }
        return true;
    },
    setError: function (error) {
        var str = '<div class="row flash flash-error">' +
            '<ul>' +
            '<li>' +
            error +
            '</li>' +
            '</ul>' +
            '<i class="ui-icon ui-icon-closethick close-flash"></i>' +
            '</div>';

        jQuery("#Section").prepend(str);
    },
    setSuccess: function (sucess) {
        var str = '<div class="row flash flash-success">' +
            '<ul>' +
            '<li>' +
            sucess +
            '</li>' +
            '</ul>' +
            '<i class="ui-icon ui-icon-closethick close-flash"></i>' +
            '</div>';

        jQuery("#Section").prepend(str);
    },
    sectionBuilder: function (response, options) {

        try {
            jQuery(".flash-success").remove();
            jQuery(".flash-error, .flash-warn").each(function () {
                if (jQuery(this).is(":visible") == false) {
                    jQuery(this).remove();
                }
            });
            if (response.hasOwnProperty("isTle")) {
                jQuery(document).prop("title", response.pgTle);
            }
            if (response.hasOwnProperty("isMsg")) {
                //Xóa các thông báo cũ
                $(".flash-error").remove();
                //if (options != true)
                jQuery("#Section").prepend(response.htMsg);
                //if (!response.isErr)
                //    Utils.closeCDialog(true);
                Utils.autoCloseFlash();
            }
            if (response.hasOwnProperty("isLogout")) {
                jQuery("<div>").delay(1000).fadeOut("100",
                    function () {
                        window.location.href = jQuery("#bcrumdLogout").find("a").attr("href");
                    });
                return;

            }
            if (response.hasOwnProperty("isDL")) {
                var dialoger = jQuery(response.htDL);
                var idDialoger = dialoger.attr("id");
                if (Utils.notEmpty(idDialoger)) {
                    dialoger.find('.ui-dialog-title').first().text(response.title);
                    jQuery('.ui-dialog:visible').addClass("hidden hiddenDialog");
                    jQuery('div[aria-describedby="' + idDialoger + '"]').detach();
                    dialoger.dialog({
                        width: response.wDL,
                        resizable: false,
                        open: function () {
                            //jQuery("html").scrollTop(0);
                            //jQuery("body").addClass("noscroll");
                            if (dialoger.hasClass("useScrollBar"))
                                jQuery(this).parent(".ui-dialog").addClass("hf50d");
                            Utils.openOverlay();
                            Utils.autoResize();
                            //
                            jQuery("#Overlay").removeClass("loading");
                        },
                        close: function () {

                            Utils.closeCDialog(dialoger, true);
                        }
                    });
                }
            }

            if (response.hasOwnProperty("isUrl")) {
                if (response.htUrl != undefined && response.htUrl !== "#") {
                    window.location.href = response.htUrl;
                }
            }
        } catch (e) {
            console.log(e);
        }

    },
    ins2pos: function (insString, selector) {

        var val = jQuery(selector).val();
        try {
            var st = jQuery(selector).getSelectionStart();
            var ed = jQuery(selector).getSelectionEnd();
            var before = val.substring(0, st);
            var after = val.substring(ed, val.length);
            jQuery(selector).val(before + insString + after);
            jQuery(selector).setSelection(st + insString.length, st + insString.length);
        } catch (e) {
            jQuery(selector).val(val + insString);
        }
    },
    wordCount: function (string) {
        string = string.replace(/(<([^>]+)>)/ig, " ");
        string = string.replace(/&nbsp;/ig, " ");
        string = string.replace(/\s{2,}/g, ' ');
        string = jQuery.trim(string);
        var args = string.split(' ');
        return args.length;
    },
    getSumary: function (string, limit) {

        string = string.replace(/(<([^>]+)>)/ig, " ");
        string = string.replace(/&nbsp;/ig, " ");
        string = string.replace(/\s{2,}/g, " ");
        string = jQuery.trim(string);
        return string.substring(0, limit);
    },
    convertDate: function (strDate, format) {

        var date = new Date(strDate);
        return date.toDateFormat(format);
    },
    convertSize: function (size) {
        var mb = parseInt(size) / 1024 / 1024;
        if (mb < 1) {
            var kb = parseInt(size) / 1024;
            if (kb < 1) {
                return size + " B";
            } else {
                return kb.toFixed(2) + " KB";
            }
        } else {
            return mb.toFixed(2) + " MB";
        }

    },
    validateBoostrapForm: function (form) {
        if (Utils.isEmpty(form))
            return false;
        var validator = jQuery(form).data('bootstrapValidator');
        validator.validate();
        jQuery(form).find(".has-error:first input").focus();
        return validator.isValid();
    },
    disableboostrapvalidate: function (container, name) {
        if (Utils.isEmpty(container))
            container = jQuery(document);
        var bootstrapValidator = container.data('bootstrapValidator');
        bootstrapValidator.enableFieldValidators(name, false);
    },
    enableboostrapvalidate: function (container, name) {
        if (Utils.isEmpty(container))
            container = jQuery(document);
        var bootstrapValidator = container.data('bootstrapValidator');
        bootstrapValidator.enableFieldValidators(name, true);
    },
    moneyFormat: function (num) {

        var p = num.toFixed(2).split(".");

        var money = p[0].split("").reverse().reduce(function (acc, num, i, orig) {
            return num == "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
        },
            "");
        if (p.length > 1 && p[1] != "00") {
            money = money + "." + p[1];
        }
        return num < 0 ? "-" + money : money;
    },
    select2TabPressed: function (container) {
        container.on('focus',
            '.select2',
            function (e) {
                var elSelect = $(this).siblings('select');
                if (elSelect.is('[disabled]') == false && elSelect.is('[data-s2open]') == false && $(this).has('.select2-selection--single').length > 0) {
                    elSelect.attr('data-s2open', 1);
                    elSelect.select2('open');
                }
            });
    },
    checkIsDate: function (str) {
        var parts = str.split('-');
        if (parts.length < 3)
            return false;
        else {
            var day = parseInt(parts[0]);
            var month = parseInt(parts[1]);
            var year = parseInt(parts[2]);
            if (isNaN(day) || isNaN(month) || isNaN(year)) {
                return false;
            }
            if (day < 1 || year < 1)
                return false;
            if (month > 12 || month < 1)
                return false;
            if ((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && day > 31)
                return false;
            if ((month == 4 || month == 6 || month == 9 || month == 11) && day > 30)
                return false;
            if (month == 2) {
                if (((year % 4) == 0 && (year % 100) != 0) || ((year % 400) == 0 && (year % 100) == 0)) {
                    if (day > 29)
                        return false;
                } else {
                    if (day > 28)
                        return false;
                }
            }
            return true;
        }
    },
    compareDate: function (obj) {
        var dateCompare = obj.val();
        var target = obj.data("date-tagert");
        var targetid = obj.data("date-targetid");
        var textCompare = obj.data('title-show');
        var dateTarget = $(targetid).val();
        var o;
        var s;
        var d;
        var g;
        if (target != null && target != 'undefined' && dateCompare != null && dateCompare != "" && dateCompare != 'undefined') {
            o = dateCompare.split("-");
            s = target.split("-");
            d = o[2] + o[1] + o[0],
                g = s[2] + s[1] + s[0];
            Utils.checkValidate(obj, !(parseInt(d) < parseInt(g)), textCompare);

        } else if (dateTarget != null && dateTarget != 'undefined' && dateCompare != null && dateCompare != "" && dateCompare != 'undefined') {
            o = dateCompare.split("-");
            s = dateTarget.split("-");
            d = o[2] + o[1] + o[0],
                g = s[2] + s[1] + s[0];
            if (obj.hasClass("smaller")) {
                Utils.checkValidate(obj, !(parseInt(d) > parseInt(g)), textCompare);
            } else {
                Utils.checkValidate(obj, !(parseInt(d) < parseInt(g)), textCompare);
            }
        }
    },
    checkIsEmail: function (email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    },
    getExtension: function (fileName) {
        return fileName.substr((fileName.lastIndexOf('.') + 1));
    },
    checkValidate: function (e, validCondition, message) {
        var name = e.attr('name');
        var text = e.siblings('small[data-bv-validator="custValidate"]');
        var icon = e.siblings('i');
        var formGroup = e.parents("div.form-group");
        if (!formGroup.hasClass("has-feedback"))
            formGroup.addClass("has-feedback");
        //Thêm message và icon nếu chưa có
        if (icon.length === 0) {
            icon = $("<i class=\"form-control-feedback bv-no-label glyphicon glyphicon-ok\" data-bv-icon-for=\"" + name + "\" data-bv-validator=\"custValidate\" style=\"display: none;\"></i>");
            e.parent().append(icon);
        }
        if (text.length === 0) {
            text = $("<small class=\"help-block\" data-bv-for=\"" + name + "\" data-bv-validator=\"custValidate\" data-bv-result=\"VALID\" style=\"color: rgb(228, 111, 97); display: none;\" ></small>");
            e.parent().append(text);
        }

        //Check điều kiện
        if (!validCondition) {
            //Ko hợp lệ
            text.show();
            icon.show();
            text.text(message);
            text.attr("data-bv-result", "INVALID");
            icon.toggleClass('glyphicon-ok glyphicon-remove');
            formGroup.removeClass("has-success");
            formGroup.addClass("has-error");
            try {
                e.closest("form").find("button[type='submit']").attr("disabled", true);
            } catch (e) {
            }
            return false;
        } else {
            //Hợp lệ
            text.hide();
            icon.hide();
            text.text("");
            text.attr("data-bv-result", "VALID");
            icon.toggleClass('glyphicon-oke glyphicon-oke');
            formGroup.removeClass("has-error");
            formGroup.addClass("has-success");
            try {
                e.closest("form").find("button[type='submit']").attr("disabled", false);
                e.siblings('small').hide();

            } catch (e) {
            }
            return true;
        }
    },
    getDataFromUrl: function () {
        var keys = {};
        try {
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                var hash = hashes[i].split('=');
                keys[hash[0]] = hash[1];
            }
        } catch (e) {
        }
        return keys;
    },
    updateQueryStringParameter: function (uri, key, value) {
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = uri.indexOf('?') !== -1 ? "&" : "?";
        if (uri.match(re)) {
            return uri.replace(re, '$1' + key + "=" + value + '$2');
        } else {
            return uri + separator + key + "=" + value;
        }
    },
    arrIsEmptyOrZeros: function (arr) {
        //Check empty
        if (arr == null || arr.length === 0)
            return true;
        //Check zeros
        var allIsZero = true;
        for (var i = 0; i < arr.length; ++i) {
            if (arr[i] !== 0) {
                allIsZero = false;
            }
        }
        return allIsZero;
    },
    genRandomColor: function () {
        var text = "#";
        var possible = "ABCDEF0123456789";
        for (var i = 0; i < 6; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    },
    resetForm: function (form) {
        try {
            form.find("input, select, textarea,button").each(function () {
                var el = jQuery(this);
                var name = el.prop("name");
                if (!Utils.isEmpty(name)) {
                    var tagName = el.prop("tagName").toLowerCase();
                    el.val("");
                    if (type == "checkbox" || type == "radio") {
                        el.removeAttr('checked');
                    }
                    else if (tagName != "button") {
                        if (!keys.hasOwnProperty(name)) {
                            keys[name] = [];
                        }
                        keys[name].push(el.val());
                    }
                }
            });

        } catch (e) {
            console.log(e);
        }
    },
    replaceAll: function (str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    }
};
var Smile = {

    smileurl: '',
    smileitems: {},
    init: function () {
        Smile.smileurl = typeof Cdata.Storage != 'undefined'
            ? Cdata.Storage.urlSmile
            : '';
        Smile.smilelist();
    },

    smiles: function (str) {

        try {
            for (var i in Smile.smileitems) {
                if (Smile.smileitems.hasOwnProperty(i)) {
                    while (str.indexOf(i) !== -1) {
                        str = str.replace(i, Smile.smileitems[i]);
                    }
                }
            }
        } catch (e) {
        }
        return str;
    },

    smilelist: function () {
        Smile.smileitems = {};
        Smile.smileitems[":-)"] = "smile.png";
        Smile.smileitems[":)"] = "smile.png";
        Smile.smileitems[":]"] = "smile.png";
        Smile.smileitems["=)"] = "smile.png";
        Smile.smileitems[":-("] = "frown.png";
        Smile.smileitems[":("] = "frown.png";
        Smile.smileitems[":["] = "frown.png";
        Smile.smileitems["=("] = "frown.png";
        Smile.smileitems[":-O"] = "gasp.png";
        Smile.smileitems[":O"] = "gasp.png";
        Smile.smileitems[":-D"] = "grin.png";
        Smile.smileitems[":D"] = "grin.png";
        Smile.smileitems["=D"] = "grin.png";
        Smile.smileitems[":-p"] = "tongue.png";
        Smile.smileitems[":p"] = "tongue.png";
        Smile.smileitems["=P"] = "tongue.png";
        Smile.smileitems[";-)"] = "wink.png";
        Smile.smileitems[";)"] = "wink.png";
        Smile.smileitems[":3"] = "curlylips.png";
        Smile.smileitems[":-*"] = "kiss.png";
        Smile.smileitems[":*"] = "kiss.png";
        Smile.smileitems[">:-("] = "grumpy.png";
        Smile.smileitems[">:("] = "grumpy.png";
        Smile.smileitems["8)"] = "glasses.png";
        Smile.smileitems["B-)"] = "glasses.png";
        Smile.smileitems["B)"] = "glasses.png";
        Smile.smileitems["8-|"] = "sunglasses.png";
        Smile.smileitems["8|"] = "sunglasses.png";
        Smile.smileitems["B|-"] = "sunglasses.png";
        Smile.smileitems["B|"] = "sunglasses.png";
        Smile.smileitems[">:O"] = "upset.png";
        Smile.smileitems[">:-O"] = "upset.png";
        Smile.smileitems[">:o"] = "upset.png";
        Smile.smileitems[">:-o"] = "upset.png";
        Smile.smileitems["o.O"] = "confused.png";
        Smile.smileitems["O.o"] = "confused.png";
        Smile.smileitems["(^^^)"] = "shark.gif";
        Smile.smileitems[":v"] = "pacman.png";
        Smile.smileitems["O:)"] = "angel.png";
        Smile.smileitems["O:-)"] = "angel.png";
        Smile.smileitems["3:)"] = "devil.png";
        Smile.smileitems["3:-)"] = "devil.png";
        Smile.smileitems[":-/"] = "unsure.png";
        Smile.smileitems[":\\"] = "unsure.png";
        Smile.smileitems[":-\\"] = "unsure.png";
        Smile.smileitems[":'("] = "cry.png";
        Smile.smileitems[":putnam:"] = "putnam.gif";
        Smile.smileitems[":|]"] = "robot.gif";
        Smile.smileitems["<3"] = "heart.png";
        Smile.smileitems["<(“)"] = "penguin.gif";
        Smile.smileitems[":poop:"] = "poop-smiley.png";

        var html = "";
        for (var i in Smile.smileitems) {
            if (Smile.smileitems.hasOwnProperty(i)) {
                var filename = Smile.smileitems[i];
                var title = filename.split(".");
                html += "<img src=\"" + Smile.smileurl + "/" + Smile.smileitems[i] + "\" data-value=\"" + i + "\" title=\"" + title[0] + "\" />";;
                Smile.smileitems[i] = "<img src=\"" + Smile.smileurl + "/" + Smile.smileitems[i] + "\" title=\"" + title[0] + "\" />";
            }
        }
        jQuery(".showsmiles").bind("click", function () {
            if (!jQuery(this).hasClass("hasboxsmiles")) {
                jQuery(".showsmiles").addClass("hasboxsmiles");
                jQuery(".boxsmiles").append(html);
                jQuery(".boxsmiles").find("img").bind("click", function () {
                    var selector = jQuery(this).closest(".boxsmiles").attr("data-selector");
                    Utils.ins2pos(jQuery(this).attr("data-value"), selector);
                    return false;
                });
                jQuery(".boxsmiles").hover(function () {
                    jQuery(this).show();
                }, function () {
                    jQuery(this).hide();
                });
            }
            jQuery(this).find(".boxsmiles").show();
        });
        jQuery(".replace-smiles").each(function () {
            var html = jQuery(this).html();
            jQuery(this).html(Smile.smiles(html));
        });
    }
};

var Cdata = {
    init: function () {
        try {
            var data = jQuery("#CDATA").val();
            var dataJson = jQuery.parseJSON(data);
            for (var k in dataJson) {
                if (dataJson.hasOwnProperty(k)) {
                    Cdata[k] = dataJson[k];
                }
            }
        } catch (e) {
        }
    },
    SrcPath: function (path) {
        return Cdata.Storage.urlFile + "/" + path; //Cdata.Storage.domain +
    }
};

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
Date.prototype.toDateFormat = function (format) {
    var yyyy = this.getFullYear().toString();
    var mm = (this.getMonth() + 1).toString();
    var dd = this.getDate().toString();
    var h = this.getHours().toString();
    var m = this.getMinutes().toString();

    mm = (mm[1] ? mm : "0" + mm[0]);
    dd = (dd[1] ? dd : "0" + dd[0]);
    h = (h[1] ? h : "0" + h[0]);
    m = (m[1] ? m : "0" + m[0]);

    var value = "";
    switch (format) {
        case "dd-MM-yyyy HH:mm":
            value = dd + "-" + mm + "-" + yyyy + " " + h + ":" + m;
            break;
        default:
            value = dd + "-" + mm + "-" + yyyy;
            break;
    }
    return value;
};
var previousPoint = null, previousLabel = null;


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function showTooltip(clientX, clientY, color, contents) {
    $('<div id="tooltip" class="show_Tooltip">' + contents + '</div>').css({
        position: 'absolute',
        display: 'none',
        top: clientY,
        left: clientX,
        border: '2px solid ' + color,
        padding: '5px',
        'font-size': '9px',
        'border-radius': '5px',
        'background-color': '#d6d0d0',
        'font-family': 'Verdana, Arial, Helvetica, Tahoma, sans-serif',
        opacity: 0.9
    }).appendTo("body").fadeIn(200);
};
jQuery.fn.UseTooltip = function () {
    // var clientX = 0;
    // var clientY = 0;
    // function get_clientXY(event)
    // {
    //   clientX=event.clientX;
    //   clientY=event.clientY;
    // }
    // jQuery(".chartHorizonalPlot").on("mousemove", function () {
    //      get_clientXY(event);
    // });
    $(this).bind("plothover", function (event, pos, item) {
        if (item) {
            if ((previousLabel != item.series.label) ||
                (previousPoint != item.dataIndex)) {
                previousPoint = item.dataIndex;
                previousLabel = item.series.label;
                $("#tooltip").remove();
                var total = 0;
                for (var i = 0; i < item.series.data.length; i++) {
                    total = total + item.series.data[i][0];
                }
                var x = item.datapoint[0];
                var y = item.datapoint[1];
                var percent = (x / (total * 0.01)).toFixed(2);
                var color = item.series.color;
                var clientX = item.pageX;
                var clientY = item.pageY;
                showTooltip(item.pageX,
                    item.pageY,
                    color,
                    item.series.yaxis.ticks[item.dataIndex].label +
                    " : <strong>" + x + "</strong>" + " " + item.series.label + " (" + percent + "%)");
            }
        } else {
            $("#tooltip").remove();
            previousPoint = null;
        }
    });
};

jQuery.fn.extend({
    reset: function () {
        try {
            this.each(function () {
                this.reset();
            });
            this.find('.autoSelect2').trigger("change");
            var selectpicker = this.find('.selectpicker');
            selectpicker.val('default');
            selectpicker.selectpicker("refresh");
        } catch (e) {
        }
    },
    getData: function () {
        var data = {};
        try {
            this.each(function () {
                jQuery.each(this.attributes, function () {
                    var name = this.name.toLowerCase();
                    if (name.indexOf("data-") === 0) {
                        var k = "";
                        var args = name.split("-");
                        for (var n = 0; n < args.length; n++) {
                            if (n == 0) continue;
                            if (n == 1) {
                                k += args[n];
                            }
                            else {
                                k += args[n].capitalize()
                            }
                        }
                        data[k] = this.value;
                    }
                });
            });
        } catch (e) {
        }
        return data;
    },
    getDataUppername: function () {
        var data = {};
        try {
            this.each(function () {
                jQuery.each(this.attributes, function () {
                    var name = this.name.toLowerCase();
                    if (name.indexOf("data-") === 0) {
                        var k = "";
                        var args = name.split("-");
                        for (var n = 0; n < args.length; n++) {
                            if (n == 0) continue;
                            var v = args[n];
                            if (v == "id") {
                                k += v.toUpperCase();
                            }
                            else {
                                k += v.capitalize();
                            }
                        }
                        data[k] = this.value;
                    }
                });
            });
        } catch (e) {
        }
        return data;
    },

});