import checkNumInputs from './checkNumInputs';
import closeModal from './closeModal';

const forms = (state) => {
	const mainForms = document.querySelectorAll('form'),
		inputs = document.querySelectorAll('input');
		
	const message = {
			loading: 'Загружаем данные... -_-',
			success: 'Параметры отправлены :)',
			failure: 'Что-то пошло не так :('
		};

	checkNumInputs('input[name="user_phone"]');


	const postData = async (url, data) => {
		document.querySelector('.status').textContent = message.loading;

		let res = await fetch(url, {
			method: 'POST',
			body: data
		})

		return await res.text();

	};

	const clearInputs = () => inputs.forEach(input => input.value = '');

	mainForms.forEach(form => {
		form.addEventListener('submit', (e) => {
			if (e.target) e.preventDefault();

			const statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			form.append(statusMessage);

			const formData = new FormData(form);

			if (form.getAttribute('data-calc') === 'end') {
				for (let key in state) {
					formData.append(key, state[key]);
				}
			}

			postData('assets/server.php', formData)
				.then(res => {
					console.log(res);
					statusMessage.textContent = message.success;
				})
				.catch(err => {
					console.error(err);
					statusMessage.textContent = message.failure;
				})
				.finally(() => {
					clearInputs();
					for (let key in state) {
						if (!key == 'form' || !key == 'type') {
							delete state[key]
						} else {
							state['form'] = '0';
							state['type'] = 'tree';
						}
						
					}
					setTimeout(() => {
						statusMessage.remove();
						formData.delete(form);
						closeModal();
					}, 4000);
				}) 

		});
	})

};

export default forms;