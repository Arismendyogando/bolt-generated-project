import React, { useState } from "react";
    import { FaLanguage, FaVolumeUp, FaUser, FaCog, FaUndo, FaSave, FaQuestionCircle } from "react-icons/fa";
    import styled, { keyframes } from "styled-components";

    const fadeIn = keyframes`
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    `;

    const Container = styled.div`
      width: 400px;
      padding: 20px;
      background: linear-gradient(135deg, #1e1e2f, #2a2a40);
      color: white;
      border-radius: 15px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      animation: ${fadeIn} 0.5s ease-in-out;
    `;

    const Title = styled.h2`
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 20px;
      color: #fff;
      text-align: center;
    `;

    const SettingRow = styled.div`
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 15px;
    `;

    const Label = styled.span`
      font-size: 16px;
      color: #a0a0c0;
    `;

    const Select = styled.select`
      padding: 8px;
      border-radius: 8px;
      border: 1px solid #3a3a5a;
      background: #2a2a40;
      color: white;
      font-size: 14px;
      transition: all 0.3s ease;

      &:hover {
        border-color: #4a4a6a;
      }

      &:focus {
        outline: none;
        border-color: #6a6a8a;
      }
    `;

    const InputRange = styled.input`
      width: 150px;
      background: #2a2a40;
      border-radius: 8px;
      appearance: none;
      height: 6px;
      outline: none;
      transition: opacity 0.2s;

      &::-webkit-slider-thumb {
        appearance: none;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #6a6a8a;
        cursor: pointer;
      }

      &:hover {
        opacity: 0.8;
      }
    `;

    const Button = styled.button`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 10px 15px;
      background: #3a3a5a;
      border: none;
      border-radius: 8px;
      color: white;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: #4a4a6a;
        transform: translateY(-2px);
      }

      &:active {
        transform: translateY(0);
      }
    `;

    const ButtonGroup = styled.div`
      display: flex;
      gap: 10px;
      margin-top: 20px;
    `;

    const App = () => {
      const [language, setLanguage] = useState("es");
      const [volume, setVolume] = useState(50);
      const [voice, setVoice] = useState("female");
      const [speed, setSpeed] = useState(1.0);

      const handleSave = () => {
        chrome.storage.sync.set({ language, volume, voice, speed }, () => {
          alert("Configuración guardada correctamente.");
        });
      };

      const handleReset = () => {
        setLanguage("es");
        setVolume(50);
        setVoice("female");
        setSpeed(1.0);
      };

      return (
        <Container>
          <Title>Configuración de AiTentiendo</Title>
          <SettingRow>
            <FaLanguage />
            <Label>Idioma:</Label>
            <Select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="es">Español</option>
              <option value="en">English</option>
              <option value="fr">Français</option>
            </Select>
          </SettingRow>
          <SettingRow>
            <FaVolumeUp />
            <Label>Volumen:</Label>
            <InputRange
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
            />
          </SettingRow>
          <SettingRow>
            <FaUser />
            <Label>Voz:</Label>
            <Select value={voice} onChange={(e) => setVoice(e.target.value)}>
              <option value="female">Femenina</option>
              <option value="male">Masculina</option>
            </Select>
          </SettingRow>
          <SettingRow>
            <FaCog />
            <Label>Velocidad:</Label>
            <InputRange
              type="number"
              step="0.1"
              min="0.5"
              max="2.0"
              value={speed}
              onChange={(e) => setSpeed(e.target.value)}
              placeholder="Velocidad de voz"
            />
          </SettingRow>
          <ButtonGroup>
            <Button onClick={handleReset}>
              <FaUndo />
              Restablecer
            </Button>
            <Button onClick={handleSave}>
              <FaSave />
              Guardar
            </Button>
            <Button>
              <FaQuestionCircle />
              Ayuda
            </Button>
          </ButtonGroup>
        </Container>
      );
    };

    export default App;
