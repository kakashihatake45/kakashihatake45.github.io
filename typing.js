const text = "Debanjan Sinha Mahapatra";
let i = 0;

function typeText() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 80);
  }
}

typeText();
