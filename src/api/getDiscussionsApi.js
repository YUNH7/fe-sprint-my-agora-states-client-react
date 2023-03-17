
export const getDiscussionsApi = () => {
    return fetch('http://localhost:4000/discussions')
    .then((response) => response.json())
}