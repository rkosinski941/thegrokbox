(function () {
  var hero = document.querySelector("[data-sleeve]");
  if (!hero) return;
  var packets = document.querySelectorAll("article.packet");
  var best = null;
  var bestTime = "";
  Array.prototype.forEach.call(packets, function (packet) {
    var link = packet.querySelector('a.play[href*="suno.com/"]');
    if (!link) return;
    var time = packet.querySelector("time");
    var stamp = time ? (time.getAttribute("datetime") || "") : "";
    if (!best || stamp >= bestTime) {
      best = packet;
      bestTime = stamp;
    }
  });
  if (!best) return;
  var title = best.querySelector("h3");
  var hook = best.querySelector("blockquote.hook");
  var link = best.querySelector("a.play");
  var titleEl = hero.querySelector(".now-title");
  var hookEl = hero.querySelector(".now-hook");
  var play = hero.querySelector("a.play");
  if (title && titleEl) titleEl.textContent = title.textContent.trim();
  if (hook && hookEl) hookEl.innerHTML = hook.innerHTML;
  if (link && play) play.href = link.getAttribute("href");
  var art = hero.querySelector(".now-art img");
  var img = best.querySelector("img");
  if (art && img) {
    art.src = img.getAttribute("src");
    if (img.getAttribute("srcset")) art.setAttribute("srcset", img.getAttribute("srcset"));
    art.alt = img.getAttribute("alt") || art.alt;
  }
})();
