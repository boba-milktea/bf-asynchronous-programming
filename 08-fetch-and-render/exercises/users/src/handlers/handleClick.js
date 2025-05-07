import { typicode } from '../api-calls/typicode.js';
import { renderUser } from '../components/renderUser.js';
import { renderTodo } from '../components/renderTodo.js';
import { dom } from '../dom.js';

export const handleClick = async (e) => {
    const inputValue = e.target.form.input.value;
    const userPromise = typicode('users', inputValue);
    const todoPromise = typicode('users', inputValue, 'todos');

    const [user, todos] = await Promise.all([userPromise, todoPromise]);

    const userElement = renderUser(user, todos);
    dom.root.replaceChildren(userElement);

    try {
    } catch (e) {
        console.log(e.message);
    }
};
