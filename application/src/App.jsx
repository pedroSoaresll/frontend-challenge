import React, {Component} from 'react';
import './IconsRegister'
import './App.scss';
import Header from './components/header/Header'
import SomeFacilitiesBox from "./components/some-facilities/SomeFacilitiesBox";
import NearbyProductsBox from "./components/nearby-products/NearbyProductsBox";

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="header-box">
          <Header/>
        </div>

        <div className="content-box">
          <SomeFacilitiesBox/>
          <NearbyProductsBox/>
        </div>
      </div>
    );
  }
}

export default App;
