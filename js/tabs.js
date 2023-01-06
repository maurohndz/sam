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
        let tabs_item_active = tabs.parents(".tabbed_content").find(`.tabs_item.${ACTIVE}`).get(0).id;
        let tab_active =  $(`.tabs_menu_link[href$='${tabs_item_active}']`).get(0);

        $(".tabs_menu_link").removeClass(ACTIVE)
        $(tab_active).addClass(ACTIVE)

		tabs.find("a").on("click", function (event) {
			event.preventDefault();

			let target = $(this).attr("href"),
				tabs = $(this).parents(".tabs_menu"),
				buttons = tabs.find(".tabs_menu_link"),
				item = tabs.parents(".tabbed_content").find(".tabs_item");

			buttons.removeClass(ACTIVE);
			item.removeClass(ACTIVE);

			$(this).addClass(ACTIVE);
			$(target).addClass(ACTIVE);
		});
	} else {
		$(".tabs_item").on("click", function () {
			let container = $(this).parents(".tabbed_content"),
				currId = $(this).attr("id"),
				items = container.find(".tabs_item");

			container.find("tabs_menu_link").removeClass(ACTIVE);
			items.removeClass(ACTIVE);

			$(this).addClass(ACTIVE);
			
			container
				.find('.tabs a[href$="#' + currId + '"]')
				.addClass(ACTIVE);
		});
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