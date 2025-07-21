document.addEventListener("DOMContentLoaded", () => {
  // grab the two views
  const calcScreen = document.querySelector(".calc-screen");
  const colorScreen = document.querySelector(".color-display");

  // “Color” and “Clear” keys
  const colorKey = document.getElementById("Color");
  const clearKey = document.getElementById("Clear");

  // the little read‑out inside .calc-screen
  const displayReadout = document.querySelector(".screen-content");

  // 1) Clear just the read‑out
  clearKey.addEventListener("click", () => {
    displayReadout.textContent = "";
  });

  // 2) Show the color picker
  colorKey.addEventListener("click", () => {
    calcScreen.classList.remove("is-active");
    colorScreen.classList.add("is-active");
  });

  // 3) When a color is picked: tint + match button text + go back
  colorScreen.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      // read the circle’s color
      const accent = getComputedStyle(btn).backgroundColor;
      const base = document.querySelector(".calculator-base");

      // set BOTH background and button-text to that same accent
      base.style.setProperty("--bg", accent);
      base.style.setProperty("--btn-text", accent);

      // swap screens back
      colorScreen.classList.remove("is-active");
      calcScreen.classList.add("is-active");
    });
  });

  // 4) Hook up the number/operator buttons
  document.querySelectorAll(".button-panel .button").forEach((button) => {
    button.addEventListener("click", () => {
      const t = button.textContent;
      if (t === "=") {
        try {
          displayReadout.textContent = eval(displayReadout.textContent);
        } catch {
          displayReadout.textContent = "Error";
        }
      } else {
        displayReadout.textContent += t;
      }
    });
  });
});
