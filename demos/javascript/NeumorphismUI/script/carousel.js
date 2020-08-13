window.onload = function () {
  var container = document.getElementById("container")
  var banner = document.getElementById("banner")
  var li = document.querySelectorAll("#banner li")
  var spanNode = document.querySelectorAll("#buttons span")
  var img = document.getElementsByTagName("img")[0]

  var prev = document.getElementById("#prev")
  var next = document.getElementById("#next")

  //给 container 设置宽，高
  // container.style.width = img.offsetWidth + "px";
  // container.style.height = img.offsetHeight + "px";

  // 给banner 设置宽高
  console.log(img.offsetHeight);
  banner.style.height = img.offsetHeight + "px";
  banner.style.width = img.offsetWidth * li.length + "px";
  banner.style.left = "-600px";
}