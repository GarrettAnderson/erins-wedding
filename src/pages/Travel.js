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
        <section className="wedding-details">
          <h1>Airport</h1>
          <h3>Baltimore-Washington International Airport</h3>
          <section className="reception-details">
            <h1>Room Block #1</h1>
            <h3>
              Click{' '}
              <a href="https://book.passkey.com/event/50050495/owner/247310/home?utm_campaign=285752590" targe="_blank">
                {' '}
                here{' '}
              </a>{' '}
              to book (one night minimum at $229 per night plus tax)
            </h3>
            <p>
              The Westin Annapolis
              <br />
              100 Westgate Circle
              <br />
              Annapolis, MD 21401
            </p>
          </section>
          <section className="reception-details">
            <h1>Room Block #2</h1>
            <h3>
              Click{' '}
              <a
                href="https://doubletree.hilton.com/en/dt/groups/personalized/A/ANPDTDT-XAB-20200529/index.jhtml"
                targe="_blank"
              >
                {' '}
                here{' '}
              </a>
              to book (rates from $139 per night)
            </h3>
            <p>
              DoubleTree by Hilton Hotel Annapolis
              <br />
              210 Holiday Court
              <br />
              Annapolis, MD 21401
            </p>
          </section>
        </section>
      </div>
    )
  }
}

export default Travel
