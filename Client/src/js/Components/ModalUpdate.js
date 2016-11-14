var React=require('react');

var ModalUpdate=React.createClass({

	UpdateRepository:function(){
		var repoID=this.refs.RepoID.value;
		var Description=this.refs.Description.value;
		this.refs.Description.value='';
		alert(repoID+" "+Description);
		this.props.onUpdate(repoID, Description);
	},

	render:function(){
		var modalID=this.props.id;

		return (
			<div>
			<div id={modalID} className="modal fade" tabIndex="-1" role="dialog">
			<div className="modal-dialog">
			<div className="modal-content">
			<div className="modal-header">
			<button className="close" data-dismiss="modal">&times;</button>

			<h4 className="modal-title"> Update Repository </h4>
			

			<div className="modal-body">
			<form className="form-horizontal" >
			<div className="form-group">
			<label className="col-lg-3 control-label" for="RepoID"> Repository ID: </label>
			<div className="col-lg-9">
			<input className="form-control" id="RepoID" placeholder="RepoID" type="text" ref="RepoID" value={this.props.id} readOnly="readOnly"></input>
			</div>
			</div>  

			<div className="form-group">
			<label className="col-lg-3 control-label" for="Description"> Add a Description: </label>
			<div className="col-lg-9">
			<input className="form-control" id="Description" placeholder="Please Enter a Description" type="text" ref="Description"></input>
			</div>
			</div> 

			<div className="form-group">
			<label className="col-lg-3 control-label">  </label>
			<div className="col-lg-9">
			<br></br>
			<button className="btn btn-success btn-block" type="submit" data-dismiss="modal" onClick={this.UpdateRepository}> Update Repository </button>
			</div>
			</div> 
			</form>	
			</div> 
			</div> 
			</div>
			</div>
			</div>
			</div>
			);
	}
});

module.exports=ModalUpdate;