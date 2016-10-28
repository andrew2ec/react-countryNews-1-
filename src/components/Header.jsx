var React = require('react');
var Link = require('react-router').Link

var Header = React.createClass({
	render: function(){

		var divStyle = {
			background:'blue',
			color:'white'
		}
		var linkStyle = {
			textAlign:'right',
			paddingRight:'150',
			color:'white'
		}
		var displayStyle = {
			listStyleType:'none'
		}
		return(
			<div style={divStyle}>
				<div className="col-md-12 col-md-offset-2">
					<h1>Country News</h1>
				</div>
				<div className="col-md-12 col-md-offset-2">
					<h2>Top stories in the country</h2>
				</div>
				<div style={linkStyle}>
					<ul style={displayStyle}>
						<li><h2><Link to="news">NEWS</Link></h2></li>
						<li><h2><Link to="photos">PHOTOS</Link></h2></li>
					</ul>
				</div>
				<div>
					{this.props.children}
				</div>
			</div>
		);
	}
});
module.exports = Header;
