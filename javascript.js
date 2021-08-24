 $(function(){

  $('.backimg img:nth-child(n+2)').hide();
  setInterval(function() {
    $(".backimg img:first-child").fadeOut(2000);
    $(".backimg img:nth-child(2)").fadeIn(2000);
    $(".backimg img:first-child").appendTo(".backimg");
  }, 4000);

  $(window).scroll(function (){
    $('.touhou h3').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200){
        $(this).css({"transform":"scale(1)"});
      }
    });
  });
  $(window).scroll(function (){
    $('.touhou p').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200){
        $(this).css({"transform":"scale(1)"});
      }
    });
  });


    $('#left1').hover(function(){
      $('#left1').animate({'width':'55%','opacity':'0.6','top':'-20px'},250),
      $('#peace').show(500)
    },function(){
      $('#left1').animate({'width':'50%','opacity':'1','top':'0'},250),
      $('#peace').hide(500)
    });
    $('#right1').hover(function(){
      $('#right1').animate({'width':'55%','opacity':'0.6','top':'-20px'},250),
      $('#despair').show(500)
    },function(){
      $('#right1').animate({'width':'50%','opacity':'1','top':'0'},250),
      $('#despair').hide(500)
    });
    
    $('#left1').click(function(){
      $('.left').animate({'width': 'toggle'}
      ,function(){$('.left video,.left img').fadeIn()}
      );
      $('.kouma .flex').fadeOut();
    });
    $('#leftback').click(function(){
      $('.left').animate({'width': 'toggle'});
      $('.left video,.left img').fadeOut();
      $('.kouma .flex').fadeIn(800);
    });

    $('#right1').click(function(){
      $('.right')
      .show()
      .animate({
          left:"0"
      }
      ,function(){$('.right video,.right img').fadeIn()}
      );
      $('.flex').fadeOut();
    });
    $('#rightback').click(function(){
      $('.right').animate({
        left:"100%"
      },function(){$('.right video,.right img').fadeOut()}
      )
      .fadeOut();
      $('.flex').fadeIn(800);
    });


    $(window).scroll(function (){
  $('.fadetop').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 200){
      $(this).addClass('scrollin');
    }
  });
});
    $(window).scroll(function (){
  $('.faderight').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 200){
      $(this).addClass('scrollin');
    }
  });
});
    $(window).scroll(function (){
  $('.fadebottom').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 200){
      $(this).addClass('scrollin');
    }
  });
});
    $(window).scroll(function (){
  $('.fadeleft').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 200){
      $(this).addClass('scrollin');
    }
  });
});

$('.fadetop img:first-child').click(function(){
  $('.fadetop img:first-child').addClass('huujinimgB')
  $('.fadetop img:last-child').removeClass('huujinimgB')
 });
 $('.fadetop img:last-child').click(function(){
  $('.fadetop img:last-child').addClass('huujinimgB')
  $('.fadetop img:first-child').removeClass('huujinimgB')
 });
$('.faderight img:first-child').click(function(){
  $('.faderight img:first-child').addClass('huujinimgB')
  $('.faderight img:nth-child(2)').removeClass('huujinimgB')
 });
$('.faderight img:nth-child(2)').click(function(){
  $('.faderight img:nth-child(2)').addClass('huujinimgB')
  $('.faderight img:last-child').removeClass('huujinimgB')
 });
 $('.faderight img:last-child').click(function(){
  $('.faderight img:last-child').addClass('huujinimgB')
  $('.faderight img:first-child').removeClass('huujinimgB')
 });
 $('.fadeleft img:first-child').click(function(){
   $('.fadeleft img:first-child').addClass('huujinimgB')
   $('.fadeleft img:last-child').removeClass('huujinimgB')
  });
  $('.fadeleft img:last-child').click(function(){
   $('.fadeleft img:last-child').addClass('huujinimgB')
   $('.fadeleft img:first-child').removeClass('huujinimgB')
  });
  $('.fadebottom img:first-child').click(function(){
    $('.fadebottom img:first-child').addClass('huujinimgB')
    $('.fadebottom img:last-child').removeClass('huujinimgB')
   });
   $('.fadebottom img:last-child').click(function(){
    $('.fadebottom img:last-child').addClass('huujinimgB')
    $('.fadebottom img:first-child').removeClass('huujinimgB')
   });

   
    $(window).scroll(function (){
  $('.eiya img').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 200){
      $(this).addClass('clipin');
    }
  }),$('.eiya .box').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 400){
      $(this).addClass('boxclipin');
    }
  }),$('.eiya .box h3').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight){
      $(this).addClass('h3clipin');
    }
  });
});

$('.eiya img').click(function(){
  $('.eiya .box').removeClass('boxclipin');
})

$('#reverse').hover(function(){
  $('#reverse').text('dark');
  $('#reverse').css('background-color','black');
  $('#reverse').css('color','white');
},function(){
  $('#reverse').text('light');
  $('#reverse').css('background-color','white');
  $('#reverse').css('color','black');
});
$('#reversedark').hover(function(){
  $('#reversedark').text('light');
  $('#reversedark').css('background-color','white');
  $('#reversedark').css('color','black');
},function(){
  $('#reversedark').text('dark');
  $('#reversedark').css('background-color','black');
  $('#reversedark').css('color','white');
});

$('#lightbutton').click(function(){
  $('#light').fadeIn();
  $('#dark').fadeOut();
  $('.kaei .rd').fadeOut();
  $('.kaei .coment').fadeOut();
  $('#close').fadeIn();
});
$('#reversedark').click(function(){
  $('#light').fadeIn();
  $('#dark').fadeOut();
});
$('#darkbutton').click(function(){
  $('#dark').fadeIn();
  $('#light').fadeOut();
  $('.kaei .rd').fadeOut();
  $('.kaei .coment').fadeOut();
  $('#close').fadeIn();
});
$('#reverse').click(function(){
  $('#light').fadeOut();
  $('#dark').fadeIn();
});
$('#close').click(function(){
  $('.kaei .rd').fadeIn();
  $('.kaei .coment').fadeIn();
  $('#light').fadeOut();
  $('#dark').fadeOut();
  $('#close').fadeOut();
});

$(window).scroll(function (){
  $('.huujin .flex img').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 300){
      $(this).css('left','0');
      $(this).css('transform','translate(0');
    }
  });
});

$(window).on('scroll',function(){
  $(".huujin .flex div").each(function(){
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight + 300){
      $(this).addClass('isActive');
    }
  });
 });

 $('.sizuhaA').click(function(){
  $('.sizuhaA').addClass('huujinimgB')
  $('.sizuhaB').removeClass('huujinimgB')
 });
 $('.sizuhaB').click(function(){
  $('.sizuhaB').addClass('huujinimgB')
  $('.sizuhaA').removeClass('huujinimgB')
 });
 $('.hinaA').click(function(){
  $('.hinaA').addClass('huujinimgB')
  $('.hinaB').removeClass('huujinimgB')
 });
 $('.hinaB').click(function(){
  $('.hinaB').addClass('huujinimgB')
  $('.hinaA').removeClass('huujinimgB')
 });
 $('.nitodatorA').click(function(){
  $('.nitodatorA').addClass('huujinimgB')
  $('.nitodatorB').removeClass('huujinimgB')
 });
 $('.nitodatorB').click(function(){
  $('.nitodatorB').addClass('huujinimgB')
  $('.nitodatorA').removeClass('huujinimgB')
 });
 $('.momijiA').click(function(){
  $('.momijiA').addClass('huujinimgB')
  $('.momijiB').removeClass('huujinimgB')
 });
 $('.momijiB').click(function(){
  $('.momijiB').addClass('huujinimgB')
  $('.momijiA').removeClass('huujinimgB')
 });
 $('.sanaeA').click(function(){
  $('.sanaeA').addClass('huujinimgB')
  $('.sanaeB').removeClass('huujinimgB')
 });
 $('.sanaeB').click(function(){
  $('.sanaeB').addClass('huujinimgB')
  $('.sanaeA').removeClass('huujinimgB')
 });
 $('.kanakoA').click(function(){
  $('.kanakoA').addClass('huujinimgB')
  $('.kanakoB').removeClass('huujinimgB')
 });
 $('.kanakoB').click(function(){
  $('.kanakoB').addClass('huujinimgB')
  $('.kanakoA').removeClass('huujinimgB')
 });
 $('.suwakoA').click(function(){
  $('.suwakoA').addClass('huujinimgB')
  $('.suwakoB').removeClass('huujinimgB')
 });
 $('.suwakoB').click(function(){
  $('.suwakoB').addClass('huujinimgB')
  $('.suwakoA').removeClass('huujinimgB')
 });

$('.yamame div img').click(function(){
  $(this).toggleClass("future");
  $('.yamame div img').toggleClass("none");
  $(this).toggleClass("all");
});
$('.paru div img').click(function(){
  $(this).toggleClass("future");
  $('.paru div img').toggleClass("none");
  $(this).toggleClass("all");
});
$('.yuugi div img').click(function(){
  $(this).toggleClass("future");
  $('.yuugi div img').toggleClass("none");
  $(this).toggleClass("all");
});
$('.rin div img').click(function(){
  $(this).toggleClass("future");
  $('.rin div img').toggleClass("none");
  $(this).toggleClass("all");
});
$('.oku div img').click(function(){
  $(this).toggleClass("future");
  $('.oku div img').toggleClass("none");
  $(this).toggleClass("all");
});
$('.satori div img').click(function(){
  $(this).toggleClass("future");
  $('.satori div img').toggleClass("none");
  $(this).toggleClass("all");
});
$('.koisi div img').click(function(){
  $(this).toggleClass("future");
  $('.koisi div img').toggleClass("none");
  $(this).toggleClass("all");
});

$('#a').click(function(){
  $('.carousel-wrapper').fadeIn();
  $('#tireiclose').fadeIn();
  $('.yamame').fadeIn();
});
$('#b').click(function(){
  $('.carousel-wrapper').fadeIn();
  $('#tireiclose').fadeIn();
  $('.paru').fadeIn();
});
$('#c').click(function(){
  $('.carousel-wrapper').fadeIn();
  $('#tireiclose').fadeIn();
  $('.yuugi').fadeIn();
});
$('#d').click(function(){
  $('.carousel-wrapper').fadeIn();
  $('#tireiclose').fadeIn();
  $('.rin').fadeIn();
});
$('#e').click(function(){
  $('.carousel-wrapper').fadeIn();
  $('#tireiclose').fadeIn();
  $('.oku').fadeIn();
});
$('#f').click(function(){
  $('.carousel-wrapper').fadeIn();
  $('#tireiclose').fadeIn();
  $('.satori').fadeIn();
});
$('#g').click(function(){
  $('.carousel-wrapper').fadeIn();
  $('#tireiclose').fadeIn();
  $('.koisi').fadeIn();
});
$('#tireiclose').click(function(){
  $('.carousel-wrapper').fadeOut();
  $('#tireiclose').fadeOut();
  $('.carousel').fadeOut();
});

//スライド出現
$(window).scroll(function (){
  $('.scroll').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 200){
      $(this).addClass('scrollin');
    }
  });
});

$(window).scroll(function (){
  $('#a').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 200){
      $(this).addClass('aa');
    }
  });
});
$(window).scroll(function (){
  $('#b').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 200){
      $(this).addClass('aa');
    }
  });
});
$(window).scroll(function (){
  $('#c').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 200){
      $(this).addClass('aa');
    }
  });
});
$(window).scroll(function (){
  $('#d').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 200){
      $(this).addClass('aa');
    }
  });
});
$(window).scroll(function (){
  $('#e').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 200){
      $(this).addClass('aa');
    }
  });
});
$(window).scroll(function (){
  $('#f').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 200){
      $(this).addClass('aa');
    }
  });
});
$(window).scroll(function (){
  $('#g').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 200){
      $(this).addClass('aa');
    }
  });
});

$('#h1').hide();
$('#h2').hide();
$('.backimg').hide();
$('#scrollicon').hide();
$('header').hide();
$('#h3').hide().fadeIn(700,function(){
  $('#h1').fadeIn(700,function(){
    $('#h2').fadeIn(700,function(){
      $('.backimg').fadeIn(1000);
      $('#scrollicon').fadeIn(1000);
      $('header').fadeIn(1000);
    });
  });
});

//永夜抄フェードイン
$('.JS_ScrollItem').each(function(){
  let $item = $(this);
  $(window).on('scroll', function(){
    let top = $item.offset().top; // ターゲットの位置取得
    let position = top - $(window).height();  // イベントを発火させたい位置
    if($(window).scrollTop() > position){
      $item.addClass('isShow');
    }
  });
});

$('#otoi').click(function(){
  alert("ありがとうございました")
});

$(function(){$("#page-top a").click(function () {
  $('body,html').animate({
      scrollTop: 0
  }, 500);
  return false;
});
});

//マウスオーバーで表示
$(function() {
  $('.slideR').hover(
  function(){
    $(this).animate({'marginRight':'170px'},500);
  },
  function () {
    $(this).animate({'marginRight':'0'},500);
  }
);
});

$('#toplink').click(function() {
     var speed = 400; // ミリ秒
     var position = $('html').offset().top;
     $('body,html').animate({scrollTop:position}, speed, 'swing');
  });
$('#koumalink').click(function() {
     var speed = 400; // ミリ秒
     var position = $('#kouma').offset().top;
     $('body,html').animate({scrollTop:position}, speed, 'swing');
  });
$('#youmulink').click(function() {
     var speed = 400; // ミリ秒
     var position = $('#youmu').offset().top;
     $('body,html').animate({scrollTop:position}, speed, 'swing');
  });
$('#eiyalink').click(function() {
     var speed = 400; // ミリ秒
     var position = $('#eiya').offset().top;
     $('body,html').animate({scrollTop:position}, speed, 'swing');
  });
$('#kaeilink').click(function() {
     var speed = 400; // ミリ秒
     var position = $('#kaei').offset().top;
     $('body,html').animate({scrollTop:position}, speed, 'swing');
  });
$('#huujinlink').click(function() {
     var speed = 400; // ミリ秒
     var position = $('#huujin').offset().top;
     $('body,html').animate({scrollTop:position}, speed, 'swing');
  });
$('#tireilink').click(function() {
     var speed = 400; // ミリ秒
     var position = $('#tirei').offset().top;
     $('body,html').animate({scrollTop:position}, speed, 'swing');
  });

});
