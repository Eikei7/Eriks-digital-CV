import { useState, useEffect } from 'react';

function FormComponent() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.async = true;
    script.onload = () => {

      emailjs.init('7KdWdO7g89mTeCswg');
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
          name="user_name"
          type="text"
          className="feedback-input"
          placeholder="Your Name"
          value={formData.user_name}
          onChange={handleInputChange}
        />
        <input
          name="user_email"
          type="email"
          className="feedback-input"
          placeholder="Your Email"
          value={formData.user_email}
          onChange={handleInputChange}
        />
        <textarea
          name="message"
          className="feedback-input"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
        <input type="submit" value="SUBMIT" />
      </form>
      {submitted ? (
        <>
          <h2>Email sent!</h2>
          <p className="landingText">Thank you for your query.</p>
        </>
      ) : null}
    </div>
  );
}

export default FormComponent;
