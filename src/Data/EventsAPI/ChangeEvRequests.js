const changeAPI = (type, data, id="") => {
    var requestOptions={};

    switch (type) {
        case 'put':
            requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            };
            break;
        case 'post':
            requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            };
            break;
        default:
            new Error("Invalid HTTP Request")
        
    }

    fetch('https://62c2f855ff594c65676aea91.mockapi.io/api/v1/Events/' + id, requestOptions) 
        .then(response => response.json())
        .then(data => {const state={ EventId: data.id }});

}
export { changeAPI };

const deleteAPI = (id) => {
    fetch('https://62c2f855ff594c65676aea91.mockapi.io/api/v1/Events/' + id, {method: 'DELETE'})
        .then(() => {const state={ status: 'Delete successful' }});
}
export { deleteAPI };