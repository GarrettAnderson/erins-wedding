import React, { Component } from 'react';
import MobileNav from '../components/MobileNav'
import TabletDesktopNav from '../components/TabletDesktopNav'
import saveTheDateImg2 from '../images/120A9815.jpg'

export class Wedding extends Component {
  state = {
    navShown: true
  }

  render() {
    return (
      <div id="canvas">
      <MobileNav />
      <TabletDesktopNav />
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
