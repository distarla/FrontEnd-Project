import { useState, useEffect } from "react";

const GetClients = (eventId, clientId = "") => {

    const [myClients, setMyClients] = useState(null);

        useEffect(() => {
            fetch(`https://62c2f855ff594c65676aea91.mockapi.io/api/v1/Events/${eventId}/Clients/${clientId}`)
                .then((res) => res.json())
                .then((data) => setMyClients(data))
                .catch((err) => console.log(err));
        }, [eventId]);
    return [myClients];
};
export default GetClients;