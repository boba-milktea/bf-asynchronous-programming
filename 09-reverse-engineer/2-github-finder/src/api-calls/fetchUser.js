export const fetchUser = async (userName) => {
    const URL = `https://api.github.com/users/${userName}`;

    const res = await fetch(encodeURI(URL));

    if (!res.ok) {
        throw new Error(`HTTP Error! Status: ${res.status}`);
    }

    return await res.json();
};
