var React=require('react');
var NavComponent=require('./Nav');
var Footer=require('./Footer');
var MainComponent=React.createClass({
	render:function(){
		return (
			<div>
			<NavComponent />
			{this.props.children}
			<Footer />
			</div>
			);
		}
	});

	module.exports=MainComponent;

