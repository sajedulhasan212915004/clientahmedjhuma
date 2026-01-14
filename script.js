document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("mobileToggle");
  var menu = document.getElementById("mobileMenu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("open");
    });
  }
  var animated = document.querySelectorAll(".animate-on-scroll");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    animated.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    animated.forEach(function (el) {
      el.classList.add("in-view");
    });
  }

  var filterButtons = document.querySelectorAll(".event-filter");
  var eventCards = document.querySelectorAll(".event-card");
  if (filterButtons.length && eventCards.length) {
    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var filter = button.getAttribute("data-filter");
        filterButtons.forEach(function (b) {
          b.classList.remove("active");
        });
        button.classList.add("active");
        eventCards.forEach(function (card) {
          var category = card.getAttribute("data-category");
          if (filter === "All" || category === filter) {
            card.style.display = "";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  var downloadButtons = document.querySelectorAll(".download-button");
  if (downloadButtons.length) {
    downloadButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        window.location.href = "./index.html#download";
      });
    });
  }

  var joinButtons = document.querySelectorAll(".join-button");
  joinButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      alert("This is a static preview. In the full app you would join this event.");
    });
  });

  var viewButtons = document.querySelectorAll(".view-event-button");
  viewButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      alert("This is a static preview. In the full app you would view event details.");
    });
  });
});
