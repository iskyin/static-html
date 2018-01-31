$(function(){

  var fit=$('.fit');
  var ac=$('.ac');
  var max_pv=$('.max_pv');
  var max_rl=$('.max_rl');
  var nian=$('.nian');
  var dianke=$('.dianke');

  var patrn = /^\d+(\.\d+)?$/;

  fit.bind('input propertychange', function() {
    if( patrn.exec(fit.val()) ){
      fit.css('color',"#000");
      console.log('fit -> :',fit.val());
      inputVal();
    }else{
      fit.css('color',"red");
    }
  });

  ac.bind('input propertychange', function() {
    if( patrn.exec(ac.val()) ){
      ac.css('color',"#000");
      console.log('fit -> :',ac.val());
      inputVal();
    }else{
      ac.css('color',"red");
    }
  });


  nian.bind('input propertychange', function() {
    if( patrn.exec(nian.val()) ){
      nian.css('color',"#000");
      console.log('fit -> :',nian.val());
      inputVal();
    }else{
      nian.css('color',"red");
    }
  });


  function inputVal(){

    // PVシステム容量（最大）
    var max_pv_num=toDecimal2(ac.val()*24/0.8)
    max_pv.val(max_pv_num);

    // 蓄電池容量（最大）
    var max_rl_num=toDecimal2(ac.val()*24)
    max_rl.val(max_rl_num);

    // 売電収益
    var dianke_num=toDecimal2(ac.val()*24*365*fit.val()*nian.val())
    dianke.val(dianke_num);

  }



  //制保留2位小数，如：2，会在2后面补上00.即2.00
  function toDecimal2(x) {
    var f = parseFloat(x);
    if (isNaN(f)) {
      return false;
    }
    var f = Math.round(x*100)/100;
    var s = f.toString();
    var rs = s.indexOf('.');
    if (rs < 0) {
      rs = s.length;
      s += '.';
    }
    while (s.length <= rs + 2) {
      s += '0';
    }
    return s;
  }



})
