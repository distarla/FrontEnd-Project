import React, { useContext, useState, useEffect } from "react";
import MyCard from "./MyCard";

import usersData from '../Data/Users/usersData';

import DataContext from '../Data/Users/dataContext';

const UserCard = props => {

    const { state, setState } = useContext(DataContext);
    const [user, setUser] = useState({});
    const [cardText, setCardText] = useState('');


    useEffect(function() {
        setUser(usersData.filter(el => el.name == state.curName)[0])
        setCardText(state.curName)
    }, [state.curName]);
    

    if (user) {
        return (
            <div>
                <MyCard
                    id="curUser"
                    bg="ligth"
                    text="primary"
                    border="primary"
                    title="Bem-vindo(a),"
                    content={cardText}>
                </MyCard>
            </div>
        );
    } else {
        return false;
    }

}

export default UserCard;