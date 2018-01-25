!function (win) {
  /* 设计图文档宽度 */
  var docWidth = 750;
  var doc = win.document,
  docEl = doc.documentElement,
  resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize';
  var recalc = (function refreshRem() {
    var clientWidth = docEl.getBoundingClientRect().width;
    /* 8.55：小于320px不再缩小，11.2：大于420px不再放大 */
    docEl.style.fontSize = Math.max(Math.min(20 * (clientWidth / docWidth), 11.2), 8.55) * 5 + 'px';
    return refreshRem;
  })();
  /* 添加倍屏标识，安卓为1 */
  docEl.setAttribute('data-dpr', win.navigator.appVersion.match(/iphone/gi) ? win.devicePixelRatio : 1);
  /* IOS8以上给html添加hairline样式，以便特殊处理 */
  if (/iP(hone|od|ad)/.test(win.navigator.userAgent)) {
    if (parseInt(win.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1], 10) >= 8)
      doc.documentElement.classList.add('hairline');
  }
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
}(window);

/* *
  * 解析matrix矩阵，0°-360°，返回旋转角度
  * 当a=b||-a=b,0<=deg<=180
  * 当-a+b=180,180<=deg<=270
  * 当a+b=180,270<=deg<=360
  * 当0<=deg<=180,deg=d;
  * 当180<deg<=270,deg=180+c;
  * 当270<deg<=360,deg=360-(c||d);
* */
function getmatrix(a,b,c,d,e,f){
    var aa=Math.round(180*Math.asin(a)/ Math.PI);
    var bb=Math.round(180*Math.acos(b)/ Math.PI);
    var cc=Math.round(180*Math.asin(c)/ Math.PI);
    var dd=Math.round(180*Math.acos(d)/ Math.PI);
    var deg=0;
    if(aa==bb||-aa==bb){
        deg=dd;
    }else if(-aa+bb==180){
        deg=180+cc;
    }else if(aa+bb==180){
        deg=360-cc||360-dd;
    }
    return deg>=360?0:deg;
    //return (aa+','+bb+','+cc+','+dd);
}
