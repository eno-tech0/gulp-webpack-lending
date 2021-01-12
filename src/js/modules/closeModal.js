const closeModal = () => {
	const allModal = document.querySelectorAll('[data-modal]');
	
	allModal.forEach(item => {
		item.style.display = 'none';
		document.body.classList.remove('modal-open');
		document.body.style.marginRight = '';
	})

}

export default closeModal;