import "./App.css";
import React, { Component } from "react";
import { getInventory , checkInventory, sellItems} from "./AppService";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ordercount: 0,
      orderamount: 0
    };
  }
  addInventory = () => {
    console.log("Calling getInventory");
    getInventory().then((response) => {
      console.log("response " + response.count);
      this.setState({ ordercount: response.count, orderamount: response.amount});
    });
  };

  checkInv = () => {
    console.log("Calling checkInventory");
    checkInventory().then((response) => {
      console.log("response " + response.count);
      this.setState({ ordercount: response.count, orderamount: response.amount});
    });
  };

  sellProducts = () => {
    console.log("Calling sellItems");
    sellItems().then((response) => {
      console.log("response " + response.count);
      this.setState({ ordercount: response.count, orderamount: response.amount});
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          ></link>
        </header>
        <body>
          <h1>React App Docker</h1>
          <div className="container">
            <div className="row well mb-3">
              <div className="col-md-3 col-sm-3">
                <button
                  type="button"
                  className="btn btn-secondary btn-lg"
                  onClick={this.addInventory}
                >
                  Add Inventory
                </button>
              </div>
              <div className="col-md-3 col-sm-3">
                <button
                  type="button"
                  className="btn btn-secondary btn-lg"
                  onClick={this.checkInv}
                >
                  Check
                </button>
              </div>
              <div className="col-md-3 col-sm-3">
                <button
                  type="button"
                  className="btn btn-secondary btn-lg"
                  onClick={this.sellProducts}
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="row well mb-3">
              <div className="col-md-6">
                <h5>
                  There are {this.state.ordercount} intems in the inventory and {this.state.orderamount}
                </h5>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
