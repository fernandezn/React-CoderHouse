var React = require('react');

var Buscador = React.createClass({
	handleSubmit : function(e){
		e.preventDefault();
		this.props.cuandoAlguienEnvie(e.target.query.value);
	},	
	render: function(){		
		return (
			<div className="buscador">
				<form onSubmit={this.handleSubmit}>
					<input type="text" id="query" name="query" />
					<button>Enviar</button>
				</form>
			</div>
		);
	}
});

module.exports = Buscador;