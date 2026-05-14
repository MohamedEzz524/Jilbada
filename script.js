// ============ CONFIG ============
// TODO: Replace with the brand's real WhatsApp business number (international format, no '+').
const JILBADA_WHATSAPP = "201000000000";

const PROMO_CODES = {
  ANDALUS2026: { type: "percent", value: 10, label: "Andalusian Welcome" },
  BISMILLAH: { type: "percent", value: 15, label: "Bismillah Blessing" },
  WELCOME: { type: "percent", value: 5, label: "Welcome Letter" },
  NEEM2026: { type: "fixed", value: 500, label: "Quiet Garden" },
};

// ============ LOADER ============
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
    setTimeout(() => {
      if (!sessionStorage.getItem("jilbada_dua_shown")) {
        document.getElementById("duaOverlay").classList.add("show");
        document.body.classList.add("dua-open");
        sessionStorage.setItem("jilbada_dua_shown", "true");
      }
    }, 600);
  }, 1500);
});

function closeDua() {
  document.getElementById("duaOverlay").classList.remove("show");
  document.body.classList.remove("dua-open");
}

// ============ LANGUAGE TOGGLE ============
const body = document.body;
document.getElementById("langEn").addEventListener("click", () => {
  body.classList.remove("rtl");
  body.setAttribute("dir", "ltr");
  document.documentElement.setAttribute("lang", "en");
  document.documentElement.setAttribute("dir", "ltr");
  document.getElementById("langEn").classList.add("active");
  document.getElementById("langAr").classList.remove("active");
  // re-render cart contents in the new language if open
  if (document.getElementById("cartDrawer").classList.contains("show"))
    renderCart();
});
document.getElementById("langAr").addEventListener("click", () => {
  body.classList.add("rtl");
  body.setAttribute("dir", "rtl");
  document.documentElement.setAttribute("lang", "ar");
  document.documentElement.setAttribute("dir", "rtl");
  document.getElementById("langAr").classList.add("active");
  document.getElementById("langEn").classList.remove("active");
  if (document.getElementById("cartDrawer").classList.contains("show"))
    renderCart();
});

// ============ JOURNEY CONNECTING LINE ============
function drawJourneyLine() {
  const timeline = document.querySelector(".journey-timeline");
  if (!timeline) return;
  const markers = timeline.querySelectorAll(".journey-marker");
  if (markers.length < 2) return;
  const tlRect = timeline.getBoundingClientRect();
  const firstRect = markers[0].getBoundingClientRect();
  const lastRect = markers[markers.length - 1].getBoundingClientRect();
  const top = firstRect.top + firstRect.height / 2 - tlRect.top;
  const height = (lastRect.top + lastRect.height / 2 - tlRect.top) - top;
  let line = timeline.querySelector(".journey-connecting-line");
  if (!line) {
    line = document.createElement("div");
    line.className = "journey-connecting-line";
    timeline.appendChild(line);
  }
  line.style.top = top + "px";
  line.style.height = Math.max(0, height) + "px";
  const isMobile = window.innerWidth <= 700;
  const leftEdge = isMobile
    ? markers[0].getBoundingClientRect().left -
      tlRect.left +
      markers[0].offsetWidth / 2
    : null;
  if (isMobile && leftEdge !== null) {
    line.style.left = leftEdge + "px";
    line.style.transform = "translateX(-50%)";
  } else {
    line.style.left = "";
    line.style.transform = "";
  }
}
window.addEventListener("resize", drawJourneyLine);

// ============ PAGE ROUTING ============
function routeTo(target) {
  const page = document.getElementById("page-" + target);
  if (!page) return;
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  page.classList.add("active");
  document
    .querySelectorAll(".nav-link[data-page]")
    .forEach((n) => n.classList.remove("active"));
  document
    .querySelectorAll(`.nav-link[data-page="${target}"]`)
    .forEach((n) => n.classList.add("active"));
  window.scrollTo({ top: 0, behavior: "instant" });
  setTimeout(observeReveals, 100);
  if (target === "about") setTimeout(drawJourneyLine, 1400);
}
document.querySelectorAll("[data-page]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    routeTo(el.dataset.page);
  });
});

// ============ HEADER SCROLL ============
window.addEventListener("scroll", () => {
  const nav = document.getElementById("mainNav");
  if (window.scrollY > 60) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
});

// ============ HERO SLIDER ============
const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".hero-pagination button");
let currentSlide = 0;
function goToSlide(i) {
  slides.forEach((s) => s.classList.remove("active"));
  dots.forEach((d) => d.classList.remove("active"));
  slides[i].classList.add("active");
  dots[i].classList.add("active");
  currentSlide = i;
}
dots.forEach((dot, i) => dot.addEventListener("click", () => goToSlide(i)));
setInterval(() => goToSlide((currentSlide + 1) % slides.length), 7500);

// ============ SIZE RECOMMENDER ============
function openRecommender() {
  document.getElementById("recommenderModal").classList.add("show");
}
function closeRecommender() {
  document.getElementById("recommenderModal").classList.remove("show");
}
function calculateSize() {
  const h = +document.getElementById("height").value;
  const w = +document.getElementById("weight").value;
  if (!h || !w) return;
  const bmi = w / Math.pow(h / 100, 2);
  let size = "M",
    equiv = "XL";
  if (bmi < 19) {
    size = "XS";
    equiv = "M";
  } else if (bmi < 22) {
    size = "S";
    equiv = "L";
  } else if (bmi < 26) {
    size = "M";
    equiv = "XL";
  } else if (bmi < 30) {
    size = "L";
    equiv = "XXL";
  } else if (bmi < 34) {
    size = "XL";
    equiv = "3XL";
  } else {
    size = "XXL";
    equiv = "4XL";
  }
  document.getElementById("recommendedSize").textContent = size;
  document
    .querySelectorAll("#recommendResult strong")
    .forEach((s) => (s.textContent = equiv));
  document.getElementById("recommendResult").classList.add("show");
}

// ============ INTERACTIVE BUTTONS ============
document.querySelectorAll(".size-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".size-btn")
      .forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
  });
});
document.querySelectorAll(".color-option").forEach((c) => {
  c.addEventListener("click", () => {
    document
      .querySelectorAll(".color-option")
      .forEach((x) => x.classList.remove("selected"));
    c.classList.add("selected");
  });
});
document.querySelectorAll(".filter-group button").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement
      .querySelectorAll("button")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
document.querySelectorAll(".qty-selector button").forEach((b, i) => {
  b.addEventListener("click", () => {
    const input = b.parentElement.querySelector("input");
    let v = +input.value;
    if (i % 2 === 0) v = Math.max(1, v - 1);
    else v++;
    input.value = v;
  });
});

// ============ MOBILE MENU ============
function toggleMobile() {
  document.getElementById("mobileOverlay").classList.toggle("show");
}

// ============ SCROLL REVEAL ============
function observeReveals() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.12, rootMargin: "-30px 0px -30px 0px" },
  );
  document
    .querySelectorAll(".reveal:not(.in-view)")
    .forEach((el) => observer.observe(el));
}
observeReveals();

// ============ CART ============
const CART_KEY = "jilbada_cart_v1";
const PROMO_KEY = "jilbada_promo_v1";
let cart = loadCart();
let activePromo = loadPromo();

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}
function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}
function loadPromo() {
  try {
    return JSON.parse(localStorage.getItem(PROMO_KEY)) || null;
  } catch (e) {
    return null;
  }
}
function savePromo() {
  if (activePromo) localStorage.setItem(PROMO_KEY, JSON.stringify(activePromo));
  else localStorage.removeItem(PROMO_KEY);
}

function openCart() {
  document.getElementById("cartDrawer").classList.add("show");
  document.getElementById("cartDrawer").setAttribute("aria-hidden", "false");
  document.getElementById("cartOverlay").classList.add("show");
  document.body.style.overflow = "hidden";
  renderCart();
}
function closeCart() {
  document.getElementById("cartDrawer").classList.remove("show");
  document.getElementById("cartDrawer").setAttribute("aria-hidden", "true");
  document.getElementById("cartOverlay").classList.remove("show");
  document.body.style.overflow = "";
}

function addCurrentProductToCart() {
  const btn = document.querySelector(".add-to-cart");
  if (!btn) return;
  const qtyInput = document.getElementById("pdpQty");
  const qty = qtyInput ? Math.max(1, +qtyInput.value || 1) : 1;
  const selectedSize = document.querySelector(".size-btn.selected");
  const selectedColor = document.querySelector(".color-option.selected");
  const colorBg = selectedColor
    ? selectedColor.style.background ||
      selectedColor.style.backgroundColor ||
      "#184835"
    : "#184835";
  const sizeLabel = selectedSize ? selectedSize.textContent.trim() : "M";
  const item = {
    id:
      btn.dataset.productId +
      "_" +
      sizeLabel +
      "_" +
      colorBg.replace(/[^a-z0-9]/gi, ""),
    productId: btn.dataset.productId,
    nameEn: btn.dataset.productNameEn,
    nameAr: btn.dataset.productNameAr,
    price: +btn.dataset.productPrice,
    image: btn.dataset.productImage,
    size: sizeLabel,
    color: colorBg,
    qty: qty,
  };
  const existing = cart.find((c) => c.id === item.id);
  if (existing) existing.qty += qty;
  else cart.push(item);
  saveCart();
  updateCartCount();
  pulseCartBtn();
  openCart();
}

function pulseCartBtn() {
  const btn = document.getElementById("cartBtn");
  if (!btn) return;
  btn.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.25)" },
      { transform: "scale(1)" },
    ],
    { duration: 500, easing: "cubic-bezier(.2,.8,.2,1)" },
  );
}

function updateCartCount() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const el = document.getElementById("cartCount");
  if (el) {
    el.textContent = count;
    el.dataset.count = count;
  }
}

function changeQty(id, delta) {
  const it = cart.find((c) => c.id === id);
  if (!it) return;
  it.qty += delta;
  if (it.qty <= 0) cart = cart.filter((c) => c.id !== id);
  saveCart();
  renderCart();
  updateCartCount();
}
function removeItem(id) {
  cart = cart.filter((c) => c.id !== id);
  saveCart();
  renderCart();
  updateCartCount();
}

function fmtEGP(n) {
  return "EGP " + Math.round(n).toLocaleString("en-US");
}

function renderCart() {
  const drawer = document.getElementById("cartDrawer");
  const itemsEl = document.getElementById("cartItems");
  const itemCountEl = document.getElementById("cartItemCount");
  const totalCount = cart.reduce((s, i) => s + i.qty, 0);
  if (itemCountEl) itemCountEl.textContent = totalCount;

  if (cart.length === 0) {
    drawer.classList.add("is-empty");
    itemsEl.innerHTML = "";
    return;
  }
  drawer.classList.remove("is-empty");

  const isAr = body.classList.contains("rtl");
  itemsEl.innerHTML = cart
    .map(
      (it) => `
    <div class="cart-item">
      <div class="cart-item-img" style="background-image:url('${it.image}')"></div>
      <div class="cart-item-info">
        <div class="cart-item-name">${isAr ? it.nameAr : it.nameEn}</div>
        <div class="cart-item-meta">${isAr ? "مقاس" : "Size"} · ${it.size}</div>
        <div class="cart-item-meta" style="display:flex;align-items:center;gap:.4rem">
          <span>${isAr ? "لون" : "Color"}</span>
          <span style="display:inline-block;width:12px;height:12px;border-radius:50%;background:${it.color};border:1px solid rgba(0,0,0,.15)"></span>
        </div>
        <div class="cart-item-price">${fmtEGP(it.price * it.qty)}</div>
      </div>
      <div class="cart-item-actions">
        <div class="cart-item-qty">
          <button onclick="changeQty('${it.id}',-1)" aria-label="decrease">−</button>
          <span>${it.qty}</span>
          <button onclick="changeQty('${it.id}',1)" aria-label="increase">+</button>
        </div>
        <button class="cart-item-remove" onclick="removeItem('${it.id}')">${isAr ? "إزالة" : "Remove"}</button>
      </div>
    </div>
  `,
    )
    .join("");

  renderTotals();
}

function renderTotals() {
  const subtotal = cart.reduce((s, it) => s + it.price * it.qty, 0);
  let discount = 0;
  if (activePromo && PROMO_CODES[activePromo.code]) {
    const p = PROMO_CODES[activePromo.code];
    discount =
      p.type === "percent"
        ? subtotal * (p.value / 100)
        : Math.min(p.value, subtotal);
  }
  document.getElementById("cartSubtotal").textContent = fmtEGP(subtotal);
  document.getElementById("cartTotal").textContent = fmtEGP(
    Math.max(0, subtotal - discount),
  );
  const discountRow = document.getElementById("discountRow");
  if (discount > 0) {
    discountRow.style.display = "flex";
    document.getElementById("cartDiscount").textContent =
      "— " + fmtEGP(discount);
  } else {
    discountRow.style.display = "none";
  }
  // restore the saved promo code visually if present
  const promoInput = document.getElementById("promoInput");
  const promoMsg = document.getElementById("promoMsg");
  if (activePromo && promoInput && !promoInput.value) {
    promoInput.value = activePromo.code;
    promoMsg.textContent =
      (body.classList.contains("rtl")
        ? "تم تطبيق الكود ✦ "
        : "Code applied ✦ ") + PROMO_CODES[activePromo.code].label;
    promoMsg.className = "cart-promo-msg success";
  }
}

function applyPromo() {
  const input = document.getElementById("promoInput");
  const msg = document.getElementById("promoMsg");
  const code = input.value.trim().toUpperCase();
  const isAr = body.classList.contains("rtl");
  if (!code) {
    msg.textContent = isAr ? "أدخلي الكود أولاً" : "Please enter a code";
    msg.className = "cart-promo-msg error";
    return;
  }
  if (PROMO_CODES[code]) {
    activePromo = { code };
    savePromo();
    msg.textContent =
      (isAr ? "تم تطبيق الكود ✦ " : "Code applied ✦ ") +
      PROMO_CODES[code].label;
    msg.className = "cart-promo-msg success";
    renderTotals();
  } else {
    activePromo = null;
    savePromo();
    msg.textContent = isAr ? "هذا الكود غير صالح" : "This code is not valid";
    msg.className = "cart-promo-msg error";
    renderTotals();
  }
}

// ============ WHATSAPP CHECKOUT ============
function checkoutWhatsApp() {
  if (cart.length === 0) return;
  const isAr = body.classList.contains("rtl");
  const subtotal = cart.reduce((s, it) => s + it.price * it.qty, 0);
  let discount = 0;
  let promoLine = "";
  if (activePromo && PROMO_CODES[activePromo.code]) {
    const p = PROMO_CODES[activePromo.code];
    discount =
      p.type === "percent"
        ? subtotal * (p.value / 100)
        : Math.min(p.value, subtotal);
    promoLine =
      (isAr ? "🌿 كود الخصم: " : "🌿 Promo Code: ") +
      activePromo.code +
      ` (-${fmtEGP(discount)})\n`;
  }
  const total = Math.max(0, subtotal - discount);

  const greeting = isAr
    ? "السلام عليكم 🌿\nأودّ تأكيد طلبي من جِلبادا:\n\n"
    : "Assalamu alaikum 🌿\nI would like to confirm my order from Jilbada:\n\n";

  const itemLines = cart
    .map((it, idx) => {
      const name = isAr ? it.nameAr : it.nameEn;
      const sizeLabel = isAr ? "المقاس" : "Size";
      const qtyLabel = isAr ? "الكمّيّة" : "Qty";
      return `${idx + 1}. ${name}\n   ${sizeLabel}: ${it.size} · ${qtyLabel}: ${it.qty} · ${fmtEGP(it.price * it.qty)}`;
    })
    .join("\n\n");

  const totals = isAr
    ? `\n\n— — — — — — —\nالمجموع: ${fmtEGP(subtotal)}\n${promoLine}الإجمالي: ${fmtEGP(total)}`
    : `\n\n— — — — — — —\nSubtotal: ${fmtEGP(subtotal)}\n${promoLine}Total: ${fmtEGP(total)}`;

  const closing = isAr
    ? "\n\nبارك الله فيكم — في انتظار تأكيدكم. ✦"
    : "\n\nMay Allah bless you — awaiting your confirmation. ✦";

  const message = greeting + itemLines + totals + closing;
  const url = `https://wa.me/${JILBADA_WHATSAPP}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
}

// ============ COMING SOON: NOTIFY-ME ============
function notifyMe(e) {
  e.preventDefault();
  const form = e.target;
  const email = form.querySelector("input[type=email]").value.trim();
  if (!email) return false;
  const stage = form.dataset.stage;
  const stored = JSON.parse(localStorage.getItem("jilbada_notify") || "{}");
  stored[stage] = stored[stage] || [];
  if (!stored[stage].includes(email)) stored[stage].push(email);
  localStorage.setItem("jilbada_notify", JSON.stringify(stored));
  form.classList.add("sent");
  return false;
}

// ============ ESC TO CLOSE OVERLAYS ============
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCart();
    closeRecommender();
    closeDua();
  }
});

// ============ INIT ============
updateCartCount();
