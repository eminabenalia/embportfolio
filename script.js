// JavaScript, um zu den entsprechenden Abschnitten zu scrollen, wenn auf die Kreise geklickt wird
document.getElementById("circle1").addEventListener("click", function() {
  document.getElementById("section2").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("circle2").addEventListener("click", function() {
  document.getElementById("section3").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("circle3").addEventListener("click", function() {
  document.getElementById("section4").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("circle4").addEventListener("click", function() {
  document.getElementById("section5").scrollIntoView({ behavior: "smooth" });
});