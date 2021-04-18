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
		case 'editor':
			return require('./editor/editor.jsx');
		case 'header':
			return require('./header/header.jsx');
		case 'modal':
			return require('./modal/modal.jsx');
		case 'pageContent':
			return require('./pageContent/pageContent.jsx');
		case 'reactWrapper':
			return require('./reactWrapper/reactWrapper.jsx');
		case 'section':
			return require('./section/section.jsx');
		case 'sidebar':
			return require('./sidebar/sidebar.jsx');
	}
}