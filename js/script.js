const swiper = new Swiper('.slider-main-block', {
	// Optional parameters
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.body-main-block__arrow.swiper-button-next',
		prevEl: '.body-main-block__arrow.swiper-button-prev',
	},
});

// Таби

const tabNavItems = document.querySelectorAll('.tabs-deals__buttom');
const tabItems = document.querySelectorAll('.item-tabs');

document.addEventListener("click", function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.tabs-deals__buttom')) {
		tabNavItems.forEach((tabNavItems, index) => {

			// tabNavItems.classList.remove('active');
		});
	}
});