// You do not need to add/change anything in this JS section.

viewportSizeSpan = document.getElementById("viewport-size");
breakpointNameSpan = document.getElementById("breakpointName");
let bp = "";

// Get and display viewport size on first load of document.
viewportSizeSpan.textContent = window.innerWidth;

function updateViewportBreakpointDisplay() {
  // Display the breakpoint name
  viewportSizeSpan.textContent = window.innerWidth;
  switch(true) {
    case (window.innerWidth >= 1200): bp = "(XL)"; break;
    case (window.innerWidth >= 992): bp = "(LG)"; break;
    case (window.innerWidth >= 768): bp = "(MD)"; break;
    case (window.innerWidth >= 576): bp = "(SM)"; break;
    default: bp = "(Extra small)";
  }
  breakpointNameSpan.textContent = bp;
}

// Add event listener to run displaySize function whenever viewport is resized.
window.addEventListener("resize", updateViewportBreakpointDisplay);
