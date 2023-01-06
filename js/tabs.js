tabMountainControl();
tabMainControl()

var resizeTimer;
$(window).on("resize", function (e) {
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(function () {
		tabMountainControl();
		tabMainControl()
	}, 1);
});

function tabMountainControl() {
    const ACTIVE = "tabs_active";
	let tabs = $(".tabbed_content").find(".tabs_menu");

	if (tabs.is(":visible")) {
		$(".tabs_menu_link").on("click", (event) => {
			event.preventDefault();
	
			$(".tabs_item").removeClass(ACTIVE)
			$(".tabs_menu_link").removeClass(ACTIVE)
	
			let id = $(event.currentTarget).attr("href")
	
			$(`.tabs_menu_link[href$='${id}']`).addClass(ACTIVE);
			$(id).addClass(ACTIVE);
		})
	} else {
		$(".tabs_item").on("click", ({ currentTarget }) => {
			let id = currentTarget.id;
			let links = $(`.tabs_menu_link[href$='${id}']`);

			$(".tabs_item").removeClass(ACTIVE)
			$(".tabs_menu_link").removeClass(ACTIVE)

			$(currentTarget).addClass(ACTIVE);
			$(links).addClass(ACTIVE);
		})
	}
}


function tabMainControl() {
	const ACTIVE = "mt_active";
	let tabs = $(".mt_menu");

	$(".mt_menu_link").on("click", (event) => {
		event.preventDefault();

		$(".mt_content").removeClass(ACTIVE)
		$(".mt_menu_link").removeClass(ACTIVE)

		let id = $(event.currentTarget).attr("href")

		$(`.mt_menu_link[href$='${id}']`).addClass(ACTIVE);
		$(id).addClass(ACTIVE);

		if (!$(event.currentTarget).attr("header")) {
			let { top } = $('#subHeader').position()

			window.scroll({
				top,
				behavior: 'smooth'
			})
		}
	})

	if (!tabs.is(":visible")) {
		$(".mt_content").on("click", ({ currentTarget }) => {
			let id = currentTarget.id;
			let links = $(`.mt_menu_link[href$='${id}']`);

			$(".mt_content").removeClass(ACTIVE)
			$(".mt_menu_link").removeClass(ACTIVE)

			$(currentTarget).addClass(ACTIVE);
			$(links).addClass(ACTIVE);
		})
	}
}