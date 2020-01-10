import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class MobileNav extends Component {
  state = {
    navShown: true
  }

  render() {
    return (
      <div>
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
                  <a href="/travel">TRAVEL</a>
                </li>
                <li className="page-collection">
                  <Link to="/photos">PHOTOS</Link>
                </li>
                <li className="page-collection">
                  <a href="/honeyfund">HONEYFUND</a>
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
      </div>
    )
  }
}

export default MobileNav
