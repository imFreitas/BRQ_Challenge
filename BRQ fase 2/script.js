var close = document.getElementById('close');
var popup = document.getElementById('popup');

close.addEventListener("click", function () {
  popup.style.display = 'none';
});

function openPopup() {
  // Create a new div element for the popup
  var popup = document.createElement("div");
  popup.className = "popup";

  // Add a description with Lorem Ipsum text to the popup
  popup.innerHTML = "<h2>Por que pedimos foto da sua CNH?</h2><br><p>Pedimos a CNH pois é essencial para assegurar que nossos clientes tenham a habilitação necessária para conduzir nossos veículos de forma segura e de acordo com a lei.</p>";

  // Append the popup to the body of the document
  document.body.appendChild(popup);

  // Create a background element for the blur effect
  var background = document.createElement("div");
  background.className = "popup-background";

  // Append the background to the body of the document
  document.body.appendChild(background);

  // Add a close button to the popup
  var closeButton = document.createElement("button");
  closeButton.textContent = "Fechar";

  // Set CSS styles for the closeButton element



  closeButton.addEventListener("click", function () {
    // Remove the popup and background when the close button is clicked
    document.body.removeChild(popup);
    document.body.removeChild(background);
  });

  // Append the close button to the popup
  popup.appendChild(closeButton);
}

