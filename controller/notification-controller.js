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

// getting single notification data by email
const singleNotificationByEmail = async (req, res) => {
	try {
		const email = req.params.email
		const data = await Notification.find({ user_email: email })
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

// updating a single notification data $set needs to be update
const updateNotification = async (req, res) => {
	try {
		const email = req.params.email

		await Notification.updateMany(
			{ user_email: email },
			{
				// status: 'seen',
				$set: { status: 'seen' },
			},
			{ multi: true }
		)

		res.status(200).json({
			message: 'Notification data was updated successfully',
		})
	} catch (err) {
		res.status(500).json({
			message: 'Can not update because of a server side error!',
		})
	}
}

module.exports = {
	singleNotificationPost,
	getAllNotification,
	singleNotification,
	deleteNotification,
	updateNotification,
	singleNotificationByEmail,
}
