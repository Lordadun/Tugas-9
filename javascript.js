$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $("#scrollToTop").fadeIn();
    } else {
      $("#scrollToTop").fadeOut();
    }
  });

  $("#scrollToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});

$(document).ready(function () {
  $(".scroll-link").click(function (e) {
    e.preventDefault();
    var target = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      800
    );
  });
});

ScrollReveal().reveal(".card-home-reveal", {
  distance: "50px",
  duration: 1000,
  easing: "ease-in-out",
  origin: "bottom",
  interval: 200,
  reset: true,
});

ScrollReveal().reveal(".card-event-reveal", {
  distance: "50px",
  duration: 1000,
  easing: "ease-in-out",
  origin: "bottom",
  interval: 200,
  reset: true,
});

ScrollReveal().reveal(".card-gallery-reveal", {
  distance: "50px",
  duration: 1000,
  easing: "ease-in-out",
  origin: "bottom",
  interval: 200,
  reset: true,
});
