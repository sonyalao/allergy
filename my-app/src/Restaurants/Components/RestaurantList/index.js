import React from "react";
import "./RestaurantList.css";

const picsLoc = "../../../../pics/";
const images = [
  "chipotle.png",
  "thaiger-room.jpg",
  "korean-tofu-house.jpg",
  "noodle-nation.jpg",
  "mod-pizza.jpeg",
];

class RestaurantList extends React.Component {
  render() {
    return (
      <div class="restaurant-container">
        <h1>Restaurants</h1>
        <div class="restaurant-list">
          <div class="restaurant-entry" onClick={this.test}>
            <div class="image-container">
              <img src="https://www.chipotle.com/content/dam/chipotle/global-site-design/en/what's-hot/CHP-Order-Tile-Vegetarian@2x.png" />
            </div>
            <div class="info">
              <h2 class="restaurant-name">Chipotle</h2>
              <p class="description">Mexican Fast Food</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  test() {
    alert("hello");
  }
}

export default RestaurantList;
