var mongoose = require("mongoose");
var imgSchema = new mongoose.Schema({
	src: String,
	

});
module.exports = mongoose.model("Img", imgSchema);
