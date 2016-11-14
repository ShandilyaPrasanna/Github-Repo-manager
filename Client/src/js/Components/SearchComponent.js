var React=require('react');

var SearchComponent=React.createClass({

	getDefaultProps: function(){
		return{
			message:"Enter a city name to get the weather"
		};
	},

	getInitialState: function(){
		return{
			message:this.props.message
		};
	},
	
	SearchUserRepo:function(e){
		e.preventDefault();
		var inputField=this.refs.inputField.value;
		alert(inputField);
		this.refs.inputField.value='';
		this.props.onSearch(inputField, "UserName");

	},

	SearchTechnology:function(e){
		e.preventDefault();
		var inputField=this.refs.inputField.value;
		alert(inputField);
		this.refs.inputField.value='';
		this.props.onSearch(inputField, "Technology");
	},

	render:function(){

		var myStyle={
			textAlign:'center',
			paddingTop:80+'px',
			marginBottom: 40+'px'
		};

		return (
			<div style={myStyle} className="container">

				<form className="form-horizontal">
							<div className="form-group">
								<label className="col-lg-4 control-label" for="inputUserName">Enter User Name/Technology: </label>
								<div className="col-lg-6">
									<input className="form-control" id="inputUserName" placeholder="User Name/Technology Name" type="text" ref="inputField"></input>
								</div>
							</div> 

							<div className="form-group">
								<label className="col-lg-4 control-label"></label>
								<div className="col-lg-6">
									<button className="btn btn-success" onClick={this.SearchUserRepo}> Search Repository <span className="glyphicon glyphicon-search"></span></button><span>&emsp;&nbsp;&emsp;</span>
									<button className="btn btn-success" onClick={this.SearchTechnology}> Search For Technology <span className="glyphicon glyphicon-search"></span></button>
								</div>
							</div>
						</form>
						<br></br>
				<hr></hr>
			</div>
			);
	}
});

module.exports=SearchComponent;