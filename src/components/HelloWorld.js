import React, { Component } from 'react'
import saveTheDateImg from '../images/foto-pettine-IfjHaIoAoqE-unsplash.jpg'
class HelloWorld extends Component {


  render() {
    return (
      <div id="canvas">
        <div id="mobileNav" class="mobileNavBar">
          <div className="navWrapper">
            <nav className="main-nav mobileNav">
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
        </div>
        <div id="mobileNavButton">
          <button>Menu</button>
        </div>
        <header id="header" class="clear">
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
        <div className="page-divider top-divider"></div>
        <section className="main-content">
          <div className="image-container">
            <img src={saveTheDateImg}></img>
            </div>
            <div><h3>Come Celebrate Our Wedding</h3></div>
            <div><hr></hr></div>
            <div>
              <h1>Jesse Berhardt</h1>
              <h2>-&nbsp;<em>and</em>&nbsp;-</h2>
              <h1>Erin Anderson</h1>
            </div>
            <div><hr></hr></div>
            <div>
              <h3>Saturday, May 20, 2020</h3>
            </div>
            <div>
              <h2>Erin and Jesse joyfully request the pleasure of your company as we speak our vows and join in marriage in the presence of family and friends. Photography by Emily Karcher Photography, LLC.</h2>
            </div>
        </section>
        <footer><p>Built by Garrett L.G. Anderson</p></footer>
      </div>
    )
}
}

export default HelloWorld
