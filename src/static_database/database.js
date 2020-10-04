let faker = require('faker')

module.exports.product_types = [
    {
        image: 'fa fa-mobile-phone fa-lg',
        label: 'Mobile Phones'
    },
    {
        image: 'fa fa-motorcycle fa-lg',
        label: 'Motocycle'
    },
    {
        image: 'fa fa-car fa-lg',
        label: 'Cars'
    },
    {
        image: 'fa fa-female fa-lg',
        label: 'Fashion Women'
    },
    {
        image: 'fa fa-male fa-lg',
        label: 'Fashion Men'
    },
    {
        image: 'fa fa-home fa-lg',
        label: 'Home And Garden'
    },
    {
        image: 'fa fa-laptop fa-lg',
        label: 'Computer And Electronic'
    },
    {
        image: 'fa fa-child fa-lg',
        label: 'Baby And Kids Stuff'
    },
    {
        image: 'fa fa-eye fa-lg',
        label: 'Beauty Products'
    },
    {
        image: 'fa fa-gift fa-lg',
        label: 'Gift'
    },
    {
        image: 'fa fa-home fa-lg',
        label: 'Property'
    },
    {
        image: 'fa fa-gavel fa-lg',
        label: 'Services'
    },
    {
        image: 'fa fa-file-video-o fa-lg',
        label: 'Movie Books And Music'
    },
    {
        image: 'fa fa-hand-lizard-o fa-lg',
        label: 'Handmade And Ceafts'
    },
    {
        image: 'fa fa-futbol-o fa-lg',
        label: 'Sport Leisure And Games'
    },
    {
        image: 'fa fa-bicycle fa-lg',
        label: 'Bicycle'
    },
    {
        image: 'fa fa-medkit fa-lg',
        label: 'Medicine And Health'
    },
    {
        image: 'fa fa-beer fa-lg',
        label: 'Food And Beverage'
    },
    {
        image: 'fa fa-paw fa-lg',
        label: 'Pets'
    },
    {
        image: 'fa fa-gamepad fa-lg',
        label: 'Coc And Digital Games'
    },
    {
        image: 'icon-options icons font-2xl d-block',
        label: 'Other'
    },
    {
        image: 'fa fa-handshake-o fa-lg',
        label: 'Give Away'
    },
    {
        image: 'fa fa-shopping-cart fa-lg',
        label: 'Want To Buy'
    },
]

module.exports.slider_images = [
    'header-slide-image-1.jpg',
    'header-slide-image-2.jpg',
    'header-slide-image-3.jpg',
    'header-slide-image-4.jpg',
    'header-slide-image-5.jpg',
    'header-slide-image-6.jpg',
    'header-slide-image-7.jpg'
]

let products = [];
for (let i=0; i < 200; i++) {
    products.push({
        id: faker.random.uuid(),
        image: faker.image.image(),
        description: faker.lorem.words(),
        price: faker.commerce.price(10000, 999999)
    })
}

module.exports.products = products