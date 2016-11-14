var express = require('express');
var router = express.Router();
var movie=require("../models/movie");
var DBConnection=require('../Connection/DBConnection');
DBConnection();
/* Adding the movies in the database */
router.route('/AddMovie').post(isLoggedIn,function(req, res, next) {
	var result=[];
		req.body.Description="No Description yet. Please Update.";
		req.body.Rating="Default Rating - 3.0";

	if(req.body){
		var cursor=db.collection('addmovies').find({},{__v:false, _id:false});
		console.log(cursor);
		cursor.forEach(function(data,err){
		if(err){
			console.log(err);
		}
		result.push(data);
		console.log(result);

	},
	function(){
		var index=result.findIndex(function(element){
			return element.imdbID===req.body.imdbID;
		});
		if(index!==-1){
			console.log("Movie Already Added as Favourite");
			res.send("Movie Already Added as Favourite");
		}

		else{
			var movieVar = new movie(req.body);
		console.log(req.body);
		console.log(movieVar);
		movieVar.save(function(err){
			if(err){
				console.log(err);
			}
			else{
				console.log("Movie added");
				res.send("Movie Added");
			}
		});
		}
	});
	}

});

//Getting data from the database using collection (Important)
/*
router.route('/GetMovies').get(function(req,res){
	var result=[];
	var cursor=db.collection('addmovies').find({},{__v:false, _id:false});
	cursor.forEach(function(data,err){
		if(err){
			console.log(err);
		}
		result.push(data);
		console.log(result);

	},
	function(){
		res.json(result);
	});
});
*/

//Getting data from the database using the schema

router.route('/GetMovies').get(isLoggedIn, function(req,res){
	addMovies.find({},function(err,docs){
		if(err){
			res.send(err);
		}
		else{
			res.json(docs);
		}
	});
});


//Updating the given movie
router.route('/UpdateMovie').put(isLoggedIn,function(req,res){
	if(req.body){
		console.log(req.body);
		db.collection('addmovies').update({'imdbID':req.body.imdbID},{$set : {'Rating' : req.body.Rating, 'Description' : req.body.Description}})
		res.send("Updated");
	}
	else{
		console.log("Nothing in body");
		res.send("Please give a movie object");
	}
});

//Deleting a given movie
router.route('/DeleteMovie').delete(isLoggedIn, function(req,res){
	if(req.body){
		console.log(req.body);
		db.collection('addmovies').remove({'imdbID':req.body.imdbID});
		res.send("Deleted the given movie");
	}
	else{
		console.log("Nothing in body");
		res.send("Please enter a movie object");
	}
});

function isLoggedIn(req,res,next){
 console.log(req);
 if(req.isAuthenticated()){
 	console.log("Inside isLoggedIn");
   return next();
 }
 else{
 	console.log("Inside isLoggedIn Notlogin");
   res.json('not authenticated');
 }
}

module.exports = router;
