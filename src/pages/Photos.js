import React, { Component } from 'react';
import MobileNav from '../components/MobileNav'
import TabletDesktopNav from '../components/TabletDesktopNav'
import Image01 from '../images/120A9557.jpg'
import Image02 from '../images/120A9582.jpg'
import Image03 from '../images/120A9620.jpg'
import Image04 from '../images/120A9631.jpg'
import Image05 from '../images/120A9664.jpg'
import Image06 from '../images/120A9672.jpg'
import Image07 from '../images/120A9694.jpg'
import Image08 from '../images/120A9713.jpg'
import Image09 from '../images/120A9815.jpg'
import Image10 from '../images/120A9877.jpg'
import Image11 from '../images/120A9879.jpg'
import Image12 from '../images/120A9898.jpg'
import Image13 from '../images/120A9925.jpg'
import Image14 from '../images/IMG_2386.jpg'

const images = [
  {id: 1, image: Image01},
  {id: 2, image: Image02},
  {id: 3, image: Image03},
  {id: 4, image: Image04},
  {id: 5, image: Image05},
  {id: 6, image: Image06},
  {id: 7, image: Image07},
  {id: 8, image: Image08},
  {id: 9, image: Image09},
  {id: 10, image: Image10},
  {id: 11, image: Image11},
  {id: 12, image: Image12},
  {id: 13, image: Image13},
  {id: 14, image: Image14},
]

export class Photos extends Component {
  state = {
    navShown: true
  }
  render() {
    return (
    <div id="canvas">
      <MobileNav />
      <TabletDesktopNav />
      <section className="photo-gallery">
        <ol>
          {
            images.map((image) => {
              console.log(image.id)
              return (
                <li key={image.id}>
                  <img alt="canvas" src={image.image} />
                </li>
              )
            })
          }
        </ol>
      </section>
      <footer><p>Built by Garrett L.G. Anderson</p></footer>
    </div>
    );
  }
}

export default Photos;
