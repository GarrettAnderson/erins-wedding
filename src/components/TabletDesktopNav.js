import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

export class TabletDesktopNav extends Component {
  render() {
    return (
      <header className="header">
      <div id="upper-logo">
        <h1 className="header-text">
          <Link to="/">Erin &amp; Jesse</Link>
          </h1>
      </div>
      <div id="lower-logo">
        <h1 className="header-text">
          <Link to="/">Erin &amp; Jesse</Link>
        </h1>
      </div>
      <div id="topNav">
        <nav className="main-nav">
          <ul>
            <li className="nav-divider"></li>
            <li className="page-collection">
              <NavLink exact={true} activeClassName="is-active" to="/">HOME</NavLink>
            </li>
            <li className="page-collection">
              <NavLink activeClassName="is-active" to="/wedding">WEDDING</NavLink>
            </li>
            <li className="page-collection">
              <a href="#">TRAVEL</a>
            </li>
            <li className="page-collection">
              <NavLink activeClassName="is-active" to="/photos">PHOTOS</NavLink>
            </li>
            <li className="page-collection">
              <a href="#">REGISTRY</a>
            </li>
            <li className="page-collection">
              <NavLink activeClassName="is-active" to="/rsvp">RSVP</NavLink>
            </li>
            <li className="nav-divider"></li>
          </ul>
        </nav>
      </div>
    </header>
    );
  }
}

export default TabletDesktopNav;
