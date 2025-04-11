import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { handledarkMode } from "../store/actions/darkModeAction";
import "./DarkModeButton2.css";

const DarkModeButton = () => {
  const dispatch = useDispatch();
  const { isdarkMode } = useSelector((state) => state.darkMode);

  const switchDarkMode = () => {
    dispatch(handledarkMode(!isdarkMode));
  };

  useEffect(() => {
    if (isdarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isdarkMode]);

  return (
    <div className="theme-toggle-wrapper">
      <button 
        className={`theme-toggle-button ${isdarkMode ? 'dark' : 'light'}`} 
        onClick={switchDarkMode}
        aria-label={isdarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        <div className="theme-icons">
          <svg className="sun-icon" viewBox="0 0 24 24">
            <circle className="sun-circle" cx="12" cy="12" r="6"></circle>
            <g className="sun-rays">
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </g>
          </svg>
          <svg className="moon-icon" viewBox="0 0 24 24">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </div>
      </button>
    </div>
  );
};

export default DarkModeButton;