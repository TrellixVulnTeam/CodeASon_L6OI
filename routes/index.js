const shoesRouter = require('./shoes')
const manageRouter = require('./manage')
const siteRouter = require('./site')

function route(app){

	app.use('/manage', manageRouter)

	app.use('/shoes', shoesRouter)
	
	app.use('/', siteRouter)

}

module.exports = route;