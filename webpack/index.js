import "./styles.css";
import logo from "./logo.png"; // Import the logo image

// Create an image element
const img = document.createElement("img");
img.src = logo;
img.alt = "Logo";
img.className = "logo"; // Add a class for styling

// Create a heading
const heading = document.createElement("h1");
heading.innerText = "Welcome to My Webpack App";

// Create a button
const button = document.createElement("button");
button.innerText = "Click Me";

// Append elements to the body
document.body.appendChild(img);
document.body.appendChild(heading);
document.body.appendChild(button);

console.log("CSS & Logo Imported Successfully!");
