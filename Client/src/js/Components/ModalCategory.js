var React=require('react');

var ModalCategory=React.createClass({
	
	AddRepository:function(e){
		e.preventDefault();
		var Category=this.refs.Category.value;
		alert(Category);
		this.refs.Category.value='';
		this.props.onAdd(Category,this.props.id,this.props.RepoObj);
		
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

			<h4 className="modal-title"> Add Repository </h4>
			

			<div className="modal-body">
			<form className="form-horizontal" >
			<div className="form-group">
			<label className="col-lg-3 control-label" for="RepoID"> Repository ID: </label>
			<div className="col-lg-9">
			<input className="form-control" id="RepoID" placeholder="RepoID" type="text" ref="RepoID" value={this.props.id} readOnly="readOnly"></input>
			</div>
			</div> 

			<div className="form-group">
			<label className="col-lg-3 control-label" for="Category"> Category: </label>
			<div className="col-lg-9">
			<input className="form-control" id="Category" placeholder="Please Enter the Category, if no Category enter Others" type="text" ref="Category"></input>
			</div>
			</div> 

			<div className="form-group">
			<label className="col-lg-3 control-label">  </label>
			<div className="col-lg-9">
			<br></br>
			<button className="btn btn-success btn-block" type="submit" data-dismiss="modal" onClick={this.AddRepository}> Add Repository </button>
			</div>
			</div> 
			</form>	
			</div> 
			</div> 
			</div>
			</div>
			</div>
			{/*<div className="modal fade" id="UpdateModal">
			<div className="modal-dialog">
			<div className="modal-content">
			<div className="modal-header">
			<button className="close" data-dismiss="modal" onClick={this.props.onCloseModal}>&times;</button>

			<h4 className="modal-title"> Update </h4>
			</div>
			<div className="modal-body">
			<form className="form-horizontal">
			<div className="form-group">
			<label className="col-lg-2 control-label" for="imdbID"> imdbID </label>
			<div className="col-lg-10">
			<input className="form-control" id="imdbID" placeholder="Description" type="text" ref="imdbId" value={this.props.movieID} readOnly="readOnly"></input>
			</div>
			</div> 
			</form>	
			</div>  
			</div>
			</div>
			</div>
			</div>*/}
			</div>

		);

	}
});

module.exports=ModalCategory;