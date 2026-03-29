// Bubble animation
function createBubble() {
  var bubble = document.createElement("div");
  bubble.classList.add("bubble");
  var size = Math.random() * 30 + 10;
  bubble.style.width = size + "px";
  bubble.style.height = size + "px";
  bubble.style.left = Math.random() * 100 + "vw";
  bubble.style.animationDuration = Math.random() * 5 + 5 + "s";
  document.body.appendChild(bubble);
  setTimeout(function () { bubble.remove(); }, 10000);
}
setInterval(createBubble, 800);

document.addEventListener("DOMContentLoaded", function () {
  // Navbar toggle (mobile)
  var toggler = document.querySelector(".navbar-toggler");
  var navCollapse = document.querySelector(".navbar-collapse");
  if (toggler && navCollapse) {
    toggler.addEventListener("click", function () {
      navCollapse.classList.toggle("show");
    });
  }

  // Modal open/close
  document.querySelectorAll("[data-target]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      var target = document.querySelector(el.getAttribute("data-target"));
      if (target) target.classList.add("show");
    });
  });

  document.querySelectorAll("[data-dismiss='modal']").forEach(function (el) {
    el.addEventListener("click", function () {
      var modal = el.closest(".modal");
      if (modal) modal.classList.remove("show");
    });
  });

  document.querySelectorAll(".modal").forEach(function (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) modal.classList.remove("show");
    });
  });

  // Navbar scroll effect
  var navbar = document.querySelector(".navbar");
  var backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    if (window.scrollY > 300) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  });

  // Back to top
  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    if (link.hasAttribute("data-target")) return;
    link.addEventListener("click", function (e) {
      var href = this.getAttribute("href");
      if (href === "#") return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 70, behavior: "smooth" });
      }
    });
  });

  // Ajax testimonials (vanilla fetch)
  var testimonialContainer = document.getElementById("ajax-testimonials");
  if (testimonialContainer) {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then(function (res) { return res.json(); })
      .then(function (data) {
        var names = ["Sarah M.", "The Johnson Family", "Coach Williams"];
        var html = '<div class="row">';
        data.forEach(function (post, i) {
          html +=
            '<div class="col-md-4 mb-4">' +
            '<div class="card h-100"><div class="card-body text-center">' +
            '<div style="font-size:2.5rem;margin-bottom:10px;">\u2B50</div>' +
            '<p class="card-text font-italic">"' + post.body.substring(0, 120) + '..."</p>' +
            '<h5 class="card-title mt-3">- ' + names[i] + '</h5>' +
            '</div></div></div>';
        });
        html += '</div>';
        testimonialContainer.innerHTML = html;
      })
      .catch(function () {
        testimonialContainer.innerHTML = '<p class="text-center text-muted">Could not load testimonials.</p>';
      });
  }

  // Contact form validation
  var contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("formName").value.trim();
      var email = document.getElementById("formEmail").value.trim();
      var message = document.getElementById("formMessage").value.trim();
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      var isValid = true;

      contactForm.querySelectorAll(".form-control").forEach(function (el) {
        el.classList.remove("is-invalid");
      });

      if (!name) { document.getElementById("formName").classList.add("is-invalid"); isValid = false; }
      if (!email || !emailPattern.test(email)) { document.getElementById("formEmail").classList.add("is-invalid"); isValid = false; }
      if (!message) { document.getElementById("formMessage").classList.add("is-invalid"); isValid = false; }

      if (isValid) {
        alert("Thank you for contacting Splashes Aquatics! We'll get back to you soon. \uD83C\uDF0A");
        contactForm.reset();
      }
    });
  }

  // Sign in form
  var signinForm = document.getElementById("signinForm");
  if (signinForm) {
    signinForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Welcome back to Splashes! \uD83C\uDF0A");
      var modal = document.getElementById("authModal");
      if (modal) modal.classList.remove("show");
      signinForm.reset();
    });
  }

  // Sign up button
  var signUpBtn = document.getElementById("signUpBtn");
  if (signUpBtn) {
    signUpBtn.addEventListener("click", function () {
      alert("Welcome to the Splashes family! \uD83C\uDF89 Registration coming soon.");
    });
  }
});
