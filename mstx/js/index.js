// 'use strict';
(function () {
  var mySwiper = new Swiper('.swiper-container1', {
    autoplay: 2000,//可选选项，自动滑动
    loop: true,
    pagination : '.swiper-pagination',
    paginationClickable :true,
    autoplayDisableOnInteraction : false,
    speed:1000
  })
})();
//tab栏切换
(function () {
  var lis = document.getElementById('sl_ul').childNodes;
  // console.log(lis.length);
  var sub = document.getElementById('sub');
  for(var i=0;i<lis.length;i++){
    lis[i].addEventListener('mouseover',function () {
      // sub.style.display = 'block';
      this.getElementsByTagName('ul')[0].style.display = 'block';
      // console.log(this.getElementsByTagName('ul')[0]);
      // console.log(111);
    });

    lis[i].addEventListener('mouseout',function () {
      this.getElementsByTagName('ul')[0].style.display = 'none'
    });
  };
})();
//回到顶部
(function () {
  var gtop = document.getElementById('goTop');
  var adl = document.getElementById('adl');
  var adr = document.getElementById('adr');
  window.onscroll = function () {
    var h = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(h);
    var t = document.body.scrollTop;
    // console.log(t);
    adl.style.transition = "all 1s";
    adl.style.transform = "translateY("+ t+"px)";
    adr.style.transition = "all 1s";
    adr.style.transform = "translateY("+ t+"px)";
    if(h>300){
      gtop.style.display = 'block';
    }else{
      gtop.style.display = 'none';
    }
  }
})();
(function () {
  var s2main = document.getElementById('s2main');
  var s2ul = document.getElementById('s2ul');
  var cl = document.getElementById('cl');
  var cr = document.getElementById('cr');
  var num = 0;
  var w = s2main.clientWidth;
    cl.addEventListener('click',function () {
      num--;
      // if(num<1){
      //
      //   s2ul.style.transition = "none";
      //   s2ul.style.left = "0px";
      //   num = 0;
      //   // s2ul.style.transform = "translateX("+ -(w*num) +"px)";
      // }
      s2ul.style.transition = "all 1s";
      s2ul.style.transform = "translateX("+ -(w*num) +"px)";
    });
  cr.addEventListener('click',function () {
    num++;
    if(num>3){

      s2ul.style.transition = "none";
      s2ul.style.left = "0px";
      num = 0;
      // s2ul.style.transform = "translateX("+ -(w*num) +"px)";
    }
    s2ul.style.transition = "all 1s";
    s2ul.style.transform = "translateX("+ -(w*num) +"px)";
  });

})();
// (function () {
//   var mySwiper = new Swiper('.swiper-container2', {
//     autoplay: 5000,//可选选项，自动滑动
//     loop: true,
//     paginationClickable :true,
//     autoplayDisableOnInteraction : false,
//     speed:1000
//   })
// })();
//广告
// (function () {
//   var adl = document.getElementById('adl');
//   var adr = document.getElementById('adr');
//   window.onscroll = function () {
//     var t = document.body.scrollTop;
//      // console.log(t);
//     adl.style.transition = "all 1s";
//     adl.style.transform = "translateY("+ t+"px)";
//     adr.style.transition = "all 1s";
//     adr.style.transform = "translateY("+ t+"px)";
//   }
// })();
(function () {
  var cll = document.getElementById('cll');
  var clr = document.getElementById('clr');
  var adl = document.getElementById('adl');
  var adr = document.getElementById('adr');
  cll.addEventListener('click',function () {
    adl.style.display = "none";
  })
  clr.addEventListener('click',function () {
    adr.style.display = "none";
  })
})();