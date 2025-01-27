const floatingIcons = document.createElement("div");
    floatingIcons.style.position = "fixed";
    floatingIcons.style.top = "50%";
    floatingIcons.style.right = "10px";
    floatingIcons.style.transform = "translateY(-50%)";
    floatingIcons.style.display = "flex";
    floatingIcons.style.flexDirection = "column";
    floatingIcons.style.gap = "10px";
    floatingIcons.style.zIndex = "1000";

    const createIcon = (icon, onClick) => {
      const iconElement = document.createElement("div");
      iconElement.innerHTML = icon;
      iconElement.style.width = "40px";
      iconElement.style.height = "40px";
      iconElement.style.borderRadius = "50%";
      iconElement.style.background = "#3a3a5a";
      iconElement.style.color = "white";
      iconElement.style.display = "flex";
      iconElement.style.alignItems = "center";
      iconElement.style.justifyContent = "center";
      iconElement.style.cursor = "pointer";
      iconElement.style.transition = "background 0.3s";
      iconElement.addEventListener("click", onClick);
      iconElement.addEventListener("mouseenter", () => {
        iconElement.style.background = "#4a4a6a";
      });
      iconElement.addEventListener("mouseleave", () => {
        iconElement.style.background = "#3a3a5a";
      });
      return iconElement;
    };

    const playPauseIcon = createIcon('<FaPlay />', () => {
      const video = document.querySelector("video");
      if (video.paused) {
        video.play();
        playPauseIcon.innerHTML = '<FaPause />';
      } else {
        video.pause();
        playPauseIcon.innerHTML = '<FaPlay />';
      }
    });

    const voiceIcon = createIcon('<FaVolumeUp />', () => {
      const voiceMenu = document.createElement("div");
      voiceMenu.style.position = "absolute";
      voiceMenu.style.left = "-120px";
      voiceMenu.style.background = "#3a3a5a";
      voiceMenu.style.padding = "10px";
      voiceMenu.style.borderRadius = "5px";
      voiceMenu.innerHTML = `
        <select>
          <option value="female">Femenina</option>
          <option value="male">Masculina</option>
        </select>
      `;
      voiceIcon.appendChild(voiceMenu);
    });

    const flagIcon = createIcon('<FaFlag />', () => {
      const languageMenu = document.createElement("div");
      languageMenu.style.position = "absolute";
      languageMenu.style.left = "-120px";
      languageMenu.style.background = "#3a3a5a";
      languageMenu.style.padding = "10px";
      languageMenu.style.borderRadius = "5px";
      languageMenu.innerHTML = `
        <select>
          <option value="es">Español</option>
          <option value="en">English</option>
          <option value="fr">Français</option>
        </select>
      `;
      flagIcon.appendChild(languageMenu);
    });

    const settingsIcon = createIcon('<FaCog />', () => {
      chrome.runtime.sendMessage({ action: "openSettings" });
    });

    floatingIcons.appendChild(playPauseIcon);
    floatingIcons.appendChild(voiceIcon);
    floatingIcons.appendChild(flagIcon);
    floatingIcons.appendChild(settingsIcon);
    document.body.appendChild(floatingIcons);
