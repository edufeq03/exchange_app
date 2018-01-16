
document.getElementById("currency").addEventListener("change", myFunction);
document.getElementById("quantity").addEventListener("change", myFunction);
document.getElementById("currency_destination").addEventListener("change", myFunction);

function myFunction() {
    a = document.getElementById("currency").value;
    b = document.getElementById("quantity").value;
    c = document.getElementById("currency_destination").value;
   return document.getElementById("result").innerHTML = a*b*c;
}


$(document).ready(function() {
  return $('form').submit(function() {
    if ($('form').attr('action') === '/exchange') {
      $.ajax('/exchange', {
        type: 'POST',
        dataType: 'json',
        data: {
          currency: $("#currency").val(),
          currency_destination: $("#currency_destination").val(),
          quantity: $("#quantity").val()
        },
        error: function(jqXHR, textStatus, errorThrown) {
          return alert(textStatus);
        },
        success: function(data, text, jqXHR) {
          return $('#result').val(data.value);
        }
      });
      return false;
    }
  });
});
