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
  console.log('resultadogetcategoryadnqueryapi', await dataCategoriesAndQuery);
  return dataCategoriesAndQuery;
}

export async function getProductsFromQuery(query) {
  const endPoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const response = await fetch(endPoint);
  const dataCategoriesQuery = await response.json();
  return dataCategoriesQuery;
}

export async function getProductsFromCategory(id) {
  const endPoint = `https://api.mercadolibre.com/sites/MLB/search?category=${id}`;
  const response = await fetch(endPoint);
  const dataCategory = await response.json();
  return dataCategory;
}
