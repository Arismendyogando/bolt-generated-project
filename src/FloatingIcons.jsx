import React, { useState } from "react";
    import { FaPlay, FaPause, FaVolumeUp, FaFlag, FaCog } from "react-icons/fa";
    import styled, { keyframes } from "styled-components";

    const floatAnimation = keyframes`
      0% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
      100% { transform: translateY(0); }
    `;

    const FloatingContainer = styled.div`
      position: fixed;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      gap: 15px;
      z-index: 1000;
      opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
      visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
      transition: opacity 0.3s ease, visibility 0.3s ease;
    `;

    const IconButton = styled.div`
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #3a3a5a;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      cursor: pointer;
      transition: all 0.3s ease;
      animation: ${floatAnimation} 3s ease-in-out infinite;

      &:hover {
        background: #4a4a6a;
        transform: scale(1.1);
      }
    `;

    const VoiceMenu = styled.div`
      position: absolute;
      left: -120px;
      background: #3a3a5a;
      padding: 10px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    `;

    const LanguageMenu = styled.div`
      position: absolute;
      left: -120px;
      background: #3a3a5a;
      padding: 10px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    `;

    const FloatingIcons = ({ isVisible, onClose }) => {
      const [isPlaying, setIsPlaying] = useState(false);
      const [showVoiceMenu, setShowVoiceMenu] = useState(false);
      const [showLanguageMenu, setShowLanguageMenu] = useState(false);

      const handlePlayPause = () => {
        const video = document.querySelector("video");
        if (video) {
          if (video.paused) {
            video.play();
            setIsPlaying(true);
          } else {
            video.pause();
            setIsPlaying(false);
          }
        }
      };

      const handleSettingsClick = () => {
        if (chrome && chrome.runtime) {
          chrome.runtime.sendMessage({ action: "openSettings" });
        } else {
          console.log("Redirigiendo a la página de configuración...");
          // Aquí puedes redirigir a la página de configuración en el entorno de desarrollo
        }
      };

      return (
        <FloatingContainer isVisible={isVisible}>
          <IconButton onClick={handlePlayPause}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </IconButton>

          <IconButton onClick={() => setShowVoiceMenu(!showVoiceMenu)}>
            <FaVolumeUp />
            {showVoiceMenu && (
              <VoiceMenu>
                <select>
                  <option value="female">Femenina</option>
                  <option value="male">Masculina</option>
                </select>
              </VoiceMenu>
            )}
          </IconButton>

          <IconButton onClick={() => setShowLanguageMenu(!showLanguageMenu)}>
            <FaFlag />
            {showLanguageMenu && (
              <LanguageMenu>
                <select>
                  <option value="es">Español</option>
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                </select>
              </LanguageMenu>
            )}
          </IconButton>

          <IconButton onClick={handleSettingsClick}>
            <FaCog />
          </IconButton>
        </FloatingContainer>
      );
    };

    export default FloatingIcons;
