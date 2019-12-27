import React, { Component } from 'react';
import MobileNav from '../components/MobileNav'
import TabletDesktopNav from '../components/TabletDesktopNav'
import saveTheDateImg from '../images/120A9694.jpg'

export class Rsvp extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }
  
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  render() {
    const { status } = this.state;
    return (
    <div id="canvas">
      <MobileNav />
      <TabletDesktopNav />
      <section className="image-container">
        <img src={saveTheDateImg}></img>
      </section>
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mzbdvdno"
        method="POST"
        className="rsvp-form"
      >
        <label>Email Address</label>
        <br />
        <input type="email" name="email" />
        <br />
        <label>Name</label>
        <br />
        <div className="name-input">
        <input type="text" name="first-name" placeholder="First Name" className="input-name"/>
        <input type="text" name="last-name" placeholder="Last Name" className="input-name last-name"/>
        </div>
        <br />
        <label>Are you attending?</label>
        <br />
        <input type="text" name="attending"/>
        <br />
        <label>Who is coming with you?</label>
        <br />
        <input type="text" name="attending"/>
        <br />
        <label>Message</label>
        <br />
        <textarea type="text" name="message" rows="5" cols="3"/>
        <br />
        {status === "SUCCESS" ? <p>Thanks!</p> : <div className="rsvp-button"><button>RSVP</button></div>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
      <footer><p>Built by Garrett L.G. Anderson</p></footer>
    </div>
    );
  }
}

export default Rsvp;
