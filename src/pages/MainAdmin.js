import React from 'react'
import useAuthContext from '../context/AuthContext';

function MainAdmin() {
    const { user } = useAuthContext(); 
    console.log(user)

    return (
        <div>
            <h1>Kezdőlap admin</h1>
            <p>Bejelentkezett felhasználó: { user==null?"Nincs bejelentkezett felhasználó!":user.name }</p>
            <img src="public/logo.png" alt="" />
        </div>
    );
}

export default MainAdmin