var express = require('express');
var router = express.Router();
var Repositories=require("../models/Repositories");
var DBConnection=require('../Connection/DBConnection');
DBConnection();

//Adding the repositories in the database

router.route('/AddRepositories').post(function(req,res,next){
	if(req.body){
		req.body.Description="Default Description, Please Update";
		var RepositoryVar = new Repositories(req.body);
		console.log(req.body);
		console.log(RepositoryVar);
		RepositoryVar.save(function(err){
			if(err){
				console.log(err);
			}
			else{
				console.log("Repository added");
				res.send("Repository Added");
			}
		});
	}
});

router.route('/GetCategoryOptions').get(function(req,res,next){
	var List=[];
	Repositories.find({}, {Category:true, _id:false}, function(err,docs){
		if(err){
			res.send(err);
		}
		else{
			var index=0;
			docs.forEach(function(data,err){			
				 index=List.findIndex(function(element){
				 	return element===data.Category;
				});
				 console.log(index);
				 if(index===-1){
				List.push(data.Category);
				console.log(List);
			}
			});
			res.send(List);
			} 	
	});
});

router.route('/GetCategoryFavourites').post(function(req,res,next){
	if(req.body){
	console.log(typeof req.body.category);
	Repositories.find({Category:req.body.category}, function(err, docs){
		if(err){
			console.log('error');
			res.send(err);
		}
		else{
			console.log(docs);
			res.json(docs);
		}
	});

	}
});

router.route('/UpdateRepository').put(function(req,res,next){
	if(req.body){
		console.log(req.body);
		Repositories.update({repoID:req.body.repoID}, {Category:req.body.Category, Description:req.body.Description});
		console.log("Repository Updated");
		res.send("Repository Updated");
	}
	else{
		res.send("Please enter the required details");
	}
});

router.route('/DeleteRepository').delete(function(req,res,next){
	if(req.body){
		console.log(req.body);
		Repositories.remove({repoID:req.body.repoID}, function(err){
			if(err){
				res.send(err);
			}

			else{
				console.log('Repository Deleted');
				res.send('Repository Deleted');
			}
		});
	}
	else{
		res.send('The given repository could not be deleted');
	}
});

module.exports=router;