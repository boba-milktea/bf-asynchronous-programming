/**
 * create comment elements
 * @param {object} comment each comment from render post
 * @returns dom element
 */

export const renderComment = (comment) => {
    const container = document.createElement('div');
    container.id = `comment-${comment.id}`;
    container.className = 'comment';

    const titleEl = document.createElement('h2');
    titleEl.textContent = comment.name;

    const authorEl = document.createElement('p');
    authorEl.textContent = `comment by: ${comment.email}`;

    const bodyEl = document.createElement('p');
    bodyEl.textContent = comment.body;

    container.append(titleEl, authorEl, bodyEl);
    return container;
};
