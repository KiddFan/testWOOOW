var categoryService = require('../../../src/service/categoryService');

module.exports =  (app) => {
	app.get('/api/checkClzrmCat/:cat', (req, res) => {
		const catCode = req.params.cat.toString().trim()
		var result = {tags: []}
		var tags = categoryService.getTagsById(catCode)
		result.tags = tags.map( (id, index) => {
			return {id}
		} )
		res.json(result)

	})
}