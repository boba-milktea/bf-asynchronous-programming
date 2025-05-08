export const renderUserUI = () => {
    const container = document.createElement('div');
    container.classList.add('card', 'card-body', 'mb-3');

    const cardEl = document.createElement('div');
    cardEl.classList.add('row');

    // card top - avatar photo and the profile link
    const photoContainer = document.createElement('div');
    photoContainer.classList.add('col-md-3');

    const photoEl = document.createElement('img');
    photoEl.classList.add('img-fluid', 'mb-2');

    const linkEl = document.createElement('a');
    linkEl.classList.add('btn', 'btn-primary', 'btn-block', 'mb-4');
    linkEl.target = '_blank';

    photoContainer.append(photoEl, linkEl);

    // card bottom - details
    const detailContainer = document.createElement('div');
    detailContainer.classList.add('col-md-9');

    const userName = document.createElement('h3');

    const bioEl = document.createElement('small');

    const repoEl = document.createElement('span');
    repoEl.classList.add('badge', 'bg-primary');

    const gitstsEl = document.createElement('span');
    gitstsEl.classList.add('badge', 'bg-secondary');

    const followerEl = document.createElement('span');
    followerEl.classList.add('badge', 'bg-success');

    const followingEl = document.createElement('span');
    followingEl.classList.add('badge', 'bg-info');

    const ulEl = document.createElement('ul');
    ulEl.className = 'list-group';

    const liEls = Array.from({ length: 4 }).map(() => {
        const liEl = document.createElement('li');
        liEl.className = 'list-group-item';
        ulEl.append(liEl);
        return liEl;
    });

    detailContainer.append(
        userName,
        bioEl,
        document.createElement('br'),
        document.createElement('br'),
        repoEl,
        gitstsEl,
        followerEl,
        followingEl,
        document.createElement('br'),
        document.createElement('br'),
        ulEl,
    );

    cardEl.append(photoContainer, detailContainer);
    container.appendChild(cardEl);
    return {
        container,
        photoEl,
        linkEl,
        userName,
        bioEl,
        repoEl,
        gitstsEl,
        followerEl,
        followingEl,
        liEls,
    };
};
