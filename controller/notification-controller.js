const Notification = require('../model/notification-model')

// posting a notification data
const singleNotificationPost = async (req, res) => {
	try {
		const notification = req.body
		const newNotification = new Notification(notification)
		await newNotification.save()
		res.status(200).json({
			message: 'Notification data saved successfully',
		})
	} catch (err) {
		res.status(500).json({
			message: 'There was a server side error! from book',
		})
	}
}

module.exports = singleNotificationPost
