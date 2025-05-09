import './ContactStyles.css';
import FormComponent from '../components/FormComponent';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Get in touch</h2>
      
      <div className="contact-content">
        <div className="contact-intro">
          <p>If you'd like to get in touch, send me a message using the form below and we'll take it from there!</p>
        </div>
        
        <FormComponent />
      </div>
    </div>
  );
};

export default Contact;