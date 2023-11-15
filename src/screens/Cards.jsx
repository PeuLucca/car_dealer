import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCars } from "../backend/api";
import { useAuthUser } from 'react-auth-kit';

import "../App.css";

const Cards = () => {
  const [cars, setCards] = useState([]);
  const cards = ["Efficient", "Luxury Class", "Best-Seller"];
  const navigate = useNavigate();
  const authUser = useAuthUser();
  const user = authUser();
  
  const getRandom = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
  }

  const goToCarInfo = (car) => {
    if (!user?.email) {
      navigate("/login");
    } else {
      navigate(
        '/carinfo',
        {
          state: {
            car: car
          }
        }
      )
    }
  }

  const priceView = (price) => {
    const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return formattedPrice;
  };

  useEffect(()=>{
    async function fetchCars() {
      const carsData = await getCars();
      setCards(carsData);
    }

    fetchCars()
  },[])

  return (
    <div id="trending">
      <h2 style={{ marginLeft: "3%", color: "rgb(54, 52, 52)" }}>Trending Near You</h2>
      <div className="cards-container">
        {
          cars.map((car) => (
            car.available === 1
            ? (
              <div
                className="card"
                style={{ cursor: "pointer" }}
                onClick={() => goToCarInfo(car)}
              >
                <img
                  src={car.path}
                  alt={`${car.brand} ${car.model}`}
                />
                <div className="card-content">
                  <h3>{car.brand} - {car.year}</h3>
                  <p>miles/km</p>
                  <h4>{car.model}</h4>
                  <button style={{ marginRight: "5px" }}>R$ {priceView(car.price)}</button>
                  <button>{getRandom()}</button>
              </div>
            </div>  
            )
            : null
          ))
        }
      </div>
    </div>
  );
}

export default Cards;
