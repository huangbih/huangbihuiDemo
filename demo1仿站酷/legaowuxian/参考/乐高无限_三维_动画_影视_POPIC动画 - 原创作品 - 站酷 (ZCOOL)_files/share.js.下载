
ralateuid_tsina = "1733083617";
appkey_tsina = "163310332";
appkey_tqq = "100332598";

var ZWxShare = {
  init: function() {
    var url = (typeof shareZ !== "undefined" && shareZ.url) ? shareZ.url : location.href;
    var title = (typeof shareZ !== "undefined" && shareZ.title) ? shareZ.title : "";
    var pic = (typeof shareZ !== "undefined" && shareZ.pic) ? shareZ.pic : "";
    var summary = (typeof shareZ !== "undefined" && shareZ.summary) ? shareZ.summary : "";

    var wblink = '', qqlink = '', qzonelink = '';

    wblink += 'http://service.weibo.com/share/share.php?';
    wblink += 'url=' + encodeURIComponent(url);
    wblink += '&title=' + encodeURIComponent(title);
    wblink += '&ralateUid=' + encodeURIComponent(ralateuid_tsina);
    wblink += '&appkey=' + encodeURIComponent(appkey_tsina);
    wblink += '&pic=' + encodeURIComponent(pic);

    qqlink += 'https://connect.qq.com/widget/shareqq/index.html?';
    qqlink += 'url=' + encodeURIComponent(url);
    qqlink += '&title=' + encodeURIComponent(title);
    qqlink += '&pics=' + encodeURIComponent(pic);
    qqlink += '&desc=';
    qqlink += '&summary=' + encodeURIComponent(summary.substr(0,100));
    qqlink += '&site=' + encodeURIComponent('站酷网');

    qzonelink += 'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?';
    qzonelink += 'url=' + encodeURIComponent(url);
    qzonelink += '&title=' + encodeURIComponent(title);
    qzonelink += '&pics=' + encodeURIComponent(pic);
    qzonelink += '&summary=' + encodeURIComponent(summary);
    qzonelink += '&desc=';
    qzonelink += '&site=' + encodeURIComponent('站酷网');

    var weiboShare = document.getElementById('weiboShare')
    if(weiboShare)
    weiboShare.href = wblink;

    var qqShare = document.getElementById('qqShare')
    if(qqShare)
    qqShare.href = qqlink;

    var qzoneShare = document.getElementById('qzoneShare')
    if(qzoneShare)
    qzoneShare.href = qzonelink;
  },
  zwxShareGetminiqrcode: function(ObjId, ObjType) {
    ZAjax('get', serverApi + "/wxshare/getQrcode?id=" + ObjId + "&objectType=" + ObjType).then(function(data){
      $('#app-code').html('<image src="' + data.data + '" />')
    })
  },
  zwxShareGetqrcode: function(size) {
    if($('#wechat-qr-code').length > 0){
      $('#wechat-qr-code').html("");
      var qrcode = new QRCode(document.getElementById("wechat-qr-code"), {
          width: size || 100,
          height: size || 100
      });
      qrcode.makeCode(shareZ.url || window.location.href);
    }
  },
  layerShow: function(clickedDom) {
    showGlobalMaskLayer();
    $('#pop-share').removeClass('hide');

    $('#pop-share .pop-close').on('click', function () {
      $(this).parents('#pop-share').addClass('hide');
      hideGlobalMaskLayer();
    })
  }
}

ZWxShare.init();

if ($('#share').length) {
  $('#share').on('click', function() {
    ZWxShare.layerShow()
  })
}

if ($('.js-hover-share-to').length) {
  $('.js-hover-share-to').hover(function () {
    $('.bds-box').show();
  },function(){
    $('.bds-box').hide();
  })  

  ZWxShare.zwxShareGetqrcode(77)
}
