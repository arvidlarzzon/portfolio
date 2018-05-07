import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Menu from './Components/Menu'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
import About from './Components/About'
import Contact from './Components/Contact'

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      collapsed: true,
    };
    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  handleWindowResize(){
    this.setState({windowWidth: window.innerWidth});
    if(this.state.windowWidth < 1000){
      this.setState({collapsed: true})
    } else {
      this.setState({collapsed: false})
    }
  }
  
  componentDidMount () {
    window.addEventListener('resize', this.handleWindowResize);
  }
  render() {
    return (
      <div className="App">
        <Header>
          <Menu collapsed={this.state.collapsed}/>
        </Header>
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/resume" component={Resume}/>
          <Route exact path="/contact" component={Contact}/>
        </div>
        <Footer visible={this.state.showFooter}/>
      </div>
    );
  }
}

export default App;
