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

export async function SingleProductLoader({ params }) {
  try {
    const singleProduct = await fetch(
      `https://dummyjson.com/products/${params.id}`
    )
      .then((res) => res.json())
      .then((data) => data);

    return {
      singleProduct: singleProduct,
    };
  } catch {
    return { error: true, message: "Failed to fetch product" };
  }
}
// export async function CategoryProduct({ params }) {
//   const { category } = params;
//   try {
//     const categoryProduct = await fetch(
//       `https://dummyjson.com/products/category/${category}`
//     )
//       .then((res) => res.json())
//       .then((data) => data);

//     return {
//       categoryProduct: categoryProduct,
//     };
//   } catch {
//     return { error: true, message: "Failed to fetch product category" };
//   }
// }
