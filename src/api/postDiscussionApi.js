
export const postDiscussionApi = (data) => {
    return fetch('http://localhost:4000/discussions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
}