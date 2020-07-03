let faker = require("faker");

console.log("==================");
console.log("WELCOME TO MY SHOP");
console.log("==================");

for(let i = 0; i < 10; i++){
	let productInfo = faker.fake("{{commerce.productName}} - ${{commerce.price}}");
	console.log(productInfo);
}
