var React=require('react');
var ModalUpdate=require('./ModalUpdate');
var FavouriteRepoDisplay=React.createClass({

	handleUpdate:function(repoID, Description){
		alert(repoID+" "+Description);
		this.props.updateCall(repoID, Description)
	},

	DeleteRepo:function(){
		alert('Entering Delete');
		this.props.onDelete(this.props.RepoObj.repoID);
	},

	render:function(){
		console.log(this.props.RepoObj);
		var privacy=this.props.RepoObj.Access;
		var PrivateMessage='';
		if(privacy===false){
			PrivateMessage="This Repository is available for public";
		}
		else{
			PrivateMessage="This Repository is a private Repository";
		}
		return (
			<div style={{marginTop:'50'}}>
			<div className="container"> 
			<div className="row">
			<div className="col-lg-3 col-offset-1">
			<img src={this.props.RepoObj.Avatar} className="img-rounded" alt="User's Picture Here" height="200" width="200"></img>
			</div>
			<div className="col-lg-8">
			 <h3> Repository ID:<small style={{fontSize:"20px"}}> {this.props.RepoObj.repoID} </small></h3>
			<h3> Repository Name:  <small style={{fontSize:"20px"}}> {this.props.RepoObj.Name} </small></h3>
			<h3> Category:  <small style={{fontSize:"20px"}}> {this.props.RepoObj.Category} </small></h3>
			<h3> Description:  <small style={{fontSize:"20px"}}> {this.props.RepoObj.Description} </small></h3>
			<h3> Repository Access:  <small style={{fontSize:"20px"}}> {PrivateMessage} </small></h3>
			<h3> Star-Rating:  <small style={{fontSize:"20px"}}> {this.props.RepoObj.Stars} </small></h3>
			<br></br>
			<a className="btn btn-warning"  role="button" data-toggle="modal" data-target={'#'+this.props.RepoObj.repoID}> Update Repository </a>&emsp;&nbsp;&nbsp;
			<button className="btn btn-danger" onClick={this.DeleteRepo}> Delete this repository </button>
			</div>
			</div>
			</div>
			<br></br>
			<hr></hr>
			<ModalUpdate id={this.props.RepoObj.repoID} category={this.props.RepoObj.Category} onUpdate={this.handleUpdate}></ModalUpdate>
			</div>
			);
		}
});

module.exports=FavouriteRepoDisplay;