import { Link } from "react-router";


const ProductPage = () => {
    const list = [1, 2, 3];
  return (
    <div className="productPage">
      <div className="container mx-auto">
        <h2>Product Detail Page</h2>
        <ul>
          {list.map((item) => (
            <li key={item}>
                <Link to={`${item}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProductPage
