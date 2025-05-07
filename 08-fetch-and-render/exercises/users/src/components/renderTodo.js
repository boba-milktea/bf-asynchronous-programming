export const renderTodo = (todo) => {
    const container = document.createElement('div');
    container.className = 'todo';

    const labelEl = document.createElement('label');
    labelEl.textContent = todo.title;

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.checked = todo.completed;

    labelEl.prepend(checkBox);
    container.append(labelEl);

    return container;
};
