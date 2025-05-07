import { ORIGIN } from '../../../../examples/albums/src/config.js';

export const typicode = async (...params) => {
    const path = params.join('/');
    const URL = `${ORIGIN}/${path}`;

    const encodeURL = encodeURI(URL);

    const response = await fetch(encodeURL);
    if (!response.ok) {
        throw new Error(`HTTP error: status - ${response.status}`);
    }
    return await response.json();
};
