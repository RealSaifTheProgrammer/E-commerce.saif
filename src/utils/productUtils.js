import { products } from "../data/products.js";

// #info made A filter by category feature
// we filter over the products and then add a condition if the category inside a specific product is equal to category...and if it's true then that product is included in the results and if it's false then the product is vanished from the results

export const filterByCategory = (category) =>
  products.filter((product) => product.category === category);

// #end-info

// #info made a sorting by price filter over the products
// we spreading over the original products to make a shallow one or a copy one and then sort...and if the ascending is true then we minus (subtract) price the first price product from the second one (sort low to high)...else we do the opposite (sort high to low)

export const sortByPrice = (asc = true) =>
  [...products].sort((a, b) => (asc ? a.price - b.price : b.price - a.price));

// #end-info

// #info made an update stock feature
// we map over product...then if the id inside a specific product is the same one...then make and object of a spreading product (to not manipulate the original one) and the stock to new one and if it's out of stock (a flag) then we take specific action later...and else then just put the product

export const updateStock = (id, newStock) =>
  products.map((product) =>
    product.id === id
      ? {
          ...product,
          stock: newStock,
          outOfStock: newStock === 0 ? true : false,
        }
      : product
  );

// #end-info
