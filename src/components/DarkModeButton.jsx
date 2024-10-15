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

