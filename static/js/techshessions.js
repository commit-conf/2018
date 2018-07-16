// forEach pollyfill
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function(callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

window.addEventListener("load", function() {
  var lazyAvatars = document.querySelectorAll(".lazy-avatar");
  lazyAvatars.forEach(function(element) {
    var avatar = element.getAttribute("data-avatar");
    if (avatar !== "/img/techshessions/") {
      var downloadingImage = new Image();
      downloadingImage.onload = function() {
        element.src = this.src;
      };
      downloadingImage.src = avatar;
    }
  });
});
