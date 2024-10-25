jQuery(document).ready(function () {
  "use strict"; // use strict mode

  jQuery(".expand").each(function () {
    $(this)
      .find("h4")
      .on("click", function () {
        console.log("first");
        var iteration = $(this).data("iteration") || 1;
        switch (iteration) {
          case 1:
            $(this).next(".hidden-content").slideDown(300);
            $(this).addClass("active");
            break;

          case 2:
            $(this).next(".hidden-content").slideUp(300);
            $(this).removeClass("active");
            break;
        }
        iteration++;
        if (iteration > 2) iteration = 1;
        $(this).data("iteration", iteration);
      });
  });
});
