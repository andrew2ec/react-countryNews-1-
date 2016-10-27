var React = require('react');

var Header = React.createClass({
	render: function(){
		return(
			<div>
				<div>
					<h1>Country News</h1>
				</div>
				<div>
					<h2>Top stories in the country</h2>
				</div>
				<div>
					<h2>NEWS</h2>
					<h2>PHOTOS</h2>
				</div>
				{this.props.children}
			</div>
		);
	}
});
module.exports = Header;
