
document.addEventListener("DOMContentLoaded", function () {
  var map = L.map("map").setView([51.2194, 4.4025], 13); // Antwerpen
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap-bijdragers"
  }).addTo(map);
  L.marker([51.2194, 4.4025]).addTo(map)
    .bindPopup("Hier ben ik ongeveer!")
    .openPopup();
});
