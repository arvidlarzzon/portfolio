import React, { Component } from "react";
import { Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import Home from "./Components/Views/Home/Home";
import Projects from "./Components/Views/Projects/Projects";
import About from "./Components/Views/About/About";
import Contact from "./Components/Views/Contact/Contact";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      collapsed: true
    };
    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  handleWindowResize() {
    this.setState({ windowWidth: window.innerWidth });
    if (this.state.windowWidth < 1000) {
      this.setState({ collapsed: true, windowWidth: window.innerWidth });
    } else {
      this.setState({ collapsed: false, windowWidth: window.innerWidth });
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);
  }
  render() {
    return (
      <div className="App">
        <Header collapsed={this.state.collapsed} />
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/projects"
            render={() => <Projects windowWidth={this.state.windowWidth} />}
          />
          <Route exact path="/contact" component={Contact} />
        </div>
        <Footer visible={this.state.showFooter} />
      </div>
    );
  }
}

export default App;
