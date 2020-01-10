import React, { Component } from 'react'
import MobileNav from '../components/MobileNav'
import TabletDesktopNav from '../components/TabletDesktopNav'
import saveTheDateImg2 from '../images/120A9815.jpg'

export class Travel extends Component {
  render() {
    return (
      <div id="canvas">
        <MobileNav />
        <TabletDesktopNav />
        <section className="image-container">
          <img src={saveTheDateImg2} />
        </section>
      </div>
    )
  }
}

export default Travel
