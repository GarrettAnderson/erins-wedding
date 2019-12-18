import React, { Component } from 'react'

class HelloWorld extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default probootstrap-navbar">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar-collapse"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <span className="sr-only" />
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="index.html" title="uiCookies:Wedding">
                Jesse <em>&amp;</em> Erin
              </a>
            </div>

            <div id="navbar-collapse" className="navbar-collapse collapse">
              <ul class="nav navbar-nav navbar-right">
                <li class="active">
                  <a href="#" data-nav-section="home">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="groom-bride">
                    Groom &amp; Bride
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="when-where">
                    When &amp; Where
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="gallery">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="rsvp">
                    RSVP
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="flexslider" data-section="home">
          <div className="container text-intro-wrap">
            <div className="row">
              <div className="col-md-12 text-center text-intro probootstrap-animate">
                <h1>
                  Jake <em>&amp;</em> Kate
                </h1>
                <h2>Getting Married on April 20, 2019 &mdash; Brooklyn, NYC</h2>
              </div>
            </div>
          </div>
          {/* <ul class="slides">
            <li style="background-image: url(img/hero_bg_1.jpg)" data />
            <li style="background-image: url(img/hero_bg_2.jpg)" />
            <li style="background-image: url(img/hero_bg_3.jpg)" />
          </ul> */}
        </section>

        <section className="probootstrap-section probootstrap-section-colored probootstrap-wedding-countdown">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center probootstrap-animate">
                <h4>The Wedding Begins In</h4>
              </div>
              <div className="col-md-12 probootstrap-animate">
                <div className="date-countdown" />
              </div>
            </div>
          </div>
        </section>

        <section className="probootstrap-section probootstrap-bg" data-section="groom-bride">
          <div className="container">
            <div className="row">
              <div className="col-md-12 probootstrap-groom-bride">
                <div className="probootstrap-groom probootstrap-animate">
                  <figure>
                    <img src="img/groom_1.jpg" alt="Free Bootstrap Template by uicookies.com" class="img-responsive" />
                  </figure>
                  <span className="probootstrap-caption">The Groom</span>
                  <h2 className="text-center">Jake Wilson</h2>
                  <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                    the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                    language ocean.
                  </p>
                  <p>
                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is
                    a paradisematic country, in which roasted parts of sentences fly into your mouth question ran over
                    her cheek, then she continued her way.
                  </p>
                </div>

                <div className="probootstrap-divider probootstrap-animate">
                  <span>&amp;</span>
                </div>

                <div className="probootstrap-bride probootstrap-animate">
                  <figure>
                    <img src="img/bride_1.jpg" alt="Free Bootstrap Template by uicookies.com" class="img-responsive" />
                  </figure>
                  <span className="probootstrap-caption">The Bride</span>
                  <h2 className="text-center">Kate Marie</h2>
                  <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                    the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                    language ocean.
                  </p>
                  <p>
                    The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question
                    Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia,
                    put her initial into the belt and made herself on the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="probootstrap-section probootstrap-section-colored" data-section="when-where">
          <div className="container">
            <div className="row mb40 text-center">
              <div className="col-md-12 probootstrap-animate">
                <h2 className="mt0">When &amp; Where</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 probootstrap-animate">
                <p>
                  <img
                    src="img/img_2.jpg"
                    alt="Free Bootstrap Template by uicookies.com"
                    className="img-responsive img-rounded"
                  />
                </p>
                <h3>Wedding Ceremony</h3>
                <p>
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                  the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                  language ocean.
                </p>
              </div>
              <div className="col-md-6 probootstrap-animate">
                <p>
                  <img
                    src="img/img_1.jpg"
                    alt="Free Bootstrap Template by uicookies.com"
                    className="img-responsive img-rounded"
                  />
                </p>
                <h3>Wedding Party</h3>
                <p>
                  A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
                  paradisematic country, in which roasted parts of sentences fly into your mouth question ran over her
                  cheek, then she continued her way.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="map" />

        <section className="probootstrap-section" data-section="gallery">
          <div className="container">
            <div className="row mb40 probootstrap-animate">
              <div className="col-md-12 text-center">
                <h2>Gallery</h2>
              </div>
            </div>

            <div className="row probootstrap-gutter30">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="row probootstrap-gutter30">
                  <div className="col-md-6 probootstrap-animate">
                    <a
                      className="probootstrap-image image-popup"
                      href="img/img_3.jpg"
                      // style="background-image: url(img/img_3.jpg)"
                    >
                      <div className="probootstrap-image-for-popup">
                        <img
                          src="img/img_3.jpg"
                          alt="Free Bootstrap Template by uicookies.com"
                          className="img-responsive"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6 probootstrap-animate">
                    <a
                      className="probootstrap-image image-popup"
                      href="img/img_2.jpg"
                      // style="background-image: url(img/img_2.jpg)"
                    >
                      <div className="probootstrap-image-for-popup">
                        <img
                          src="img/img_2.jpg"
                          alt="Free Bootstrap Template by uicookies.com"
                          className="img-responsive"
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="row probootstrap-gutter30">
                  <div className="col-md-12 probootstrap-animate">
                    <a
                      className="probootstrap-image image-popup"
                      href="img/img_1.jpg"
                      // style="background-image: url(img/img_1.jpg)"
                    >
                      <div className="probootstrap-image-for-popup">
                        <img
                          src="img/img_1.jpg"
                          alt="Free Bootstrap Template by uicookies.com"
                          className="img-responsive"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="row probootstrap-gutter30">
                  <div className="col-md-6">
                    <div className="row probootstrap-gutter30">
                      <div className="col-md-12 probootstrap-animate">
                        <a
                          className="probootstrap-image image-popup"
                          href="img/img_4.jpg"
                          // style="background-image: url(img/img_4.jpg)"
                        >
                          <div className="probootstrap-image-for-popup">
                            <img
                              src="img/img_4.jpg"
                              alt="Free Bootstrap Template by uicookies.com"
                              className="img-responsive"
                            />
                          </div>
                        </a>
                      </div>
                      <div className="col-md-12 probootstrap-animate">
                        <a
                          className="probootstrap-image image-popup"
                          href="img/img_5.jpg"
                          // style="background-image: url(img/img_5.jpg)"
                        >
                          <div className="probootstrap-image-for-popup">
                            <img
                              src="img/img_5.jpg"
                              alt="Free Bootstrap Template by uicookies.com"
                              className="img-responsive"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 probootstrap-animate">
                    <a
                      className="probootstrap-image  height-2x image-popup"
                      href="img/img_6.jpg"
                      // style="background-image: url(img/img_6.jpg)"
                    >
                      <div className="probootstrap-image-for-popup">
                        <img
                          src="img/img_6.jpg"
                          alt="Free Bootstrap Template by uicookies.com"
                          className="img-responsive"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* END row */}

            <div className="row probootstrap-gutter30">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="row probootstrap-gutter30">
                  <div className="col-md-6">
                    <div className="row probootstrap-gutter30">
                      <div className="col-md-12 probootstrap-animate">
                        <a
                          className="probootstrap-image image-popup"
                          href="img/img_1.jpg"
                          // style="background-image: url(img/img_1.jpg)"
                        >
                          <div className="probootstrap-image-for-popup">
                            <img
                              src="img/img_1.jpg"
                              alt="Free Bootstrap Template by uicookies.com"
                              className="img-responsive"
                            />
                          </div>
                        </a>
                      </div>
                      <div className="col-md-12 probootstrap-animate">
                        <a
                          className="probootstrap-image image-popup"
                          href="img/img_2.jpg"
                          // style="background-image: url(img/img_2.jpg)"
                        >
                          <div className="probootstrap-image-for-popup">
                            <img
                              src="img/img_2.jpg"
                              alt="Free Bootstrap Template by uicookies.com"
                              className="img-responsive"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 probootstrap-animate">
                    <a
                      className="probootstrap-image  height-2x image-popup"
                      href="img/img_3.jpg"
                      // style="background-image: url(img/img_3.jpg)"
                    >
                      <div className="probootstrap-image-for-popup">
                        <img
                          src="img/img_3.jpg"
                          alt="Free Bootstrap Template by uicookies.com"
                          className="img-responsive"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="row probootstrap-gutter30">
                  <div className="col-md-6 probootstrap-animate">
                    <a
                      className="probootstrap-image image-popup"
                      href="img/img_4.jpg"
                      // style="background-image: url(img/img_4.jpg)"
                    >
                      <div className="probootstrap-image-for-popup">
                        <img
                          src="img/img_4.jpg"
                          alt="Free Bootstrap Template by uicookies.com"
                          className="img-responsive"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6 probootstrap-animate">
                    <a
                      className="probootstrap-image image-popup"
                      href="img/img_5.jpg"
                      // style="background-image: url(img/img_5.jpg)"
                    >
                      <div className="probootstrap-image-for-popup">
                        <img
                          src="img/img_5.jpg"
                          alt="Free Bootstrap Template by uicookies.com"
                          className="img-responsive"
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="row probootstrap-gutter30">
                  <div className="col-md-12 probootstrap-animate">
                    <a
                      className="probootstrap-image image-popup"
                      href="img/img_6.jpg"
                      // style="background-image: url(img/img_6.jpg)"
                    >
                      <div className="probootstrap-image-for-popup">
                        <img
                          src="img/img_6.jpg"
                          alt="Free Bootstrap Template by uicookies.com"
                          className="img-responsive"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* END row */}
          </div>
        </section>

        <section className="probootstrap-section probootstrap-border-top" data-section="rsvp">
          <div className="container">
            <div className="row mb40">
              <div className="col-md-12 text-center">
                <h2 className="mt0 mb10 probootstrap-animate">Will you attend?</h2>
                <p>Please sign your RSVP</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <div className="probootstrap-card probootstrap-animate">
                  <form className="probootstrap-form">
                    <div className="form-group">
                      <label for="name">Your Name</label>
                      <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                      <label for="email">Your Email</label>
                      <input type="text" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                      <p>Will you attend?</p>
                      <label for="yes">
                        <input type="checkbox" id="yes" /> Yes, I will be there
                      </label>
                      <br />
                      <label for="no">
                        <input type="checkbox" id="no" /> Sorry, I can't come
                      </label>{' '}
                      <br />
                    </div>
                    <div className="form-group">
                      <label for="note">Note</label>
                      <textarea name="" id="note" cols="20" rows="5" className="form-control" />
                    </div>
                    <div className="form-group">
                      <input type="submit" className="btn btn-primary btn-lg" value="Send RSVP" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="probootstrap-section probootstrap-section-colored-darker">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-12 probootstrap-animate">
                <h2 className="mt0">Register</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-12 probootstrap-animate">
                <a href="#" className="btn-register">
                  <img src="img/bbab.png" alt="Free Bootstrap Template by uicookies.com" class="img-responsive" />
                </a>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12 probootstrap-animate">
                <a href="#" className="btn-register">
                  <img src="img/cnb.png" alt="Free Bootstrap Template by uicookies.com" class="img-responsive" />
                </a>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12 probootstrap-animate">
                <a href="#" className="btn-register">
                  <img src="img/amazon.png" alt="Free Bootstrap Template by uicookies.com" class="img-responsive" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="probootstrap-footer">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-12">
                &copy; 2017 <a href="https://uicookies.com/">uiCookies:Wedding</a>. All Rights Reserved. Designed &amp;
                Developed by <a href="https://uicookies.com">uicookies.com</a> <br /> Demo Images by{' '}
                <a href="https://unsplash.com">Unsplash</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default HelloWorld
