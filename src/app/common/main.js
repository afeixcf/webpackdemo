require('./main.less');
/*var $ = require('jquery');

(function($, window, undefined) {

    $.fn.initProcess = function (params) {
        var percent = params.percent;
        var ms = 1.75 * percent / 100;
        $(this).css({
            'transition': 'all ' + ms +'s linear ',
            '-webkit-transition': 'all ' + ms +'s linear '
        });
    };


    $.fn.canvasChart = function(options) {
        var defaults = { };
        var settings = $.extend({}, defaults, options);
        var canvas = $(this).get(0);
        var total =  $(this).attr("data-total");
        var curr = $(this).attr("data-curr");
        var constrast = parseFloat(curr/total).toFixed(2); //比例
        var context = null;

        if ( !canvas.getContext) {
            return;
        }

        // 定义开始点的大小
        var startArc = Math.PI/2;
        // 根据占的比例画圆弧
        var endArc = (Math.PI * 2) * (constrast);



        context = canvas.getContext("2d");
        context.translate(360,360);

        // 绘制背景圆
        context.save(); // 保存当前状态 包含 颜色  路径  变形
        context.beginPath(); // 定义一个子路径开始
        context.strokeStyle = "#e9e9e9"; //线的颜色
        context.lineWidth = "5";// 线的大小
        context.arc(0, 0, 330, 0, Math.PI * 2, true);// 画一个圆
        context.closePath();// 关闭子路径
        context.stroke();

        context.restore();// 还原上一个save保存的状态

        // 判断如果是百分百就不用画开始点和结束点的圆了
        if ( curr % total == 0 && curr == 0) {
            return;
        }

        // 绘制比例圆
        var _fn = function (n) {
            context.save();
            context.rotate(-startArc + Math.PI/180*2);
            context.beginPath();
            context.strokeStyle = settings.borderColor;
            context.lineWidth = "20";
            context.lineCap = 'round';
            // context.globalCompositeOperation = 'source-atop';
            context.globalCompositeOperation = 'destination-over';
            context.arc(0, 0, 330, 0, n, false);
            context.stroke();

            context.restore();
        };
        _fn(0);
        var total = 0;
        var timer = setInterval(function () {
            console.log(endArc);
            if(total < endArc) {
                total+=endArc/50;
                _fn(total);
            } else {
                clearInterval(timer);
            }
        },16);

        // 绘制开始时圆点
        // context.save();
        // context.rotate(-startArc);
        // context.beginPath();
        // context.fillStyle = settings.borderColor;
        // context.arc(83, 2, 2, 0, (Math.PI * 2) , false);
        // context.fill();
        //
        // context.restore();

        // 绘制结束时圆点
        // context.save();
        // context.rotate(endArc-startArc);
        // context.beginPath();
        // context.fillStyle = settings.borderColor;
        // context.arc(83, -2, 2, 0, (Math.PI * 2) , false);
        // context.fill();
        //
        // context.restore();

    }

})($, window);*/

/*---weixin jssdk*/
// !function (a, b) {
//     function c(b, c, d) {
//         a.WeixinJSBridge ? WeixinJSBridge.invoke(b, e(c), function (a) {
//             h(b, a, d)
//         }) : k(b, d)
//     }
//
//     function d(b, c, d) {
//         a.WeixinJSBridge ? WeixinJSBridge.on(b, function (a) {
//             d && d.trigger && d.trigger(a), h(b, a, c)
//         }) : d ? k(b, d) : k(b, c)
//     }
//
//     function e(a) {
//         return a = a || {}, a.appId = D.appId, a.verifyAppId = D.appId, a.verifySignType = "sha1", a.verifyTimestamp = D.timestamp + "", a.verifyNonceStr = D.nonceStr, a.verifySignature = D.signature, a
//     }
//
//     function f(a) {
//         return {
//             timeStamp: a.timestamp + "",
//             nonceStr: a.nonceStr,
//             "package": a["package"],
//             paySign: a.paySign,
//             signType: a.signType || "SHA1"
//         }
//     }
//
//     function g(a) {
//         return a.postalCode = a.addressPostalCode, delete a.addressPostalCode, a.provinceName = a.proviceFirstStageName, delete a.proviceFirstStageName, a.cityName = a.addressCitySecondStageName, delete a.addressCitySecondStageName, a.countryName = a.addressCountiesThirdStageName, delete a.addressCountiesThirdStageName, a.detailInfo = a.addressDetailInfo, delete a.addressDetailInfo, a
//     }
//
//     function h(a, b, c) {
//         "openEnterpriseChat" == a && (b.errCode = b.err_code), delete b.err_code, delete b.err_desc, delete b.err_detail;
//         var d = b.errMsg;
//         d || (d = b.err_msg, delete b.err_msg, d = i(a, d), b.errMsg = d), c = c || {}, c._complete && (c._complete(b), delete c._complete), d = b.errMsg || "", D.debug && !c.isInnerInvoke && alert(JSON.stringify(b));
//         var e = d.indexOf(":"), f = d.substring(e + 1);
//         switch (f) {
//             case"ok":
//                 c.success && c.success(b);
//                 break;
//             case"cancel":
//                 c.cancel && c.cancel(b);
//                 break;
//             default:
//                 c.fail && c.fail(b)
//         }
//         c.complete && c.complete(b)
//     }
//
//     function i(a, b) {
//         var c = a, d = q[c];
//         d && (c = d);
//         var e = "ok";
//         if (b) {
//             var f = b.indexOf(":");
//             e = b.substring(f + 1), "confirm" == e && (e = "ok"), "failed" == e && (e = "fail"), -1 != e.indexOf("failed_") && (e = e.substring(7)), -1 != e.indexOf("fail_") && (e = e.substring(5)), e = e.replace(/_/g, " "), e = e.toLowerCase(), ("access denied" == e || "no permission to execute" == e) && (e = "permission denied"), "config" == c && "function not exist" == e && (e = "ok"), "" == e && (e = "fail")
//         }
//         return b = c + ":" + e
//     }
//
//     function j(a) {
//         if (a) {
//             for (var b = 0, c = a.length; c > b; ++b) {
//                 var d = a[b], e = p[d];
//                 e && (a[b] = e)
//             }
//             return a
//         }
//     }
//
//     function k(a, b) {
//         if (!(!D.debug || b && b.isInnerInvoke)) {
//             var c = q[a];
//             c && (a = c), b && b._complete && delete b._complete, console.log('"' + a + '",', b || "")
//         }
//     }
//
//     function l(a) {
//         if (!(v || w || D.debug || "6.0.2" > A || C.systemType < 0)) {
//             var b = new Image;
//             C.appId = D.appId, C.initTime = B.initEndTime - B.initStartTime, C.preVerifyTime = B.preVerifyEndTime - B.preVerifyStartTime, I.getNetworkType({
//                 isInnerInvoke: !0,
//                 success: function (a) {
//                     C.networkType = a.networkType;
//                     var c = "https://open.weixin.qq.com/sdk/report?v=" + C.version + "&o=" + C.isPreVerifyOk + "&s=" + C.systemType + "&c=" + C.clientVersion + "&a=" + C.appId + "&n=" + C.networkType + "&i=" + C.initTime + "&p=" + C.preVerifyTime + "&u=" + C.url;
//                     b.src = c
//                 }
//             })
//         }
//     }
//
//     function m() {
//         return (new Date).getTime()
//     }
//
//     function n(b) {
//         x && (a.WeixinJSBridge ? b() : r.addEventListener && r.addEventListener("WeixinJSBridgeReady", b, !1))
//     }
//
//     function o() {
//         I.invoke || (I.invoke = function (b, c, d) {
//             a.WeixinJSBridge && WeixinJSBridge.invoke(b, e(c), d)
//         }, I.on = function (b, c) {
//             a.WeixinJSBridge && WeixinJSBridge.on(b, c)
//         })
//     }
//     if (!a.jWeixin) {
//         var p = {
//             config: "preVerifyJSAPI",
//             onMenuShareTimeline: "menu:share:timeline",
//             onMenuShareAppMessage: "menu:share:appmessage",
//             onMenuShareQQ: "menu:share:qq",
//             onMenuShareWeibo: "menu:share:weiboApp",
//             onMenuShareQZone: "menu:share:QZone",
//             previewImage: "imagePreview",
//             getLocation: "geoLocation",
//             openProductSpecificView: "openProductViewWithPid",
//             addCard: "batchAddCard",
//             openCard: "batchViewCard",
//             chooseWXPay: "getBrandWCPayRequest",
//             openEnterpriseRedPacket: "getRecevieBizHongBaoRequest",
//             startSearchBeacons: "startMonitoringBeacons",
//             stopSearchBeacons: "stopMonitoringBeacons",
//             onSearchBeacons: "onBeaconsInRange",
//             consumeAndShareCard: "consumedShareCard",
//             openAddress: "editAddress"
//         }, q = function () {
//             var a = {};
//             for (var b in p)a[p[b]] = b;
//             return a
//         }(), r = a.document, s = r.title, t = navigator.userAgent.toLowerCase(), u = navigator.platform.toLowerCase(), v = !(!u.match("mac") && !u.match("win")), w = -1 != t.indexOf("wxdebugger"), x = -1 != t.indexOf("micromessenger"), y = -1 != t.indexOf("android"), z = -1 != t.indexOf("iphone") || -1 != t.indexOf("ipad"), A = function () {
//             var a = t.match(/micromessenger\/(\d+\.\d+\.\d+)/) || t.match(/micromessenger\/(\d+\.\d+)/);
//             return a ? a[1] : ""
//         }(), B = {initStartTime: m(), initEndTime: 0, preVerifyStartTime: 0, preVerifyEndTime: 0}, C = {
//             version: 1,
//             appId: "",
//             initTime: 0,
//             preVerifyTime: 0,
//             networkType: "",
//             isPreVerifyOk: 1,
//             systemType: z ? 1 : y ? 2 : -1,
//             clientVersion: A,
//             url: encodeURIComponent(location.href)
//         }, D = {}, E = {_completes: []}, F = {state: 0, data: {}};
//         n(function () {
//             B.initEndTime = m()
//         });
//         var G = !1, H = [], I = {
//             config: function (a) {
//                 D = a, k("config", a);
//                 var b = D.check === !1 ? !1 : !0;
//                 n(function () {
//                     if (b)c(p.config, {verifyJsApiList: j(D.jsApiList)}, function () {
//                         E._complete = function (a) {
//                             B.preVerifyEndTime = m(), F.state = 1, F.data = a
//                         }, E.success = function (a) {
//                             C.isPreVerifyOk = 0
//                         }, E.fail = function (a) {
//                             E._fail ? E._fail(a) : F.state = -1
//                         };
//                         var a = E._completes;
//                         return a.push(function () {
//                             l()
//                         }), E.complete = function (b) {
//                             for (var c = 0, d = a.length; d > c; ++c)a[c]();
//                             E._completes = []
//                         }, E
//                     }()), B.preVerifyStartTime = m(); else {
//                         F.state = 1;
//                         for (var a = E._completes, d = 0, e = a.length; e > d; ++d)a[d]();
//                         E._completes = []
//                     }
//                 }), D.beta && o()
//             }, ready: function (a) {
//                 0 != F.state ? a() : (E._completes.push(a), !x && D.debug && a())
//             }, error: function (a) {
//                 "6.0.2" > A || (-1 == F.state ? a(F.data) : E._fail = a)
//             }, checkJsApi: function (a) {
//                 var b = function (a) {
//                     var b = a.checkResult;
//                     for (var c in b) {
//                         var d = q[c];
//                         d && (b[d] = b[c], delete b[c])
//                     }
//                     return a
//                 };
//                 c("checkJsApi", {jsApiList: j(a.jsApiList)}, function () {
//                     return a._complete = function (a) {
//                         if (y) {
//                             var c = a.checkResult;
//                             c && (a.checkResult = JSON.parse(c))
//                         }
//                         a = b(a)
//                     }, a
//                 }())
//             }, onMenuShareTimeline: function (a) {
//                 d(p.onMenuShareTimeline, {
//                     complete: function () {
//                         c("shareTimeline", {
//                             title: a.title || s,
//                             desc: a.title || s,
//                             img_url: a.imgUrl || "",
//                             link: a.link || location.href,
//                             type: a.type || "link",
//                             data_url: a.dataUrl || ""
//                         }, a)
//                     }
//                 }, a)
//             }, onMenuShareAppMessage: function (a) {
//                 d(p.onMenuShareAppMessage, {
//                     complete: function () {
//                         c("sendAppMessage", {
//                             title: a.title || s,
//                             desc: a.desc || "",
//                             link: a.link || location.href,
//                             img_url: a.imgUrl || "",
//                             type: a.type || "link",
//                             data_url: a.dataUrl || ""
//                         }, a)
//                     }
//                 }, a)
//             }, onMenuShareQQ: function (a) {
//                 d(p.onMenuShareQQ, {
//                     complete: function () {
//                         c("shareQQ", {
//                             title: a.title || s,
//                             desc: a.desc || "",
//                             img_url: a.imgUrl || "",
//                             link: a.link || location.href
//                         }, a)
//                     }
//                 }, a)
//             }, onMenuShareWeibo: function (a) {
//                 d(p.onMenuShareWeibo, {
//                     complete: function () {
//                         c("shareWeiboApp", {
//                             title: a.title || s,
//                             desc: a.desc || "",
//                             img_url: a.imgUrl || "",
//                             link: a.link || location.href
//                         }, a)
//                     }
//                 }, a)
//             }, onMenuShareQZone: function (a) {
//                 d(p.onMenuShareQZone, {
//                     complete: function () {
//                         c("shareQZone", {
//                             title: a.title || s,
//                             desc: a.desc || "",
//                             img_url: a.imgUrl || "",
//                             link: a.link || location.href
//                         }, a)
//                     }
//                 }, a)
//             }, startRecord: function (a) {
//                 c("startRecord", {}, a)
//             }, stopRecord: function (a) {
//                 c("stopRecord", {}, a)
//             }, onVoiceRecordEnd: function (a) {
//                 d("onVoiceRecordEnd", a)
//             }, playVoice: function (a) {
//                 c("playVoice", {localId: a.localId}, a)
//             }, pauseVoice: function (a) {
//                 c("pauseVoice", {localId: a.localId}, a)
//             }, stopVoice: function (a) {
//                 c("stopVoice", {localId: a.localId}, a)
//             }, onVoicePlayEnd: function (a) {
//                 d("onVoicePlayEnd", a)
//             }, uploadVoice: function (a) {
//                 c("uploadVoice", {localId: a.localId, isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1}, a)
//             }, downloadVoice: function (a) {
//                 c("downloadVoice", {serverId: a.serverId, isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1}, a)
//             }, translateVoice: function (a) {
//                 c("translateVoice", {localId: a.localId, isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1}, a)
//             }, chooseImage: function (a) {
//                 c("chooseImage", {
//                     scene: "1|2",
//                     count: a.count || 9,
//                     sizeType: a.sizeType || ["original", "compressed"],
//                     sourceType: a.sourceType || ["album", "camera"]
//                 }, function () {
//                     return a._complete = function (a) {
//                         if (y) {
//                             var b = a.localIds;
//                             b && (a.localIds = JSON.parse(b))
//                         }
//                     }, a
//                 }())
//             }, getLocation: function (a) {
//             }, previewImage: function (a) {
//                 c(p.previewImage, {current: a.current, urls: a.urls}, a)
//             }, uploadImage: function (a) {
//                 c("uploadImage", {localId: a.localId, isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1}, a)
//             }, downloadImage: function (a) {
//                 c("downloadImage", {serverId: a.serverId, isShowProgressTips: 0 == a.isShowProgressTips ? 0 : 1}, a)
//             }, getLocalImgData: function (a) {
//                 G === !1 ? (G = !0, c("getLocalImgData", {localId: a.localId}, function () {
//                     return a._complete = function (a) {
//                         if (G = !1, H.length > 0) {
//                             var b = H.shift();
//                             wx.getLocalImgData(b)
//                         }
//                     }, a
//                 }())) : H.push(a)
//             }, getNetworkType: function (a) {
//                 var b = function (a) {
//                     var b = a.errMsg;
//                     a.errMsg = "getNetworkType:ok";
//                     var c = a.subtype;
//                     if (delete a.subtype, c)a.networkType = c; else {
//                         var d = b.indexOf(":"), e = b.substring(d + 1);
//                         switch (e) {
//                             case"wifi":
//                             case"edge":
//                             case"wwan":
//                                 a.networkType = e;
//                                 break;
//                             default:
//                                 a.errMsg = "getNetworkType:fail"
//                         }
//                     }
//                     return a
//                 };
//                 c("getNetworkType", {}, function () {
//                     return a._complete = function (a) {
//                         a = b(a)
//                     }, a
//                 }())
//             }, openLocation: function (a) {
//                 c("openLocation", {
//                     latitude: a.latitude,
//                     longitude: a.longitude,
//                     name: a.name || "",
//                     address: a.address || "",
//                     scale: a.scale || 28,
//                     infoUrl: a.infoUrl || ""
//                 }, a)
//             }, getLocation: function (a) {
//                 a = a || {}, c(p.getLocation, {type: a.type || "wgs84"}, function () {
//                     return a._complete = function (a) {
//                         delete a.type
//                     }, a
//                 }())
//             }, hideOptionMenu: function (a) {
//                 c("hideOptionMenu", {}, a)
//             }, showOptionMenu: function (a) {
//                 c("showOptionMenu", {}, a)
//             }, closeWindow: function (a) {
//                 a = a || {}, c("closeWindow", {}, a)
//             }, hideMenuItems: function (a) {
//                 c("hideMenuItems", {menuList: a.menuList}, a)
//             }, showMenuItems: function (a) {
//                 c("showMenuItems", {menuList: a.menuList}, a)
//             }, hideAllNonBaseMenuItem: function (a) {
//                 c("hideAllNonBaseMenuItem", {}, a)
//             }, showAllNonBaseMenuItem: function (a) {
//                 c("showAllNonBaseMenuItem", {}, a)
//             }, scanQRCode: function (a) {
//                 a = a || {}, c("scanQRCode", {
//                     needResult: a.needResult || 0,
//                     scanType: a.scanType || ["qrCode", "barCode"]
//                 }, function () {
//                     return a._complete = function (a) {
//                         if (z) {
//                             var b = a.resultStr;
//                             if (b) {
//                                 var c = JSON.parse(b);
//                                 a.resultStr = c && c.scan_code && c.scan_code.scan_result
//                             }
//                         }
//                     }, a
//                 }())
//             }, openAddress: function (a) {
//                 c(p.openAddress, {}, function () {
//                     return a._complete = function (a) {
//                         a = g(a)
//                     }, a
//                 }())
//             }, openProductSpecificView: function (a) {
//                 c(p.openProductSpecificView, {pid: a.productId, view_type: a.viewType || 0, ext_info: a.extInfo}, a)
//             }, addCard: function (a) {
//                 for (var b = a.cardList, d = [], e = 0, f = b.length; f > e; ++e) {
//                     var g = b[e], h = {card_id: g.cardId, card_ext: g.cardExt};
//                     d.push(h)
//                 }
//                 c(p.addCard, {card_list: d}, function () {
//                     return a._complete = function (a) {
//                         var b = a.card_list;
//                         if (b) {
//                             b = JSON.parse(b);
//                             for (var c = 0, d = b.length; d > c; ++c) {
//                                 var e = b[c];
//                                 e.cardId = e.card_id, e.cardExt = e.card_ext, e.isSuccess = e.is_succ ? !0 : !1, delete e.card_id, delete e.card_ext, delete e.is_succ
//                             }
//                             a.cardList = b, delete a.card_list
//                         }
//                     }, a
//                 }())
//             }, chooseCard: function (a) {
//                 c("chooseCard", {
//                     app_id: D.appId,
//                     location_id: a.shopId || "",
//                     sign_type: a.signType || "SHA1",
//                     card_id: a.cardId || "",
//                     card_type: a.cardType || "",
//                     card_sign: a.cardSign,
//                     time_stamp: a.timestamp + "",
//                     nonce_str: a.nonceStr
//                 }, function () {
//                     return a._complete = function (a) {
//                         a.cardList = a.choose_card_info, delete a.choose_card_info
//                     }, a
//                 }())
//             }, openCard: function (a) {
//                 for (var b = a.cardList, d = [], e = 0, f = b.length; f > e; ++e) {
//                     var g = b[e], h = {card_id: g.cardId, code: g.code};
//                     d.push(h)
//                 }
//                 c(p.openCard, {card_list: d}, a)
//             }, consumeAndShareCard: function (a) {
//                 c(p.consumeAndShareCard, {consumedCardId: a.cardId, consumedCode: a.code}, a)
//             }, chooseWXPay: function (a) {
//                 c(p.chooseWXPay, f(a), a)
//             }, openEnterpriseRedPacket: function (a) {
//                 c(p.openEnterpriseRedPacket, f(a), a)
//             }, startSearchBeacons: function (a) {
//                 c(p.startSearchBeacons, {ticket: a.ticket}, a)
//             }, stopSearchBeacons: function (a) {
//                 c(p.stopSearchBeacons, {}, a)
//             }, onSearchBeacons: function (a) {
//                 d(p.onSearchBeacons, a)
//             }, openEnterpriseChat: function (a) {
//                 c("openEnterpriseChat", {useridlist: a.userIds, chatname: a.groupName}, a)
//             }
//         }, J = 1, K = {};
//
//         return r.addEventListener("error", function (a) {
//             if (!y) {
//                 var b = a.target, c = b.tagName, d = b.src;
//                 if ("IMG" == c || "VIDEO" == c || "AUDIO" == c || "SOURCE" == c) {
//                     var e = -1 != d.indexOf("wxlocalresource://");
//                     if (e) {
//                         a.preventDefault(), a.stopPropagation();
//                         var f = b["wx-id"];
//                         if (f || (f = J++, b["wx-id"] = f), K[f])return;
//                         K[f] = !0, wx.ready(function () {
//                             wx.getLocalImgData({
//                                 localId: d, success: function (a) {
//                                     b.src = a.localData
//                                 }
//                             })
//                         })
//                     }
//                 }
//             }
//         }, !0), r.addEventListener("load", function (a) {
//             if (!y) {
//                 var b = a.target, c = b.tagName;
//                 b.src;
//                 if ("IMG" == c || "VIDEO" == c || "AUDIO" == c || "SOURCE" == c) {
//                     var d = b["wx-id"];
//                     d && (K[d] = !1)
//                 }
//             }
//         }, !0), b && (a.wx = a.jWeixin = I), I
//     }
// }(window, !0);

!function (e, n) {
    // "function" == typeof define && (define.amd || define.cmd) ? define(function () {
    //     return n(e)
    // }) :
    n(e, !0);
}(window, function (e, n) {
    function i(n, i, t) {
        e.WeixinJSBridge ? WeixinJSBridge.invoke(n, o(i), function (e) {
            c(n, e, t)
        }) : u(n, t)
    }

    function t(n, i, t) {
        e.WeixinJSBridge ? WeixinJSBridge.on(n, function (e) {
            t && t.trigger && t.trigger(e), c(n, e, i)
        }) : t ? u(n, t) : u(n, i)
    }

    function o(e) {
        return e = e || {}, e.appId = C.appId, e.verifyAppId = C.appId, e.verifySignType = "sha1", e.verifyTimestamp = C.timestamp + "", e.verifyNonceStr = C.nonceStr, e.verifySignature = C.signature, e
    }

    function r(e) {
        return {
            timeStamp: e.timestamp + "",
            nonceStr: e.nonceStr,
            package: e.package,
            paySign: e.paySign,
            signType: e.signType || "SHA1"
        }
    }

    function a(e) {
        return e.postalCode = e.addressPostalCode, delete e.addressPostalCode, e.provinceName = e.proviceFirstStageName, delete e.proviceFirstStageName, e.cityName = e.addressCitySecondStageName, delete e.addressCitySecondStageName, e.countryName = e.addressCountiesThirdStageName, delete e.addressCountiesThirdStageName, e.detailInfo = e.addressDetailInfo, delete e.addressDetailInfo, e
    }

    function c(e, n, i) {
        "openEnterpriseChat" == e && (n.errCode = n.err_code), delete n.err_code, delete n.err_desc, delete n.err_detail;
        var t = n.errMsg;
        t || (t = n.err_msg, delete n.err_msg, t = s(e, t), n.errMsg = t), (i = i || {})._complete && (i._complete(n), delete i._complete), t = n.errMsg || "", C.debug && !i.isInnerInvoke && alert(JSON.stringify(n));
        var o = t.indexOf(":");
        switch (t.substring(o + 1)) {
            case"ok":
                i.success && i.success(n);
                break;
            case"cancel":
                i.cancel && i.cancel(n);
                break;
            default:
                i.fail && i.fail(n)
        }
        i.complete && i.complete(n)
    }

    function s(e, n) {
        var i = e, t = v[i];
        t && (i = t);
        var o = "ok";
        if (n) {
            var r = n.indexOf(":");
            "confirm" == (o = n.substring(r + 1)) && (o = "ok"), "failed" == o && (o = "fail"), -1 != o.indexOf("failed_") && (o = o.substring(7)), -1 != o.indexOf("fail_") && (o = o.substring(5)), "access denied" != (o = (o = o.replace(/_/g, " ")).toLowerCase()) && "no permission to execute" != o || (o = "permission denied"), "config" == i && "function not exist" == o && (o = "ok"), "" == o && (o = "fail")
        }
        return n = i + ":" + o
    }

    function d(e) {
        if (e) {
            for (var n = 0, i = e.length; n < i; ++n) {
                var t = e[n], o = h[t];
                o && (e[n] = o)
            }
            return e
        }
    }

    function u(e, n) {
        if (!(!C.debug || n && n.isInnerInvoke)) {
            var i = v[e];
            i && (e = i), n && n._complete && delete n._complete, console.log('"' + e + '",', n || "")
        }
    }

    function l(e) {
        if (!(w || T || C.debug || x < "6.0.2" || A.systemType < 0)) {
            var n = new Image;
            A.appId = C.appId, A.initTime = V.initEndTime - V.initStartTime, A.preVerifyTime = V.preVerifyEndTime - V.preVerifyStartTime, N.getNetworkType({
                isInnerInvoke: !0,
                success: function (e) {
                    A.networkType = e.networkType;
                    var i = "https://open.weixin.qq.com/sdk/report?v=" + A.version + "&o=" + A.isPreVerifyOk + "&s=" + A.systemType + "&c=" + A.clientVersion + "&a=" + A.appId + "&n=" + A.networkType + "&i=" + A.initTime + "&p=" + A.preVerifyTime + "&u=" + A.url;
                    n.src = i
                }
            })
        }
    }

    function p() {
        return (new Date).getTime()
    }

    function f(n) {
        k && (e.WeixinJSBridge ? "preInject" === I.__wxjsjs__isPreInject ? I.addEventListener && I.addEventListener("WeixinJSBridgeReady", n, !1) : n() : I.addEventListener && I.addEventListener("WeixinJSBridgeReady", n, !1))
    }

    function m() {
        N.invoke || (N.invoke = function (n, i, t) {
            e.WeixinJSBridge && WeixinJSBridge.invoke(n, o(i), t)
        }, N.on = function (n, i) {
            e.WeixinJSBridge && WeixinJSBridge.on(n, i)
        })
    }

    function g(e) {
        if ("string" == typeof e && e.length > 0) {
            var n = e.split("?")[0], i = e.split("?")[1];
            return n += ".html", void 0 !== i ? n + "?" + i : n
        }
    }

    if (!e.jWeixin) {
        var h = {
                config: "preVerifyJSAPI",
                onMenuShareTimeline: "menu:share:timeline",
                onMenuShareAppMessage: "menu:share:appmessage",
                onMenuShareQQ: "menu:share:qq",
                onMenuShareWeibo: "menu:share:weiboApp",
                onMenuShareQZone: "menu:share:QZone",
                previewImage: "imagePreview",
                getLocation: "geoLocation",
                openProductSpecificView: "openProductViewWithPid",
                addCard: "batchAddCard",
                openCard: "batchViewCard",
                chooseWXPay: "getBrandWCPayRequest",
                openEnterpriseRedPacket: "getRecevieBizHongBaoRequest",
                startSearchBeacons: "startMonitoringBeacons",
                stopSearchBeacons: "stopMonitoringBeacons",
                onSearchBeacons: "onBeaconsInRange",
                consumeAndShareCard: "consumedShareCard",
                openAddress: "editAddress"
            }, v = function () {
                var e = {};
                for (var n in h)e[h[n]] = n;
                return e
            }(), I = e.document, S = I.title, y = navigator.userAgent.toLowerCase(), _ = navigator.platform.toLowerCase(),
            w = !(!_.match("mac") && !_.match("win")), T = -1 != y.indexOf("wxdebugger"),
            k = -1 != y.indexOf("micromessenger"), M = -1 != y.indexOf("android"),
            P = -1 != y.indexOf("iphone") || -1 != y.indexOf("ipad"), x = function () {
                var e = y.match(/micromessenger\/(\d+\.\d+\.\d+)/) || y.match(/micromessenger\/(\d+\.\d+)/);
                return e ? e[1] : ""
            }(), V = {initStartTime: p(), initEndTime: 0, preVerifyStartTime: 0, preVerifyEndTime: 0}, A = {
                version: 1,
                appId: "",
                initTime: 0,
                preVerifyTime: 0,
                networkType: "",
                isPreVerifyOk: 1,
                systemType: P ? 1 : M ? 2 : -1,
                clientVersion: x,
                url: encodeURIComponent(location.href)
            }, C = {}, L = {_completes: []}, B = {state: 0, data: {}};
        f(function () {
            V.initEndTime = p()
        });
        var O = !1, E = [], N = {
            config: function (e) {
                C = e, u("config", e);
                var n = !1 !== C.check;
                f(function () {
                    if (n) i(h.config, {verifyJsApiList: d(C.jsApiList)}, function () {
                        L._complete = function (e) {
                            V.preVerifyEndTime = p(), B.state = 1, B.data = e
                        }, L.success = function (e) {
                            A.isPreVerifyOk = 0
                        }, L.fail = function (e) {
                            L._fail ? L._fail(e) : B.state = -1
                        };
                        var e = L._completes;
                        return e.push(function () {
                            l()
                        }), L.complete = function (n) {
                            for (var i = 0, t = e.length; i < t; ++i)e[i]();
                            L._completes = []
                        }, L
                    }()), V.preVerifyStartTime = p(); else {
                        B.state = 1;
                        for (var e = L._completes, t = 0, o = e.length; t < o; ++t)e[t]();
                        L._completes = []
                    }
                }), m()
            }, ready: function (e) {
                0 != B.state ? e() : (L._completes.push(e), !k && C.debug && e())
            }, error: function (e) {
                x < "6.0.2" || (-1 == B.state ? e(B.data) : L._fail = e)
            }, checkJsApi: function (e) {
                var n = function (e) {
                    var n = e.checkResult;
                    for (var i in n) {
                        var t = v[i];
                        t && (n[t] = n[i], delete n[i])
                    }
                    return e
                };
                i("checkJsApi", {jsApiList: d(e.jsApiList)}, (e._complete = function (e) {
                    if (M) {
                        var i = e.checkResult;
                        i && (e.checkResult = JSON.parse(i))
                    }
                    e = n(e)
                }, e))
            }, onMenuShareTimeline: function (e) {
                t(h.onMenuShareTimeline, {
                    complete: function () {
                        i("shareTimeline", {
                            title: e.title || S,
                            desc: e.title || S,
                            img_url: e.imgUrl || "",
                            link: e.link || location.href,
                            type: e.type || "link",
                            data_url: e.dataUrl || ""
                        }, e)
                    }
                }, e)
            }, onMenuShareAppMessage: function (e) {
                t(h.onMenuShareAppMessage, {
                    complete: function () {
                        i("sendAppMessage", {
                            title: e.title || S,
                            desc: e.desc || "",
                            link: e.link || location.href,
                            img_url: e.imgUrl || "",
                            type: e.type || "link",
                            data_url: e.dataUrl || ""
                        }, e)
                    }
                }, e)
            }, onMenuShareQQ: function (e) {
                t(h.onMenuShareQQ, {
                    complete: function () {
                        i("shareQQ", {
                            title: e.title || S,
                            desc: e.desc || "",
                            img_url: e.imgUrl || "",
                            link: e.link || location.href
                        }, e)
                    }
                }, e)
            }, onMenuShareWeibo: function (e) {
                t(h.onMenuShareWeibo, {
                    complete: function () {
                        i("shareWeiboApp", {
                            title: e.title || S,
                            desc: e.desc || "",
                            img_url: e.imgUrl || "",
                            link: e.link || location.href
                        }, e)
                    }
                }, e)
            }, onMenuShareQZone: function (e) {
                t(h.onMenuShareQZone, {
                    complete: function () {
                        i("shareQZone", {
                            title: e.title || S,
                            desc: e.desc || "",
                            img_url: e.imgUrl || "",
                            link: e.link || location.href
                        }, e)
                    }
                }, e)
            }, startRecord: function (e) {
                i("startRecord", {}, e)
            }, stopRecord: function (e) {
                i("stopRecord", {}, e)
            }, onVoiceRecordEnd: function (e) {
                t("onVoiceRecordEnd", e)
            }, playVoice: function (e) {
                i("playVoice", {localId: e.localId}, e)
            }, pauseVoice: function (e) {
                i("pauseVoice", {localId: e.localId}, e)
            }, stopVoice: function (e) {
                i("stopVoice", {localId: e.localId}, e)
            }, onVoicePlayEnd: function (e) {
                t("onVoicePlayEnd", e)
            }, uploadVoice: function (e) {
                i("uploadVoice", {localId: e.localId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1}, e)
            }, downloadVoice: function (e) {
                i("downloadVoice", {serverId: e.serverId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1}, e)
            }, translateVoice: function (e) {
                i("translateVoice", {localId: e.localId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1}, e)
            }, chooseImage: function (e) {
                i("chooseImage", {
                    scene: "1|2",
                    count: e.count || 9,
                    sizeType: e.sizeType || ["original", "compressed"],
                    sourceType: e.sourceType || ["album", "camera"]
                }, (e._complete = function (e) {
                    if (M) {
                        var n = e.localIds;
                        n && (e.localIds = JSON.parse(n))
                    }
                }, e))
            }, getLocation: function (e) {
            }, previewImage: function (e) {
                i(h.previewImage, {current: e.current, urls: e.urls}, e)
            }, uploadImage: function (e) {
                i("uploadImage", {localId: e.localId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1}, e)
            }, downloadImage: function (e) {
                i("downloadImage", {serverId: e.serverId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1}, e)
            }, getLocalImgData: function (e) {
                !1 === O ? (O = !0, i("getLocalImgData", {localId: e.localId}, (e._complete = function (e) {
                    if (O = !1, E.length > 0) {
                        var n = E.shift();
                        wx.getLocalImgData(n)
                    }
                }, e))) : E.push(e)
            }, getNetworkType: function (e) {
                var n = function (e) {
                    var n = e.errMsg;
                    e.errMsg = "getNetworkType:ok";
                    var i = e.subtype;
                    if (delete e.subtype, i) e.networkType = i; else {
                        var t = n.indexOf(":"), o = n.substring(t + 1);
                        switch (o) {
                            case"wifi":
                            case"edge":
                            case"wwan":
                                e.networkType = o;
                                break;
                            default:
                                e.errMsg = "getNetworkType:fail"
                        }
                    }
                    return e
                };
                i("getNetworkType", {}, (e._complete = function (e) {
                    e = n(e)
                }, e))
            }, openLocation: function (e) {
                i("openLocation", {
                    latitude: e.latitude,
                    longitude: e.longitude,
                    name: e.name || "",
                    address: e.address || "",
                    scale: e.scale || 28,
                    infoUrl: e.infoUrl || ""
                }, e)
            }, getLocation: function (e) {
                e = e || {}, i(h.getLocation, {type: e.type || "wgs84"}, (e._complete = function (e) {
                    delete e.type
                }, e))
            }, hideOptionMenu: function (e) {
                i("hideOptionMenu", {}, e)
            }, showOptionMenu: function (e) {
                i("showOptionMenu", {}, e)
            }, closeWindow: function (e) {
                i("closeWindow", {}, e = e || {})
            }, hideMenuItems: function (e) {
                i("hideMenuItems", {menuList: e.menuList}, e)
            }, showMenuItems: function (e) {
                i("showMenuItems", {menuList: e.menuList}, e)
            }, hideAllNonBaseMenuItem: function (e) {
                i("hideAllNonBaseMenuItem", {}, e)
            }, showAllNonBaseMenuItem: function (e) {
                i("showAllNonBaseMenuItem", {}, e)
            }, scanQRCode: function (e) {
                i("scanQRCode", {
                    needResult: (e = e || {}).needResult || 0,
                    scanType: e.scanType || ["qrCode", "barCode"]
                }, (e._complete = function (e) {
                    if (P) {
                        var n = e.resultStr;
                        if (n) {
                            var i = JSON.parse(n);
                            e.resultStr = i && i.scan_code && i.scan_code.scan_result
                        }
                    }
                }, e))
            }, openAddress: function (e) {
                i(h.openAddress, {}, (e._complete = function (e) {
                    e = a(e)
                }, e))
            }, openProductSpecificView: function (e) {
                i(h.openProductSpecificView, {pid: e.productId, view_type: e.viewType || 0, ext_info: e.extInfo}, e)
            }, addCard: function (e) {
                for (var n = e.cardList, t = [], o = 0, r = n.length; o < r; ++o) {
                    var a = n[o], c = {card_id: a.cardId, card_ext: a.cardExt};
                    t.push(c)
                }
                i(h.addCard, {card_list: t}, (e._complete = function (e) {
                    var n = e.card_list;
                    if (n) {
                        for (var i = 0, t = (n = JSON.parse(n)).length; i < t; ++i) {
                            var o = n[i];
                            o.cardId = o.card_id, o.cardExt = o.card_ext, o.isSuccess = !!o.is_succ, delete o.card_id, delete o.card_ext, delete o.is_succ
                        }
                        e.cardList = n, delete e.card_list
                    }
                }, e))
            }, chooseCard: function (e) {
                i("chooseCard", {
                    app_id: C.appId,
                    location_id: e.shopId || "",
                    sign_type: e.signType || "SHA1",
                    card_id: e.cardId || "",
                    card_type: e.cardType || "",
                    card_sign: e.cardSign,
                    time_stamp: e.timestamp + "",
                    nonce_str: e.nonceStr
                }, (e._complete = function (e) {
                    e.cardList = e.choose_card_info, delete e.choose_card_info
                }, e))
            }, openCard: function (e) {
                for (var n = e.cardList, t = [], o = 0, r = n.length; o < r; ++o) {
                    var a = n[o], c = {card_id: a.cardId, code: a.code};
                    t.push(c)
                }
                i(h.openCard, {card_list: t}, e)
            }, consumeAndShareCard: function (e) {
                i(h.consumeAndShareCard, {consumedCardId: e.cardId, consumedCode: e.code}, e)
            }, chooseWXPay: function (e) {
                i(h.chooseWXPay, r(e), e)
            }, openEnterpriseRedPacket: function (e) {
                i(h.openEnterpriseRedPacket, r(e), e)
            }, startSearchBeacons: function (e) {
                i(h.startSearchBeacons, {ticket: e.ticket}, e)
            }, stopSearchBeacons: function (e) {
                i(h.stopSearchBeacons, {}, e)
            }, onSearchBeacons: function (e) {
                t(h.onSearchBeacons, e)
            }, openEnterpriseChat: function (e) {
                i("openEnterpriseChat", {useridlist: e.userIds, chatname: e.groupName}, e)
            }, launchMiniProgram: function (e) {
                i("launchMiniProgram", {targetAppId: e.targetAppId, path: g(e.path), envVersion: e.envVersion}, e)
            }, miniProgram: {
                navigateBack: function (e) {
                    i("invokeMiniProgramAPI", {name: "navigateBack", arg: {delta: (e = e || {}).delta || 1}}, e)
                }, navigateTo: function (e) {
                    i("invokeMiniProgramAPI", {name: "navigateTo", arg: {url: e.url}}, e)
                }, redirectTo: function (e) {
                    i("invokeMiniProgramAPI", {name: "redirectTo", arg: {url: e.url}}, e)
                }, switchTab: function (e) {
                    i("invokeMiniProgramAPI", {name: "switchTab", arg: {url: e.url}}, e)
                }, reLaunch: function (e) {
                    i("invokeMiniProgramAPI", {name: "reLaunch", arg: {url: e.url}}, e)
                }
            }
        }, b = 1, R = {};
        return I.addEventListener("error", function (e) {
            if (!M) {
                var n = e.target, i = n.tagName, t = n.src;
                if (("IMG" == i || "VIDEO" == i || "AUDIO" == i || "SOURCE" == i) && -1 != t.indexOf("wxlocalresource://")) {
                    e.preventDefault(), e.stopPropagation();
                    var o = n["wx-id"];
                    if (o || (o = b++, n["wx-id"] = o), R[o])return;
                    R[o] = !0, wx.ready(function () {
                        wx.getLocalImgData({
                            localId: t, success: function (e) {
                                n.src = e.localData
                            }
                        })
                    })
                }
            }
        }, !0), I.addEventListener("load", function (e) {
            if (!M) {
                var n = e.target, i = n.tagName;
                n.src;
                if ("IMG" == i || "VIDEO" == i || "AUDIO" == i || "SOURCE" == i) {
                    var t = n["wx-id"];
                    t && (R[t] = !1)
                }
            }
        }, !0), n && (e.wx = e.jWeixin = N), N
    }
});
/*---*/

/* Native Object Extensions */
!function(){
    Date.prototype.normByFormat = function () {
        return {
            'yyyy': this.getFullYear(),
            'yy': this.getFullYear().toString().slice(-2),
            'MM': this.getMonth() + 1,
            'dd': this.getDate(),
            'hh': this.getHours(),
            'mm': this.getMinutes(),
            'ss': this.getSeconds()
        }
    }
    String.prototype.query = function (name) {
        var reg = new RegExp('(?:\\?|&)' + name + '=([^&]+)'),
            res = this.match(reg);
        return res ? res[1] : '';
    }

    //数组交集
    Array.intersection = function(array) {
        if (array == null) return [];
        var result = [];
        var argsLength = arguments.length;
        for (var i = 0, length = array.length; i < length; i++) {
            var item = array[i];
            if (result.indexOf(item) > -1) continue;
            for (var j = 1; j < argsLength; j++) {
                if (arguments[j].indexOf(item)<0 ) break;
            }
            if (j === argsLength) result.push(item);
        }
        return result;
    };

}();

//使用requestAnimationFrame重写setTimeout和setInterval来改善性能
!function(){var b,a=["ms","moz","webkit","o"];for(b=0;b<a.length;++b)window.requestAnimationFrame=window[a[b]+"RequestAnimationFrame"],window.cancelRequestAnimationFrame=window[a[b]+"CancelRequestAnimationFrame"];window.requestAnimationFrame&&(window.setInterval=function(){var a=[],b=function(d){var e,f,g;for(e=0,f=a.length;f>e;e++)g=a[e],d-g.lastFrame>=g.interval&&(g.lastFrame=d,g.callback());c.__id=window.requestAnimationFrame(b)},c=function(d,e){if(d){var f=(new Date).getTime(),g=f+"_"+Math.random();return a.push({id:g,callback:d,lastFrame:f,interval:e}),c.__id||b((new Date).getTime()),g}};return c.__list=a,c}(),window.clearInterval=function(a){var c,d,e,b=window.setInterval.__list;for(c=0,d=b.length;d>c;c++)e=b[c],e.id==a&&b.splice(c,1);b.length||(window.cancelAnimationFrame(window.setInterval.__id),window.setInterval.__id=null)},window.setTimeout=function(){var a=[],b=function(d){var e,f,g;for(e=0,f=a.length;f>e;e++)g=a[e],d-g.lastFrame>=g.interval&&(g.callback(),a.splice(e,1));return a.length?(c.__id=window.requestAnimationFrame(b),void 0):(window.cancelAnimationFrame(window.setTimeout.__id),window.setTimeout.__id=null,void 0)},c=function(d,e){if(d){var f=(new Date).getTime(),g=f+"_"+Math.random();return a.push({id:g,callback:d,lastFrame:f,interval:e}),c.__id||b((new Date).getTime()),g}};return c.__list=a,c}(),window.clearTimeout=function(a){var c,d,e,b=window.setTimeout.__list;for(c=0,d=b.length;d>c;c++)e=b[c],e.id==a&&b.splice(c,1);b.length||(window.cancelAnimationFrame(window.setTimeout.__id),window.setTimeout.__id=null)})}();

//Array的ECMA-262新标准扩展方法,兼容旧环境
Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){var c,d,e,f;if(null==this)throw new TypeError('"this" is null or not defined');if(d=Object(this),e=d.length>>>0,0===e)return-1;if(f=+b||0,1/0===Math.abs(f)&&(f=0),f>=e)return-1;for(c=Math.max(f>=0?f:e-Math.abs(f),0);e>c;){if(c in d&&d[c]===a)return c;c++}return-1}),Array.prototype.filter||(Array.prototype.filter=function(a){"use strict";var b,c,d,e,f,g;if(void 0===this||null===this)throw new TypeError;if(b=Object(this),c=b.length>>>0,"function"!=typeof a)throw new TypeError;for(d=[],e=arguments.length>=2?arguments[1]:void 0,f=0;c>f;f++)f in b&&(g=b[f],a.call(e,g,f,b)&&d.push(g));return d}),Array.prototype.map||(Array.prototype.map=function(a,b){var c,d,e,f,g,h,i;if(null==this)throw new TypeError(" this is null or not defined");if(f=Object(this),g=f.length>>>0,"[object Function]"!=Object.prototype.toString.call(a))throw new TypeError(a+" is not a function");for(b&&(c=b),d=new Array(g),e=0;g>e;)e in f&&(h=f[e],i=a.call(c,h,e,f),d[e]=i),e++;return d}),"function"!=typeof Array.prototype.reduce&&(Array.prototype.reduce=function(a,b){"use strict";if(null===this||"undefined"==typeof this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof a)throw new TypeError(a+" is not a function");var c,d,e=this.length>>>0,f=!1;for(1<arguments.length&&(d=b,f=!0),c=0;e>c;++c)this.hasOwnProperty(c)&&(f?d=a(d,this[c],c,this):(d=this[c],f=!0));if(!f)throw new TypeError("Reduce of empty array with no initial value");return d}),Array.prototype.every||(Array.prototype.every=function(a){"use strict";var b,c,d,e;if(void 0===this||null===this)throw new TypeError;if(b=Object(this),c=b.length>>>0,"function"!=typeof a)throw new TypeError;for(d=arguments.length>=2?arguments[1]:void 0,e=0;c>e;e++)if(e in b&&!a.call(d,b[e],e,b))return!1;return!0}),Array.prototype.find||(Array.prototype.find=function(a){"use strict";var b,c,d,e,f;if(null==this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof a)throw new TypeError("predicate must be a function");for(b=Object(this),c=b.length>>>0,d=arguments[1],f=0;c>f;f++)if(e=b[f],a.call(d,e,f,b))return e;return void 0}),Array.prototype.findIndex||(Array.prototype.findIndex=function(a){var b,c,d,e,f;if(null===this)throw new TypeError("Array.prototype.findIndex called on null or undefined");if("function"!=typeof a)throw new TypeError("predicate must be a function");for(b=Object(this),c=b.length>>>0,d=arguments[1],f=0;c>f;f++)if(e=b[f],a.call(d,e,f,b))return f;return-1}),Array.prototype.includes||(Array.prototype.includes=function(a){"use strict";var b,c,d,e,f;if(null==this)throw new TypeError("Array.prototype.includes called on null or undefined");if(b=Object(this),c=parseInt(b.length,10)||0,0===c)return!1;for(d=parseInt(arguments[1],10)||0,d>=0?e=d:(e=c+d,0>e&&(e=0));c>e;){if(f=b[e],a===f||a!==a&&f!==f)return!0;e++}return!1}),Array.prototype.forEach||(Array.prototype.forEach=function(a,b){var c,d,e,f,g;if(null==this)throw new TypeError(" this is null or not defined");if(e=Object(this),f=e.length>>>0,"function"!=typeof a)throw new TypeError(a+" is not a function");for(arguments.length>1&&(c=b),d=0;f>d;)d in e&&(g=e[d],a.call(c,g,d,e)),d++});

if (!Function.prototype.bind) {
    Function.prototype.bind = function(oThis) {
        if (typeof this !== 'function') {
            // closest thing possible to the ECMAScript 5
            // internal IsCallable function
            throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
        }

        var aArgs   = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNOP    = function() {},
            fBound  = function() {
                return fToBind.apply(this instanceof fNOP
                        ? this
                        : oThis,
                    aArgs.concat(Array.prototype.slice.call(arguments)));
            };

        if (this.prototype) {
            // Function.prototype doesn't have a prototype property
            fNOP.prototype = this.prototype;
        }
        fBound.prototype = new fNOP();

        return fBound;
    };
}

!function (basePX, unitPX, maxFontSize) {
    function flexFn() {
        var _fontSize = Math.min((_boundingSupport ? _htmlEl[_getBoundingClientRect]().width : _win.innerWidth) / (basePX / unitPX), maxFontSize);
        _fontSize != _tempFontSize && (_styleEl.innerHTML = "html{font-size:" + _fontSize + "px!important;" + _cssTextAdjust + "}", _tempFontSize = _fontSize)
    }

    function _timerFn() {
        clearTimeout(_timer);
        _timer = setTimeout(flexFn, 500);
    }

    var _timer, _doc = document, _htmlEl = _doc.documentElement, _win = window, _addEventListener = "addEventListener",
        _getBoundingClientRect = "getBoundingClientRect",
        _pageshow = "pageshow",
        _headEl = _doc.head || _doc.getElementsByTagName("HEAD")[0],
        _styleEl = _doc.createElement("STYLE"),
        _textSizeAdjust = "text-size-adjust:100%;",
        _cssTextAdjust = "-webkit-" + _textSizeAdjust + "-moz-" + _textSizeAdjust + "-ms-" + _textSizeAdjust + "-o-" + _textSizeAdjust + _textSizeAdjust,
        _boundingSupport = _getBoundingClientRect in _htmlEl,
        _tempFontSize = null;

    basePX = basePX || 750;
    unitPX = unitPX || 100;
    maxFontSize = maxFontSize || 100;

    _headEl.appendChild(_styleEl);

    _doc[_addEventListener]("DOMContentLoaded", flexFn, false);

    ( "on" + _pageshow in _win)?
        _win[_addEventListener](_pageshow, function (evt) {
            evt.persisted && _timerFn()
        }, false)  :
        _win[_addEventListener]("load", _timerFn, false);
    _win[_addEventListener]("resize", _timerFn, false);
    flexFn();
}(6000, 800, 800);

/*
 * android禁止微信浏览器调整字体大小

 *  这种方法会导致网页延迟大约1S

 */
(function () {

    if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {

        handleFontSize();

    } else {
        if (document.addEventListener) {

            document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);

        } else if (document.attachEvent) {

            document.attachEvent("WeixinJSBridgeReady", handleFontSize);

            document.attachEvent("onWeixinJSBridgeReady", handleFontSize);

        }

    }

    function handleFontSize() {

        // 设置网页字体为默认大小
        WeixinJSBridge.invoke('setFontSizeCallback', {

            'fontSize': 0

        });


        // 重写设置网页字体大小的事件
        WeixinJSBridge.on('menu:setfont', function () {

            WeixinJSBridge.invoke('setFontSizeCallback', {

                'fontSize': 0

            });

        });

    }
})();


/*--growing io- track-*/
!function(){
    var _vds = _vds || [];
    window._vds = _vds;

    _vds.push(['setAccountId', 'ab9bcf3bb34aeeea']);
    (function() {
        var vds = document.createElement('script');
        vds.type='text/javascript';
        vds.async = true;
        vds.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'dn-growing.qbox.me/vds.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(vds, s);
    })();
    !function e(t,o,n){function r(l,c){if(!o[l]){if(!t[l]){var a="function"==typeof require&&require;if(!c&&a)return a(l,!0);if(i)return i(l,!0);throw new Error("Cannot find module '"+l+"'")}var s=o[l]={exports:{}};t[l][0].call(s.exports,function(e){var o=t[l][1][e];return r(o?o:e)},s,s.exports,e,t,o,n)}return o[l].exports}for(var i="function"==typeof require&&require,l=0;l<n.length;l++)r(n[l]);return r}({1:[function(e,t,o){var n,r;r=e("cookie"),n=function(){function e(){}return e.get=function(e){var t;try{return window.localStorage?this._readFromLocalStorage(e):this._readFromCookie(e)}catch(o){return t=o,null}},e.set=function(e,t,o){var n;null==o&&(o=864e5);try{return window.localStorage?this._setInLocalStorage(e,t,o):this._setInCookie(e,t,o/1e3)}catch(r){return n=r,null}},e._readFromCookie=function(e){return r.getItem(e)},e._setInCookie=function(e,t,o){return r.setItem(e,t,o,"/",window.location.hostname)},e._readFromLocalStorage=function(e){var t,o;return o=window.localStorage.getItem(e),o?(t=JSON.parse(o),t.expiredAt&&+t.expiredAt>=+Date.now()?t.value:null):null},e._setInLocalStorage=function(e,t,o){return window.localStorage.setItem(e,JSON.stringify({expiredAt:+Date.now()+o,value:t}))},e}(),window.GrLocalStore=n,t.exports=n},{cookie:6}],2:[function(e,t,o){var n,r;e("./gr_local_store"),n=e("./plugin_loader"),r=new n,r.beginLoad()},{"./gr_local_store":1,"./plugin_loader":4}],3:[function(e,t,o){var n,r;r=e("./util"),n=function(){function e(){this.bind()}return e.prototype.bind=function(){return r.bind(window,"message",function(e){return function(t){var o;if(o=t.data,o.ai===window.vds.accountId&&(t.origin===window.vds.origin||-1!==r.indexOf(["www.growingio.com","growingio.com"],t.origin.split("://")[1])||window.GrLocalStore.get("gr_circle")))switch(t.origin!==window.vds.origin&&(window.vds.origin=t.origin),o.mode){case"mobile-circle-mode":return e.startCircle();case"mobile-browse-mode":return e.stopCircle()}}}(this))},e.prototype.startCircle=function(){var e,t,o,n,r;if(!this.pluginLoaded)for(n=document.getElementsByTagName("script"),t=0,o=n.length;o>t;t++)if(e=n[t],r=e.getAttribute("src"),null!=r&&-1!==r.indexOf("/wx-circle-plugin.js")){this.pluginLoaded=!0;break}return this.pluginLoaded?this.publishCircle():void 0},e.prototype.stopCircle=function(){return"undefined"!=typeof CircleEvents&&null!==CircleEvents?CircleEvents.publish("circle:stop"):void 0},e.prototype.publishCircle=function(){return"undefined"!=typeof CircleEvents&&null!==CircleEvents?CircleEvents.publish("circle:start"):setTimeout(function(e){return function(){return e.publishCircle()}}(this),2e3)},e}(),t.exports=n},{"./util":5}],4:[function(e,t,o){var n,r,i,l=function(e,t){return function(){return e.apply(t,arguments)}};i=e("./util"),n=e("./message_handler"),r=function(){function e(){this.loadPlugin=l(this.loadPlugin,this),this.checkVdsForLoadPlugin=l(this.checkVdsForLoadPlugin,this),this.beginMobileCircle=l(this.beginMobileCircle,this),this.failToLoadPlugin=l(this.failToLoadPlugin,this),this.cancelSDKLoad=l(this.cancelSDKLoad,this),this.goBackAppList=l(this.goBackAppList,this)}var t;return t="https://growing.ufilesec.ucloud.cn/sdk/wx",e.prototype.beginLoad=function(){return console.log("beginLoad"),this.beginLoad.done?void 0:(this.beginLoad.done=!0,this.registerCircleHandler())},e.prototype.registerCircleHandler=function(){var e,t,o,n,r,l,c,a;return o=!1,r=window.GrLocalStore.get("gr_circle"),a=window.GrLocalStore.get("gr_project_id"),l=window.GrLocalStore.get("gr_token"),c=window.GrLocalStore.get("gr_login_token"),window.project={id:a},t=i.fetchGetParameterByNameFromUrl("gr_login_token"),console.log("store_gr_circle: "+r),console.log("store_project_id: "+a),console.log("store_login_token: "+c),console.log("gr_login_token: "+t),console.log("login_token store != gr: "+(c!==t)),r&&a&&l&&(t?c===t&&(o=!0):o=!0,console.log("gr_login_token",t),console.log("hasStoredMobileCircleData",o),o&&this.checkVdsForLoadPlugin()),e=i.fetchGetParameterByNameFromUrl("gr_circle"),n=i.fetchGetParameterByNameFromUrl("gr_project_id"),e&&n&&t?this.beginMobileCircle(o):void 0},e.prototype.goBackAppList=function(){return window.location.href="http://www.growingio.com/apps/"},e.prototype.cancelSDKLoad=function(){var e;return e=document.getElementById("dialogNode"),document.body.removeChild(e)},e.prototype.failToLoadPlugin=function(){return i.showDialog("您的圈选授权已失效，请您重新申请圈选授权",this.goBackAppList,this.cancelSDKLoad)},e.prototype.beginMobileCircle=function(e){var t,o,n,r;return console.log("hasStoredMobileCircleData: "+e),e?void 0:(t=i.fetchGetParameterByNameFromUrl("gr_circle"),n=i.fetchGetParameterByNameFromUrl("gr_project_id"),o=i.fetchGetParameterByNameFromUrl("gr_login_token"),t&&n&&o?(r=new XMLHttpRequest,r.open("POST","https://accounts.growingio.com/oauth/access_token"),r.addEventListener("load",function(e){return function(r){var i,l;return l=r.target,console.log("xhr.readyState: "+r.target.readyState),console.log("xhr.responseText: "+r.target.responseText),4===l.readyState?(i=JSON.parse(l.responseText),i.accessToken?(window.GrLocalStore.set("gr_project_id",n),window.GrLocalStore.set("gr_circle",t),window.GrLocalStore.set("gr_token",i.accessToken),window.GrLocalStore.set("gr_login_token",o),console.log("set gr_circle",t),window.project={id:i.projectId},e.checkVdsForLoadPlugin()):void e.failToLoadPlugin()):void e.failToLoadPlugin()}}(this)),r.addEventListener("error",function(e){return function(t){console.log("error xhr.responseText: "+t.target.responseText),e.failToLoadPlugin()}}(this)),r.addEventListener("abort",function(e){return function(t){console.log("abort xhr.responseText: "+t.target.responseText),e.failToLoadPlugin()}}(this)),r.send(JSON.stringify({grantType:"login_token",loginToken:o})),console.log("send gr_login_token: "+o)):void 0)},e.prototype.checkVdsForLoadPlugin=function(){return console.log("checkVdsForLoadPlugin:"+window.vds),window.vds&&window.vds.accountId?this.loadPlugin():setTimeout(this.checkVdsForLoadPlugin,1e3)},e.prototype.loadPlugin=function(){var e,o,r,i,l,c,a;for(this.pluginLoaded=!1,this.messageHandler=new n,c=document.getElementsByTagName("script"),i=0,l=c.length;l>i;i++)if(r=c[i],a=r.getAttribute("src"),null!=a&&-1!==a.indexOf("/wx-circle-plugin.js")){this.pluginLoaded=!0;break}return this.pluginLoaded?void 0:(e=document.createElement("script"),e.type="text/javascript",e.charset="UTF-8",e.src=t+"/wx-circle-plugin.js",document.head.appendChild(e),o=document.createElement("link"),o.rel="stylesheet",o.href=t+"/wx-circle-plugin.css",document.head.appendChild(o))},e}(),t.exports=r},{"./message_handler":3,"./util":5}],5:[function(e,t,o){var n;n={fetchGetParameterByNameFromUrl:function(e,t){var o,n;return t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&"),o=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),n=o.exec(t),n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null},indexOf:function(e,t){var o,n,r;if(null!=Array.prototype.indexOf)return e.indexOf(t);for(n=e.length,o=-1;++o<n;)if(r=e[o],r===t)return o;return-1},bind:function(e,t,o,n){return null==n&&(n=!1),null!=document.addEventListener?e.addEventListener(t,o,n):null!=document.attachEvent?e.attachEvent("on"+t,function(){var t;return t=window.event,t.currentTarget=e,t.target=t.srcElement,o.call(e,t)}):e["on"+t]=o},unbind:function(e,t,o,n){var r;if(null!=e)return null!=document.removeEventListener?e.removeEventListener(t,o,n):null!=document.detachEvent?(r=t+o,e.detachEvent("on"+t,e[r]),e[r]=null,e["e"+r]=null):e["on"+t]=null,!0},bindOnce:function(e,t,o,r){return null==r&&(r=!1),n.unbind(e,t,o,r),n.bind(e,t,o,r)},showDialog:function(e,t,o){var r,i,l,c,a,s,d;return s="",r="",t&&(s='<span id="growingIOSDKOkButton" style="display:table-cell;width:50%;text-align:center;line-height:50px;height:50px;color:#39a3e2">确定</span>'),o&&(r='<span id="growingIOSDKCancelButton" style="display:table-cell;width:50%;text-align:center;line-height:50px;height:50px">取消</span>'),t&&o&&(d='<div style="display:table;width:100%;height:50px;position:absolute;top:60%">'+s+r+"</div>"),i=d?'<div style = "position:absolute;width:80%;height:150px;top:calc(50% - 100px);left:10%;background:#ffffff"><div style="width:80%;left:10%;height:100px;position:absolute; padding-top:10px;">'+e+"</div>"+d+"</div>":'<div style = "position:absolute;width:80%;height:100px;top:calc(50% -50px);left:10%;background:#ffffff">'+e+"</div>",l=document.createElement("div"),l.innerHTML=i,l.id="dialogNode",l.style.position="fixed",l.style.width="100%",l.style.height="100%",l.style.zIndex="9999999999",l.style.color="#4a4a4a",l.style.fontSize="14px",l.style.top="0px",l.style.left="0px",l.style.margin="0px",l.style.backgroundColor="rgba(0,0,0,0.7)",document.body.appendChild(l),a=document.getElementById("growingIOSDKOkButton"),c=document.getElementById("growingIOSDKCancelButton"),n.bindOnce(a,"click",t),n.bindOnce(c,"click",o)}},t.exports=n},{}],6:[function(e,t,o){var n={getItem:function(e){return e?decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null:null},setItem:function(e,t,o,n,r,i){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var l="";if(o)switch(o.constructor){case Number:l=o===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; expires="+new Date((new Date).getTime()+1e3*o).toUTCString();break;case String:l="; expires="+o;break;case Date:l="; expires="+o.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+l+(r?"; domain="+r:"")+(n?"; path="+n:"")+(i?"; secure":""),!0},removeItem:function(e,t,o){return this.hasItem(e)?(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(o?"; domain="+o:"")+(t?"; path="+t:""),!0):!1},hasItem:function(e){return e?new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie):!1},keys:function(){for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),t=e.length,o=0;t>o;o++)e[o]=decodeURIComponent(e[o]);return e}},r={getItem:n.getItem,removeItem:n.removeItem,hasItem:n.hasItem,keys:n.keys,setItem:function(e,t,o,r,i,l){for(var c=0;c<i.length&&(n.setItem(e,t,o,r,i[c],l),!n.getItem(e));c++);}};t.exports=r},{}]},{},[2]);
}();

function _require(url, onload) {
    var doc = document;
    var head = doc.head || (doc.getElementsByTagName("head")[0] || doc.documentElement);
    var node = doc.createElement("script");
    node.onload = onload;
    node.onerror = function() {
    };
    node.async = true;
    node.src = url[0];
    head.appendChild(node);
}

/*---*/

/*sensorsdata script*/
// (function(para) {
//     var p = para.sdk_url, n = para.name, w = window, d = document, s = 'script',x = null,y = null;
//     w['sensorsDataAnalytic201505'] = n;
//     w[n] = w[n] || function(a) {return function() {(w[n]._q = w[n]._q || []).push([a, arguments]);}};
//     var ifs = ['track','quick','register','registerPage','registerOnce','clearAllRegister','trackSignup', 'trackAbtest', 'setProfile','setOnceProfile','appendProfile', 'incrementProfile', 'deleteProfile', 'unsetProfile', 'identify','login','logout','trackLink','clearAllRegister'];
//     for (var i = 0; i < ifs.length; i++) {
//         w[n][ifs[i]] = w[n].call(null, ifs[i]);
//     }
//     if (!w[n]._t) {
//         x = d.createElement(s), y = d.getElementsByTagName(s)[0];
//         x.async = 1;
//         x.src = p;
//         y.parentNode.insertBefore(x, y);
//         w[n].para = para;
//     }
// })({
//     sdk_url: 'http://static.sensorsdata.cn/sdk/1.7.14/vtrack.min.js',
//     name: 'sa',
//     config_url: 'http://shubu.cloud.sensorsdata.cn:8006/config/',
//     web_url: 'https://shubu.cloud.sensorsdata.cn/',
//     server_url: 'http://shubu.cloud.sensorsdata.cn:8006/sa?token=a32d5b149ca713ee',
//     vtrack_js_file: 'http://static.sensorsdata.cn/sdk/1.7.14/vendor.min.js',
//     vtrack_css_file: 'http://static.sensorsdata.cn/sdk/1.7.14/vendor.min.css',
//     corss_subdomain:false,
//     debug_mode:false,
//     debug_mode_upload:false,
//     heatmap:{}
// });
// sa.quick('autoTrack');
/**/

console.log('232423sdasda');
