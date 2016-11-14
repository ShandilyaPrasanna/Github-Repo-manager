var should = require("chai").should(),
//var  expect = require("chai").expect,
// assert = require("chai").assert,

supertest = require("supertest"),
app = require("../bin/www");
var sinon = require('sinon');

var expect = require('chai').expect;
var model = require('../models/Repositories.js');
var modelStub = sinon.stub(model, 'find');
var url = supertest("http://localhost:8080");

describe("Testing Add Repo", function(err){
  it("Add Movie", function(done){
    url
    .post("/repos/AddRepositories")
    .expect(200)
    .send({
      "repoID":"70770665",
      "Name" :"dell21",
      "Access":"false",
      "Stars":"0",
      "category":"wipro"
    })
    .end(function(err,res){
      res.text.should.be.equal("Repository Added");
      done();
    });

  });
});

describe("Testing Get Repos", function(err){

  beforeEach(function(){
    modelStub.yields(null, [{'repoID': '70770665', 'Name': 'dell21', 'Access':'false', 'Stars':'0', 'category':'wipro'}]);
  });
  it("Get repos", function(done){
    url
    .get("/repos/GetCategoryFavourites")
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err,res){
    //  var myObj = JSON.parse(res.text);
     expect(res.body[0].repoID).to.be.equal(70770665);
      done();
    });

  });
});

describe("Testing /movie/update", function(err){
  it("Update Movie", function(done){
    url
    .put("/users/update?id=tt2044801&title=Kite2")
    .expect(200)
    .end(function(err,res){
      should.not.exist(err);
       var myObj = JSON.parse(res.text);

      myObj.ok.should.be.equal(1);
       done();
    });
  });
});

describe("Testing /movie/delete", function(err){
  it("Delete Movie", function(done){
    url
    .delete("/users/delmovies?id=tt2044801")
    .expect(200)
    .end(function(err,res){
      should.not.exist(err);
       var myObj = JSON.parse(res.text);

       myObj.ok.should.be.equal(1);
       done();
    });
  });
});
