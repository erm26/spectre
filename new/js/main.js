(function () {
	const burgerItem = document.querySelector ('.burger');
	const menu = document.querySelector ('.navbar');
	const closeMenu = document.querySelector ('.navbar-close');
	const menuItem = document.querySelectorAll ('.menu__link')
	burgerItem.addEventListener ('click', () => {
		menu.classList.add('navbar__active');
	});
	closeMenu.addEventListener ('click', () => {
		menu.classList.remove('navbar__active');
	});
	if (window.innerWidth <= 767) {
		for (let i = 0; i < menuItem.length; i ++) {
			menuItem[i].addEventListener ('click', () => {
				menu.classList.remove('navbar__active');
			});
		}
	}
}());