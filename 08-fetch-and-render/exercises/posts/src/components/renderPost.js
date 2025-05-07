import { renderComment } from './renderComment.js';

export const renderPost = (post = {}, comments = {}) => {
    const container = document.createElement('div');
    container.id = `${post.id}-container`;

    const titleEl = document.createElement('h2');
    titleEl.textContent = post.title;

    const idEl = document.createElement('p');
    idEl.textContent = `posted by user: ${post.userId}`;

    const detailEl = document.createElement('p');
    detailEl.textContent = post.body;

    container.append(titleEl, idEl, detailEl);

    comments.forEach((comment) => {
        const commentEls = renderComment(comment);
        container.append(commentEls);
    });

    return container;
};
