// ==========================================
// ================= Navbar ================= 
// ==========================================
$(document).ready(function(){
    $('.menu-toggle').click(function() {
        if($('.menu').hasClass("-open")){
            TweenMax.to([".menu-backdrop"], 1,{autoAlpha:0});
            TweenMax.to([".menu-content"], 1,{x:'100%'});
            TweenMax.to([".menu-body"], 1,{x:'100%',autoAlpha:0});
            TweenMax.to([".menu-footer"], 1,{x:'100%',autoAlpha:0});
        }
        else {
            TweenMax.to([".menu-backdrop"], 1,{autoAlpha:1});
            TweenMax.to([".menu-content"], 1,{x:'0%'});
            TweenMax.to([".menu-body"], 1,{x:'0%',autoAlpha:1});
            TweenMax.to([".menu-footer"], 1,{x:'0%',autoAlpha:1});
            $('.menu-box').css("display","block");
        }
    });
    $(".menu-toggle").click(function(){
        $('.menu').toggleClass("-open");
    });
});
window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        return document.querySelector('.menu').classList.add('active')
    }
    return document.querySelector('.menu').classList.remove('active')
});

// swiper slide
var swiper = new Swiper(".mySwiper", {
    rewind: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
  });

  // promise title


  const tl = gsap.timeline( {
    scrollTrigger: {
        trigger: ".promise-title",
        start: "top 70%",
        end: "top 35%",
        scrub: 4,
        toggleActions: "restart none none none",
    }
});

tl.to(".promise-title", {x: -500, duration: 2})

// we promise slide
var swiper = new Swiper(".weSwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
  });

//   image reveal
gsap.registerPlugin(ScrollTrigger);

let revealContainers = document.querySelectorAll(".res-image");

revealContainers.forEach((container) => {
  let image = container.querySelector("img");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      toggleActions: "restart none none reset"
    }
  });

  tl.set(container, { autoAlpha: 1 });
  tl.from(container, 1.5, {
    xPercent: -100,
    ease: Power2.out
  });
  tl.from(image, 1.5, {
    xPercent: 100,
    scale: 1.3,
    delay: -1.5,
    ease: Power2.out
  });
});

// smoothscroll
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	    });
	});
});