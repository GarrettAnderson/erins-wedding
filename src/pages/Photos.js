import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Photos extends Component {
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
                <a href="#">RSVP</a>
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
              <li className="page-collection">
                <a href="#">HOME</a>
              </li>
              <li className="page-collection">
                <a href="#">WEDDING</a>
              </li>
              <li className="page-collection">
                <a href="#">TRAVEL</a>
              </li>
              <li className="page-collection">
                <a href="#">PHOTOS</a>
              </li>
              <li className="page-collection">
                <a href="#">REGISTRY</a>
              </li>
              <li className="page-collection">
                <a href="#">RSVP</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
    );
  }
}

export default Photos;
