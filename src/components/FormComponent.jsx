import { useState } from 'react';

function FormComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    text: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // For demonstration, logging form data to console
    setSubmitted(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
      {submitted && (
        <div>
          <h2>Form Submitted!</h2>
          <p className='landingText'>Thank you for your query.</p>
        </div>
      )}
    </div>
  );
}

export default FormComponent;
