console.log("Connected");

function populateData(data) {
  const product = data.product;

  const vendor = document.querySelector(".product-vendor");
  vendor.innerText = product.vendor;

  const title = document.querySelector(".product-title");
  title.innerText = product.title;

  // const actual_price = document.querySelector(".actual-price");
  // actual_price.innerText = product.price;

  const compare_price = document.querySelector(".compare-price");
  compare_price.innerText = product.compare_at_price;

  const description = document.querySelector(".description");
  description.innerHTML = product.description;

  const square_radio = document.querySelectorAll(".colors .checkmark");
  for (let i = 0; i < product.options[0].values.length; i++) {
    square_radio[i].style.setProperty(
      "--color",
      Object.values(product.options[0].values[i])[0]
    );
  }

  const size = document.querySelectorAll(" .size label");
  console.log(size);
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
    console.log(data);

    populateData(data);
  });

function calculatePercentageOff(price, comparePrice) {
  const percentageOff = ((comparePrice - price) / comparePrice) * 100;
  return percentageOff.toFixed(2) + "%";
}

function addToCart() {
  const x = document.getElementById("addToCartMessage");
  x.style.display = "inline-flex";
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
  console.log(inputValue);

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
