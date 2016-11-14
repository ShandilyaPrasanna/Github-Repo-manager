var React=require('react');
var SearchComponent=require('./SearchComponent');
var DisplayComponent=require('./DisplayComponent');
var ParentComponent=React.createClass({

	getInitialState:function(){
		return ({
			RepoData:[],
			option:''
		});
	},

	handleSearchRepo:function(input, choice){
		alert(input+"  "+choice);
		var url='';
		if(choice==="UserName"){
		 url="https://api.github.com/users/"+input+"/repos";
		 $.ajax({
		url:url,
		type:"GET",
		dataType:"JSON",
		success:function(data){
			console.log(data);
			this.setState({RepoData:data, option:choice});
		}.bind(this),
		error:function(err){
			console.log(err);
		}.bind(this)
	});
	}

	else{
		 url="https://api.github.com/search/repositories?q="+input+"&sort=stars&order=desc";
		 $.ajax({
		url:url,
		type:"GET",
		dataType:"JSON",
		success:function(data){
			console.log(data);
			var techRepo=[];
			for(var i=0;i<10;++i){
				techRepo.push(data.items[i]);
			}
			console.log(techRepo);
			this.setState({RepoData:techRepo, option:choice});
		}.bind(this),
		error:function(err){
			console.log(err);
		}.bind(this)
	});
	}

	
	},

	render: function(){
		return (
			<div>
				<SearchComponent onSearch={this.handleSearchRepo}></SearchComponent>
				<DisplayComponent RepoObj={this.state.RepoData} searchChoice={this.state.option}></DisplayComponent>
			</div>
			);
	}
});

module.exports=ParentComponent;