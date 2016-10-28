var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./Routes.jsx');
var Header = require('./components/News.jsx');

ReactDOM.render(Routes, document.getElementById('switch'));
ReactDOM.render(<News title="Breaking News" subtitle="There have been a fire"/>, document.getElementById('news'));
