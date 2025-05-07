import { typicode } from '../api-calls/typicode.js';
import { fourError } from '../components/fourError.js';
import { otherError } from '../components/otherError.js';
import { renderPost } from '../components/renderPost.js';
import { dom } from '../dom.js';

export const handleClick = async (e) => {
    const inputValue = e.target.form.input.value;

    try {
        const postPromise = typicode('posts', inputValue);
        const commentPromise = typicode('posts', inputValue, 'comments');
        const [post, comments] = await Promise.all([
            postPromise,
            commentPromise,
        ]);
        const postElements = renderPost(post, comments);
        dom.root.replaceChildren(postElements);
    } catch (e) {
        console.error(e);

        const errorElement = e.message.includes('HTTP error! status: 404')
            ? fourError(inputValue)
            : otherError(inputValue);
        dom.root.replaceChildren(errorElement);
    }
};
