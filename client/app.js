var socket = io();

var arrhist = new Array(100);

$('form').on('submit', function(){
    var text = $('#message').val();
    var init = $('#initials').val();
    var result = init.concat(' says: ', text);
    socket.emit('message', result);
    arrhist.push(result);
    $('#message').val('');

    return false;
})

socket.on('message', function (msg) {   
  $('<li>').text(msg).appendTo('#history');
});
