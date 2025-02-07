import React from 'react'
import useAuthContext from '../context/AuthContext';

function Main() {
  const { user } = useAuthContext(); 

    return (
        <div>
            <h1>Kezdőlap Admin</h1>
            <p>Bejelentkezett felhasználó: { user==null?"Nincs bejelentkezett felhasználó!":user.name }</p>
        </div>
    );
}

export default Main