const React = require ('react');
const ReactDOM = require ('react-dom');
var App = require('./components/App.js')
require ('./index.css');


ReactDOM.render (
  <App />,
  document.getElementById('app')
)