document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      id: 1,
      name: "Produto 1",
      price: 50,
      img: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "Produto 2",
      price: 100,
      img: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      name: "Produto 3",
      price: 150,
      img: "https://via.placeholder.com/300",
    },
    {
      id: 4,
      name: "Produto 4",
      price: 200,
      img: "https://via.placeholder.com/300",
    },
    {
      id: 5,
      name: "Produto 5",
      price: 250,
      img: "https://via.placeholder.com/300",
    },
    {
      id: 6,
      name: "Produto 6",
      price: 300,
      img: "https://via.placeholder.com/300",
    },
  ];

  const loader = document.getElementById("loader");
  const productList = document.getElementById("product-list");
  const filterSelect = document.getElementById("filter");

  // Simular um carregamento com atraso
  setTimeout(() => {
    loader.style.display = "none";
    productList.style.display = "grid";
    displayProducts(products);
  }, 1000);

  filterSelect.addEventListener("change", (e) => {
    const filterValue = e.target.value;
    let filteredProducts = products;

    if (filterValue === "baixo") {
      filteredProducts = products.filter((product) => product.price <= 100);
    } else if (filterValue === "medio") {
      filteredProducts = products.filter(
        (product) => product.price > 100 && product.price <= 200
      );
    } else if (filterValue === "alto") {
      filteredProducts = products.filter((product) => product.price > 200);
    }

    displayProducts(filteredProducts);
  });

  function displayProducts(products) {
    productList.innerHTML = "";
    products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");
      productElement.innerHTML = `
          <img src="${product.img}" alt="${product.name}">
          <h2>${product.name}</h2>
          <p>Preço: <span class="price">R$${product.price}</span></p>
          <a href="#" class="add-to-cart" data-id="${product.id}">Adicionar ao Carrinho</a>
        `;
      productList.appendChild(productElement);
    });

    document.querySelectorAll(".add-to-cart").forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const productId = e.target.getAttribute("data-id");
        const product = products.find((p) => p.id == productId);
        alert(`Produto ${product.name} adicionado ao carrinho!`);
      });
    });
  }
});
