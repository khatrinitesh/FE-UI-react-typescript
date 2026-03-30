import { useEffect } from "react";
import  { useProductStore } from "../../store/useProductStore"
import { Link } from "react-router";

const ProductPage = () => {
    const {products,setProducts} = useProductStore();
   useEffect(() => {
  fetch(import.meta.env.VITE_API_JSONPLACEHOLDER)
    .then((res) => res.json())
    .then((data) => {
      console.log("API DATA:", data); // 👈 check here
      setProducts(data);
    })
    .catch((err) => console.error("ERROR:", err));
}, []);
  return (
    <div className="productPage">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mt-10">Products</h1>
      {products?.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="border p-4 my-4">
            <h2 className="text-2xl font-semibold">{product.title}</h2>
            <Link to={`/products/${product.id}`} className="text-blue-500 mt-2 inline-block">
              View Details
            </Link>
          </div>
        ))
      ) : (
        <p className="text-center mt-5">Loading...</p>
      )}
      </div>
    </div>
  )
}

export default ProductPage
