if (fetch) {
  var key = "cacheClean";
  if (!localStorage.getItem(key)) {
    fetch("http://commit-conf.com", {
      method: "POST",
      cache: "reload",
      mode: "no-cors"
    });
    fetch("https://commit-conf.com", {
      method: "POST",
      cache: "reload",
      mode: "no-cors"
    });
    localStorage.setItem(key, "true");
  }
}
