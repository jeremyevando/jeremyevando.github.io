self.addEventListener("install", function (event) {
    event.waitUntil(
      caches.open("first-app").then(function (cache) {
        cache.addAll(["/", "/index.html", "/styles.css", "/app.js", 
        "/blog.html", "/about.html", "/contact.html","/images/about-header.jpg", 
        "/images/contact-image.jpg", "/images/logo.png", "/manifest.json", "/images/example-blog01.jpg", "/images/example-blog02.jpg",
        "/images/example-blog03.jpg", "/images/example-blog04.jpg", "/images/example-blog05.jpg", "/images/example-blog06.jpg",
        "/images/example-blog07.jpg", "/images/example-blog08.jpg", "/images/example-blog09.jpg", "/images/footer-background.png",
        "/images/header-bg", "/images/photo-wide.jpg", "/images/photo.jpg", "/images/portfolio-example-01.jpg", "/images/portfolio-example-02.jpg"]);
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
  