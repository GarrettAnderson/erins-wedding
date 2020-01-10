import React, { Component } from 'react'
import MobileNav from '../components/MobileNav'
import TabletDesktopNav from '../components/TabletDesktopNav'
import saveTheDateImg2 from '../images/120A9815.jpg'

export class HoneyFund extends Component {
  render() {
    return (
      <div id="canvas">
        <MobileNav />
        <TabletDesktopNav />
        <section className="image-container">
          <img src={saveTheDateImg2} />
        </section>
        <section className="tag-line">
          <h3>
            We ask that you please donate to our honeymoon. Please click
            <a href="https://www.honeyfund.com/wedding/BernhardtWedding" target="_blank">
              {' '}
              here{' '}
            </a>
            to help us pay for our trip to Bermuda.
          </h3>
        </section>
      </div>
    )
  }
}

export default HoneyFund
