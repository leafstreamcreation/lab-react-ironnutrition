import React from 'react';

import './FoodBox.css';

class FoodBox extends React.Component {
  state = {
    quantity: 0,
  };

  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleAddButtonClick = () => {
    const { name, calories } = this.props;
    this.props.addFoodListener({
      name,
      calories,
      quantity: Number(this.state.quantity),
      total: this.state.quantity * calories,
    });
    this.setState({ quantity: 0 });
  };

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} alt="I AM THE PANTS" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value={this.state.quantity}
                  onChange={this.updateInput}
                  name="quantity"
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={this.handleAddButtonClick}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
