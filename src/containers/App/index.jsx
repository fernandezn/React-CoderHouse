var React = require('react');

// Contenedor App
var App = React.createClass({
	render: function(){
		return (			
			<div>
				<header>
					Cabecera
				</header>
				<div>
					{this.props.children}
				</div>				
			</div>
		);
	}
});

module.exports = App;