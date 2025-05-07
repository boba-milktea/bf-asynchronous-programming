import { ORIGIN } from '../../../../examples/albums/src/config.js';
/**
 * Fetches a specific resource from the typicode jsonplaceholder API
 * @param  {...string|number} params parameters to append to the URL
 * @returns {Promise<Object>} return a resource object from the API
 */
export const typicode = async (...params) => {
    const paramsPath = params.join('/');
    const URL = `${ORIGIN}/${paramsPath}`;

    const encodeURL = encodeURI(URL);

    const response = await fetch(encodeURL);
    if (!response.ok) {
        throw new Error(`HTTP error: status - ${response.status}`);
    }
    return await response.json();
};
