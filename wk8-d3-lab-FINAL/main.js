// Bubble animation
function createBubble() {
  var $bubble = $("<div>").addClass("bubble");
  var size = Math.random() * 30 + 10;
  $bubble.css({
    width: size + "px",
    height: size + "px",
    left: Math.random() * 100 + "vw",
    animationDuration: Math.random() * 5 + 5 + "s"
  });
  $("body").append($bubble);
  setTimeout(function () { $bubble.remove(); }, 10000);
}

var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduceMotion) {
  setInterval(createBubble, 800);
}

$(document).ready(function () {
  var $navbar = $(".navbar");
  var $backToTop = $("#backToTop");

  // Navbar scroll effect
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $navbar.addClass("scrolled");
    } else {
      $navbar.removeClass("scrolled");
    }
    if ($(window).scrollTop() > 300) {
      $backToTop.css("display", "flex");
    } else {
      $backToTop.hide();
    }
  });

  // Back to top
  $backToTop.on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
  });

  // Smooth scroll for anchor links
  $('a[href^="#"]').not('[data-bs-toggle]').on("click", function (e) {
    var href = $(this).attr("href");
    if (href === "#") return;
    var $target = $(href);
    if ($target.length) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: $target.offset().top - 70 }, 600);
    }
  });

  // Ajax testimonials (jQuery $.get)
  var $testimonialContainer = $("#ajax-testimonials");
  if ($testimonialContainer.length) {
    var testimonials = [
      {
        name: "Sarah M.",
        quote: "The instructors are patient, safety-focused, and great at helping kids feel confident in the water."
      },
      {
        name: "The Johnson Family",
        quote: "Our children made fast progress, and the staff made every lesson organized, clear, and fun."
      },
      {
        name: "Coach Williams",
        quote: "Splashes runs strong programs with clear instruction, supportive teachers, and a very welcoming environment."
      }
    ];
    var html = '<div class="row">';
    $.each(testimonials, function (_, testimonial) {
      html +=
        '<div class="col-md-4 mb-4">' +
        '<div class="card h-100"><div class="card-body text-center">' +
        '<div style="font-size:2.5rem;margin-bottom:10px;">\u2B50</div>' +
        '<p class="card-text fst-italic">"' + testimonial.quote + '"</p>' +
        '<h5 class="card-title mt-3">- ' + testimonial.name + '</h5>' +
        '</div></div></div>';
    });
    html += '</div>';
    $testimonialContainer.html(html);
  }

  // Contact form validation
  $("#contactForm").on("submit", function (e) {
    e.preventDefault();
    var name = $("#formName").val().trim();
    var email = $("#formEmail").val().trim();
    var message = $("#formMessage").val().trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isValid = true;

    $(this).find(".form-control").removeClass("is-invalid");

    if (!name) { $("#formName").addClass("is-invalid"); isValid = false; }
    if (!email || !emailPattern.test(email)) { $("#formEmail").addClass("is-invalid"); isValid = false; }
    if (!message) { $("#formMessage").addClass("is-invalid"); isValid = false; }

    if (isValid) {
      alert("Thank you for contacting Splashes Aquatics! We'll get back to you soon.");
      this.reset();
    }
  });

  var params = new URLSearchParams(window.location.search);
  var requestedSubject = params.get("subject");
  var $subject = $("#formSubject");
  if (requestedSubject && $subject.length && $subject.find('option[value="' + requestedSubject + '"]').length) {
    $subject.val(requestedSubject);
  }

  // Sign in form
  $("#signinForm").on("submit", function (e) {
    e.preventDefault();
    alert("Welcome back to Splashes!");
    var modalElement = document.getElementById("authModal");
    if (modalElement && window.bootstrap) {
      window.bootstrap.Modal.getOrCreateInstance(modalElement).hide();
    }
    this.reset();
  });
});
