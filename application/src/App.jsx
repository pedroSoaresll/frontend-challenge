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
        <section className="header-box">
          <Header/>
        </section>

        <section className="content-box">
          <div className="section-some-facilities mt-4">
            <SomeFacilitiesBox/>
          </div>

          <div className="section-nearby-product d-block mt-5 w-100">
            <NearbyProductsBox/>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
