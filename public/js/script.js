// Scroll Animation AOS init
if (window.AOS) {
  AOS.init();
}

// Using Jquery to define Scroll spy and set active class
$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if (window.scrollY > 60) {
      document.querySelector("#scroll-top").classList.add("active");
    } else {
      document.querySelector("#scroll-top").classList.remove("active");
    }

    // scroll spy (for each section. If scroll if more than particular height)
    $("section").each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let top = $(window).scrollTop();
      let id = $(this).attr("id");

      if (top > offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    });
  });

  // smooth scrolling
  $('a[href*="#"]').on("click", function (e) {
    const target = new URL(this.href, window.location.href);
    if (target.pathname !== window.location.pathname) {
      return;
    }

    const hash = target.hash;
    if (!hash || !$(hash).length) {
      return;
    }

    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      500,
      "linear"
    );
  });
});


// Effects or texts from Typed.js Api
if (window.Typed && document.querySelector(".typing-text")) {
  new Typed(".typing-text", {
    strings: ["3D websites", "games", "Unity plug-ins", "metaverse stuff"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
  });
}
// <!-- typed js effect ends -->

// <!-- tilt js effect starts -->
if (window.VanillaTilt) {
  VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 20,
    speed: 400,
  });
}
// <!-- tilt js effect ends -->

// pre loader start
function loader() {
  const loaderContainer = document.querySelector(".loader-container");
  if (loaderContainer) {
    loaderContainer.classList.add("fade-out");
  }
}
function fadeOut() {
  setInterval(loader, 500);
}
window.onload = fadeOut;
// pre loader end

/* ===== SCROLL REVEAL ANIMATION ===== */
if (window.ScrollReveal) {
  const srtop = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 1000,
    reset: true,
  });

  /* SCROLL HOME */
  srtop.reveal(".home .content h1", { delay: 200 });
  srtop.reveal(".home .content p", { delay: 200 });
  srtop.reveal(".home .content .btn", { delay: 200 });

  srtop.reveal(".home .image", { delay: 400 });
  srtop.reveal(".home .linkedin", { interval: 600 });
  srtop.reveal(".home .github", { interval: 800 });
  srtop.reveal(".home .twitter", { interval: 1000 });
  srtop.reveal(".home .telegram", { interval: 600 });
  srtop.reveal(".home .instagram", { interval: 600 });
  srtop.reveal(".home .dev", { interval: 600 });

  /* SCROLL ABOUT */
  srtop.reveal(".about .content h2", { delay: 300 });
  srtop.reveal(".about .content .tag", { delay: 400 });
  srtop.reveal(".about .content p", { delay: 300 });
  srtop.reveal(".about .content .box-container", { delay: 300 });
  srtop.reveal(".about .content .resumebtn", { delay: 300 });

  /* SCROLL SKILLS */
  srtop.reveal(".skills .container", { interval: 200 });
  srtop.reveal(".skills .container .bar", { delay: 400 });

  /* SCROLL EDUCATION */
  srtop.reveal(".education .box", { interval: 200 });

  /* SCROLL PROJECTS */
  srtop.reveal(".work .box", { interval: 200 });

  /* SCROLL EXPERIENCE */
  srtop.reveal(".experience .timeline", { delay: 400 });
  srtop.reveal(".experience .timeline .container", { interval: 400 });
}
