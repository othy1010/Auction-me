import React from 'react';
import '../../styles/admin_styles/Contact.css'

const Contact = () => {
    return (
        <div class="contact" id="contact">
            <h1>Contact Us</h1>
            <br/><br/><br/>
            <form>
  
                <label for="name">What's your name ?</label>
                <input type="text" id="name" name="name" required />
    
                <label for="email">What's your email ?</label>
                <input type="email" id="email" name="email" required />
    
    
                <label for="help">How can we help ?</label>
                <textarea id="help" name="help" style={{height: "200px"}} required></textarea>
    
                <input type="submit" value="Send" />
  
            </form>
  </div>
    );
};

export default Contact;