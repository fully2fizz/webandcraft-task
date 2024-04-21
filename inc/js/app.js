// lenis
// const lenis = new Lenis()

const lenis = new Lenis({
  speed: 800,
  offset: 50,
  duration: 1.2,
  easing: (t => Math.min(1, 1.001 - Math.pow(2, -9 * t))),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: navigator.platform.toUpperCase().indexOf("MAC") >= 0 ? false : true,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

if (window.matchMedia("(min-width: 992px)").matches) {

  lenis.on('scroll', (e) => {
      //   console.log(e)
  })

  function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf);
}

/*====================================
       Header JS
  ======================================*/ 
  jQuery(window).on('scroll', function() {
      if ($(this).scrollTop() > 200) {
          $('#header .header-inner').addClass("sticky");
      } else {
          $('#header .header-inner').removeClass("sticky");
      }
  });

  /*====================================
      Sticky Header JS
  ======================================*/ 
  jQuery(window).on('scroll', function() {
      if ($(this).scrollTop() > 100) {
          $('.header').addClass("sticky");
      } else {
          $('.header').removeClass("sticky");
      }
  });

  $('.pro-features .get-pro').on( "click", function(){
      $('.pro-features').toggleClass('active');
  });

// ==========================================
// ================= Responsive Navbar ================= 
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




// about section counting
function countUp(element, label, endValue) {
  const currentCount = { value: 0 };

  gsap.to(currentCount, {
      duration: 3,
      value: parseInt(endValue, 10) || 0, // Ensure a valid number or default to 0
      onUpdate: () => {
          element.innerText = Math.ceil(currentCount.value) + label + '+';
      },
      ease: "power3.out"
  });
}



// Gsap scroll animation
gsap.registerPlugin(ScrollTrigger);

gsap.to(".text p", {
backgroundPositionX: "0%",
stagger: 1,
scrollTrigger: {
  trigger: ".text",
  scrub: 1,
  start: "top 80%",
  end: "bottom 40%"
}
});

// sticky scroll animation

// Hide controls
// document.getElementById('autoplay-video').controls = false;



gsap.utils.toArray('.count-wrapper').forEach((count) => {
  const countNo = count.querySelector(".count-text");
  const countLabel = count.querySelector(".count-label");
  const endValue = countNo.getAttribute('data-count');
  const countLabelVal = countLabel.getAttribute('data-text');

  ScrollTrigger.create({
      trigger: '.about',
      start: "top 45%",
      onEnter: () => {
          countUp(countNo, countLabelVal, endValue);
      }
  });
});



// faq
$(document).ready(function() { 
    $(".acc-ctrl").first().addClass('active').next('.acc-panel').slideDown();
    $(".acc-ctrl").click(function() {
        if($(this).hasClass('active')){
            $(this).removeClass('active').next('.acc-panel').slideUp();
        } else {
            $(".acc-ctrl").removeClass('active').next('.acc-panel').slideUp();
        $(this).addClass('active').next('.acc-panel').slideDown()
        }
    });      
  });

//   faq img reveal
let revealContainers = document.querySelectorAll(".reveal");

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
    yPercent: -100,
    ease: Power2.out
  });
  tl.from(image, 1.5, {
    yPercent: 100,
    scale: 1.3,
    delay: -1.5,
    ease: Power2.out
  });
});



// blog slider
var teamSwiper = new Swiper(".blog-swiper", {
  slidesPerView: 1.13,
  spaceBetween: 16,
  // allowTouchMove: false,
  autoplay: {
      delay: 4500,
  },
  scrollbar: {
      el: ".blog-scrollbar",
      hide: false,
      draggable: true,
  },
  breakpoints: {
      768: {
          slidesPerView: 2.1,
          spaceBetween: 24,
          allowTouchMove: false,
          scrollbar: {
              el: ".blog-scrollbar",
              hide: false,
              draggable: true,
          },
      },
      992: {
          slidesPerView: 3,
          spaceBetween: 30,
      },
  },
});


ScrollTrigger.refresh();

ScrollTrigger.config({
  autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load, resize'
});

// Marquee effect
const marquee = document.querySelectorAll('.marquee');

marquee.forEach((e) => {
  // Create swiper carousel
  const carousel = e.querySelectorAll('.marquee-carousel');

  carousel.forEach((e) => {
    const items = e.querySelector('.marquee-items');
    const item = e.querySelectorAll('.marquee-item');

    e.classList.add('swiper-container');
    items.classList.add('swiper-wrapper');
    item.forEach((e) => e.classList.add('swiper-slide'));

    const slider = new Swiper(e, {
      slidesPerView: 'auto',
      loop: true,
      freeMode: true,
      freeModeMomentumBounce: false,
      freeModeMomentumVelocityRatio: 0.3
    });
  });

  // Scroll triggered movement
  const tl = new gsap.timeline();

  tl.set(carousel, { willChange: 'transform' });

  tl.fromTo(
    carousel[0],
    {
      x: -300
    },
    {
      x: 0,
      ease: 'none'
    },
    0
  );

  tl.fromTo(
    carousel[1],
    {
      x: 300
    },
    {
      x: 0,
      ease: 'none'
    },
    0
  );

  tl.set(carousel, { willChange: 'auto' });

  ScrollTrigger.create({
    trigger: e,
    animation: tl,
    start: 'top bottom',
    end: 'bottom top',
    scrub: 0.3,
    refreshPriority: -14
  });
});





document.addEventListener("DOMContentLoaded", function () {
	const counter3 = document.querySelector(".counter-3");

	for (let i = 0; i < 2; i++) {
		for (let j = 0; j < 10; j++) {
			const div = document.createElement("div");
			div.className = "num";
			div.textContent = j;
			counter3.appendChild(div);
		}
	}
	const finalDiv = document.createElement("div");
	finalDiv.className = "num";
	finalDiv.textContent = "0";
	counter3.appendChild(finalDiv);

	function animate(counter, duration, delay = 0) {
		const numHeight = counter.querySelector(".num").clientHeight;
		const totalDistance =
			(counter.querySelectorAll(".num").length - 1) * numHeight;

		gsap.to(counter, {
			y: -totalDistance,
			duration: duration,
			delay: delay,
			ease: "power2.inOut"
		});
	}

	animate(counter3, 5);
	animate(document.querySelector(".counter-2"), 6);
	animate(document.querySelector(".counter-1"), 2, 4);
});

gsap.to(".digit", {
	top: "-150px",
	stagger: {
		amount: 0.25
	},
	delay: 6,
	duration: 1,
	ease: "power4.inOut"
});

gsap.from(".loader-1", {
	width: 0,
	duration: 6,
	ease: "power2.inOut"
});

gsap.from(".loader-2", {
	width: 0,
	duration: 6,
	delay: 1.9,
	ease: "power2.inOut"
});

gsap.to(".loader", {
	background: "none",
	delay: 6,
	duration: 0.1
});

gsap.to(".loader-1", {
	rotate: 90,
	y: -50,
	duration: 0.5,
	delay: 6
});

gsap.to(
	".loader-2",
	{
		x: -75,
		y: 75,
		duration: 0.5
	},
	"<"
);

gsap.to(".loader", {
	scale: 40,
	duration: 1,
	delay: 7,
	ease: "power2.inOut"
});

gsap.to(".loader", {
	rotate: 45,
	y: 500,
	x: 2000,
	duration: 1,
	delay: 7,
	ease: "power2.inOut"
});

gsap.to(".loading-screen", {
	opacity: 0,
	duration: 0.5,
	delay: 7.5,
	ease: "power1.inOut"
});

gsap.to(".home .vid-wrap", 1.5, {
	delay: 7,
	scale: 1,
	ease: "power4.inOut",
	stagger: {
		amount: 0.1
	}
});

gsap.to(".home h1", 1.5, {
	delay: 7.5,
	y: 0,
    opacity: 1,
	ease: "power4.inOut",
	stagger: {
		amount: 0.1
	}
});
gsap.to(".home .anim-banner-txt", 1.5, {
	delay: 7.6,
	y: 0,
    opacity: 1,
	ease: "power4.inOut",
	stagger: {
		amount: 0.1
	}
});
gsap.to(".home .header-inner, .home .topbar", 1.5, {
	delay: 7.8,
    opacity: 1,
	y: 0,
	ease: "power4.inOut",
	stagger: {
		amount: 0.1
	}
});
