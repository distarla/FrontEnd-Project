const changeClient = (type, data, eventId, clientId = "") => {
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

    fetch(`https://62c2f855ff594c65676aea91.mockapi.io/api/v1/Events/${eventId}/Clients/${clientId}`, requestOptions) 
        .then(response => response.json())
        .then(data => console.log("ClientId: " + data.id ))
        .catch((err) => console.log(err));

}
export { changeClient };

const deleteClient = (eventId, clientId) => {
    fetch(`https://62c2f855ff594c65676aea91.mockapi.io/api/v1/Events/${eventId}/Clients/${clientId}`, {method: 'DELETE'})
        .then(() => console.log('Delete successful'))
        .catch((err) => console.log(err));
}
export { deleteClient };