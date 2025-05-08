import { fetchUser } from '../api-calls/fetchUser.js';
import { dom } from '../dom.js';
import { renderUserUI } from '../components/renderUserUI.js';
import { updateDom } from '../components/updateDom.js';
import { fourError } from '../../../1-wikipedia-searcher/src/components/fourError.js';
import { otherError } from '../../../1-wikipedia-searcher/src/components/otherError.js';

// handle error message
export const handleSearch = async () => {
    const inputValue = dom.input.value.trim();

    let userDom = null;
    dom.profile.innerHTML = '';
    try {
        if (!inputValue) return;

        const data = await fetchUser(inputValue);
        console.log(data);
        if (!userDom) {
            userDom = renderUserUI();
            dom.profile.append(userDom.container);
        }

        updateDom(userDom, data);
    } catch (e) {
        console.error(e.message);
        const errorElement = e.message.includes('Status: 404')
            ? fourError()
            : otherError();
        dom.profile.innerHTML = '';
        dom.profile.append(errorElement);
        userDom = null;
    }
};
