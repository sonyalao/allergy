import React from "react";
import NavBar from "./Components/NavBar";
import RestaurantList from "./Components/RestaurantList";

class Restaurants extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div class="content">
        <RestaurantList />
      </div>
    );
  }
}

export default Restaurants;
