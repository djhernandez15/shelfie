import React, { Component } from "react";

export class Product extends Component {
  render() {
    return (
      <div className="product">
        <img alt='product' src={this.props.image_url}></img>
        <div>{this.props.product_name}</div>
        <div>{this.props.price}</div>
      </div>
    );
  }
}

export default Product;
