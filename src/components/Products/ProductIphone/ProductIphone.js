import { useEffect, useState } from "react";
import { useCart } from "../../CartContext/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardIphone = () => {
  const [productsIphone, setProductsIphone] = useState([]);

  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/products/iphone")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Verileri konsola yazdır
        setProductsIphone(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div>
      <ToastContainer />
      <div className="card-container d-flex flex-wrap justify-content-center gap-5">
        {productsIphone.map((product) => (
          <div className="card" style={{ width: "25rem" }} key={product.id}>
            {
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
            }
            <div className="card-body">
              <h2 className="card-title d-flex justify-content-center">
                {product.name}
              </h2>
              <p className="card-text ">Price: {product.price} TL</p>
              <p className="card-text">Details: {product.details}</p>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleAddToCart(product)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardIphone;
