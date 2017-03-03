module.exports  = (err, req, res, next) => {
	if(err){
	   res.status(500);
	   var jsonInfo = {"code":"500", "detail":"Internal Server Error"}
	   res.json(jsonInfo);
	}

}
