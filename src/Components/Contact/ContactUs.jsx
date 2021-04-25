import React from "react";
import "./ContactUs.css";
import ContactForm from "./ContactForm";
const ContactUs = () => {
    return (
        <>
            <section className="contact_page">
                <div className= "contactus_container">
                    <h1 className= "contactus_heading">Contact Us</h1>
                    <p className= "contactus_paregraph">
                    Should you require further assistance please use the contact us box at the right hand side of the page.
                    Should you require further assistance please use the contact us box at the right hand side of the page.  
                    </p>
                </div>
                <ContactForm/>
                <br/>
            </section>
        </>
    );
}
export default ContactUs;