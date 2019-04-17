if (fetch) {
  var key = "cacheClean";
  if (!localStorage.getItem(key)) {
    fetch("http://commit-conf.com", {
      headers: {
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
      },
      cache: "reload",
      mode: "no-cors"
    });
    fetch("https://commit-conf.com", {
      headers: {
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
      },
      cache: "reload",
      mode: "no-cors"
    });
    localStorage.setItem(key, "true");
  }
}
