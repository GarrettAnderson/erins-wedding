import React, { Component } from 'react'

class HelloWorld extends Component {


  render() {
    return (
      <div id="canvas">
        <div id="mobileNav" class="mobileNavBar">
          <div class="navWrapper">
            <nav class="main-nav mobileNav">
              <ul>
                <li class="page-collection">
                  <a href="#">Home</a>
                </li>
                <li class="page-collection">
                  <a href="#">Wedding</a>
                </li>
                <li class="page-collection">
                  <a href="#">Travel</a>
                </li>
                <li class="page-collection">
                  <a href="#">Photos</a>
                </li>
                <li class="page-collection">
                  <a href="#">Registry</a>
                </li>
                <li class="page-collection">
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
            <h1 class="header-text">
              <a href="#">Erin &amp; Jesse</a>
              </h1>
          </div>
          <div id="lower-logo">
            <h1 class="header-text">
              <a href="#">Erin &amp; Jesse</a>
            </h1>
          </div>
          <div id="topNav">
            <nav class="main-nav">
              <ul>
                <li class="page-collection">
                  <a href="#">Home</a>
                </li>
                <li class="page-collection">
                  <a href="#">Wedding</a>
                </li>
                <li class="page-collection">
                  <a href="#">Travel</a>
                </li>
                <li class="page-collection">
                  <a href="#">Photos</a>
                </li>
                <li class="page-collection">
                  <a href="#">Registry</a>
                </li>
                <li class="page-collection">
                  <a href="#">RSVP</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    )
}
}

export default HelloWorld
