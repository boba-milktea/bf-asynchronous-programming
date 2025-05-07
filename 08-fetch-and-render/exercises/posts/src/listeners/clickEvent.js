import { dom } from '../dom.js';
import { handleClick } from '../handlers/handleClick.js';

export const clickEvent = () => {
    dom.button.addEventListener('click', handleClick);
};
