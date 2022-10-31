const btnMenu = document.querySelector('.nav__hamburger'),
	nav = document.querySelector('.nav'),
	menu = document.querySelector('.nav__menu'),
    mainImage = document.querySelector('.hero__figure'),
    imageMobile = `<img src="images/image-web-3-mobile.jpg" alt="Web 3" class="header-img">`,
    imageDesktop = `<img src="images/image-web-3-desktop.jpg" alt="Web 3" class="header-img">`;


const hamburgerMenu = () => {
    btnMenu.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        document.body.classList.toggle('no-scroll');
        menu.style.transition = 'all 0.4s ease';
    })
}

const hideHamburgerMenu = () => {
    document.addEventListener('click', (e) => {
    	console.log(nav.classList.contains('nav-active'));
    	if (nav.classList.contains('nav-active')) {
    		if (e.target.matches(".capa") || e.target.matches(".nav-link")) {
    			nav.classList.remove('nav-active');
    			document.body.classList.remove('no-scroll');
    		}
    	}
    });
}

const changeStyle = () => {
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) {
            mainImage.innerHTML = imageDesktop;
            nav.classList.remove('nav-active');
            menu.removeAttribute('style');
            document.body.classList.remove('no-scroll');
        } else {
            mainImage.innerHTML = imageMobile;
        }
    })
}


document.addEventListener('DOMContentLoaded', () => {
    changeStyle();
    hamburgerMenu();
    hideHamburgerMenu();
    if (window.innerWidth >= 1024) {
        mainImage.innerHTML = imageDesktop;
    }
})