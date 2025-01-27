import React, { useState } from "react";
    import ReactDOM from "react-dom/client";
    import App from "./App";
    import FloatingIcons from "./FloatingIcons";

    const Root = () => {
      const [isIconsVisible, setIsIconsVisible] = useState(false);

      const toggleIcons = () => {
        setIsIconsVisible(!isIconsVisible);
      };

      return (
        <>
          <App />
          <FloatingIcons isVisible={isIconsVisible} onClose={() => setIsIconsVisible(false)} />
          <button
            style={{
              position: "fixed",
              top: "20px",
              right: "20px",
              padding: "10px",
              background: "#3a3a5a",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={toggleIcons}
          >
            {isIconsVisible ? "Ocultar Iconos" : "Mostrar Iconos"}
          </button>
        </>
      );
    };

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Root />);
