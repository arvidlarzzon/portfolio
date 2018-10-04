import React, { Component } from 'react';

import HomeThumbnail from './HomeThumbnail';
//import '../Styles/Home.css'

class Home extends Component {
  render() {
    let arr = [1,2,3];
    return (
      <div className="home">
        <h1>This is Home component</h1>
        {arr.map((num) => {
          return <HomeThumbnail number={num}/>
        })}
        
      </div>
    );
  }
}

export default Home;