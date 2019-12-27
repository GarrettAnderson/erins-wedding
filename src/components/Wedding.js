import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import saveTheDateImg2 from '../images/120A9815.jpg'

export class Wedding extends Component {
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
                <Link to="/rsvp">RSVP</Link>
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
                <NavLink exact={true} activeClassName='is-active' to="/">HOME</NavLink>
              </li>
              <li className="page-collection">
                <NavLink activeClassName='is-active' to="/wedding">WEDDING</NavLink>
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
              <Link to="/rsvp">RSVP</Link>
              </li>
              <li className="nav-divider"></li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="image-container">
        <img src={saveTheDateImg2}></img>
      </section>
      <section className="tag-line">
          <h3>The wedding will be held on Saturday, May 30, 2020.</h3>
      </section>
      <section className="wedding-details">
        <h1>Ceremony</h1>
        <h3>4:30pm - 5:00pm</h3>
        <p>
          William Paca House and Garden
          <br />
          186 Prince George St
          <br />
          Annapolis, MD 21401
        </p>
      </section>
      <section className="reception-details">
        <h1>Reception</h1>
        <h3>5:00pm - 9:00pm</h3>
        <p>
        William Paca House and Garden
          <br />
          186 Prince George St
          <br />
          Annapolis, MD 21401
        </p>
      </section>
      <footer><p>Built by Garrett L.G. Anderson</p></footer>
      </div>
    );
  }
}

export default Wedding;
