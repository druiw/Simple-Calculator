document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".button");
  const displayPanel = document.querySelector(".display-panel");

  displayPanel.textContent = "";

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const buttonText = this.textContent;

      if (
        displayPanel.textContent === "Error" ||
        displayPanel.textContent === "Infinity"
      ) {
        displayPanel.textContent = "";
      }

      if (buttonText === "=") {
        // Handle divide by zero
        if (buttonText === "/" && displayPanel.textContent.endsWith("0")) {
          displayPanel.textContent = "Undefined";
        }
        try {
          displayPanel.textContent = eval(displayPanel.textContent);
        } catch (error) {
          displayPanel.textContent = "Error";
        }
      } else if (buttonText === "C") {
        displayPanel.textContent = "";
      } else {
        displayPanel.textContent += buttonText;
      }
    });
  });
});
