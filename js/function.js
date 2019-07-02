
// --公用--
  function _show(cla){
    $("."+cla).show();
  }
  function _hide(cla){
    $("."+cla).hide();
  }
  // --my_prize.html  点击加载更多--

  var _content = []; //临时存储li循环内容
  var moreload = {
    _default:5, //默认显示图片个数
    _loading:2,  //每次点击按钮后加载的个数
    init:function(){
      var lis = $(".moreload .hidden li");
      $(".moreload ul.lists").html("");
      for(var n=0;n<moreload._default;n++){
        lis.eq(n).appendTo(".moreload ul.lists");
      }
      for(var i=moreload._default;i<lis.length;i++){
        _content.push(lis.eq(i));
      }
      $(".moreload .hidden").html("");
    },
    loadMore:function(){
      var mLis = $(".moreload ul.lists li").length;
      for(var i =0;i<moreload._loading;i++){
        var target = _content.shift();
        if(!target){
          $('.moreload .more').html("<p>加载完毕...</p>");
          break;
        }
        $(".moreload ul.lists").append(target);
        $(".moreload ul.lists img").eq(mLis+i).each(function(){
          $(this).attr('src',$(this).attr('realSrc'));
        });
      }
    }
  }
  moreload.init();

// --index.html  下拉自动加载--

$(window).scroll(function(){
      var dmt = $(document).height(); //文件的总高度
      var wid = $(window).height();   //可视区域高度
      var top = $(window).scrollTop()   // 滚动高度
      if(dmt-wid<=top+2){               //文件高度-可视高度<=滚动高度
        for(var i=0;i<1;i++){           //for:滚动一次执行一次
          var html='<li><div class="center-left"><div class="img"><img src="img/cs2.jpg"alt="商品图片"></div><div class="text"><p>活动价￥<b style="font-size: 16px">20.99</b><s style="color: #ccc;">￥19.99</s></p></div><div class="btn"><a href="#">立即购买</a></div></div><div class="center-left right"><div class="img"><img src="img/cs1.jpg"alt="商品图片"></div><div class="text"><p>活动价￥<b style="font-size: 16px">20.99</b><s style="color: #ccc;">￥19.99</s></p></div><div class="btn"><a href="#">立即购买</a></div></div></li><li><div class="center-left"><div class="img"><img src="img/cs3.jpg"alt="商品图片"></div><div class="text"><p>活动价￥<b style="font-size: 16px">20.99</b><s style="color: #ccc;">￥19.99</s></p></div><div class="btn"><a href="#">立即购买</a></div></div><div class="center-left right"><div class="img"><img src="img/cs2.jpg"alt="商品图片"></div><div class="text"><p>活动价￥<b style="font-size: 16px">20.99</b><s style="color: #ccc;">￥19.99</s></p></div><div class="btn"><a href="#">立即购买</a></div></div></li>'
           console.log(i)
        }
        $('.wrap').append(html);
      }
  });

// --commodity.html  tab切换样式--
$('.clearfix li').click(function(){
  //点击li切换样式
  // $(this).addClass('hdk-active').siblings().removeClass('hdk-active');
  //根据li的索引值，来确定那个div显示，其她隐藏。
  $('.wrap>li').eq($(this).index()).show().siblings().hide();
});
