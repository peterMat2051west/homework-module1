document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar");
  var backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    if (backToTop) {
      if (window.scrollY > 300) {
        backToTop.style.display = "flex";
      } else {
        backToTop.style.display = "none";
      }
    }
  });

  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  var testimonialContainer = document.getElementById("ajax-testimonials");
  if (testimonialContainer) {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then(function (response) { return response.json(); })
      .then(function (data) {
        var names = ["SpongeBob's Mom", "Patrick's Dad", "Sandy's Cousin"];
        var html = '<div class="row">';
        for (var i = 0; i < data.length; i++) {
          html +=
            '<div class="col-md-4 mb-4">' +
            '<div class="card h-100">' +
            '<div class="card-body text-center">' +
            '<div style="font-size:2.5rem;margin-bottom:10px;">⭐</div>' +
            '<p class="card-text font-italic">"' +
            data[i].body.substring(0, 100) +
            '..."</p>' +
            '<h5 class="card-title mt-3">- ' +
            names[i] +
            "</h5>" +
            "</div></div></div>";
        }
        html += "</div>";
        testimonialContainer.innerHTML = html;
      })
      .catch(function () {
        testimonialContainer.innerHTML =
          '<p class="text-center text-muted">Could not load testimonials at this time.</p>';
      });
  }

  var contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("formName").value.trim();
      var email = document.getElementById("formEmail").value.trim();
      var message = document.getElementById("formMessage").value.trim();
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      var isValid = true;

      var controls = contactForm.querySelectorAll(".form-control");
      for (var i = 0; i < controls.length; i++) {
        controls[i].classList.remove("is-invalid");
      }

      if (!name) {
        document.getElementById("formName").classList.add("is-invalid");
        isValid = false;
      }
      if (!email || !emailPattern.test(email)) {
        document.getElementById("formEmail").classList.add("is-invalid");
        isValid = false;
      }
      if (!message) {
        document.getElementById("formMessage").classList.add("is-invalid");
        isValid = false;
      }

      if (isValid) {
        alert("Ahoy! Message sent from Bikini Bottom! 🧽🍍");
        contactForm.reset();
      }
    });
  }

  function openModal(id) {
    var modal = document.getElementById(id);
    var backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop fade show";
    document.body.appendChild(backdrop);
    modal.style.display = "block";
    modal.classList.add("show");
    document.body.classList.add("modal-open");
  }

  function closeModal(id) {
    var modal = document.getElementById(id);
    modal.style.display = "none";
    modal.classList.remove("show");
    var backdrop = document.querySelector(".modal-backdrop");
    if (backdrop) backdrop.remove();
    document.body.classList.remove("modal-open");
  }

  var modalTriggers = document.querySelectorAll("[data-toggle='modal']");
  for (var i = 0; i < modalTriggers.length; i++) {
    modalTriggers[i].addEventListener("click", function () {
      var target = this.getAttribute("data-target");
      openModal(target.replace("#", ""));
    });
  }

  var modalCloses = document.querySelectorAll("[data-dismiss='modal']");
  for (var i = 0; i < modalCloses.length; i++) {
    modalCloses[i].addEventListener("click", function () {
      var modal = this.closest(".modal");
      closeModal(modal.id);
    });
  }

  var tabLinks = document.querySelectorAll("[data-toggle='tab']");
  for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener("click", function (e) {
      e.preventDefault();
      var target = this.getAttribute("href");

      var allTabs = this.closest(".nav-tabs").querySelectorAll(".nav-link");
      for (var j = 0; j < allTabs.length; j++) {
        allTabs[j].classList.remove("active");
      }
      this.classList.add("active");

      var allPanes = this.closest(".modal-body").querySelectorAll(".tab-pane");
      for (var j = 0; j < allPanes.length; j++) {
        allPanes[j].classList.remove("show", "active");
      }
      document.querySelector(target).classList.add("show", "active");
    });
  }

  var toggler = document.querySelector(".navbar-toggler");
  if (toggler) {
    toggler.addEventListener("click", function () {
      var target = document.querySelector(this.getAttribute("data-target"));
      target.classList.toggle("show");
    });
  }

  var registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var pass = document.getElementById("regPassword").value;
      var confirm = document.getElementById("regConfirm").value;
      if (pass !== confirm) {
        alert("Tartar sauce! Passwords don't match!");
        return;
      }
      alert("Welcome aboard, sailor! Registration complete! 🎉");
      closeModal("authModal");
      registerForm.reset();
    });
  }

  var signinForm = document.getElementById("signinForm");
  if (signinForm) {
    signinForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Welcome back to Bikini Bottom! 🍍");
      closeModal("authModal");
      signinForm.reset();
    });
  }
});

function createBubble() {
  var bubble = document.createElement("div");
  bubble.classList.add("bubble");
  var size = Math.random() * 30 + 10;
  bubble.style.width = size + "px";
  bubble.style.height = size + "px";
  bubble.style.left = Math.random() * 100 + "vw";
  bubble.style.animationDuration = Math.random() * 5 + 5 + "s";
  document.body.appendChild(bubble);
  setTimeout(function () {
    bubble.remove();
  }, 10000);
}

setInterval(createBubble, 800);

var levelSelect = document.getElementById("levelSelect");
var classList = document.getElementById("class-list");

if (levelSelect && classList) {
  var classes = [
    { name: "Bubble Swimming", level: "Beginner", day: "Mon/Wed", time: "9:00 AM", instructor: "SpongeBob" },
    { name: "Starfish Float", level: "Beginner", day: "Tue/Thu", time: "10:00 AM", instructor: "Patrick" },
    { name: "Texas Dive", level: "Intermediate", day: "Mon/Wed", time: "11:00 AM", instructor: "Sandy" },
    { name: "Graceful Strokes", level: "Intermediate", day: "Tue/Thu", time: "1:00 PM", instructor: "Squidward" },
    { name: "Treasure Hunt Swim", level: "Advanced", day: "Friday", time: "9:00 AM", instructor: "Mr. Krabs" },
    { name: "Lifeguard Training", level: "Advanced", day: "Saturday", time: "8:00 AM", instructor: "Larry" }
  ];

  function renderClasses() {
    var selected = levelSelect.value;
    var filtered = classes.filter(function (c) {
      return selected === "All" || c.level === selected;
    });

    if (filtered.length === 0) {
      classList.innerHTML = '<p class="text-muted mt-3">No classes found for this level.</p>';
      return;
    }

    var html = "";
    for (var i = 0; i < filtered.length; i++) {
      var c = filtered[i];
      html += '<div class="class-item">';
      html += '<strong>' + c.name + '</strong> — <span class="badge badge-info">' + c.level + '</span>';
      html += '<br>';
      html += '<small>📅 ' + c.day + ' | ⏰ ' + c.time + ' | 👨‍🏫 ' + c.instructor + '</small>';
      html += '</div>';
    }
    classList.innerHTML = html;
  }

  levelSelect.addEventListener("change", renderClasses);
  renderClasses();
}
