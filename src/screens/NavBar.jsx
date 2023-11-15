import React, { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useSignOut, useAuthUser } from 'react-auth-kit';
import { useNavigate } from "react-router-dom";

import "../App.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const signOut = useSignOut();
  const authUser = useAuthUser();
  const user = authUser();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const goToLogin = () => {
    if (!user?.email) {
      navigate("/login");
    } else {
      logOff();
    }
    
  };

  const logOff = () => {
    signOut();
  }

  useEffect(() => {
    // reload
  }, [signOut])

  return (
    <nav>
      <div className="logo">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/013/923/542/small_2x/red-vehicle-car-logo-png.png"
          alt="Car Dealer"
          style={{ width: "100%" }}
          onClick={() => navigate("/home")}
        />
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={`ul-navbar ${menuOpen ? "show-menu" : ""}`}>
        <li>
          <ScrollLink to="home" onClick={() => navigate("/home")} smooth={true} duration={500}>
            Home
          </ScrollLink>
        </li>
        <li style={{ marginLeft: "10px" }}>
          <ScrollLink to="trending" onClick={() => navigate("/home")} smooth={true} duration={500}>
            Trending
          </ScrollLink>
        </li>
        <li style={{ marginLeft: "10px" }}>
          <ScrollLink to="reviews" onClick={() => navigate("/home")} smooth={true} duration={500}>
            Reviews
          </ScrollLink>
        </li>
      </ul>

      <div className="signup">
        <button onClick={() => goToLogin()}>{!user?.email ? "Sign Up" : user.email}</button>
      </div>
    </nav>
  );
};

export default NavBar;