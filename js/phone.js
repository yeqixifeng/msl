
refresh();
window.onresize = function () {
  setTimeout(function () {
    refresh();
  }, 10)
};
function refresh() {
  let deviceWidth = document.documentElement.clientWidth;
  if (deviceWidth > 1200) {
    document.documentElement.style.fontSize = 1200 / 12 + "px";
  } else {
    document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";
  }
}
