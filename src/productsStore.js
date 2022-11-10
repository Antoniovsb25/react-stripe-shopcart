const productsArray = [
    {
        id: 'price_1M2OreDzZ9DGa62edvDxWiWY',
        title: "coffee",
        price: 4.99
    },
    {
        id: 'price_1M2OskDzZ9DGa62eybcOiBfR',
        title: "Coca Cola",
        price: 10.00
    },
    {
        id: 'price_1M2OtFDzZ9DGa62epsnAUWGQ',
        title: "Playstation",
        price: 1600.00
    },
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    return productData;
};

export { productsArray, getProductData };

// coffee: price_1M2OreDzZ9DGa62edvDxWiWY
// coca cola: price_1M2OskDzZ9DGa62eybcOiBfR
// ps: price_1M2OtFDzZ9DGa62epsnAUWGQ