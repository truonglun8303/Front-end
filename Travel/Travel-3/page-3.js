var lastScroll = 0;
menu = document.getElementById("menu");
window.addEventListener("scroll", function () {
  var scrollTop =
    window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScroll) {
    menu.style.top = "-100px";
  } else {
    menu.style.top = "0";
  }
  lastScroll = scrollTop;
});
