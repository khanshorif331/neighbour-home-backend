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

// getting all notification data
const getAllNotification = async (req, res) => {
	try {
		const data = await Notification.find()
		res.status(200).json(data)
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

// getting single notification data by id
const singleNotification = async (req, res) => {
	try {
		const id = req.params.id
		const data = await Notification.findById(id)
		res.status(200).json(data)
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

// deleting single notification data by id
const deleteNotification = async (req, res) => {
	try {
		const id = req.params.id
		await Notification.deleteOne({ _id: id })
		res.status(200).json({
			message: 'Notification data was deleted successfully',
		})
	} catch (err) {
		res.status(500).json({ message: 'There was a server side error!' })
	}
}

module.exports = {
	singleNotificationPost,
	getAllNotification,
	singleNotification,
	deleteNotification,
}
