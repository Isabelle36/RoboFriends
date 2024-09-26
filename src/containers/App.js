import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

import "./App.css";

class App extends Component {
  constructor() {
    //initializing the objects like state,life-cycle etc
    super(); // for calling the parent class component so we can use this refers
    // to instance(object) of class and access this.props,this.state .

    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=> response.json())
    .then(users => {this.setState({ robots: users})});
  }

  onSerachChange = (event) => {
    this.setState({ searchField: event.target.value });
  };
  render() {
    const { robots, searchField } = this.state;
    const filteredRobos = robots.filter(
      (
        robot // (para) The current element being processed in the array.
      ) =>
        // the element could be anything robot or smth else based on ur code
        {
          return robot.name.toLowerCase().includes(searchField.toLowerCase());
        }
    );

 return !robots.length ?
    <h1>Loading..</h1> :
   (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox /* --> props */ searchChange={this.onSerachChange} />
          <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobos} />
          </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }

export default App;
