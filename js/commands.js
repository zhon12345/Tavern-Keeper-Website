function openCity(evt, category) {
  var i, x, tablinks;
  x = document.getElementsByClassName("category");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" tab-active", "");
  }
  document.getElementById(category).style.display = "block";
  evt.currentTarget.className += " tab-active";
}