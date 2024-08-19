import React from "react";

function CloseSideBar() {
  const closeNavBar = (event: any) => {
    event.preventDefault();
    const nav = document.getElementById("Navname");
    const overlay = document.getElementById("overlay");

    if (overlay && nav) {
      nav.style.animation = "collaps 0.2s forwards";
      overlay.style.animation = "hide 0.2s forwards";
      document.body.classList.remove("overlay-active");
      overlay.style.display = "none";
    }
  };

  return <div id="overlay" onClick={closeNavBar}></div>;
}

export default CloseSideBar;
