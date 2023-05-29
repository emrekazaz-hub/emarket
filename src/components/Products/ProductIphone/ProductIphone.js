import { useCart } from "../../CartContext/CartContext";
import { Images } from "../../Images/Images";

export const ProductIPhone = [
  {
    id: "1iphone",
    name: "iPhone",
    price: 1,
    details: "cok guzel pc",
    image: Images[0].ImageIphone,
  },
  {
    id: "2iphone",
    name: "iPhone 14 pro max",
    price: 2,
    details: "cok guzel pc",
    image: Images[0].ImageIphone,
  },
  {
    id: "3iphone",
    name: "iPhone 14",
    price: 3,
    details: "cok guzel pc",
    image: Images[0].ImageIphone,
  },
  {
    id: "4iphone",
    name: "iPhone 13",
    price: 3,
    details: "cok guzel pc",
    image: Images[0].ImageIphone,
  },
  {
    id: "5iphone",
    name: "iPhone 13 pro",
    price: 3,
    details: "cok guzel pc",
    image: Images[0].ImageIphone,
  },
  {
    id: "6iphone",
    name: "iPhone xs",
    price: 3,
    details: "cok guzel pc",
    image: Images[0].ImageIphone,
  },
];

const CardWatch = () => {

  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };


  return (
    <div className="card-container d-flex flex-wrap justify-content-center gap-5">
      {ProductIPhone.map((product) => (
        <div className="card" style={{ width: "25rem" }} key={product.id}>
          <img
            src={product.image}
            className="card-img-top"
            alt={product.name}
          />
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
  );
};

export default CardWatch;