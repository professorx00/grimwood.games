import products from "../../products.json";
export default defineEventHandler((event) => {
  const { id } = event.context.params;
  const product = products.products.find((product) => product.id == id);
  if (product) {
    return {
      statusCode: 200,
      data: product,
    };
  }
  return {
    statusCode: 404,
    data: null,
  };
});
