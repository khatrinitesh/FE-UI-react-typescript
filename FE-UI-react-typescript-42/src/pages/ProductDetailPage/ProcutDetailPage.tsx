import { useParams } from "react-router";


const ProcutDetailPage = () => {
     const { id } = useParams();
     
  return (
    <div className="productDetailPage">
      <div className="container mx-auto">

        <h2>ProductDetailPage</h2>
        <p>Product ID: {id}</p>
      </div>
    </div>
  )
}

export default ProcutDetailPage
