const title = document.querySelector(".title"), // Get the first instance of element with class "title"
 copyTextToClipboard = document.getElementById("copy-txt-component"), // Get the element with ID "template"
 settings = document.querySelector(".settings"), // Get the first instance of element with class "settings"
 code = document.querySelector("code"), // Get the <code> element
svg = document.querySelector("svg"),
 copyToClipboard = () => {
  // Copy the text from the code <code> element to the clipboard
  navigator.clipboard.writeText(code.innerText); 
  // Log the copied text to the console
  console.log("Copied the text: " + code.innerText);
},

 setCopyFeedback = () => {
  // Set the copied feedback
  title.innerText = "Copied ✦";
  settings.style.backgroundColor = "rgba(102, 200, 0, 0.19)";
  title.style.cssText = "font-weight: 900; color: greenyellow;";
  code.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
  svg.style.fill = "greenyellow"; 
},

 resetCopyFeedback = () => {
  // Reset the copied feedback
  title.innerText = "Copy Text";
  settings.style.backgroundColor = "rgba(100, 0, 200, 0.1)";
  title.style.cssText = "font-weight: normal; color: darkgreen;";
  code.style.backgroundColor = "rgba(0, 0, 0, 0)";
  svg.style.fill = "rgba(0,0,0,0.5)";
};

copyTextToClipboard.addEventListener("mousedown", () => {
  // Trigger the copy operation and set the copy feedback
  copyToClipboard();
  setCopyFeedback();
});

copyTextToClipboard.addEventListener("mouseup", () => {
  // Reset the copy feedback after a delay
  setTimeout(resetCopyFeedback, 1000);
});
