import { TbNumber1, TbNumber2 } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { handledarkMode } from "../store/actions/darkModeAction";

const DarkModeButton = () => {
  const dispatch = useDispatch();
  const { isdarkMode } = useSelector((state) => state.darkMode);

  const switchDarkMode = () => {
    dispatch(handledarkMode(!isdarkMode));
  };

  useEffect(() => {
    // Hanterar dark-mode med CSS-klass istället för individuella element
    if (isdarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isdarkMode]);

  return (
    <div id="darkmode">
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
  );
};

export default DarkModeButton;
