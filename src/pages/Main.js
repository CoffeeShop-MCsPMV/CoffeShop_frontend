import React from "react";
import Slider from "../components/Slider";
import TopProducts from "../components/TopProducts";
import "../style/Main.css";

function Main() {
  // const { user } = useAuthContext();
  //   console.log(user)

  return (
    <>
      <section>
        <Slider />
        <section className="info-container">
          <div className="topic">
            <p><b>Welcome to The Roasted Rebel – Where Coffee Meets Passion</b></p>
            <p>
              At The Roasted Rebel, we believe that every cup of coffee tells a
              story. Whether you're a seasoned barista or just beginning your
              coffee journey, we’re here to provide you with the finest beans,
              high-quality brewing equipment, and expert guidance to elevate
              your coffee experience. Explore our carefully curated selection of
              specialty coffees, premium accessories, and DIY coffee designed
              for those who love crafting the perfect cup. Join our community of
              coffee lovers and discover the art of brewing—one sip at a time.
            </p>
          </div>
          <TopProducts />
        </section>
      </section>
      {/* <div style={{backgroundColor: "blue"}}>
            <h1>Kezdőlap</h1>
            <p>Bejelentkezett felhasználó: { user==null?"Nincs bejelentkezett felhasználó!":user.name }</p>     
        </div> */}
    </>
  );
}

export default Main;
