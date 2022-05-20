
// JS pour permettre au cercle de suivre la souris
var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function(e) {
  cursor.style.left = e.clientX + "px",
    cursor.style.top = e.clientY + "px";
    cursor.style.bottom = e.clientY - "px";
    cursor.style.right = e.clientX - "px";
});
//ajout fonctionnalités hover pour le cercle souris
const $hoverables = document.querySelectorAll('.hoverable');
for (var i = 0; i < $hoverables.length; i++) {
    $hoverables[i].addEventListener('mouseenter', onMouseHover);
    $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
  }

function onMouseHover() {
    cursor.style.height = "60px";
    cursor.style.width = "60px";
  }
  function onMouseHoverOut() {
    cursor.style.height = "30px";
    cursor.style.width = "30px";
  }

    
