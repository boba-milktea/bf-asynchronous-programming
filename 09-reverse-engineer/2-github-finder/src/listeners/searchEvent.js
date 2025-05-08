import { dom } from '../dom.js';
import { handleSearch } from '../handlers/handleSearch.Js';

export const searchEvent = () => {
    dom.button.addEventListener('click', handleSearch);
};
