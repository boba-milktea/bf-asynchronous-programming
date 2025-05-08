export const fourError = () => {
    const container = document.createElement('div');
    container.classList.add('alert', 'alert-danger');
    container.textContent = 'User Not Found!';
    return container;
};
