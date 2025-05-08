export const renderResult = (result) => {
    // page url
    const URL = encodeURI(
        `https://en.wikipedia.org/wiki/${result.title.toLowerCase()}`,
    );

    // container
    const container = document.createElement('div');
    container.className = 'row';

    // title
    const title = document.createElement('h3');
    const link = document.createElement('a');
    link.href = URL;
    link.textContent = result.title;
    title.append(link);

    // detail
    const detail = document.createElement('p');
    detail.innerHTML = result.snippet;

    // button to the page
    const btnLink = document.createElement('a');
    btnLink.href = URL;
    btnLink.innerHTML = `<button>View Full Article</button>`;

    container.append(title, detail, btnLink);
    return container;
};
