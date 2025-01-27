import React, { useState } from "react";
    import ReactDOM from "react-dom/client";
    import { FaLanguage, FaVolumeUp, FaCog, FaPlay, FaPause, FaFlag, FaUser, FaQuestionCircle, FaUndo, FaSave } from "react-icons/fa";
    import styled from "styled-components";

    const Container = styled.div`
      width: 350px;
      padding: 20px;
      background: linear-gradient(135deg, #1e1e2f, #2a2a40);
      color: white;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;

    const Button = styled.button`
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px;
      background: #3a3a5a;
      border: none;
      border-radius: 5px;
      color: white;
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: #4a4a6a;
      }
    `;

    const Popup = () => {
      const [language, setLanguage] = useState("es");
      const [volume, setVolume] = useState(50);
      const [voice, setVoice] = useState("female");
      const [speed, setSpeed] = useState(1.0);

      return (
        <Container>
          <h2>AiTentiendo</h2>
          <div>
            <FaLanguage />
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="es">Español</option>
              <option value="en">English</option>
              <option value="fr">Français</option>
            </select>
          </div>
          <div>
            <FaVolumeUp />
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
            />
          </div>
          <div>
            <FaUser />
            <select value={voice} onChange={(e) => setVoice(e.target.value)}>
              <option value="female">Femenina</option>
              <option value="male">Masculina</option>
            </select>
          </div>
          <div>
            <FaCog />
            <input
              type="number"
              step="0.1"
              min="0.5"
              max="2.0"
              value={speed}
              onChange={(e) => setSpeed(e.target.value)}
              placeholder="Velocidad de voz"
            />
          </div>
          <Button onClick={() => setLanguage("es")}>
            <FaUndo />
            Restablecer
          </Button>
          <Button>
            <FaSave />
            Guardar
          </Button>
          <Button>
            <FaQuestionCircle />
            Ayuda
          </Button>
        </Container>
      );
    };

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Popup />);
