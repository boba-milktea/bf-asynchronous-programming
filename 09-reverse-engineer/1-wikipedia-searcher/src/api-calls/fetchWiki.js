export const fetchWiki = async (searchTerm) => {
    const URL = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=50&srsearch=${searchTerm}`;
    const encodeURL = encodeURI(URL);

    const res = await fetch(encodeURL);

    if (!res.ok) {
        throw new Error(`HTTP error: status : ${res.status}`);
    }

    return res.json();
};
