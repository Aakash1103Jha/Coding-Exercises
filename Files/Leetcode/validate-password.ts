let validatePassword = (pass) => {
	// check password length
	if (pass.length < 8) {
		return 'Password should be at least 8 characters long'
	} else {
		console.log('okay')
	}
}

console.log(validatePassword('aakashjha'))
