import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";

import './assets/css/App.css';
import Layout from "./components/Layout/Layout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout sidebar dark sidebarCols="1">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
