import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { Provider } from "redux";
class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        
        <RestaurantInput />
        <Restaurants />
      </div>
    )
  }
}

export default RestaurantsContainer;
