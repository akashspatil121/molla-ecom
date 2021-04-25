import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <>
      <section className="contactform_page">
        <div className="contactform_container">
          <h4>Send us a Message</h4>

          <form>
            <label className="contactform_label">
              <span>Name</span>
              <input className="contactform_input" type="text" />
            </label>

            <label className="contactform_label">
              <span>Email</span>
              <input className="contactform_input" type="email" />
            </label>

            <label className="contactform_label">
              <span>Phone</span>
              <input className="contactform_input" type="number" />
            </label>

            
            <label className="contactform_label">
              <span>Preferred method of communication</span>
            <div className="contactform_radio">
              <input id="radio-1" name="radio" type="radio" checked />
              <label for="radio-1" className="contactform_radio_label">
                Email
              </label>
            </div>

            <div className="contactform_radio">
              <input id="radio-2" name="radio" type="radio" />
              <label for="radio-2" className="contactform_radio_label">
                Phone
              </label>
            </div>
            </label>

            <label className="contactform_label">
              <span>Message</span>
              <input className="contactform_input" type="text" />
            </label>

            <button>Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};
export default ContactForm;
