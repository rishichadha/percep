jQuery.noConflict();
$(document).ready(function() {
    $('#test-form').bootstrapValidator()
    .on('success.form.bv', function(msg) {
        // Prevent form submission
       msg.preventDefault();
       
        // Get the form instance
        var $form = $(msg.target);

        // Get the BootstrapValidator instance
        var bv = $form.data('bootstrapValidator');

        // Use Ajax to submit form data
        var url = 'https://script.google.com/macros/s/AKfycbyuKxFeXnQe98ooDFWa4XzagQCSt2YL-W9kIXzN_DUd1I5eM_U/exec';
        var redirectUrl = 'success-page.html';
        // show the loading 
        $('#postForm').prepend($('<span></span>').addClass('glyphicon glyphicon-refresh glyphicon-refresh-animate'));
        var jqxhr = $.post(url, $form.serialize(), function(data) {
            console.log("Success! Data: " + data.statusText);
        })
            .fail(function(data) {
                console.warn("Error! Data: " + data.statusText);
                // HACK - check if browser is Safari - and redirect even if fail b/c we know the form submits.
              
            });

    });
});