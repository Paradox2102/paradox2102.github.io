---
---
$(document).ready(function() {

//Check if stream is online
    var streamName = "{{ site.stream }}";

    $.getJSON('https://api.twitch.tv/kraken/streams/' + streamName + '?callback=?', function(data) {
        if ((data.stream) != null) {
            window.console && console.log('Online!');
        }
        else {
            window.console && console.log('Offline!');
            $('#register').append('<div class="centered alert alert-warning" role="alert"><b>Sorry!</b> The Robot is not online currently!</div>');
            $('#register-button').prop('disabled', true);
            $('#stream-offline').removeClass('hidden');
            $('#stream').remove();
        }
    });


//On Click
    $('#register-button').click(function() {

        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        var successRegister = 0;

        if (testEmail.test($("#register-input-email").val())) {
            var successRegister = 1;
        };

        $('#alert-email-fail').remove();

        if (successRegister == 1) {
            $('#register').append('<div id="alert-email-success" class="centered alert alert-success" role="alert"><b>Awesome!</b> Everything Checks out! Waiting for your turn!</div>');
            window.console && console.log('Email Passed!');
            $('#register-button').prop('disabled', true);
            window.console && console.log($("#register-input-email").val());
            queue($("#register-input-email").val()); 
        } else {
            $('#register').append('<div id="alert-email-fail" class="centered alert alert-danger" role="alert"><b>Whoops!</b> That email seems to be incorrect!</div>');
            window.console && console.log('Email Failed!');
        };

        if (($("#register-input-checkbox").is(':checked')) && successRegister == 1) {
            window.console && console.log('Wants to Subscribe!');
            subscribe($("#register-input-email").val()); 
        };


         function queue(address){
                $.ajax({
                    type: 'POST',
                    url: '/resources/php/queue.php',
                    crossDomain: false,
                    dataType: 'text',
                    data: {email: address},
                    success: function(responseData, textStatus, jqXHR) {
                        //Thing to do when added
                    },
                });
         }

         function subscribe(address){
                $.ajax({
                    type: 'POST',
                    url: '/resources/php/subscribe.php',
                    crossDomain: false,
                    dataType: 'text',
                    data: {email: address},
                    success: function(responseData, textStatus, jqXHR) {
                        //Thing to do when added
                    },
                });
         }
    });
});