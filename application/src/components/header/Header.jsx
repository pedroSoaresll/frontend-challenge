import React from 'react'
import './Header.scss'
import SearchTop from "../search/SearchTop";

export default class Header extends React.Component {

  render() {

    return (
      <section>
        {/*header*/}
        <header className="header-main d-flex flex-wrap align-items-center justify-content-center">

          <h1 className="header-title mb-5">Plataforma online e gratuita para você pedir quantas pizzas quiser!</h1>
        </header>

        {/*input search*/}
        <div className="area-search w-100 d-flex justify-content-center">

          <SearchTop/>
        </div>
      </section>
    )
  }
}