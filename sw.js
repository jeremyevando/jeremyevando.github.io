self.addEventListener("install", function (event) {
    event.waitUntil(
      caches.open("first-app").then(function (cache) {
        cache.addAll(["/", "/index.html", "/styles.css", "/app.js", 
        "/blog.html", "/about.html", "/contact.html","/images/about-header.jpg", 
        "/images/contact-image.jpg", "/images/logo.png", "/manifest.json", "/images/photo.jpg", "/images/photo-wide.jpg", "images/header-bg.jpg",
      "/images/example-blog01.jpg", "/images/example-blog02.jpg", "/images/example-blog03.jpg", "/images/example-blog04.jpg",
      "/images/example-blog05.jpg", "/images/example-blog06.jpg", "/images/example-blog07.jpg", "/images/example-work01.jpg", "/images/example-work02.jpg",
      "/images/example-work03.jpg", "/images/example-work04.jpg", "/images/example-work05.jpg", "/images/example-work06.jpg", 
      "/images/example-work07.jpg", "/images/example-work08.jpg", "/images/example-work09.jpg", "/images/footer-background.png", 
      "/images/portfolio-example-01.jpg", "/images/portfolio-example-02.jpg", "/images/portfolio-example-03.jpg",
      "/images/portfolio-example-04.jpg", "/images/portfolio-example-05.jpg", "/images/portfolio-example-06.jpg",
      "/icon-192x192.png", "/icon-256x256.png", "/icon-384x384.png", "/icon-512x512.png", "portfolio-example01.html", "https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en",
      "https://code.getmdl.io/1.3.0/material.grey-pink.min.css", "https://fonts.googleapis.com/icon?family=Material+Icons"]);
      })
    );
    return self.clients.claim();
  });
  
  self.addEventListener("fetch", function (event) {
    event.respondWith(
      caches.match(event.request).then(function (res) {
        return res;
      })
    );
  });
  