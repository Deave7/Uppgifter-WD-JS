const products = [
    { name: "Laptop", price: 1200, available: true },
    { name: "Mouse", price: 25, available: true },
    { name: "Keyboard", price: 60, available: false },
    { name: "Monitor", price: 150, available: true },
  ];


const filter = ((products) => products.available == true)

console.log(products.filter(filter))

procentTax = 0.25
const map = ((products) => products.price * procentTax)

const tax = products.map(products => products.price * 0.25,)
console.log(products.map(map))
console.log(tax)

let updatedProducts = [];

for (const product of products) {
    const finalPrice = product.price * 1.25
    let status;

    if(product.price <= 100) {
        status = 'low'
    }
    else {
        status = 'high'
    }
    updatedProducts.push({
        name: product.name,
        price: finalPrice,
        status: status
    })
}

console.log(updatedProducts)

const updatedProducts2 = products.map(product => {
    const tax = 0.25; 
    const updatedPrice = product.price * (1 + tax);
    const isPriceHigherThan100 = updatedPrice > 100;

    return {
        name: product.name,
        updatedPrice: updatedPrice,
        status: isPriceHigherThan100 ? 'Higher' : 'Lower'
    };
});

console.log(updatedProducts2);

