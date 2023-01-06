document.addEventListener("DOMContentLoaded", () => {
	const splide = new Splide(".splide", {
		type: "loop",
		perPage: 4,
		perMove: 1,
		arrows: false,
		breakpoints: {
			1024: {
				perPage: 3
			},
			750: {
				perPage: 2
			}
		}
	});

	splide.mount();
});
