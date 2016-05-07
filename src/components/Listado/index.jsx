var React = require('react');

var Buscador = React.createClass({
	getInitialState : function(){
		return {titulo: this.props.titulo || ''};
	},	
	render: function(){		
		return (
			<div>
				Hola { this.state.titulo }
			</div>
		);
	}
});

module.exports = Buscador;