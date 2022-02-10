const Shoes = require('../models/Shoes')
const path = require('path')
const { mongooseToObject } = require('../../ultil/mongoose')

class ShoesController{
	
	show(req, res, next){
		Shoes.findOne({slug: req.params.slug})
			.then(shoe => {
				res.render('shoes/showDetail', {shoe: mongooseToObject(shoe)})
			})
			.catch(next)
	}

	create(req, res, next){
		res.render('shoes/create')
	}

	store(req, res, next) {
		const formData = req.body
		formData.image = req.file.path
		
        const shoes = new Shoes(formData)
        shoes.save()
			.then(() => res.redirect('/'))
			.catch(error => {

			})
    }

	edit(req, res, next){
		Shoes.findById(req.params.id)
			.then(shoe => {
				res.render('shoes/edit', {shoe: mongooseToObject(shoe)})
			})
			.catch(next)
	}

	update(req, res, next){
		const formData = req.body
		formData.image = req.file.path

		Shoes.updateOne({_id: req.params.id}, formData)
			.then(() => res.redirect('/manage/stored/product'))	
			.catch(next)
	}

	delete(req, res, next){
		Shoes.delete({_id: req.params.id})
			.then(() => res.redirect('back'))
			.catch(next)
	}

	deleteForever(req, res, next){
		Shoes.deleteOne({_id: req.params.id})
			.then(() => res.redirect('back'))
			.catch(next)
	}

	restore(req, res, next){
		Shoes.restore({_id: req.params.id})
			.then(() => res.redirect('back'))
			.catch(next)
	}

}

module.exports = new ShoesController();