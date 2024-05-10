// Importing useState hook from React
import { useState } from 'react';

// Define a functional component named FormComponent
function FormComponent() {
  // Define state variables for form data and submission status
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    text: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Function to handle input changes in the form fields
  const handleInputChange = ({ target: { name, value } }) => {
    // Update form data state with new input value
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };
  // Function to handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log(formData); // Log form data to console (for demonstration)
    setSubmitted(true); // Set submission status to true
    // Reset form data to initial state after submission
    setFormData({
      name: '',
      email: '',
      text: ''
    });
  };
  // Render component UI
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input 
          name="name" 
          type="text" 
          className="feedback-input" 
          placeholder="Name"
          value={formData.name} // Controlled input value
          onChange={handleInputChange} // onChange event handler
        />
        <input 
          name="email" 
          type="text" 
          className="feedback-input" 
          placeholder="Email"
          value={formData.email} // Controlled input value
          onChange={handleInputChange} // onChange event handler
        />
        <textarea 
          name="text" 
          className="feedback-input" 
          placeholder="Comment"
          value={formData.text} // Controlled textarea value
          onChange={handleInputChange} // onChange event handler
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

// Export the FormComponent as the default export
export default FormComponent;
