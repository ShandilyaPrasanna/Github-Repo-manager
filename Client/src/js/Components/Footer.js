var React=require('react');
var Link=require('react-router').Link;
var IndexLink=require('react-router').IndexLink;

var Footer=React.createClass({
	render: function(){
		return(

<div id="navbar navbar-fixed-bottom" style={{color:'white',backgroundColor:'black'}}>
    <div className="container">
			<div className="row">
				<div className="col-sm-3">
					<h6>Copyright &copy; 2016  </h6>
				</div>


    

<div className="col-sm-3">
					<h6>Policy Info</h6>
					<ul >
						<li><a href="#">Privacy Policy</a></li>
						<li><a href="#">Report Abuse & Takedown Policy</a></li>
						<li><a href="#">CSR Policy</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
				</div>


				<div className="col-sm-2">
					<h6>Navigation</h6>
					<ul id="social">
						<li><a href="about.html">About Us</a></li>
						<li><a href="#">Services</a></li>
						<li><a href="#">Links</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
				</div>


<div className="col-sm-2">
					<h6>Follow Us </h6>
						<ul id="social">
							<li><a href="#"><i className="fa fa-facebook-official" aria-hidden="true"></i>Facebook</a></li>

							<li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i>Google Plus</a></li>

							<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i>Twitter</a></li>
						</ul>
					</div>

					<div className="col-sm-2">
						<h6>Coded with <span className="glyphicon glyphicon-heart"></span> by </h6>

					</div>



    </div>

</div>
    </div>

    )
}
});

module.exports=Footer;
