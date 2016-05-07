// Importo los modulos de terceros
var React 	   = require('react');
var ReactDOM   = require('react-dom');

// Importo los objetos necesarios para las rutas de la aplicacion
var ReactRouter = require('react-router');
var Router	    = ReactRouter.Router;
var Route	    = ReactRouter.Route;

// Cargo los Estilos
require('./style.css');

// Cargo los contenedores de la Aplicacion
var App 	  = require('./containers/App/index.jsx');
var Buscador  = require('./containers/Buscador/index.jsx');
var Resultado = require('./containers/Resultado/index.jsx');
var Item 	  = require('./containers/Item/index.jsx');

// Monto el componente principal en el DOM
ReactDOM.render(
	<Router history={ReactRouter.browserHistory}>
		<Route path="/" component={App}>
			<Route path="buscar" component={Buscador} />
			<Route path="resultado" component={Resultado} />
			<Route path="item/:id" component={Item} />
		</Route>
	</Router>,
	document.getElementById('example')
);