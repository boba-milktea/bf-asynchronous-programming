export const otherError = (val) => {
    const pre = document.createElement('pre');
    pre.textContent = !val
        ? 'Input field empty!'
        : `oops, something went wrong fetching the result with the query ${val}, please try it again later.`;

    return pre;
};
