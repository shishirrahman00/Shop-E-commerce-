export async function ProductLoader({ params }) {
  try {
    const data = await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => data.products);

    const singleProduct = await fetch(
      `https://dummyjson.com/products/${params.id}`
    )
      .then((res) => res.json())
      .then((data) => data);

    return {
      products: data,
      singleProduct: singleProduct,
    };
  } catch {
    return {
      error: true,
      message: "Failed to fetch products",
    };
  }
}
