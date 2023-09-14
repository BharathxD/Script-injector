function createPopup() {
  const popupContainer = document.createElement("div");
  popupContainer.className = "script-container";
  const popup = document.createElement("div");
  popup.className = "script-popup";
  popup.style.display = "none";
  const popupTitle = document.createElement("h3");
  popupTitle.textContent = "Popup Content";
  const popupContent = document.createElement("p");
  popupContent.textContent = "This is the content of the popup.";
  popup.appendChild(popupTitle);
  popup.appendChild(popupContent);
  const floatingButton = document.createElement("div");
  floatingButton.className = "script-floating-btn";
  const logo = document.createElement("img");
  logo.src = "https://testecube2.s3.ap-south-1.amazonaws.com/images/logo.png";
  logo.className = "script-logo";
  logo.alt = "Logo";
  floatingButton.appendChild(logo);
  floatingButton.addEventListener("click", function () {
    if (popup.style.display === "none" || popup.style.display === "") {
      popup.style.display = "block";
    } else {
      popup.style.display = "none";
    }
  });
  document.body.appendChild(popupContainer);
  popupContainer.appendChild(popup);
  popupContainer.appendChild(floatingButton);
}
function addCSSLink() {
  const cssLink = document.createElement("link");
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";
  cssLink.href = "./styles.css";
  document.head.appendChild(cssLink);
}

document.addEventListener("DOMContentLoaded", createPopup);
document.addEventListener("DOMContentLoaded", addCSSLink);
