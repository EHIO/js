/**
 * Created by win7 on 2017/8/22.
 */
/**
 * 获取url中的请求参数
 * @returns {Object}
 */
function getRequestParams() {
    var url = window.location.search; //获取url中"?"符后的字符串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
