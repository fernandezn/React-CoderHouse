var React = require('react');
var Link  = require('react-router').Link;

// Importo la API del container
var api = require('../../api');

// Contenedor Buscador
var Item = React.createClass({
	getInitialState: function(){
		return { detail : [] }
	},
	componentWillMount: function(){
		var id = this.props.params.id;
		var _self = this;

		api.getDetail(id).then(function(respuesta){
			console.log(respuesta.data);
			_self.setState({ detail : respuesta.data });
		});
	},
	render: function(){
		return (			
			<div>
				<h1>Item</h1>
				<h2>{this.state.detail.title}</h2>
				<h3>{this.state.detail.price}</h3>
				<img src={this.state.detail.thumbnail} />
			</div>
		);
	}
});

module.exports = Item;