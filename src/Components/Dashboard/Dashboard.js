import React, { Component } from "react";
import Product from "../Product/Product";
import axios from 'axios';

export class Dashboard extends Component {

  deleteProduct(product_id){
    axios.delete('/api/inventory/:product_id')
  }
  render() {
    return (
      <div className="dashboard">
        {this.props.inventoryList.map(object => {
          return (
            <h3>
              <Product
                product_name={object.product_name}
                price={object.price}
                image_url={object.image_url}
                key={object.product_id}
              />
            </h3>
          );
        })}
      </div>
    );
  }
}

export default Dashboard;
