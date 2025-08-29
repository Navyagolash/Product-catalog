$(document).ready(function () {
  let cartCount = 0;

  const products = [
    { id: 1, name: "Laptop", price: 49999, img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/aa18250/media-gallery/laptop-alienware-aa18250nt-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=486&qlt=100,1&resMode=sharp2&size=486,402&chrss=full", desc: "High performance laptop" },
    { id: 2, name: "Smartphone", price: 19999, img: "https://m.media-amazon.com/images/I/71v2jVh6nIL._SL1500_.jpg", desc: "Latest Android smartphone" },
    { id: 3, name: "Headphones", price: 2999, img: "https://accessworld.in/cdn/shop/files/Beats_solo3_headphone_gold_1.jpg?v=1736840419&width=700", desc: "Noise cancelling headphones" },
    { id: 4, name: "Smartwatch", price: 6999, img: "https://m.media-amazon.com/images/I/616e2t492uL._SL1500_.jpg", desc: "Fitness tracking smartwatch" }
  ];


  function renderProducts() {
    $("#product-grid").empty();
    products.forEach(p => {
      const card = `
        <div class="bg-white rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-1 product-item" data-name="${p.name.toLowerCase()}">
          <img src="${p.img}" alt="${p.name}" 
               class="w-full h-48 rounded-t cursor-pointer product-img p-4"
               data-name="${p.name}" data-price="₹${p.price}" data-desc="${p.desc}" data-img="${p.img}">
          <div class="p-4 text-center">
            <h3 class="text-lg font-semibold">${p.name}</h3>
            <p class="text-green-600 font-bold">₹${p.price}</p>
            <button class="add-to-cart bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-2 font-bold">Add to Cart</button>
            <button class="remove-card bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-2 font-bold">Remove</button>
          </div>
        </div>
      `;
      $("#product-grid").append(card);
    });
  }

  renderProducts();

  // Add to cart
  $(document).on("click", ".add-to-cart", function () {
    cartCount++;
    $("#cart-link, #cart-link-mobile").text(`🛒 Cart (${cartCount})`);
  });

  // Remove card
  $(document).on("click", ".remove-card", function () {
    $(this).closest(".product-item").fadeOut(400, function () {
      $(this).remove();
    });
  });

  // Search filter
  $("#search").on("keyup", function () {
    const value = $(this).val().toLowerCase();
    $(".product-item").filter(function () {
      $(this).toggle($(this).data("name").includes(value));
    });
  });

  // Modal
  $(document).on("click", ".product-img", function () {
    $("#modal-name").text($(this).data("name"));
    $("#modal-price").text($(this).data("price"));
    $("#modal-desc").text($(this).data("desc"));
    $("#modal-img").attr("src", $(this).data("img"));
    $("#productModal").fadeIn().css("display", "flex");
  });

  $("#modalClose").on("click", function () {
    $("#productModal").fadeOut();
  });

  // Mobile menu toggle
  $("#menu-btn").on("click", function () {
    $("#mobile-menu").slideToggle();
  });
});
