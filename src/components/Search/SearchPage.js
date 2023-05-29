// SearchPage.js
import { useLocation } from "react-router-dom";
import { useCart } from "../CartContext/CartContext";

const SearchPage = () => {
  const location = useLocation();
  const filteredProducts = location.state?.filteredProducts || [];

  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="card-container d-flex flex-wrap justify-content-center gap-5">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div className="card" style={{ width: "25rem" }} key={product.id}>
            <img 
            src={product.image} 
            className="card-img-top"
            alt={product.name}
            />
            <div className="card-body">
              <h3 className="card-title d-flex justify-content-center">{product.name}</h3>
              <p>Price: {product.price}</p>
              {/* Diğer ürün bilgilerini burada görüntüleyebilirsiniz */}
              <button 
              type="button"
              className="btn btn-danger"
              onClick={() => handleAddToCart(product)}
              >Add to cart</button>
            </div>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchPage;
