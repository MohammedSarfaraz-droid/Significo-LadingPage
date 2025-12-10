function HomePageAnimation() {
  gsap.set(".MarqueeSlides", { scale: 5 });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
  });

  tl.to(
    ".videodiv",
    {
      "--clip": "0%",
      ease: Power2,
    },
    "a"
  )
    .to(
      ".MarqueeSlides",
      {
        scale: 1,
        ease: Power2,
      },
      "a"
    )
    .to(
      ".lft",
      {
        xPercent: -10,
        stagger: 0.03,
        ease: Power4,
      },
      "b"
    )
    .to(
      ".rgt",
      {
        xPercent: 10,
        stagger: 0.03,
        ease: Power4,
      },
      "b"
    );
}

function realPageAnimation() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
    xPercent: -310,
    ease: Power4,
  });
}

function TeamAnimation() {
  var TeamMems = document.querySelectorAll(".listelem");
  TeamMems.forEach(function (elem) {
    elem.addEventListener("mousemove", function (dets) {
      // gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX);
      gsap.to(this.querySelector(".picture"), {
        opacity: 1,
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
        ease: Power4.easeOut,
        duration: 0.5,
      });
      gsap.to(this.querySelector(".bluelayer"), {
        height: "100%",
        ease: Power4.easeOut,
        duration: 0.5,
      });
    });
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 0,
        ease: Power4.easeOut,
        duration: 0.5,
      });
      gsap.to(this.querySelector(".bluelayer"), {
        height: "0%",
        ease: Power4.easeOut,
        duration: 0.5,
      });
    });
  });
}

function paraAnimation() {
  var clutter = "";
  var Textpara = document.querySelector(".textpara");
  Textpara.textContent.split("").forEach(function (char) {
    if (char === " ") {
      clutter += `<span>&nbsp;</span>`;
    }
    clutter += `<span>${char}</span>`;
  });
  Textpara.innerHTML = clutter;
  gsap.set(".textpara span", { opacity: 0.1 });
  gsap.to(".textpara span", {
    scrollTrigger: {
      trigger: ".para",
      start: "top 60%",
      end: "bottom 90%",
      scrub: 0.2,
    },
    opacity: 1,
    stagger: 0.02,
    ease: Power4,
  });
}

function loco() {
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}

function CapsuleAnimation() {
  gsap.to(".capsule:nth-child(2)", {
    scrollTrigger: {
      trigger: ".capsules",
      start: "top 70%",
      end: "bottom bottom",
      scrub: 1,
    },
    y: 0,
    ease: Power4,
  });
}

function ColorChange() {
  var allsection = document.querySelectorAll(".section");
  allsection.forEach(function (e) {
    ScrollTrigger.create({
      trigger: e,
      start: "top 50%",
      end: "bottom 50%",
      onEnter: function () {
        document.body.setAttribute("theme", e.dataset.color);
      },
      onEnterBack: function () {
        document.body.setAttribute("theme", e.dataset.color);
      },
    });
  });
}

function Header() {
    var lastScrollTop = 0;
    
    // Listen for scroll events
    window.addEventListener("scroll", function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            // Scrolling Down - Hide Header (Fade Out)
            gsap.to("header", {
                opacity: 0, 
                duration: 0.5,
                ease: "power2.out",
                pointerEvents: "none" // Prevent clicking when hidden
            });
        } else {
            // Scrolling Up - Show Header (Fade In)
            gsap.to("header", {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
                pointerEvents: "auto" // Re-enable clicking
            });
            }
lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});
}

HomePageAnimation();
realPageAnimation();
TeamAnimation();
paraAnimation();
loco();
CapsuleAnimation();
ColorChange();
Header();
