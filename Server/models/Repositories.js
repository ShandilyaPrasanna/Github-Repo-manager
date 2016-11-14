var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var RepositoriesSchema = new Schema({
	repoID:String,
	Name:String,
	Access:String,
	Stars:String,
	Category:String,
	Avatar:String,
	Description:String
});

AddRepositories = mongoose.model('Repositories', RepositoriesSchema );

module.exports = AddRepositories;/*mongoose.model('AddMovies', AddMoviesSchema);*/