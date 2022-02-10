const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


const Schema = mongoose.Schema;

const Shoes = new Schema({
	name: {type: String},
	description: {type: String},	
	price: {type: Number},
	image: {type: String},
	slug: { type: String, slug: 'name', unique: true},
}, {
	timestamps: true,
});

mongoose.plugin(slug);
Shoes.plugin(mongooseDelete, { 
	deletedAt : true,
	overrideMethods: 'all',
});

module.exports = mongoose.model('Shoes', Shoes);