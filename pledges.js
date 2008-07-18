var Pledge = {
  'addOptionFieldset': function() {
    $this = $(this);
    $last_fieldset = $('#on-pledges-edit fieldset:last');
    $new_fieldset = $last_fieldset.clone();

    $new_fieldset.insertBefore($this);
    return false;
  }
}

$(document).ready(function() {
  $new_option = $('<a href="#">Add another option</a>');
  $new_option.click(Pledge.addOptionFieldset);
  $('<p></p>').append($new_option).insertAfter($('#on-pledges-edit fieldset:last'));
});