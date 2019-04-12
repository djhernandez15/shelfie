import React, { Component } from "react";
import Product from "../Product/Product";

export class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="dashboard">
        {this.props.inventoryList.map(object => {
          return (
            <h3>
              <Product
                productName={object.product_name}
                price={object.price}
                imageURL={object.image_url}
              />
            </h3>
          );
        })}
      </div>
    );
  }
}

export default Dashboard;
