export const updateDom = (elements, user) => {
    elements.photoEl.src = user.avatar_url;
    elements.linkEl.href = user.html_url;
    elements.linkEl.textContent = 'View Profile';
    elements.userName.textContent = user.login;
    elements.bioEl.textContent = user.bio;

    elements.repoEl.textContent = `Public Repos: ${user.public_repos}`;
    elements.gitstsEl.textContent = `Public Gitsts: ${user.public_gists}`;
    elements.followerEl.textContent = `Followers: ${user.followers}`;
    elements.followingEl.textContent = `Following: ${user.following}`;

    const infoArr = [
        `Company: ${user.company}`,
        `Website/Blog: ${user.blog}`,
        `Location: ${user.location}`,
        `Account Created: ${user.created_at}`,
    ];

    elements.liEls.forEach((li, i) => (li.textContent = infoArr[i]));
};
