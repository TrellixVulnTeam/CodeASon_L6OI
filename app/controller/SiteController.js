const Shoes = require('../models/Shoes')
const { multipleMongooseToObject } = require('../../ultil/mongoose')

class SiteController{
	
	index(req, res, next){

		Shoes.find({})
			.then(shoes => {
				res.render('home',
					{ 
						shoes: multipleMongooseToObject(shoes)
					}
			)})
			.catch(next)
	}

}

module.exports = new SiteController();