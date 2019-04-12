import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventoryList: [
        { product_id: "", product_name: "", price: "", image_url: "" }
      ]
    };
    this.getInventory = this.getInventory.bind(this);
  }

  componentDidMount() {
    this.getInventory();
  }

  getInventory() {
    axios
      .get("/api/inventory")
      .then(response => {
        console.log(response);
        this.setState({ inventoryList: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Dashboard
            inventoryList={this.state.inventoryList}
            product_name={this.state.inventoryList.product_name}
            price={this.state.inventoryList.price}
            image_url={this.state.inventoryList.image_url}
            product_id={this.state.inventoryList.product_id}
            getInventory={this.getInventory}
          />
          <Form getInventory={this.getInventory} />
        </main>
      </div>
    );
  }
}

export default App;
