function upDate(previewPic) {
  document.getElementById('image').innerHTML = previewPic.alt;
  document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
  let imageDiv = document.getElementById('image');
  imageDiv.style.color = previewPic.dataset.color;
}
function undo() {
  let imageDiv = document.getElementById('image');
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Hover over an image below to display here.";
  imageDiv.style.color = "black";
}
