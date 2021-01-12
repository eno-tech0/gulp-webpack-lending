const tabs = (headerSelector, tabsSelector, contentsSelector, activeClass, display = 'block') => {

	const header = document.querySelector(headerSelector),
		tabs = document.querySelectorAll(tabsSelector),
		contents = document.querySelectorAll(contentsSelector);

	tabs.forEach(tab => tab.style.cursor = 'pointer');

	header.addEventListener('click', (e) => {

		tabs.forEach((item, i) => {
			if (e.target == item || e.target.parentNode == item) {
				hideTabContent();
				showTabContent(i);
			}
		})

	});

	function showTabContent(i = 0) {
		tabs[i].classList.add(activeClass);
		contents[i].style.display = display;
	}

	function hideTabContent() {
		tabs.forEach(item => item.classList.remove(activeClass));
		contents.forEach(item => item.style.display = 'none');
	}

	hideTabContent();
	showTabContent();

};

export default tabs;