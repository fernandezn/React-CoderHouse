var React = require('react');
var Link  = require('react-router').Link;

// Importo la API del container
var api = require('../../api');

// Contenedor Buscador
var Resultado = React.createClass({
	getInitialState: function(){
		return { results : [] }
	},
	componentWillMount: function(){
		var q = this.props.location.query.q;
		var _self = this;

		api.search(q).then(function(respuesta){
			_self.setState({ results : respuesta.data.results });
		});
	},
	render: function(){
		return (			
			<div>
				<h1>Resultado</h1>
				{this.state.results.map(function(item){
					return <div>
						<Link to={'/item/' + item.id}>{item.title}</Link>
					</div>
				})}				
			</div>
		);
	}
});

module.exports = Resultado;