import React, { Component } from "react";
import axios from "axios";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image_url: "",
      product_name: "",
      price: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.resetFields = this.resetFields.bind(this);
  }

  componentDidMount() {
    axios
      .post("/api/products")
      .then(response => {
        console.log(response);
        this.setState({
          image_url: response.data,
          product_name: response.data,
          price: response.data
        }).then(this.resetFields(), this.props.getInventory());
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange(e) {
    this.setState({
      imageURL: e.target.value,
      productName: e.target.value,
      price: e.target.value
    });
  }

  resetFields() {
    this.setState({ imageURL: "", productName: "", price: "" });
  }
  
  render() {
    return (
      <form>
        <img alt="product" />
        <label>
          Image URL:
          <input type="url" />
        </label>
        <label>
          Product Name:
          <input type="text" />
        </label>
        <label>
          Price:
          <input placeholder="0" type="text" />
        </label>
        <div>
          <button onClick={this.resetFields}>Cancel</button>
          <button>Add to Inventory</button>
        </div>
      </form>
    );
  }
}

export default Form;
