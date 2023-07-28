// Merged code from File 1
(function() {
    // Function to create a color box with a given color and class
    function createColorBox(color, className) {
      const colorBox = document.createElement("div");
      colorBox.className = "color-box " + className; // Add the class
      colorBox.style.backgroundColor = color.hex();
      return colorBox;
    }
  
    // Function to update the color boxes based on the color input
    function updateColorBoxes() {
      const colorValue = colorInput.value;
  
      // Use chroma.js to convert the color value to an HSL-based chroma color object
      const color = chroma(colorValue);
  
      // Get the HSL components of the color
      const [h, s, l] = color.hsl();
  
      // Create 12 variations of the color with different hues
      const hueVariationsContainer = document.getElementById("hueVariationsContainer");
      hueVariationsContainer.innerHTML = "";
  
      for (let i = 0; i < 12; i++) {
        // Divide the hue range (0 to 360) into 12 parts
        const hueStep = 360 / 12;
        const hue = (h + i * hueStep) % 360; // Ensure hue wraps around within the range
  
        // To create variations with different hues, keep the saturation and lightness constant
        const modifiedColor = chroma.hsl(hue, s, l);
        const colorBox = createColorBox(modifiedColor, "hue-color"); // Assign class "hue-color"
        hueVariationsContainer.appendChild(colorBox);
      }
  
      // Create 5 variations of the color with different brightness levels (brighter)
      const brightVariationsContainer = document.getElementById("brightVariationsContainer");
      brightVariationsContainer.innerHTML = "";
  
      for (let i = 1; i <= 5; i++) {
        const brightness = i * 0.1; // 0.1 increment for brightness (0.1 to 0.5)
  
        // To create brighter colors, increase the lightness (L) component
        const modifiedColorBrighter = chroma.hsl(h, s, l + (1 - l) * brightness);
        const colorBoxBrighter = createColorBox(modifiedColorBrighter, "bright-color"); // Assign class "bright-color"
        brightVariationsContainer.appendChild(colorBoxBrighter);
      }
    }
  
    const colorInput = document.getElementById("colorInput");
  
    // Update the color boxes whenever the color input changes
    colorInput.addEventListener("input", updateColorBoxes);
  
    // Initial update of the color boxes
    updateColorBoxes();
  })();
  
  // Merged code from File 2
  (function() {
    // Function to create a color box with a given color and class
    function createColorBox(color, className) {
      const colorBox = document.createElement("div");
      colorBox.className = "color-box " + className; // Add the class
      colorBox.style.backgroundColor = color.hex();
      return colorBox;
    }
  
    // Function to update the color boxes based on the color input
    function updateColorBoxes() {
      const colorValue = colorInput.value;
  
      // Use chroma.js to convert the color value to an HSL-based chroma color object
      const color = chroma(colorValue);
  
      // Get the HSL components of the color
      const [h, s, l] = color.hsl();
  
      // Create 5 variations of the color with different brightness levels (darker)
      const darkVariationsContainer = document.getElementById("darkVariationsContainer");
      darkVariationsContainer.innerHTML = "";
  
      for (let i = 1; i <= 5; i++) {
        const brightness = i * 0.1; // 0.1 increment for brightness (0.1 to 0.5)
  
        // To create darker colors, reduce the lightness (L) component
        const modifiedColorDarker = chroma.hsl(h, s, l * (1 - brightness));
        const colorBoxDarker = createColorBox(modifiedColorDarker, "dark-color"); // Assign class "dark-color"
        darkVariationsContainer.appendChild(colorBoxDarker);
      }
  
      // Create 5 variations of the color with different brightness levels (brighter)
      const brightVariationsContainer = document.getElementById("brightVariationsContainer");
      brightVariationsContainer.innerHTML = "";
  
      for (let i = 1; i <= 5; i++) {
        const brightness = i * 0.1; // 0.1 increment for brightness (0.1 to 0.5)
  
        // To create brighter colors, increase the lightness (L) component
        const modifiedColorBrighter = chroma.hsl(h, s, l + (1 - l) * brightness);
        const colorBoxBrighter = createColorBox(modifiedColorBrighter, "bright-color"); // Assign class "bright-color"
        brightVariationsContainer.appendChild(colorBoxBrighter);
      }
    }
  
    const colorInput = document.getElementById("colorInput");
  
    // Update the color boxes whenever the color input changes
    colorInput.addEventListener("input", updateColorBoxes);
  
    // Initial update of the color boxes
    updateColorBoxes();
  })();
  