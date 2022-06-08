import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import swal from "sweetalert";
export default function App() {
  const sendmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_pdyol49",
        "template_efyjsgb",
        e.target,
        "yaQMvoAXr8rKJhvUu"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  const [buttonstatus, setbuttonstatus] = useState(null);
  const validating = (e, msg) => {
    if (e.target.value.length <= 0) {
      swal(msg, "", "error");
    }
  };
  const settingbutton = () => {
    

    var name = document.getElementById("contact-name").value;
    var mail = document.getElementById("contact-mail").value;
    var msg = document.getElementById("contact-message").value;
    var regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    if (name && regex.test(mail) && msg) {
      setbuttonstatus(1);
    }
  };
  const responsesend= async()=>{
    await swal("Thank you", "Response recorded successfully", "success");
    
    await document.getElementById("contact-form").reset(); 
  
    
  }
  return (
    <>
      <section id="contact" className="add-padding border-top-color2">
        <div className="container text-center">
          <div className="row">
            <div className="col-sm-6 col-md-5 text-right scrollimation fade-up d1">
              <h1 style={{fontSize:"50px"}}>Feedback!</h1>

              <p className="lead">
                Help us improve.
                <br />
                By giving us your valuable feedback.
              </p>
              <p>Your feedback is confidential with us.</p>
            </div>

            <form
              id="contact-form"
              className="col-sm-6 col-md-offset-1 scrollimation fade-left d3"
              onSubmit={sendmail}
            >
              <div className="form-group">
                <label className="control-label" htmlFor="contact-name">
                  Name
                </label>
                <div className="controls">
                  <input
                    id="contact-name"
                    name="name"
                    placeholder="Your name"
                    className="form-control requiredField"
                    data-new-placeholder="Your name"
                    type="text"
                    data-error-empty="Please enter your name"
                    onBlur={(e) => validating(e, "Name can not be empty")}
                    onChange={settingbutton}
                  />
                  <i className="fa fa-user"></i>
                </div>
              </div>

              <div className="form-group">
                <label className="control-label" htmlFor="contact-mail">
                  Email
                </label>
                <div className=" controls">
                  <input
                    id="contact-mail"
                    name="email"
                    placeholder="Your email"
                    className="form-control requiredField"
                    data-new-placeholder="Your email"
                    type="email"
                    onBlur={(e) => validating(e, "Please enter valid Email.")}
                    onChange={settingbutton}
                    data-error-empty="Please enter your email"
                    data-error-invalid="Invalid email address"
                  />
                  <i className="fa fa-envelope"></i>
                </div>
              </div>

              <div className="form-group">
                <label className="control-label" htmlFor="contact-message">
                  Message
                </label>
                <div className="controls">
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Your message"
                    className="form-control requiredField"
                    data-new-placeholder="Your message"
                    onBlur={(e) => validating(e, "Message can not be empty.")}
                    onChange={settingbutton}
                    rows="2"
                    data-error-empty="Please enter your message"
                  ></textarea>
                  <i className="fa fa-comment"></i>
                </div>
              </div>

              <p>
                <button
                  name="submit"
                  type="submit"
                  className="btn btn-color2 btn-block"
                  data-error-message="Error!"
                  data-sending-message="Sending..."
                  data-ok-message="Message Sent"
                  disabled={!buttonstatus}
                  onClick={responsesend}
                >
                  <i className="fa fa-paper-plane"></i>Send Message
                </button>
              </p>
              {/* <input
                type="hidden"
                name="submitted"
                id="submitted"
                value="true"
              /> */}
            </form>
          </div>
        </div>
      </section>

      <footer
        id="main-footer"
        className="add-padding border-top-color2"
        style={{ backgroundColor: "#f6f7fc" }}
      >
        <div className="container" >
          <ul className="social-links text-center" >
            <li>
              <Link to="/">Calculator</Link>
            </li>
            <li>
              <Link to="/formsdownload"> Downloads</Link>
            </li>
            <li>
              <Link to="/taxrules">Tax laws and rules</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
          </ul>

          <p className="text-center">
            &copy; Copyrights 2022.All rights reserved.
          </p>
          <p className="text-center">
            Developed by: Gurkirat Singh, Jasnoor Kaur Jassal, Kushagra Joshi
            <br />
            Under mentorship of Dr. Pankaj Bhambri
          </p>
        </div>
      </footer>
    </>
  );
}
