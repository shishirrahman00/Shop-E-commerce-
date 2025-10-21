export async function ProductLoader() {
  try {
    const data = await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => data.products);
    return {
      products: data,
    };
  } catch {
    return {
      error: true,
      message: "Failed to fetch products",
    };
  }
}
