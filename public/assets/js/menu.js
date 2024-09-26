jQuery(document).ready(function () {
  var mobile_menu_show = 0;

  jQuery("#menu-btn").on("click", function () {
    console.log("first");
    if (mobile_menu_show == 0) {
      jQuery("#mainmenu").slideDown();
      jQuery("header").addClass("height-auto");
      jQuery(".force-header-mobile").css("max-height", "100%");
      mobile_menu_show = 1;
      jQuery(this).removeClass("unclick");
      jQuery(this).addClass("clicked");
    } else {
      $("#mainmenu").slideUp("fast", function () {
        jQuery("header").removeClass("height-auto");
        jQuery(".force-header-mobile").css("max-height", "80px");
        mobile_menu_show = 0;
      });
      jQuery(this).removeClass("clicked");
      jQuery(this).addClass("unclick");
    }
  });

  // close menu when click for onepage on mobile (added 17/04/23)
  jQuery("header.header-mobile #mainmenu a").click(function (evn) {
    if (this.href.indexOf("#") != -1) {
      evn.preventDefault();
      $(this)
        .parent()
        .parent()
        .hide("fast", function () {
          jQuery("header").removeClass("height-auto");
          jQuery(".force-header-mobile").css("max-height", "80px");
          mobile_menu_show = 0;
        });
      jQuery("#menu-btn").removeClass("clicked");
      jQuery("#menu-btn").addClass("unclick");
    }
  });
});
