import React, { useState } from 'react'

const ThemChange = () => {
     const [lightTheme, setLightTheme] = useState(false);
      const handleTheme = () => {
        if (lightTheme) {
          document
            .getElementsByTagName("html")[0]
            .setAttribute("data-theme", "dark");
        } else {
          document
            .getElementsByTagName("html")[0]
            .setAttribute("data-theme", "light");
        }
      };
  return (
    <div>
         <button
          className="btn btn-primary"
          onClick={() => handleTheme(setLightTheme(!lightTheme))}
        >
          {lightTheme ? "Light" : "Dark"}
        </button>
    </div>
  )
}

export default ThemChange