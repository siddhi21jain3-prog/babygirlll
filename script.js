const app = document.getElementById("app");
const music = document.getElementById("bgMusic");

let slide = 0;

const photos = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
  "photo4.jpg",
  "photo5.jpg",
  "photo6.jpg",
  "photo7.jpg"
];

const messages = [
  "My favorite person 🥺💖",
  "Every memory with you = home 🫂",
  "Forever my Bubu 🐻💗",
  "Us against the world 🌍❤️",
  "My comfort, my chaos 😚",
  "Mera suarr bbg🥰🩷",
  "Always. No matter what 💞"
];

/* Floating hearts */
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 2) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 400);

/* Start Screen */
function startScreen() {
  app.innerHTML = `
    <div class="screen">
      <h1>Happy New Year Kuttee 😘</h1>
      <p>I lobeeee youuu moree💗</p>
      <div>
        <button onclick="startLove()">YES 💖</button>
        <button id="noBtn" onmouseover="moveNo()">NO 😜</button>
      </div>
    </div>
  `;
}

function moveNo() {
  const btn = document.getElementById("noBtn");
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 80 + "vw";
  btn.style.top = Math.random() * 80 + "vh";
}

/* YES Click */
function startLove() {
  music.play();
  showCoupon();
}

/* Coupon */
function showCoupon() {
  app.innerHTML = `
    <div class="screen">
      <div class="coupon">
        <h2>🎟️ LOVE COUPON 🎟️</h2>
        <p class="coupon-title">Unlimited Hugs 🤗 & Kisses 💋</p>
        <p>Valid forever. No expiry 💞</p>
        <p><b>Issued for: Bubu 🐻</b></p>
      </div>
      <button onclick="showSlide()">Redeem ➜</button>
    </div>
  `;
}

/* Slideshow */
function showSlide() {
  app.innerHTML = `
    <div class="screen">
      <img src="${photos[slide]}" class="slide-img">
      <p class="caption">${messages[slide]}</p>
      <button onclick="nextSlide()">Next 💕</button>
    </div>
  `;
}

function nextSlide() {
  slide++;
  if (slide < photos.length) {
    showSlide();
  } else {
    showVideo();
  }
}

/* Video */
function showVideo() {
  music.volume = 0.3;
  app.innerHTML = `
    <div class="screen">
      <h2>One more thing 🎥💗</h2>
      <video controls autoplay playsinline style="width:260px;border-radius:20px;">
        <source src="endvideo.mp4" type="video/mp4">
      </video>
      <button onclick="finalScreen()">Continue 💋</button>
    </div>
  `;
}

/* Final Kiss */
function finalScreen() {
  music.volume = 1;
  app.innerHTML = `
    <div class="screen">
      <h1>MWAHHH 😘</h1>
      <p>*sending you a big kiss*</p>
      <button onclick="sendKiss()">Send Kiss 💖</button>
    </div>
  `;
}

/* Confetti */
function sendKiss() {
  for (let i = 0; i < 40; i++) {
    const conf = document.createElement("div");
    conf.className = "confetti";
    conf.style.left = Math.random() * 100 + "vw";
    conf.style.background = "#ff4d6d";
    document.body.appendChild(conf);
    setTimeout(() => conf.remove(), 3000);
  }
  alert("MWAHHH 💋💋💋");
}

/* INIT */
startScreen();

