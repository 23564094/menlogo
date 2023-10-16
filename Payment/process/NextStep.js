$(".actions").prepend('Do You Copy Order ID?</p><p><label><input type="checkbox" id="checkbox"> <em>Yes I Copied</em> </label></p>');
        
$('.hs-button').prop('disabled', true); // disabled by default

$('#checkbox').click(function() {
   // change on checkbox click
   $('.hs-button').prop('disabled', !$('#checkbox').prop('checked'));
});
        
