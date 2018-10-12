import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";

import './assets/css/App.css';
import Layout from "./components/Layout/Layout";
import Work from "./components/pages/Work/Porfolio";
import Skills from "./components/pages/Skills/Skills";
import CodeLab from "./components/pages/CodeLab/CodeLab";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout sidebar dark sidebarCols="1">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Work} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/codelab" component={CodeLab} />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
