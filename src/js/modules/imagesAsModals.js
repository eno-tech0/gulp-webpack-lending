const imagesAsModals = (selector) => {
	const imgPopup = document.createElement('div'),
		workSection = document.querySelector(selector),
		bigImg = document.createElement('img');

	imgPopup.classList.add('bigImg', 'popup');

	workSection.addEventListener('click', (e) => {
		e.preventDefault();

		const target = e.target;

		workSection.append(imgPopup);
		imgPopup.append(bigImg);

		if (target && target.classList.contains('preview')) {
			imgPopup.classList.add('imgFlex');
			document.body.classList.add('modal-open');

			const path = target.parentElement.getAttribute('href');
			bigImg.setAttribute('src', path);
		}

		if (target && target.matches('div.popup')) {
			imgPopup.classList.remove('imgFlex');
			document.body.classList.remove('modal-open');
			bigImg.remove();
			imgPopup.remove();
		}
	})

};

export default imagesAsModals;
