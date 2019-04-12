import React, { Component } from 'react'

export class Product extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className='product'>
        {this.props.product_name}
        {this.props.price}
        {this.props.image_url}
      </div>
    )
  }
}

export default Product
