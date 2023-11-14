let allProducts; //global variable, which is accessable from anywhere

const getData = fetch("https://fakestoreapi.com/products") //getData returns Promise not json data.
  .then((response) => response.json())
  .then((json) => {
    allProducts = json; //json here is in local, but allProducts is global variable so can be accessed by anywhere
    showProducts(allProducts);
    showFilterOptions();
  });

//bind data and HTML
function addProduct(imgUrl, title, price, descrip) {
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);

  template.querySelector(".card-img").src = imgUrl;
  template.querySelector(".card-title").innerText = title;
  template.querySelector(".card-price").innerText = "$" + price;
  template.querySelector(".card-text").innerText = descrip;
  document.getElementById("card-list").appendChild(template);
}

//show all product in the browser
function showProducts(products) {
  document.getElementById("card-list").innerHTML = ""; // everytime addProduct is called it shows all products, so need to be emptiy first
  products.forEach((product) => {
    addProduct(
      product.image,
      product.title,
      product.price,
      product.description
    );
  });
}

//want to show the each category in dropdown menue

function showFilterOptions() {
  let filterOption = document.getElementById("filter-category");
  let getCategory = allProducts.map((product) => product.category);
  let uniqueCategories = [...new Set(getCategory)];
  console.log(uniqueCategories);
  uniqueCategories.forEach((category) => {
    filterOption.innerHTML += `<option value="${category}">${category}</option>`;
  });
}

function showFilteredProducts() {
  let filterOption = document.getElementById("filter-category");
  let selectedCategory = filterOption.value;
  let filteredProducts = allProducts.filter(
    (product) => product.category == selectedCategory
  );
  showProducts(filteredProducts);
}

// try to console.log to see if the data I want is got. Also use try{} catch(e){}
