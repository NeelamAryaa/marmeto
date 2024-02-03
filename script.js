console.log("====================================");
console.log("Connected");
console.log("====================================");

// Populate data from API
fetch(
  "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json"
)
  .then((response) => response.json())
  .then((data) => {
    // Use data to populate elements
    // Update product details, options, etc.
  });

// Function to calculate percentage off
function calculatePercentageOff(price, comparePrice) {
  const percentageOff = ((comparePrice - price) / comparePrice) * 100;
  return percentageOff.toFixed(2) + "%";
}

// Function to update details on variant change
function updateVariantDetails() {
  // Update selected variant details
}

// Function to handle Add to Cart button click
function addToCart() {
  // Add logic to handle adding the product to the cart
  // Show the success message with the added product's details
}
