import React from 'react'
import useAuthContext from '../context/AuthContext';
import Slider from '../components/Slider';
import TopProducts from '../components/TopProducts';


function Main() {
  const { user } = useAuthContext(); 
//   console.log(user)

    return (
        <>
        <section>
            <Slider />
            <TopProducts />
        </section>
        {/* <div style={{backgroundColor: "blue"}}>
            <h1>Kezdőlap</h1>
            <p>Bejelentkezett felhasználó: { user==null?"Nincs bejelentkezett felhasználó!":user.name }</p>     
        </div> */}
        </>
    );
}

export default Main