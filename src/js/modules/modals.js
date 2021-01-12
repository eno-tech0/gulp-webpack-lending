import closeModal from './closeModal';

const modals = (state) => {

	function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {

		const trigger= document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelectorAll(closeSelector);

		trigger.forEach(item => item.addEventListener('click', (e) => {
			if (modal.classList.contains('popup_calc_profile')) {
				if (!state.width || !state.height) checkFillIputs(item);
			}

			if (modal.classList.contains('popup_calc_end')) {
				if (!state.type) checkFillIputs(item);
			}
			openModal(e, modal)
		}));
		close.forEach(item => item.addEventListener('click', closeModal));
		modal.addEventListener('click', (e) => (e.target === modal && closeClickOverlay) ? closeModal() : null);
	}

	function bindModalByTime(selector, time) {
		setTimeout(() => {
			openModal(null, document.querySelector(selector));
		}, time)
	}

	function openModal(e, modal) {
		if (e) e.target ? e.preventDefault() : null;

		closeModal();
		modal.style.display = 'block';
		document.body.classList.add('modal-open');
	}

	function checkFillIputs(modal) {
		const statusMessage = document.createElement('div');
		statusMessage.classList.add('status');
		statusMessage.textContent = 'Заполните все данные';
		modal.after(statusMessage);
		throw Error('Не заполнены все поля');
	}

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_close');
	bindModal('.phone_link', '.popup', '.popup_close');
	bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
	bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
	bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
	bindModalByTime('.popup', 60000);
}

export default modals;