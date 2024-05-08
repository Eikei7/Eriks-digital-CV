import './ContactStyles.css'
import FormComponent from '../components/FormComponent'

const Contact = () => {
  return (
    <div id="wrapperContact">
      <p className='landingText'>Feel free to contact me using the form below:</p><br />
      <FormComponent />
    </div>
  )
}

export default Contact
