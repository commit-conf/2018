var heroCounter = 1;
var timer = null;
function replaceSpeaker() {
  const containers = document.getElementsByClassName('hero-img-container');
  [ containers[1], containers[2], containers[3] ].forEach(function(container, index) {
    if (container.children.length > 1) {
      container.removeChild(container.children[0]);
    }
    var newChild = document.createElement("div"); 
    newChild.className = "hero-img";
    var size = window.innerWidth < 400? "small" : "medium";
    newChild.style.backgroundImage = "url('/img/speakers/" + size + "/" + index + "/" + heroCounter + ".jpg')";
    container.appendChild(newChild);
  });
  heroCounter = (heroCounter + 1) % 6; 
  registerTimeout();
}
function registerTimeout() {
  timer = setTimeout(replaceSpeaker, 3000);
}

// pause animation while in background
document.addEventListener("visibilitychange", function() {
  if (document.visibilityState == 'visible') {
    console.log("Timer restarted");
    registerTimeout();
  } else {
    console.log("Timer paused");
    clearTimeout(timer)
    timer = null;
  }
}, false);
registerTimeout();