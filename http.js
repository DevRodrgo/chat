$('#chat').submit(function(event) {
       
        var author = $('input[name=username]').val();
        var message = $('input[name=message]').val();

        if (author.length && message.length) {
            var messageObject = {
                author: author,
                message:message,
            };

            socket.emit('sendMessage', messageObject);
        }
    });