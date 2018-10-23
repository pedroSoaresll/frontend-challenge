import React from 'react'
import SearchTop from "../search/SearchTop";
import './Header.scss'

export default class Header extends React.Component {

  render() {

    return (
      <section>
        <header className="header-main">
          <h1>Plataforma online e gratuita para você pedir quantas pizzas quiser!</h1>
        </header>

        <div className="area-search">
          <SearchTop/>
        </div>
      </section>
    )
  }
}