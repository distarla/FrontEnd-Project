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
        .then(data => console.log("EventId: " + data.id ))
        .catch((err) => console.log(err));

}
export { changeAPI };

const deleteAPI = (id) => {
    fetch('https://62c2f855ff594c65676aea91.mockapi.io/api/v1/Events/' + id, {method: 'DELETE'})
        .then(() => console.log('Delete successful'))
        .catch((err) => console.log(err));
}
export { deleteAPI };