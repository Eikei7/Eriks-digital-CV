import { useState } from 'react';

function FormComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    text: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // For demonstration, logging form data to console
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      text: ''
    });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input 
          name="name" 
          type="text" 
          className="feedback-input" 
          placeholder="Name"
          value={formData.name} 
          onChange={handleInputChange} 
        />
        <input 
          name="email" 
          type="text" 
          className="feedback-input" 
          placeholder="Email"
          value={formData.email} 
          onChange={handleInputChange} 
        />
        <textarea 
          name="text" 
          className="feedback-input" 
          placeholder="Comment"
          value={formData.text} 
          onChange={handleInputChange} 
        ></textarea>
        <input 
          type="submit" 
          value="SUBMIT" 
        />
      </form>
      {submitted ? (
        <>
          <h2>Form Submitted!</h2>
          <p className='landingText'>Thank you for your query.</p>
        </>
      ) : null}
    </div>
  );
}

export default FormComponent;
