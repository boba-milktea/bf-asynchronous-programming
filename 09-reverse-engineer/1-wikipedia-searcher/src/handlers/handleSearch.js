import { dom } from '../dom.js';
import { fetchWiki } from '../api-calls/fetchWiki.js';
import { renderResult } from '../components/renderResult.js';
import { fourError } from '../components/fourError.js';
import { otherError } from '../components/otherError.js';

// handle error message

export const handleSearch = async () => {
    const inputValue = dom.input.value;

    try {
        const data = await fetchWiki(inputValue);
        const searchResults = data.query.search;

        const resultElements = searchResults
            .map(renderResult)
            .reduce((acc, current) => {
                acc.appendChild(current);
                return acc;
            }, document.createElement('div'));

        dom.output.replaceChildren(resultElements);
    } catch (e) {
        console.error(e.message);

        const errorElement = e.message.includes('Status: 404')
            ? fourError(inputValue)
            : otherError(inputValue);
        dom.output.replaceChildren(errorElement);
    }
};
