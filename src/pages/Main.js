import React from 'react'
import useAuthContext from '../context/AuthContext';


function Main() {
  const { user } = useAuthContext(); 
//   console.log(user)

    return (
        <>
        <div style={{backgroundColor: "blue"}}>
            <h1>Kezdőlap</h1>
            <p>Bejelentkezett felhasználó: { user==null?"Nincs bejelentkezett felhasználó!":user.name }</p>
            <img src="./logo.png" width="250px" alt="" />
          
        </div>
       
        </>
    );
}

export default Main