import React from "react";
import "./NavBar.css";
import profile from "../../../icons/profile-grey.svg";
import restaurant from "../../../icons/restaurant-orange.svg";
import scan from "../../../icons/scan-grey.svg";

class NavBar extends React.Component {
  render() {
    return (
      <div id="nav-bar">
        <div class="nav-bar-icon">
          <img src={profile} />
        </div>
        <div class="nav-bar-icon">
          <img src={restaurant} />
        </div>
        <div class="nav-bar-icon">
          <img src={scan} />
        </div>
      </div>
    );
  }
}

export default NavBar;
