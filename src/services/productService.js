export async function getProductList(searchTerm) {
  let res = await fetch(
    `${process.env.REACT_APP_HOST}/444/products?name_like=${
      searchTerm ? searchTerm : ""
    } `
  );
  if (!res.ok) {
    throw Object.assign(new Error(res.statusText), { status: res.status });
  }
  let data = await res.json();
  return data;
}
export async function getProduct(id) {
  const res = await fetch(`${process.env.REACT_APP_HOST}/444/products/${id}`);
  if (!res.ok) {
    throw Object.assign(new Error(res.statusText), { status: res.status });
  }
  const data = await res.json();
  return data;
}
export async function getFeaturedList() {
  const res = await fetch(
    `${process.env.REACT_APP_HOST}/444/featured_products`
  );
  if (!res.ok) {
    throw Object.assign(new Error(res.statusText), { status: res.status });
  }
  const data = await res.json();
  return data;
}
