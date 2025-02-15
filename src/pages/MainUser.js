import React from 'react'
import useAuthContext from '../context/AuthContext';

function MainUser() {
    const { user } = useAuthContext(); 
    console.log(user)

    return (
        <div>
            <h1>Kezdőlap user</h1>
            <p>Bejelentkezett felhasználó: { user==null?"Nincs bejelentkezett felhasználó!":user.name }</p>
            <img src="./logo.png" alt="" />
        </div>
    );
}

export default MainUser