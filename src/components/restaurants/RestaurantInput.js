import React, { Component } from 'react';

class RestaurantInput extends Component {
  
  constructor(props) {
    super()
    this.state = {
    text: ''
    }
  }

  handleChangeInput = event => {
    this.setState({
      [event.target.text]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState ({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChangeInput} />
        <input type="submit" onSubmit={this.handleSubmit} />
      </div>
    );
  }
};

export default RestaurantInput;
