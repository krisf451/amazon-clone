import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        // src="https://m.media-amazon.com/images/I/61CBK2Wd7iL._SX3000_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12321341"
          title="White Chocolate Flavour Spread: The best flavour spread this side of the Mississippi"
          price={7.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/31bzHhG42iL._AC_UL320_.jpg"
        />
        <Product
          id="12321342"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/61m2O+gHGIL._AC_UY218_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321343"
          title="Baby Wipes, Pampers Sensitive Water Based Baby Diaper Wipes"
          price={8.65}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81m80haTxZL._AC_UL450_SR450,320_.jpg"
        />
        <Product
          id="12321344"
          title="Amazon Basics 100 Pack AAA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
          price={52.69}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/715wResFL7L._AC_UL450_SR450,320_.jpg"
        />
        <Product
          id="12321345"
          title="WYZE Cam Outdoor Starter Bundle (Includes Base Station and 1 Camera), 1080p HD Indoor/Outdoor "
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41SyuiCk7JL._AC_UL450_SR450,320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321346"
          title="National Geographic Magazine Print Magazine"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51xUzoEW5WL._AC_UL160_SR160,160_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
