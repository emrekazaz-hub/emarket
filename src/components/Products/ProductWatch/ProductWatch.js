import ImageWatch from "./gps-lte__gi7uzrvkt5e2_og.png";
import { useCart } from "../../CartContext/CartContext";

export const ProductWatch = [
  {
    id: "1watch",
    name: "Apple Watch",
    price: 1,
    details: "cok guzel Apple Watch",
    image: ImageWatch,
  },
  {
    id: "2watch",
    name: "Apple Watch 2",
    price: 2,
    details: "cok guzel Apple Watch",
    image: ImageWatch,
  },
  {
    id: "3watch",
    name: "Apple Watch 3",
    price: 3,
    details: "cok guzel Apple Watch",
    image: ImageWatch,
  },
  {
    id: "4watch",
    name: "Apple Watch 4",
    price: 3,
    details: "cok guzel Apple Watch",
    image: ImageWatch,
  },
  {
    id: "5watch",
    name: "Apple Watch 5",
    price: 3,
    details: "cok guzel Apple Watch",
    image: ImageWatch,
  },
  {
    id: "6watch",
    name: "Apple Watch 6",
    price: 3,
    details: "cok guzel Apple Watch",
    image: ImageWatch,
  },
];

const CardWatch = () => {
const { addToCart } = useCart();

const handeAddToCart = (product) => {
  addToCart(product);
}

  return (
    <div className="card-container d-flex flex-wrap justify-content-center gap-5">
      {ProductWatch.map((product) => (
        <div className="card" style={{ width: "25rem"}} key={product.id}>
          <img
            src={product.image}
            className="card-img-top"
            alt={product.name}
          />
          <div className="card-body">
            <h2 className="card-title d-flex justify-content-center">{product.name}</h2>
            <p className="card-text ">Price: {product.price} TL</p>
            <p className="card-text">Details: {product.details}</p>
            <button type="button" className="btn btn-danger" onClick={() => handeAddToCart(product)}>Add to chart</button>
          </div>

        </div>
      ))}
    </div>
  );
};

export default CardWatch;
