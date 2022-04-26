export async function getCategories() {
  const endPoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(endPoint);
  const dataCategories = await response.json();
  return dataCategories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endPoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(endPoint);
  const dataCategoriesAndQuery = await response.json();
  console.log(await dataCategoriesAndQuery);
  return dataCategoriesAndQuery;
}
