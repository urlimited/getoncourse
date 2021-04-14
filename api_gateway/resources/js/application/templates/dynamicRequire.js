////////////////////////////////////////
// ATTENTION ! 
// THIS FILE IS GENERATED DYNAMICALLY 
// DO NOT TOUCH IT 
////////////////////////////////////////

module.exports = (name) => {
	switch(name){
		case 'button':
			return require('./button/button.jsx');
		case 'card':
			return require('./card/card.jsx');
		case 'container':
			return require('./container/container.jsx');
		case 'header':
			return require('./header/header.jsx');
		case 'section':
			return require('./section/section.jsx');
		case 'sidebar':
			return require('./sidebar/sidebar.jsx');
		case 'title':
			return require('./title/title.jsx');
	}
}