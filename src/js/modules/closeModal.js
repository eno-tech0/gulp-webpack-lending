const closeModal = () => {
	const allModal = document.querySelectorAll('[data-modal]');
	
	allModal.forEach(item => {
		item.style.display = 'none';
		document.body.classList.remove('modal-open');
	})

}

export default closeModal;