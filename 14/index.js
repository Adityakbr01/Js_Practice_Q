// 1️⃣ Data Array (Array of Objects)
const products = [
  {
    title: "Wireless Headphone",
    description: "High quality noise cancellation.",
    price: 2999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  },
  {
    title: "Smart Watch",
    description: "Track your health and fitness.",
    price: 4999,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  },
  {
    title: "DSLR Camera",
    description: "Professional photography camera.",
    price: 59999,
    image: "https://images.unsplash.com/photo-1519183071298-a2962be96c68"
  },
  {
    title: "Gaming Mouse",
    description: "High precision RGB gaming mouse.",
    price: 1499,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d6"
  }
];

// 2️⃣ Select Container
const container = document.querySelector("#container");

// 3️⃣ forEach Loop + DOM Creation
products.forEach((item) => {

  // Create Elements
  const card = document.createElement("div");
  const img = document.createElement("img");
  const content = document.createElement("div");
  const title = document.createElement("h3");
  const desc = document.createElement("p");
  const price = document.createElement("p");
  const btn = document.createElement("button");

  // Add Classes
  card.classList.add("card");
  content.classList.add("content");

  // Insert Data
  img.src = item.image;
  title.textContent = item.title;
  desc.textContent = item.description;
  price.textContent = "₹ " + item.price;
  btn.textContent = "Add to Cart";

  // Append Structure
  content.append(title, desc, price, btn);
  card.append(img, content);
  container.append(card);
});
