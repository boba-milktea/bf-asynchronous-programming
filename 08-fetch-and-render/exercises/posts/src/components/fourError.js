/**
 * return error message when no ID found in API
 * @param {string} [id = 1] id used to fetch API
 * @returns {string} return error message
 */

export const fourError = (id = 1) => {
    const pre = document.createElement('pre');
    pre.textContent = `there's no post with id ${id}`;
    return pre;
};
