/* 💖 PLAY MUSIC ON EVERY PAGE */
document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");

  if (sessionStorage.getItem("musicPlaying") === "true") {
    if (music) {
      music.volume = 1;
      music.play().catch(() => {});
    }
  }
});


/* 💖 RESTORE UNLOCK SESSION */
document.addEventListener("DOMContentLoaded", () => {
  const lock = document.getElementById("lockScreen");
  const main = document.getElementById("mainContent");

  if (sessionStorage.getItem("unlocked") === "true") {
    if (lock) lock.style.display = "none";
    if (main) main.style.display = "block";

    const music = document.getElementById("bgMusic");
    if (music) {
      music.play().catch(() => {});
    }
  }
});


/* 💖 PASSWORD */
function unlock() {
  const passInput = document.getElementById("password");
  const lock = document.getElementById("lockScreen");
  const main = document.getElementById("mainContent");

  if (!passInput) return;

  if (passInput.value === "23032025") {

    sessionStorage.setItem("unlocked", "true");
    sessionStorage.setItem("musicPlaying", "true");

    if (lock) lock.style.display = "none";
    if (main) main.style.display = "block";

    const music = document.getElementById("bgMusic");
    if (music) {
      music.play().catch(() => {});
    }

  } else {
    alert("Wrong password 😝");
  }
}


/* 💖 FLOATING HEARTS */
setInterval(() => {
  const heart = document.createElement("div");
  heart.innerHTML = "❤";

  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-20px";
  heart.style.color = "#d3615e";
  heart.style.fontSize = "22px";
  heart.style.pointerEvents = "none";
  heart.style.animation = "floatUp 4s linear";

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}, 650);


/* 💖 ORIGINAL POETIC CAPTIONS */
const captions = [
"Our hands found each other before our hearts even knew.",
"In every reflection, it is still you and me.",
"Among the trees and skies, I only saw you.",
"The world paused when our eyes spoke.",
"With you, even my goofiest self feels loved and free.",
"Your smile is my favorite place to live.",
"In your arms, I found my forever.",
"Sacred lights, soft smiles, and a little bit of forever.",
"Salt in the air, peace in our hearts, you in my arms.",
"In every life, I would still choose you.",
"In the silence of your eyes, I fall again and again.",
"Even shadows look beautiful when we walk together.",
"Every mile with you becomes a memory.",
"You look at me like I am your entire world.",
"Careful… I might fall harder.",
"Your love is the softest place my heart has known.",
"This is only the beginning."
];


/* 💖 PROPOSAL */
document.addEventListener("click", e => {
  if (e.target.classList.contains("yes")) {
    const result = document.getElementById("result");
    if (result) result.innerText = "Forever, in every lifetime 💍";
  }
});

function moveButton() {
  const btn = document.querySelector(".no");
  const card = document.querySelector(".proposal-card");

  if (!btn || !card) return;

  const cardRect = card.getBoundingClientRect();

  const maxX = cardRect.width - btn.offsetWidth;
  const maxY = cardRect.height - btn.offsetHeight;

  btn.style.position = "absolute";
  btn.style.left = Math.random() * maxX + "px";
  btn.style.top = Math.random() * maxY + "px";
}


/* 💖 LETTER */
const fullText = `
Happy Valentine’s Day 

Loving you feels calm,
like everything finally makes sense.
You’re my comfort,
my peace,
and my favorite part of every day.

Here’s to more laughter,
more late-night talks,
and a forever that feels just like us.

Simple. Real. Always.

`;

function openEnvelope() {
  document.getElementById("envelope")?.classList.add("open");
  document.getElementById("fullLetter")?.classList.add("show");
  document.getElementById("blurLayer")?.classList.add("show");

  startTyping();
  
}

function startTyping() {
  let i = 0;
  const el = document.getElementById("typingText");
  if (!el) return;

  el.innerHTML = "";

  function type() {
    if (i < fullText.length) {
      el.innerHTML += fullText.charAt(i);
      i++;
      setTimeout(type, 30);
    }
  }

  type();
}

function closeLetter() {
  document.getElementById("fullLetter")?.classList.remove("show");
  document.getElementById("blurLayer")?.classList.remove("show");
}


/* 💖 MEMORIES CAROUSEL */
let current = 0;

function changeSlide(step) {
  current += step;

  if (current < 0) current = captions.length - 1;
  if (current >= captions.length) current = 0;

  const img = document.getElementById("carouselImg");
  const caption = document.getElementById("carouselCaption");

  if (img) img.src = `assets/images/${current + 1}.jpg`;
  if (caption) caption.innerText = captions[current];
}


/* 💖 LOAD FIRST MEMORY */
document.addEventListener("DOMContentLoaded", () => {
  const caption = document.getElementById("carouselCaption");
  if (caption) caption.innerText = captions[0];
});

function showPage(id) {
  document.querySelectorAll(".page").forEach(p => {
    p.style.display = "none";
  });

  document.getElementById(id).style.display = "block";
}
