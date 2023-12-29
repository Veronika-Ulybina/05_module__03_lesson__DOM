'use strict';

const list = document.querySelector('ul');

function todoList() {

	const task = prompt('Введите задания на сегодня:');

	if (task === null || task === 'exit') {
		return;
	}

	try {
		if (task === 'del') {
			list.lastElementChild.remove();
			return todoList();
		}
	} catch(err) {
		return todoList();
	}

	if (!task.trim()) {
		return todoList();
	}

	list.insertAdjacentHTML('beforeend', `<li>${task}</li>`);

	if (task === 'clear') {
		list.textContent = '';
	}

	todoList();
}

todoList();
