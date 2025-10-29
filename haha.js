// ====== helper: update preview area with a given <img> ======
function upDate(previewPic) {
  console.log("upDate triggered for:", previewPic.alt);

  const display = document.getElementById("image");

  display.style.backgroundImage = "url('" + previewPic.src + "')";


  display.textContent = previewPic.alt;


  display.setAttribute("aria-label", previewPic.alt);


  const color = previewPic.getAttribute("data-color");
  if (color) {
    display.style.color = color;
  } else {
    display.style.color = "#fff";
  }
}


function undo() {
  console.log("undo triggered");

  const display = document.getElementById("image");

  display.style.backgroundImage = "none";
  display.textContent = "Continue hovering or focusing an image below to display it here.";
  display.setAttribute("aria-label", "No image selected");
  display.style.color = "#fff";
}


function addTabFocusAttributes() {
  console.log("addTabFocusAttributes triggered");


  const thumbs = document.querySelectorAll(".preview");


  for (let i = 0; i < thumbs.length; i++) {
    const img = thumbs[i];

    img.setAttribute("tabindex", "0");

    img.addEventListener("mouseover", function () {
      upDate(img);
    });

    img.addEventListener("mouseleave", function () {
      undo();
    });

    img.addEventListener("focus", function () {
      console.log("focus event fired for:", img.alt);
      upDate(img);
    });

    img.addEventListener("blur", function () {
      console.log("blur event fired for:", img.alt);
      undo();
    });

    
    img.addEventListener("keydown", function (event) {
      
      if (event.key === "Enter" || event.key === " ") {
        console.log("Keyboard select on:", img.alt);
        upDate(img);
      }
    });
  }
}

window.addEventListener("load", function () {
  console.log("window load event fired");
  addTabFocusAttributes();
});
