const productsArray = [
    {
        id: '1',
        title: "coffee",
        price: 4.99
    },
    {
        id: '2',
        title: "sunglasses",
        price: 53.99
    },
    {
        id: '3',
        title: "camera",
        price: 101.00
    },
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    return productData;
};

export { productsArray, getProductData };