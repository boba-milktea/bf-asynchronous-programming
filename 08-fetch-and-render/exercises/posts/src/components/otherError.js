/**
 * return error message when other erros happend while fetching API
 * @param {string} [id = 1] id used to fetch API
 * @returns {string} return error message
 */

export const otherError = (id = 1) => {
    const pre = document.createElement('pre');
    pre.textContent = `oops! Something wrong fetching id - ${id}`;
    return pre;
};
