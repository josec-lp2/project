function getProductView(product) {
  return `<li class="product-item">
    <div class="product-box-image">
      <img
        src="${product.image}"
        class="product-image"
      />
    </div>
    <p class="product-name">${product.name}</p>
    <div class="product-price">
    <p class="product-cost">
        <span class="actual-price">${product.
        price}</span>
      </p>
    </div>`;
    
}


const response = await fetch('./data/js.json');
const data = await response.json();

let productsView = '';

for (const product of data.products) {
  productsView += getProductView(product);
}

productsView;

document.querySelector('ul.catalog').innerHTML = productsView;

const buttons = document.querySelectorAll('.toolbar-button');
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    buttons.forEach((button) => {
      button.classList.remove('active');
    });
    button.classList.add('active');
    const page = button.dataset.page;
    window.location.href = page;
  });
});
     
   
