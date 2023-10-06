function navBar() {
  var x = document.getElementById("nav-ul");
  if (x.style.left === "0px") {
    x.style.left = "-100%";
  } else {
    x.style.left = "0px";
  }
}
