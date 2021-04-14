////////////////////////////////////////
// ATTENTION ! 
// THIS FILE IS GENERATED DYNAMICALLY 
// DO NOT TOUCH IT 
////////////////////////////////////////

module.exports = (name) => {
	switch(name){
		case 'button':
			return require('./button/button.jsx');
		case 'dataTable':
			return require('./dataTable/dataTable.jsx');
		case 'header':
			return require('./header/header.jsx');
		case 'pageContent':
			return require('./pageContent/pageContent.jsx');
		case 'sidebar':
			return require('./sidebar/sidebar.jsx');
	}
}