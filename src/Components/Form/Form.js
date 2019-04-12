import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: "",
      productName: "",
      price: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.resetFields = this.resetFields.bind(this);
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
        <img alt="image" />
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
