const cart = [
    {
        id: 1,
        image: 'fruits.jpg',
        title: 'fruits'
    },
    {
        id: 2,
        image: 'handicrafts.jpg',
        title: 'handicrafts'
    },
    {
        id: 3,
        image: 'seafoods.jpg',
        title: 'seafoods'
    },
    {
        id: 4,
        image: 'vegetables.jpg',
        title: 'vegetables'
    },
];

// show the product nav wrapper
const navBtn = document.querySelector('.product_nav');
const navWrapper = document.querySelector('.product_nav_wrapper');
navBtn.addEventListener('click', () => {
    navWrapper.classList.toggle('product_nav_wrapper_active');
});
for (let i = 0; i < cart.length; i++) {
    navWrapper.innerHTML += `
    <a href="${cart[i].title}.html" class="product_nav_items">
        <img src="/src/images/products/${cart[i].image}" alt="" class="product_nav_img">
        <h6 class="product_nav_title mt-lg-2 text-uppercase text-dark">${cart[i].title}</h6>
    </a>
    `
}