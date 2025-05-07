import { renderTodo } from './renderTodo.js';

export const renderUser = (user, todos) => {
    const container = document.createElement('div');
    container.id = `container-${user.id}`;

    const userName = document.createElement('h2');
    userName.textContent = user.username;

    const name = document.createElement('p');
    name.textContent = `name: ${user.name}`;

    const email = document.createElement('p');
    email.textContent = `email: ${user.email}`;

    const website = document.createElement('a');
    website.href = user.website;
    website.target = '_blank';
    website.textContent = `${user.website}`;

    const weContainer = document.createElement('p');
    weContainer.textContent = 'website: ';
    weContainer.append(website);

    container.append(userName, name, email, weContainer);

    todos.forEach((todo) => {
        const todoElements = renderTodo(todo);
        container.append(todoElements);
    });

    return container;
};
