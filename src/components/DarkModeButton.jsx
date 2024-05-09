import { TbNumber1, TbNumber2 } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { handledarkMode } from "../store/actions/darkModeAction";

const DarkModeButton = () => {
// Assigning useDispatch hook of redux to a variable
const dispatch = useDispatch();

// Calling our state from the reduxer using useSelector hook of redux
const mode = useSelector((state) => state.darkMode);

// Destructuring isdarkMode state from mode variable called using useSelector hook of redux
const { isdarkMode } = mode;

// Function to be fired on onChange method to switch the mode
const switchDarkMode = () => {
  isdarkMode
    ? dispatch(handledarkMode(false))
    : dispatch(handledarkMode(true));
};
useEffect(() => {
  // Changing color of body with darkmode in useEffect
  document.body.style.backgroundImage = isdarkMode ? "url('./img/pattern1.png)" : "url('./img/pattern2.png')";
}, [isdarkMode]);
  return (
    <div
    id="darkmode"
  >
    <input
      type="checkbox"
      className="checkbox"
      id="checkbox"
      // onChange prop to fire our internal function for changing the dark mode value
      onChange={switchDarkMode}
      // Checking checked prop with dark mode state
      checked={isdarkMode}
    />
    <label htmlFor="checkbox" className="label">
      <TbNumber1 color="white" />
      <TbNumber2 color="white" />
      <div className="ball"></div>
    </label>
  </div>
  )
}

export default DarkModeButton

