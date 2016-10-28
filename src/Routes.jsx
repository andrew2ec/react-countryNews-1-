var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var useRouterHistory = ReactRouter.useRouterHistory;
var createHashHistory = require('react-router/node_modules/history/lib/createHashHistory');
var appHistory = useRouterHistory(createHashHistory)({
	queryKey:false
});

var Header = require('./components/Header.jsx');
var News = require('./components/News.jsx');
var Photos = require('./components/Photos.jsx');

var Routes = (
	<Router history={appHistory}>
		<Route path="/" component={Header}>
			<Route path="/news" component={News} />
			<Route path="/photos" component={Photos} />
		</Route>
	</Router>
);
module.exports = Routes;
