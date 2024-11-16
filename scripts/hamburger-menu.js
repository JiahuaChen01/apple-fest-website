if (window.matchMedia("(max-width: 900px)").matches) {
    $("#hamburger-icon").removeClass("hidden");
    $("#nav-menu").addClass("hidden");
  } else {
    $("#hamburger-icon").addClass("hidden");
    $("#nav-menu").removeClass("hidden");
  }


  $("#hamburger-icon").on("click", function() {
    if ($("#nav-menu").hasClass("hidden")) {
      $("#nav-menu").removeClass("hidden");
    } else {
      $("#nav-menu").addClass("hidden");
    }
  });


  $(window).on("resize", function() {
    if (window.matchMedia("(max-width: 900px)").matches) {
      $("#hamburger-icon").removeClass("hidden");
      $("#nav-menu").addClass("hidden");
    } else {
      $("#hamburger-icon").addClass("hidden");
      $("#nav-menu").removeClass("hidden");
    }
  });
