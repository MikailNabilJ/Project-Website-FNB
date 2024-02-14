
fetch("http://localhost:5000/menus", {
  header: {
    "Content-Type": "application/json",
  },
  method: 'GET'
})
.then((response) => response.json())
.then((response) => {
  console.log(response);
    const containerUI = document.getElementById("product-container");
  response.forEach((item) => {
    containerUI.innerHTML += `
    <div class="menu-item">
    <img src="${item.image}" alt="Food 1" id="image">
    <h3 class="productName">${item.name}</h3>
    <p class="descMenu">${item.description}</p>
    $<span class="productPrice">${item.price}</p>
    <button onclick="addChart('${item.name}',${item.price})"id="button"> <i class="fa-solid fa-cart-plus"></i> Add Chart</button>  
    </div>
    `;
  });
})
.catch((err) => {
  console.log(err);
})
setProductsData();
