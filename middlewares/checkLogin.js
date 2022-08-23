const checkLogin = (req, res, next) => {
	const authHeader = req.headers.authorization
	try {
		const token = authHeader.split(' ')[1]
		console.log(token, 'token')
		const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
		const { email } = decoded
		req.email = email
		next()
	} catch (err) {
		// if we write something inside of next function,it will be count as error message
		next('Authentication failure')
		// res.status(500).json({
		//     message: 'Authentication failure',
		// })
	}
}

module.expoorts = checkLogin
