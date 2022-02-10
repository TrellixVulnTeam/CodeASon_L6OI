const Shoes = require('../models/Shoes')
const path = require('path')
const { multipleMongooseToObject } = require('../../ultil/mongoose')

class ManageController{

	manage(req, res, next) {

		Shoes.find({})
			.then(shoes => {
				res.render('manage/stored-product',
					{ 
						shoes: multipleMongooseToObject(shoes)
					}
			)})
			.catch(next)
		
    }

	trash(req, res, next) {

		Shoes.findDeleted({})
			.then(shoes => {
				res.render('manage/trash',
					{ 
						shoes: multipleMongooseToObject(shoes)
					}
			)})
			.catch(next)
		
    }

}

module.exports = new ManageController();