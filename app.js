// --------------------Assignment----------------------------
//Assignment 3 and 4

const book = {
    title: "Harry Potter and the sorcerer's stone",
    author: "J.K. Rowlings",
    publish_year: 1997
}

for (const x in book){
    console.log(`${x}: ${book[x]}` )
}

//-------------------------Assignment 5 --------------------

const product ={
    name: "chocolate",
    inventory: 300,
    unit_price: 5.99
}

for (const name in product){
    console.log(`${name}: ${product[name]}`)
}
console.log(product)


//----------------------------Assignment 6 ---------------------
 
function addInventory(product, noAddInventory){
    let newInventory = product.inventory + noAddInventory;
    console.log(`${noAddInventory} boxes of ${product.name} added to inventory, stock is now ${newInventory}`)
}

addInventory(product,5)

//------------------------Assignment 7 ---------------------------

function processSale(product, noProductSold){
   let productInventory  = product.inventory - noProductSold;
   console.log(`Product inventory less ${noProductSold} boxes of ${product.name} sold is ${productInventory}`);
   total_sold = product.unit_price * noProductSold;
   return `Price of ${noProductSold} boxes of ${product.name}  sold is ${total_sold}`
}

processSale(product, 2)


//-------------------------Assignment 8--------------------------

let products = [];

 const productOne = {
     name: "shoes",
    inventory: 10,
    unit_price: 49.99

 }

  const productTwo = {
     name: "bags",
    inventory: 20,
    unit_price: 29.99

 }

products.push(productOne,productTwo);

function listProducts(passProduct){

let valueOne = passProduct[0].name;
let valueTwo = passProduct[1].name;

arrayProducts =[]

arrayProducts.push(valueOne,valueTwo)
return arrayProducts
}

listProducts(products)

function totalValue(passProduct){
let totalOne = passProduct[0].inventory * passProduct[0].unit_price;
let totalTwo = passProduct[1].inventory * passProduct[1].unit_price;
let totalvalue = totalOne + totalTwo;
console.log(`The total value of products in stock is ${totalvalue}CAD`)
}

totalValue(products)