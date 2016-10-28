var React = require('react');

var Header = React.createClass({
	render: function(){

		var divStyle = {
			textAlign:'right',
			paddingRight:'10'
		}
		var displayStyle = {
			listStyleType:'none'
		}
		return(
			<div>
				<div className="col-md-12 col-md-offset-2">
					<h1>Country News</h1>
				</div>
				<div className="col-md-12 col-md-offset-2">
					<h2>Top stories in the country</h2>
				</div>
				<div className="links">
					<ul style={divStyle}>
						<li><h2>NEWS</h2></li>
						<li><h2>PHOTOS</h2></li>
					</ul>
				</div>
				{this.props.children}
			</div>
		);
	}
});
module.exports = Header;
