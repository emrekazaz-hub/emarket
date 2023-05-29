import ImageAirpods from "./Apple-AirPods-Pro-2nd-gen-hero-220907_big.jpg.large.jpg";
import ImageAirpods2 from "./wp4823412.png";
import { useCart } from "../../CartContext/CartContext";
import { Images } from "../../Images/Images";

export const ProductAirpods = [
  {
    id: "1air",
    name: "Airpods 1",
    price: 1,
    details: "cok guzel pc",
    image: Images[0].ImageAirpods,
  },
  {
    id: "2air",
    name: "Airpods 2",
    price: 2,
    details: "cok guzel pc",
    image: Images[0].ImageAirpods2,
  },
  {
    id: "3air",
    name: "Airpods 3",
    price: 3,
    details: "cok guzel pc",
    image: Images[0].ImageAirpods,
  },
  {
    id: "4air",
    name: "Airpods 4",
    price: 3,
    details: "cok guzel pc",
    image: Images[0].ImageAirpods2,
  },
  {
    id: "5air",
    name: "Airpods 5",
    price: 3,
    details: "cok guzel pc",
    image: Images[0].ImageAirpods,
  },
  {
    id: "6air",
    name: "Airpods 6",
    price: 3,
    details: "cok guzel pc",
    image: Images[0].ImageAirpods2,
  },
];

const CardAirpods = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="card-container d-flex flex-wrap justify-content-center gap-5">
      {ProductAirpods.map((product) => (
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
            <p className="card-text">Price: {product.price} TL</p>
            <p className="card-text">Details: {product.details}</p>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleAddToCart(product)}
            >
              Add to chart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardAirpods;
