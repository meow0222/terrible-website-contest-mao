"use strict";
const spot = document.querySelector(".spot");
const spotLight = (event) => {
  spot.setAttribute(
    "style",
    `background-image:
     radial-gradient(circle at ${event.clientX}px ${event.clientY}px, 
     transparent  0px, transparent 30px, rgba(0,0,0,1) 50px)`
  );
};

document.addEventListener("mousemove", spotLight);

