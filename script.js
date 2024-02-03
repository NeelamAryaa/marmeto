// console.log("Connected");

function calculatePercentageOff(price, comparePrice) {
  const percentageOff = ((comparePrice - price) / comparePrice) * 100;
  return parseInt(percentageOff) + "%";
}

function populateData(data) {
  const product = data.product;

  const vendor = document.querySelector(".product-vendor");
  vendor.innerText = product.vendor;

  const title = document.querySelector(".product-title");
  title.innerText = product.title;

  const compare_price = document.querySelector(".compare-price");
  compare_price.innerText = product.compare_at_price;

  const price = parseInt(product.price.slice(1));
  const c_price = parseInt(product.compare_at_price.slice(1));
  const discount = calculatePercentageOff(price, c_price);

  const actual_price = document.querySelector(".actual-price");
  actual_price.innerHTML = `${product.price}  <span class="discount">${discount} Off</span>`;

  const description = document.querySelector(".description");
  description.innerHTML = product.description;

  const square_radio = document.querySelectorAll(".colors .checkmark");
  for (let i = 0; i < product.options[0].values.length; i++) {
    square_radio[i].style.setProperty(
      `--color`,
      Object.values(product.options[0].values[i])[0]
    );

    // console.log(Object.keys(product.options[0].values[i])[0]);

    // console.log(square_radio[i]);
  }

  const allSize = document.querySelectorAll("input[name='size']");
  for (let i = 0; i < product.options[1].values.length; i++) {
    allSize[i].setAttribute(`id`, product.options[1].values[i]);
  }
  // console.log("allsize", allSize);

  const allColors = document.querySelectorAll("input[name='color']");
  for (let i = 0; i < product.options[0].values.length; i++) {
    allColors[i].setAttribute(
      `id`,
      Object.keys(product.options[0].values[i])[0]
    );
  }

  const size = document.querySelectorAll(" .size label");
  for (let i = 0; i < product.options[1].values.length; i++) {
    size[i].innerText = product.options[1].values[i];
  }
}

// Populate data from API
fetch(
  "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json"
)
  .then((response) => response.json())
  .then((data) => {
    populateData(data);
  });

const allColors = document.querySelectorAll("input[name='color']");

let selected_color = "Yellow";
allColors.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.checked) {
      selected_color = radio.getAttribute("id");
    }
  });
});

const allSize = document.querySelectorAll("input[name='size']");
let selected_size = "Small";
allSize.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.checked) {
      selected_size = radio.getAttribute("id");
    }
  });
});

function addToCart() {
  const title = document.querySelector(".product-title").innerText;

  const x = document.getElementById("addToCartMessage");
  x.style.display = "inline-flex";
  x.innerText = `${title} with Color ${selected_color} and Size ${selected_size} added to cart`;
}

// update quantity
let quantity = 1;
function increment() {
  quantity++;
}

function decrement() {
  quantity--;
}

function get() {
  return quantity;
}

const inc = document.getElementById("increment");
const input = document.getElementById("input");
const dec = document.getElementById("decrement");

inc.addEventListener("click", () => {
  increment();
  input.value = get();
});

dec.addEventListener("click", () => {
  const inputValue = parseInt(input.value, 10);

  if (inputValue > 1) {
    decrement();
  }
  input.value = get();
});

const thumbnails = document.querySelector(".thumbnails");

thumbnails.addEventListener("click", (event) => {
  thumbnails.querySelectorAll("img").forEach((img) => {
    img.classList.remove("selected");
  });

  if (event.target.tagName === "IMG") {
    event.target.classList.add("selected");
  }
});
