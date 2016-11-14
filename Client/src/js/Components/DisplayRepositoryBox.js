var React=require('react');
var ModalCategory=require('./ModalCategory');
var DisplayRepositoryBox=React.createClass({
	handleAddRepository:function(Category, repoId, repoObject){
		alert(Category+"  "+repoId+"  "+repoObject.name);
		var repoDbObj={};
		repoDbObj.repoID=repoId;
		repoDbObj.Name=repoObject.name;
		repoDbObj.Access=repoObject.private;
		repoDbObj.Stars=repoObject.stargazers_count;
		repoDbObj.Category=Category;
		repoDbObj.Avatar=repoObject.owner.avatar_url;
		var url="http://localhost:8085/repos/AddRepositories";
		$.ajax({
			url:url,
			type:'POST',
			data:repoDbObj,
			success:function(data){
				console.log(data);
				alert(data);
			},
			error:function(err){
				console.log(err);
			}
		});

	},

	render:function(){
		var RepoObject=this.props.RepositoryObject;
		var searchOption=this.props.searchOption;
		var privacy=RepoObject.private;
		var PrivateMessage='';
		if(privacy===false){
			PrivateMessage="This Repository is available for public";
		}
		else{
			PrivateMessage="This Repository is a private Repository";
		}
		if(searchOption==="UserName"){
			return (
			<div style={{marginTop:'50'}}>
			<div className="container"> 
			<div className="row">
			<div className="col-lg-10">
			 <h3> Repository ID:<small style={{fontSize:"20px"}}> {RepoObject.id} </small></h3>
			 </div>
			 </div>
			 <div className="row">
			<div className="col-lg-10">
			<h3> Repository Name:  <small style={{fontSize:"20px"}}> {RepoObject.name} </small></h3>
			</div>
			</div>
			<div className="row">
			<div className="col-lg-10">
			<h3> Repository Access:  <small style={{fontSize:"20px"}}> {PrivateMessage} </small></h3>
			</div>
			</div>
			<div className="row">
			<div className="col-lg-10">
			<h3> Star-Rating:  <small style={{fontSize:"20px"}}> {RepoObject.stargazers_count} </small></h3>
			</div>
			</div>
			<br></br>
			 <div className="row">
			<div className="col-lg-10">
			 <a href={RepoObject.html_url} target="_blank" role="button" className="btn btn-info"> View Repository on Github </a>&emsp;&nbsp;&emsp;
			<button className="btn btn-primary" data-toggle="modal" data-target={'#'+RepoObject.id}> Add to Favourites </button>
			</div>
			</div>
			</div>
			<br></br>
			<hr></hr>
			<ModalCategory onAdd={this.handleAddRepository} id={RepoObject.id} RepoObj={RepoObject}></ModalCategory>
			</div>
			
			);
		}
		else{

		return (
			<div style={{marginTop:'50'}}>
			<div className="container"> 
			<div className="row">
			<div className="col-lg-3 col-offset-1">
			<img src={RepoObject.owner.avatar_url} className="img-rounded" alt="User's Picture Here" height="200" width="200"></img>
			</div>
			<div className="col-lg-8">
			 <h3> Repository ID:<small style={{fontSize:"20px"}}> {RepoObject.id} </small></h3>
			<h3> Repository Name:  <small style={{fontSize:"20px"}}> {RepoObject.name} </small></h3>
			<h3> Repository Access:  <small style={{fontSize:"20px"}}> {PrivateMessage} </small></h3>
			<h3> Star-Rating:  <small style={{fontSize:"20px"}}> {RepoObject.stargazers_count} </small></h3>
			<br></br>
			<a className="btn btn-primary" href={RepoObject.html_url} target="_blank" role="button"> View Repository on Github </a>&emsp;&nbsp;&nbsp;
			<a className="btn btn-primary" href={RepoObject.owner.html_url} target="_blank" role="button"> View User Repository on Github </a>&emsp;&nbsp;&nbsp;
			<button className="btn btn-primary" data-toggle="modal" data-target={'#'+RepoObject.id}> Add to Favourites </button>
			</div>
			</div>
			</div>
			<br></br>
			<hr></hr>
			<ModalCategory onAdd={this.handleAddRepository} id={RepoObject.id} RepoObj={RepoObject}></ModalCategory>
			</div>
			 
			);
	}
}
});

module.exports=DisplayRepositoryBox;