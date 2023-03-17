
export const delDiscussionApi = (id) => {
    return fetch(`http://localhost:4000/discussions/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}