// forEach pollyfill
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function(callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

// initialization
var menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach(function(element) {
  if (!element.classList.contains("selected")) {
    document
      .querySelector(".faq-group" + element.getAttribute("href"))
      .classList.add("hidden");
  }
});

// event listeners
document.querySelector(".menu").addEventListener("click", function(e) {
  e.preventDefault();
  var target = e.target;
  var selectedItem = target.getAttribute("href");
  var id = selectedItem.substring(1);
  document.querySelectorAll(".faq-group").forEach(function(group) {
    if (group.id == id) {
      group.classList.remove("hidden");
    } else {
      group.classList.add("hidden");
    }
  });
  menuItems.forEach(function(element) {
    if (element.getAttribute("href") == selectedItem) {
      element.classList.add("selected");
    } else {
      element.classList.remove("selected");
    }
  });
});
