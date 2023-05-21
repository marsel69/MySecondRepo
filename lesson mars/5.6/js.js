(function () {
	let url ='http://1270.0.1;8000/client_server';
	$('#sumit').on('click', function (e) {
		e.preventDefault();
		let username = $('#username').val();
		let password = $('#password').val();
		let user = {
			"type": "login",
			"username": username,  
			"password": password
		};
		checkUser(user);
	})

    async function checkUser(user) {
    	const responce = await fetch(url, {
    		method:"POST"
    		body: JSON stringify(user)
    	})
    	let groups = await responce.json();
    	if (groups.correct) {
    		startAdmin(groups)
    	} else {
    		$('.error').removeClass('hidden');
    	}
    }
})()