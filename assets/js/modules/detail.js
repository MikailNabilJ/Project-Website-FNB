import { loadProductById } from "../api/products.js";

const setProductDetail = async () => {
  const query = window.location.search;
  const urlSearchParams = new URLSearchParams(query);

  const id = urlSearchParams.get("id");
  const response = await loadProductById(id);

  document.getElementById("productName").innerText = response.data.name;
  document.getElementById("description").innerText =
    response.data.description;
  document.getElementById("productPrice").innerText = response.data.price;
  document
    .getElementById("image")
    .setAttribute("src", response.data.image);
};

setProductDetail();
