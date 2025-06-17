// Toggle Price List View
function toggleList() {
  const list = document.getElementById("expandableList");
  const btn = document.querySelector(".toggle-btn");

  if (list.classList.contains("collapsed")) {
    list.classList.remove("collapsed");
    btn.textContent = "Show less";
  } else {
    list.classList.add("collapsed");
    btn.textContent = "Tap to see full list";
  }
}

// Modal open/close
function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

window.onclick = function (e) {
  ["pickupModal", "estimateModal", "bookModal"].forEach((id) => {
    const modal = document.getElementById(id);
    if (e.target === modal) modal.style.display = "none";
  });
};

// Navigation menu toggle
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// Dry Clean Price Logic
const priceData = {
  Shirt: { Kids: 80, Silk: 100, Cotton: 70 },
  "T-Shirt": { Kids: 80, Cotton: 60, Silk: 90 },
  "Trouser/Jeans": { Kids: 100, Jeans: 120, Casual: 140, Formal: 160 },
  Kurta: { Kids: 120, Cotton: 150, Silk: 200, Fancy: 220, Linen: 180 },
  "Suit/Blazer": { Kids: 200, Cotton: 250, Silk: 300 },
  "Sweater": { Kids: 150, Wool: 180, Cardign: 190 },
  "Jacket/Blazer": { Kids: 200, Cotton: 230, Causal: 220, Formal: 260, Leather: 280 },
  Overcoat: { Kids: 210, Causal: 230, Leather: 250, Fur: 300 },
  Sherwani: { Kids: 250, Cotton: 270, Silk: 300, Wedding: 350 },
  Saree: { Kids: 180, Cotton: 200, Silk: 250, Wedding: 300 },
  "Shorts/HalfPant": { Kids: 70, Cotton: 80 },
  "Gown/Anarkali": { Kids: 299, Silk: 350, Wedding: 399 },
  Lehenga: { Kids: 250, Silk: 299, Cotton: 270, Wedding: 399 },
  "Blouse/Choli": { Kids: 100, Cotton: 120, Silk: 150, Wedding: 180 },
  "Top/Kurti": { Kids: 80, Cotton: 90, Silk: 120 },
  Dress: { Kids: 150, Cotton: 180, Silk: 250 }
};

function updatePrice(button, item, type) {
  const price = priceData[item][type];
  const container = document.getElementById(`${item}-prices`);
  container.innerHTML = `<p>Dry Clean: ₹${price}/pc</p>`;

  // Highlight selected button
  const allBtns = button.parentElement.querySelectorAll("button");
  allBtns.forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");
}
