/**
 * Created by win7 on 2017/8/22.
 */

/**
 * 处理金额， 以逗号分隔
 * @param nStr 要分隔的金额
 * @returns {string}
 *
 * addCommas(456789.12) = 456,789.12
 */
function addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        // 符合匹配的字符串会保存在正则对象的$1,$2属性中
        x1 = x1.replace(rgx, '$1,$2');
    }
    return x1 + x2;
}
