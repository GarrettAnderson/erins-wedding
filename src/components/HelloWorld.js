import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import saveTheDateImg from '../images/120A9694.jpg'


class HelloWorld extends Component {
  state = {
    navShown: true
  }

  render() {
    return (
      <div id="canvas">
        <div id="mobileNav" className={`mobileNavBar ${this.state.navShown ? 'is-shown' : ''}`}>
          <div className="navWrapper">
            <nav className="main-nav mobileNav">
              <ul>
                <li className="page-collection">
                  <Link to="/">HOME</Link>
                </li>
                <li className="page-collection">
                  <Link to="/wedding">WEDDING</Link>
                </li>
                <li className="page-collection">
                  <a href="#">TRAVEL</a>
                </li>
                <li className="page-collection">
                  <Link to="/photos">PHOTOS</Link>
                </li>
                <li className="page-collection">
                  <a href="#">REGISTRY</a>
                </li>
                <li className="page-collection">
                  <Link to="rsvp">RSVP</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="mobileNavButton" onClick={() => this.setState({ navShown: !this.state.navShown })}>
          <p>MENU</p>
        </div>
        <header className="header">
          <div id="upper-logo">
            <h1 className="header-text">
              <a href="#">Erin &amp; Jesse</a>
              </h1>
          </div>
          <div id="lower-logo">
            <h1 className="header-text">
              <a href="#">Erin &amp; Jesse</a>
            </h1>
          </div>
          <div id="topNav">
            <nav className="main-nav">
              <ul>
                <li className="nav-divider"></li>
                <li className="page-collection">
                  <Link to="/">HOME</Link>
                </li>
                <li className="page-collection">
                  <Link to="/wedding">WEDDING</Link>
                </li>
                <li className="page-collection">
                  <a href="#">TRAVEL</a>
                </li>
                <li className="page-collection">
                  <Link to="/photos">PHOTOS</Link>
                </li>
                <li className="page-collection">
                  <a href="#">REGISTRY</a>
                </li>
                <li className="page-collection">
                  <Link to="rsvp">RSVP</Link>
                </li>
                <li className="nav-divider"></li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="page-divider top-divider"></div>
        <section className="main-content">
          <section className="image-container">
            <img src={saveTheDateImg}></img>
            </section>
            <section className="tag-line"><h3>Come Celebrate Our Wedding</h3></section>
            <section><hr></hr></section>
            <section className="wedding-couple">
              <h1>Jesse Berhardt</h1>
              <h2>-&nbsp;<em>and</em>&nbsp;-</h2>
              <h1>Erin Anderson</h1>
            </section>
            <section><hr></hr></section>
            <section className="wedding-date">
              <h3>Saturday, May 30, 2020</h3>
            </section>
            <section className="wedding-invitation">
              <h2>Erin and Jesse joyfully request the pleasure of your company as we speak our vows and join in marriage in the presence of family and friends. Photography by Emily Karcher Photography, LLC.</h2>
            </section>
        </section>
        <footer><p>Built by Garrett L.G. Anderson</p></footer>
      </div>
    )
}
}

export default HelloWorld
