(function ($) {
  Drupal.behaviors.ac_core__usertweaks = {
    attach: function (context, drupalSettings) {
      $("body.miembro nav ul.tabs--primary").addClass("is-expanded");
    },
  };
})(jQuery);
