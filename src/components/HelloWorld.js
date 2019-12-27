import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import MobileNav from '../components/MobileNav'
import TabletDesktopNav from '../components/TabletDesktopNav'
import saveTheDateImg from '../images/120A9694.jpg'


class HelloWorld extends Component {
  render() {
    return (
      <div id="canvas">
        <MobileNav />
        <TabletDesktopNav />
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
