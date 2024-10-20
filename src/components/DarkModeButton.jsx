import { TbNumber1, TbNumber2 } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { handledarkMode } from "../store/actions/darkModeAction";

const DarkModeButton = () => {
const dispatch = useDispatch();

const mode = useSelector((state) => state.darkMode);

const { isdarkMode } = mode;

const switchDarkMode = () => {
  isdarkMode
    ? dispatch(handledarkMode(false))
    : dispatch(handledarkMode(true));
};
useEffect(() => {
  document.body.style.backgroundImage = isdarkMode ? "url('./img/pattern1.png')" : "url('./img/pattern2.png')";
  document.body.style.color = isdarkMode ? "#f0f0f0" : "#2c2c2c";

  const nav = document.querySelector('nav');
  if (nav) {
    nav.style.backgroundColor = isdarkMode ? "var(--almostwhite)" : "var(--almostwhite)";
    nav.style.boxShadow = isdarkMode ? "0px 5px 20px rgba(0, 0, 0, 0.8)" : "0px 5px 20px rgba(0, 0, 0, 0.5)";
  }

  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    button.style.backgroundColor = isdarkMode ? "#1899D6" : "#1899D6";
    button.style.color = isdarkMode ? "#fff" : "#fff";
  });
}, [isdarkMode]);

  return (
    <div
    id="darkmode"
  >
    <input
      type="checkbox"
      className="checkbox"
      id="checkbox"
      onChange={switchDarkMode}
      checked={isdarkMode}
    />
    <label htmlFor="checkbox" className="label">
      <TbNumber2 color="white" />
      <TbNumber1 color="white" />
      <div className="ball"></div>
    </label>
  </div>
  )
}

export default DarkModeButton

