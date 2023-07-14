import ProductItemDetails from "../components/ProductItemDetails";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import useAPI from "../hooks/useAPI";

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getProducts } = useAPI();
  
  useEffect(() => {
    getProducts()
      .then((products) => {
        setProducts(products);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);
  const { productId } = useParams();
  console.log(products);
  return (
    <div>
      <h1>Detalles del Producto</h1>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-4">
          {loading && <p>Cargando...</p>}
          {!loading && (
            <ProductItemDetails key={productId} product={products[productId-1]} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
