var socket = io();

socket.on('connect',function(){
	console.log('connected to server');

	// socket.emit('createEmail',{
	// 	to: 'dtheo0690@gmail.com',
	// 	text: 'hey. this is daniel.'
	// });
});

socket.on('disconnect',function(){
	console.log('Disconected from server');
});

// socket.on('newEmail', function(email){
// 	console.log('New Email', email);
// });

socket.on('newMessage',function(message){
	console.log('newMessage',message);
});