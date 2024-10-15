import { useState, useEffect } from 'react';

function FormComponent() {
  const [formData, setFormData] = useState({
    user_name: '',  // matchar "user_name" i din mall
    user_email: '', // matchar "user_email" i din mall
    message: ''     // matchar "message" i din mall
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Dynamiskt laddar EmailJS-skript från CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      // Initierar EmailJS med public key
      emailjs.init('7KdWdO7g89mTeCswg');  // Ersätt med din EmailJS Public Key
    };
    document.body.appendChild(script);
  }, []);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Skickar formuläret med emailjs.sendForm
    emailjs.sendForm('service_hswxud5', 'template_2zg5dhj', event.target)
      .then(() => {
        console.log('SUCCESS!');
        setSubmitted(true);
      }, (error) => {
        console.log('FAILED...', error);
        alert('Något gick fel, försök igen.');
      });

    setFormData({
      user_name: '',
      user_email: '',
      message: ''
    });
  };

  return (
    <div>
      <form id="contact-form" onSubmit={handleFormSubmit}>
        <input
          name="user_name"  // Motsvarar "user_name" i EmailJS-mallen
          type="text"
          className="feedback-input"
          placeholder="Your Name"
          value={formData.user_name}
          onChange={handleInputChange}
        />
        <input
          name="user_email"  // Motsvarar "user_email" i EmailJS-mallen
          type="email"
          className="feedback-input"
          placeholder="Your Email"
          value={formData.user_email}
          onChange={handleInputChange}
        />
        <textarea
          name="message"  // Motsvarar "message" i EmailJS-mallen
          className="feedback-input"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
        <input type="submit" value="SUBMIT" />
      </form>
      {submitted ? (
        <>
          <h2>Form Submitted!</h2>
          <p className="landingText">Thank you for your query.</p>
        </>
      ) : null}
    </div>
  );
}

export default FormComponent;
