import './ContactStyles.css'
import FormComponent from '../components/FormComponent'

const Contact = () => {
  return (
    <div id="wrapperContact">
      <div className='landingBox'>
      <p className='landingText'>If you'd like to get in touch with me, send me a message using the form below and we'll take it from there!</p><br />
      <FormComponent />
      </div>
    </div>
  )
}

export default Contact
