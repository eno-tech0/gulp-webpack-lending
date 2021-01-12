const checkNumInputs = (selector) => {
	const numInputs = document.querySelectorAll(selector);

	numInputs.forEach(number => {
		number.addEventListener('input', () => {
			number.value = number.value.replace(/\D/, '');
		})
	})
};

export default checkNumInputs;