(function($) {
  Drupal.behaviors.tingSearchAutocomplete = {
    attach: function(context) {

      $('#edit-keys').autocomplete({
        minLength: 3,
        source: function(request, response) {
          $.getJSON(Drupal.settings.basePath + 'ting/autocomplete', {
            query: request.term
          }, response);
        },
        search: function(event, ui) {
          // When a search is beginning, show the spinner
          $('#edit-keys').addClass('spinner');
        },
        open: function(event, ui) {
          // When a search is done, use this, to hide the spinner.
          $('#edit-keys').removeClass('spinner');
        },
        select: function(event, ui) {
          // Add the chosen value to the searchbox and submit.
          if (ui.item) {
            $('#edit-keys').val(ui.item.value);
            $('#search-form').submit();
          }
        }
      });
    }
  };
} (jQuery));

