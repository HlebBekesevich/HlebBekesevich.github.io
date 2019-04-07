;(function(){
	let login = prompt('Login', ''), answer, password;
	if (login == 'admin') 
	{
		password = prompt('Password', '');
		answer = (password == 'chill')? 'Welcome!' : (password == null)?  'Login error' : 'Password error';
	}
	else if (login == null) answer = 'Error';
	else answer = 'I don\'t know your' ;
	alert(answer);
})();