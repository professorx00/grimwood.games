import products from "../products.json";
export default defineEventHandler((event) => {
  return {
    statusCode: 200,
    data: products.products,
  };
});
