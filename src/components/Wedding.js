import React, { Component } from 'react';
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
                <Link to="/">Home</Link>
              </li>
              <li className="page-collection">
                <Link to="/wedding">Wedding</Link>
              </li>
              <li className="page-collection">
                <a href="#">Travel</a>
              </li>
              <li className="page-collection">
                <a href="#">Photos</a>
              </li>
              <li className="page-collection">
                <a href="#">Registry</a>
              </li>
              <li className="page-collection">
                <a href="#">RSVP</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="mobileNavButton" onClick={() => this.setState({ navShown: !this.state.navShown })}>
        <button>Menu</button>
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
                <a href="#">Home</a>
              </li>
              <li className="page-collection">
                <a href="#">Wedding</a>
              </li>
              <li className="page-collection">
                <a href="#">Travel</a>
              </li>
              <li className="page-collection">
                <a href="#">Photos</a>
              </li>
              <li className="page-collection">
                <a href="#">Registry</a>
              </li>
              <li className="page-collection">
                <a href="#">RSVP</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="image-container">
        <img src={saveTheDateImg2}></img>
      </section>
      <section className="tag-line">
          <h3>The wedding will be held on Saturday, May 20, 2020.</h3>
      </section>
      <section className="wedding-details">
        <h1>Ceremony</h1>
        <h3>1:00pm - 2:00pm</h3>
        <p>
          New Faith Church
          <br />
          123 Some Street
          <br />
          Annapolis, MD
        </p>
      </section>
      </div>
    );
  }
}

export default Wedding;
