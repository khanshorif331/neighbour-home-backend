const Order = require('../model/order-model.js')

// posting a user data
// const postUser = async (req, res) => {
// 	try {
// 		const user = req.body
// 		const newUser = new User(user)

// 		await newUser.save()
// 		res.status(200).json({
// 			message: 'User data saved successfully',
// 		})
// 	} catch (err) {
// 		res.status(500).json({
// 			message: 'There was a server side error! from user posting',
// 		})
// 	}
// }

// posting user email from register
const orderPost = async (req, res) => {
     try {
          
          const order = req.body
          const newOrder = new Order(order)

          await newOrder.save()

          res.send({
               report: 'inserted',
          })
     } catch (err) {
          res.status(500).json({
               message: err.message,
          })
     }
}

// getting all user data
const getAllOrder = async (req, res) => {
     try {
          const data = await Order.find()
          res.status(200).json(data)
     } catch (err) {
          res.status(500).json({ message: 'There was a server side error!' })
     }
}
// getting all user order by email
// getting all booking data
const getOrderDataByEmail = async (req, res) => {
     try {
          const email = req.query.email
          // console.log(email)
          const data = await Order.find({ 'buyerEmail': email })
          // console.log(data)
          res.status(200).json(data)
     } catch (err) {
          res.status(500).json({ message: 'There was a server side error!' })
     }
}


// getting single user data by id
const singleOrder = async (req, res) => {
     try {
          const id = req.params.id
          const data = await Order.findById(id)
          res.status(200).json(data)
     } catch (err) {
          res.status(500).json({ message: 'There was a server side error!' })
     }
}



// deleting single user data by id
const deleteOrder = async (req, res) => {
     try {
          const id = req.params.id
          await Order.deleteOne({ _id: id })
          res.status(200).json({
               message: 'User data was deleted successfully',
          })
     } catch (err) {
          res.status(500).json({ message: 'There was a server side error!' })
     }
}

module.exports = {
     // postUser,
     orderPost,
     getAllOrder,
     singleOrder,
     getOrderDataByEmail,
     deleteOrder
}
