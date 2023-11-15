import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthUser } from 'react-auth-kit';

const Hero = () => {
  const navigate = useNavigate();
  const authUser = useAuthUser();
  const user = authUser();

  const path = "https://www.honda.ca/-/media/Brands/Honda/Models/TYPE-R/2023/Overview/03_Key-Features/Honda_Civic_TypeR_key-features_desktop_1036x520.png?h=520&iar=0&w=1036&rev=86a8e32265ac446dadf66e704156f39f&hash=F79E92877AED80EC7864F74CC77B2267";

  const goToCarInfo = () => {
    if (!user?.email) {
      navigate("/login");
    } else {
      navigate(
        '/carinfo',
        {
          state: {
            car: {
              car_id: "6",
              brand: "Honda",
              model: "Civic Type R",
              year: 2022,
              price: 89900.00,
              path,
            }
          }
        }
      )
    }
  }

  return (
    <div id="home" className="hero-container">
      <h3>Meet your new car</h3>
      <h1>Honda Civic Type R</h1>
      <div className="hero-container-buttons">
        <button className="hero-button_details" onClick={() => goToCarInfo()}>More Details</button>
        <button className="hero-button_test_drive">Test Drive</button>
      </div>
      <img
        src={path}
        style={{ width: "50%" }}
      />
    </div>
  );
}

export default Hero;
