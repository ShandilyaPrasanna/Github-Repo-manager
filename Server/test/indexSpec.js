    var should = require("chai").should(),
    // expect = require("chai").expect,
    // assert = require("chai").assert,
     expect = require('chai').expect;
    var sinon = require('sinon');
    supertest = require("supertest"),
    app = require("../bin/www");

    var model = require('../models/movie.js');
    var modelStub = sinon.stub(model, 'find');
    var url = supertest("http://localhost:8080/movie");

    describe.only('Test my controller', function(){

  describe.only("Testing the third route", function(err){

     before(function(){
       modelStub.yields(null,[{'Title':'Batman Forever'}] );
     });

       it("should handle and send the JSON data Part 1", function(done){
     url
     .get("/GetMovies")
     .expect(200)
     .expect('Content-Type', /json/)
     .end(function(err, res){
           if (err) return done(err);
           expect(res.body[0].Title).to.be.equal("Batman Forever");
           done();
     });
   });
   });

   });

    describe.skip("Testing the second route", function(err){
      it("should handle and send the computed info", function(done){
        url
            .post("/movie/AddMovie")
            .send({Title: "Dangal",Year: "2016",imdbID: "tt5074352",Type: "movie",Poster: "http://ia.media-imdb.com/images/M/MV5BNDQ3NDQwMTMtNTU2OS00ZmVhLWFhM2MtZjFjMjhhNzdkMWU5XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"})
            .expect(200)
            .end(function(err,res){
              should.not.exist(err);
              var data=res.text;
              data.should.be.equal("Movie Added");
              done();
            });

      });
    });

    describe.skip("Testing the third route", function(err){
      it("should update the movie with given id and details", function(done){
        url
            .put("/movie/UpdateMovie")
            .send({'imdbID':"tt5074352", "Rating":"4.7","Description":"This Aamir movie would be rocking"})
            .expect(200)
            .end(function(err,res){
              should.not.exist(err);
              var data = res.text;
              data.should.be.equal("Updated");
              done();
            });

      });
    });
     describe.skip("Testing the fourth route", function(err){
      it("should delete the movie with given id", function(done){
        url
            .delete("/movie/DeleteMovie")
            .send({'imdbID':"tt5074352"})
            .expect(200)
            .end(function(err,res){
              should.not.exist(err);
              var data=res.text;
              data.should.be.equal("Deleted the given movie");
              done();
            });

      });
      });
