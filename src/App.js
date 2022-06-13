import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: [],
    };
  }

  updateInput(key, value) {
    this.setState({
      [key]: value,
    });
  }

  addItem() {
    //dodavanje itema sa jedinstvenim id-em
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };

    //kopija trenutne liste
    const list = [...this.state.list];

    //dodavanje novog itema u listu
    list.push(newItem);

    //osvezavanje state-a sa novom listom i resetovanje newItem inputa
    this.setState({
      list,
      newItem: "",
    });
  }

  deleteItem(id) {
    //kopija trenutne liste
    const list = [...this.state.list];

    //izbacivanje itema za brisanje
    const updatedList = list.filter((item) => item.id !== id);

    this.setState({ list: updatedList });
  }
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <header>Dodaj u listu...</header>
          <br />
          <input
            className="inputPolje"
            type="text"
            placeholder="Upisi ovde..."
            value={this.state.newItem}
            onChange={(e) => this.updateInput("newItem", e.target.value)}
          />
          <button className="dodaj" onClick={() => this.addItem()}>
            Dodaj
          </button>
          <br />
          <ul className="todoList">
            {this.state.list.map((item) => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button
                    className="ukloni"
                    onClick={() => this.deleteItem(item.id)}
                  >
                    X
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
