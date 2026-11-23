/* Bilingual strings, invitation reveal, music controls, countdown, gallery and scroll reveal. */
const translations = {
  en: {
    invocation: "॥ श्री गणेशाय नमः ॥",
    splashSubtitle: "Chandel Family Cordially Invites You",
    splashButton: "Open Invitation",
    heroKicker: "A New Beginning • Sacred Blessings",
    heroTitle: "Griha Pravesh & Akhand Ramayan",
    heroMessage: "With the blessings of the Almighty and our elders, the Chandel Family joyfully invites you and your family to grace the auspicious occasion of our new home.",
    dates: "10 & 11 March 2027 • Wednesday & Thursday",
    homeCaption: "Our new home, with gratitude and love",
    blessingsHeading: "With the Blessings of",
    blessingsNames: "Shri Hriday Narayan Singh & Smt. Usha Devi",
    hostsHeading: "Cordially Invited By",
    hostsNames: "Shri Ajeet Kumar Singh & Smt. Nirmala Singh",
    sonsHeading: "Awaiting Your Warm Presence",
    sonsNames: "Ayush Kumar Singh & Shivansh Singh",
    ramaCaption: "॥ Jai Shri Ram ॥",
    scheduleHeading: "Auspicious Celebrations",
    day1Date: "Wednesday, 10 March 2027",
    day1Events: "Auspicious Griha Pravesh Puja | Shri Akhand Ramayan Path Aarambh",
    day2Date: "Thursday, 11 March 2027",
    day2Events: "Ramayan Path Samapan & Havan | Grand Priti Bhoj (Feast)",
    birthdayBadge: "A Double Celebration!",
    birthdayName: "Shivansh Singh",
    birthdayText: "11 March is also Shivansh Singh's Birthday. Join us to bless our new home and celebrate Shivansh's special day with joy and togetherness.",
    galleryHeading: "Glimpses & Moments",
    venueHeading: "Venue",
    venueTitle: "Chandel Residence",
    venueAddress: "Kha-103, 593/KN/103-A, Village Shakurpur, Lucknow, Uttar Pradesh – 226002",
    callButton: "Call +91 9235228454",
    countdownHeading: "Until the auspicious day",
    daysLabel: "Days", hoursLabel: "Hours", minutesLabel: "Minutes", secondsLabel: "Seconds",
    footerQuote: "Your gracious presence and blessings are our greatest gift.",
    footerSignoff: "Warm Regards, Chandel Family"
  },
  hi: {
    invocation: "॥ श्री गणेशाय नमः ॥",
    splashSubtitle: "चंदेल परिवार की ओर से हार्दिक आमंत्रण",
    splashButton: "निमंत्रण खोलें",
    heroKicker: "नव आरंभ • पावन आशीर्वाद",
    heroTitle: "गृह प्रवेश एवं अखंड रामायण पाठ",
    heroMessage: "ईश्वर एवं बड़ों के आशीर्वाद से, चंदेल परिवार आपको सपरिवार हमारे नए घर के पावन गृह प्रवेश एवं अखंड रामायण पाठ के शुभ अवसर पर सादर आमंत्रित करता है।",
    dates: "10 एवं 11 मार्च 2027 • बुधवार एवं गुरुवार",
    homeCaption: "कृतज्ञता और प्रेम से सजा हमारा नया घर",
    blessingsHeading: "शुभाशीर्वाद",
    blessingsNames: "श्री हृदय नारायण सिंह एवं श्रीमती उषा देवी",
    hostsHeading: "विनीत / निमंत्रक",
    hostsNames: "श्री अजीत कुमार सिंह एवं श्रीमती निर्मला सिंह",
    sonsHeading: "स्वागताकांक्षी",
    sonsNames: "आयुष कुमार सिंह एवं शिवांश सिंह",
    ramaCaption: "॥ श्री राम जय राम जय जय राम ॥",
    scheduleHeading: "मांगलिक कार्यक्रम",
    day1Date: "बुधवार, 10 मार्च 2027",
    day1Events: "शुभ गृह प्रवेश पूजन | श्री अखंड रामायण पाठ आरंभ",
    day2Date: "गुरुवार, 11 मार्च 2027",
    day2Events: "रामायण पाठ समापन एवं हवन | भव्य प्रीति भोज",
    birthdayBadge: "दोहरी खुशियों का संगम!",
    birthdayName: "शिवांश सिंह",
    birthdayText: "11 मार्च को हमारे लाड़ले शिवांश सिंह का जन्मदिन भी है। नए घर के शुभारंभ के साथ शिवांश के जन्मदिन के उत्सव में पधारकर हमें अनुगृहीत करें।",
    galleryHeading: "शुभ झलकियाँ",
    venueHeading: "कार्यक्रम स्थल",
    venueTitle: "चंदेल निवास",
    venueAddress: "ख-103, 593/केएन/103-ए, ग्राम-शकुरपुर, लखनऊ, उत्तर प्रदेश – 226002",
    callButton: "संपर्क करें: +91 9235228454",
    countdownHeading: "शुभ दिन तक शेष समय",
    daysLabel: "दिन", hoursLabel: "घंटे", minutesLabel: "मिनट", secondsLabel: "सेकंड",
    footerQuote: "आपका स्नेहमयी आगमन एवं आशीर्वाद ही हमारा सबसे बड़ा उपहार है।",
    footerSignoff: "सादर, चंदेल परिवार"
  }
};

const splash = document.getElementById("splash");
const invitation = document.getElementById("invitation");
const openButton = document.getElementById("openInvitation");
const audio = document.getElementById("flute");
const musicToggle = document.getElementById("musicToggle");
let currentLang = "en";
let audioUnlocked = false;

// Translation applies to every element tagged with data-i18n, including headings and address.
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[lang][key] !== undefined) node.textContent = translations[lang][key];
  });
  document.querySelectorAll(".lang-button").forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}
document.querySelectorAll(".lang-button").forEach(button => button.addEventListener("click", () => setLanguage(button.dataset.lang)));

function fadeInAudio() {
  audio.volume = 0;
  audioUnlocked = true;
  const playPromise = audio.play();
  if (playPromise && typeof playPromise.then === "function") {
    playPromise.then(() => {
      musicToggle.classList.add("playing");
      musicToggle.setAttribute("aria-label", "Mute devotional flute");
      let volume = 0;
      const fade = setInterval(() => {
        if (audio.paused) { clearInterval(fade); return; }
        volume = Math.min(0.22, volume + 0.015);
        audio.volume = volume;
        if (volume >= 0.22) clearInterval(fade);
      }, 120);
    }).catch(() => {
      // If playback is blocked or the file is absent, the invitation remains usable.
      musicToggle.classList.remove("playing");
    });
  }
}
openButton.addEventListener("click", () => {
  invitation.classList.add("visible");
  invitation.setAttribute("aria-hidden", "false");
  splash.classList.add("is-open");
  document.body.classList.remove("locked");
  fadeInAudio();
  setTimeout(() => splash.remove(), 900);
  window.scrollTo({ top: 0, behavior: "smooth" });
});
musicToggle.addEventListener("click", async () => {
  if (!audioUnlocked) {
    try { await audio.play(); audio.volume = 0.22; audioUnlocked = true; } catch (_) {}
  } else if (audio.paused) {
    try { await audio.play(); } catch (_) {}
  } else {
    audio.pause();
  }
  const playing = !audio.paused;
  musicToggle.classList.toggle("playing", playing);
  musicToggle.setAttribute("aria-label", playing ? "Mute devotional flute" : "Play devotional flute");
});
audio.addEventListener("pause", () => musicToggle.classList.remove("playing"));
audio.addEventListener("play", () => musicToggle.classList.add("playing"));

// Countdown to midnight at the beginning of 10 March 2027 in Indian Standard Time (UTC+05:30).
const target = new Date("2027-03-10T00:00:00+05:30").getTime();
function updateCountdown() {
  const remaining = Math.max(0, target - Date.now());
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  document.getElementById("days").textContent = String(days).padStart(3, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Reveal sections as they enter view. Falls back to visible if IntersectionObserver is unavailable.
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => revealObserver.observe(item));
} else {
  revealItems.forEach(item => item.classList.add("in-view"));
}

// Decorative floating petals; disabled by reduced-motion preference.
const petalField = document.querySelector(".petal-field");
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && petalField) {
  const symbols = ["✦", "❋", "•", "✧"];
  for (let i = 0; i < 13; i++) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.textContent = symbols[i % symbols.length];
    petal.style.left = `${(i * 7.7) % 100}%`;
    petal.style.animationDuration = `${7 + (i % 5)}s`;
    petal.style.animationDelay = `${(i * 0.6) % 7}s`;
    petalField.appendChild(petal);
  }
}

// Hide gallery when every image fails. Successful slots are enabled and click-to-zoom.
const gallery = document.getElementById("gallery");
const galleryItems = [...document.querySelectorAll(".gallery-item")];
galleryItems.forEach(item => {
  const image = item.querySelector("img");
  image.addEventListener("load", () => {
    item.hidden = false;
    gallery.hidden = false;
  });
  image.addEventListener("error", () => {
    item.hidden = true;
    if (galleryItems.every(slot => slot.hidden)) gallery.hidden = true;
  });
  // Cached successful images may have fired before the listeners were added.
  if (image.complete && image.naturalWidth > 0) {
    item.hidden = false;
    gallery.hidden = false;
  }
});
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
galleryItems.forEach(item => item.addEventListener("click", () => {
  const img = item.querySelector("img");
  if (!img || !img.naturalWidth) return;
  lightboxImage.src = img.src;
  lightboxImage.alt = img.alt;
  lightbox.showModal();
}));
document.getElementById("lightboxClose").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", event => { if (event.target === lightbox) lightbox.close(); });

// Initial state: English copy, splash visible, invitation hidden.
setLanguage("en");
document.body.classList.add("locked");
