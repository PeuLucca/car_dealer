import React from "react";
import { useLocation } from "react-router-dom";

import Footer from "./Footer";
import Review from "./Review";  

const CarInfo = () => {
  const { state } = useLocation();
  const car = state?.car;

  const priceView = (price) => {
    const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return formattedPrice;
  };

  return (
    <>
      <div style={{ marginTop: "110px", padding: "5px", display: "flex" }}>
        <div className="carInfo-image">
          <img src={car.path} style={{ width: "100%", borderRadius: "10px" }} />
        </div>

        <div style={{ marginLeft: "3%" }}>
          <h1 className="carInfo-brand">{car.brand} {car.model}</h1>
          <h2 className="carInfo-year">{car.year}</h2>
          <h2 className="carInfo-price">R$ {priceView(car.price)}</h2>
          <h5 className="carInfo-text" style={{ width: "600px" }}>
            Buying a car is more than a transaction, it's an adventure. <br />
            Exploring models, test drives, and choices all contribute to finding the perfect match.<br />
            It's not just about functionality, it's a statement of style and the promise of countless future adventures
            on the road.
          </h5>
          <hr />
          <button className="carInfo-button">But now</button>
          <button className="carInfo-button">Request more info</button>
        </div>
      </div>

      <form className="carInfo-form">
        <h2>Contact for more info</h2>
        <input className="carInfo-input" placeholder="Your Name" type="text" />
        <input className="carInfo-input" placeholder="Your Phone" type="number" />
        <textarea className="carInfo-input" placeholder="Your message/question..." cols={33} rows={5} />
        <button className="carInfo-button">Send</button>
      </form>

      <Review />
      
      <Footer />

    </>
  );
};

export default CarInfo;
