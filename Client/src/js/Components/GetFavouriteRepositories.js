var React=require('react');

var FavouriteRepoDisplay=require('./FavouriteRepoDisplay');
var GetFavouriteRepositories=React.createClass({

	getInitialState:function(){
		return({SelectOptions:[], value:'select', FavouriteRepoObj:[]});
	},
	
	componentDidMount:function(){
		var url="http://localhost:8085/repos/GetCategoryOptions";
		$.ajax({
			url:url,
			type:'GET',
			dataType:'JSON',
			success:function(data){
				console.log(data);
				this.setState({SelectOptions:data});

			}.bind(this),
			error:function(err){
				console.log(err);
			}.bind(this)
		});
	},

	GetCategoryFavourites:function(event){
		alert(event.target.value);
		var categoryObj={};
		categoryObj.category=event.target.value;
		this.setState({value:event.target.value});
		var url="http://localhost:8085/repos/GetCategoryFavourites";
		$.ajax({
			url:url,
			type:'POST',
			data:categoryObj,
			dataType:'JSON',
			success:function(data){
				console.log(data);
				this.setState({FavouriteRepoObj:data});
			}.bind(this),
			error:function(err){
				console.log(err);	
			}.bind(this)
		});
	},

	updateRepository:function(repoID, Description){
		alert(repoID+" "+Description);
		var UpdateObj={};
		UpdateObj.repoID=repoID;
		UpdateObj.Description=Description;

		var url="http://localhost:8085/repos/UpdateRepository";
		$.ajax({
			url:url,
			type:'PUT',
			data:UpdateObj,
			success:function(data){
				console.log(data);
				var index=this.state.FavouriteRepoObj.findIndex(function(element){
					console.log(element);
					return (element.repoID===UpdateObj.repoID);
				});
				if(index!=-1){
					console.log("executing");
					this.state.FavouriteRepoObj[index].Description=Description;
					this.setState({FavouriteRepoObj:this.state.FavouriteRepoObj});
					console.log(this.state.FavouriteRepoObj);
				}
				else{
					console.log("not executing");
				}
			}.bind(this),
			error:function(err){
				console.log(err);
			}.bind(this)
		});
	},

	DeleteRepository:function(repoID){
		alert(repoID);
		var DeleteRepoObj={};
		DeleteRepoObj.repoID=repoID;
		var url="http://localhost:8085/repos/DeleteRepository";
		$.ajax({
			url:url,
			type:'DELETE',
			data:DeleteRepoObj,
			success:function(data){
				console.log(data);
				var index=this.state.FavouriteRepoObj.findIndex(function(element){
					return element.repoID===DeleteRepoObj.repoID;
				});
				if(index!=-1){
					this.state.FavouriteRepoObj.splice(index, 1);
					this.setState({FavouriteRepoObj:this.state.FavouriteRepoObj});
				}
			}.bind(this),
			error:function(err){
				console.log(err);
			}.bind(this)
		});
	},

	render:function(){
		
		
		console.log(this.state.SelectOptions.length);
		var SelectListArr=this.state.SelectOptions.map(function(option){
			console.log('entering');
			return(<option value={option}>{option}</option>);
		});

		var FavouriteRepoDisplayArr=this.state.FavouriteRepoObj.map(function(Repo){
			console.log('entering');
			return(<FavouriteRepoDisplay RepoObj={Repo} updateCall={this.updateRepository} onDelete={this.DeleteRepository}></FavouriteRepoDisplay>);
		}.bind(this));

		console.log(SelectListArr);
		return(
			<div style={{marginTop:'100'}}>
			<div style={{textAlign:'center'}}>
				<select id='myList' onChange={this.GetCategoryFavourites}>
					<option value="Select">Select</option>
					{SelectListArr}
				</select>
				</div>
				<hr></hr>
				{FavouriteRepoDisplayArr}
			</div>
			);
	}
});

module.exports=GetFavouriteRepositories;
