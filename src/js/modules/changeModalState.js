import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {

	checkNumInputs('#width');
	checkNumInputs('#height');

	function bindActionByElems(event, selector, name) {
		const elems = document.querySelectorAll(selector);

		elems.forEach((elem, i) => {
			elem.addEventListener(event, () => {
				switch(elem.nodeName) {
					case 'SPAN':
						state[name] = i;
						break;
					case 'INPUT':
						if (elem.getAttribute('type') === 'checkbox') {
							i === 0 ? state[name] = 'cold' : state[name] = 'warm';
							elems.forEach((check, j) => {
								check.checked = false;
								if (i === j) check.checked = true;
							})
						} else {
							state[name] = elem.value;
						}
						break;
					case 'SELECT':
						state[name] = elem.value;
						break;
				}
				console.log(state);
			})
		})
	}

	bindActionByElems('click', '.balcon_icons_img', 'form');
	bindActionByElems('input', '#width', 'width');
	bindActionByElems('input', '#height', 'height');
	bindActionByElems('change', '#view_type', 'type');
	bindActionByElems('change', '.checkbox', 'profile');


};

export default changeModalState;