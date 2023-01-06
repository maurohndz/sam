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

	if (tabs.is(":visible")) {
		let active_id = $(`.mt_content.${ACTIVE}`).get(0).id;
		let link_active = $(`.mt_menu_link[href$='${active_id}']`);

		$(".mt_menu_link").removeClass(ACTIVE)
        $(link_active).addClass(ACTIVE)

		tabs.find("a").on("click", function (event) {
			event.preventDefault();

			let target = $(this).attr("href")

			$(".mt_menu_link").removeClass(ACTIVE)
			$(".mt_content").removeClass(ACTIVE)

			$(`.mt_menu_link[href$='${target}']`).addClass(ACTIVE);
			$(target).addClass(ACTIVE);
		})
	} else {
		$(".mt_menu_link").on("click", (event) => {
			event.preventDefault();

			$(".mt_content").removeClass(ACTIVE)
			$(".mt_menu_link").removeClass(ACTIVE)

			let target = event.currentTarget
			let content_id = $(target).attr("href")

			$(target).addClass(ACTIVE);
			$(content_id).addClass(ACTIVE);
		})

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