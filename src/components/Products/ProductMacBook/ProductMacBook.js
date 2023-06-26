import { useCart } from "../../CartContext/CartContext";
import "./StyleProductMacBook.css";
import { Images } from "../../Images/Images";


export const ProductMacBook = [
  {
    id: "1mac",
    name: "MacBookPro 1",
    price: 1,
    details: "details about macbook 1",
    image: Images[0].ImageMacBook
  },
  {
    id: "2mac",
    name: "MacBookPro 2",
    price: 2,
    details: "details about macbook 2",
    image: Images[0].ImageMacBook,
  },
  {
    id: "3mac",
    name: "MacBookPro 3",
    price: 3,
    details: "details about macbook 3",
    image: Images[0].ImageMacBook,
  },
  {
    id: "4mac",
    name: "MacBookPro 4",
    price: 3,
    details: "details about macbook 4",
    image: Images[0].ImageMacBook,
  },
  {
    id: "5mac",
    name: "MacBookPro 5",
    price: 3,
    details: "details about macbook 5",
    image: Images[0].ImageMacBook,
  },
  {
    id: "6mac",
    name: "MacBookPro 6",
    price: 3,
    details: "details about macbook 6",
    image: Images[0].ImageMacBook,
  },
];

const CardMacBook = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="card-container d-flex flex-wrap justify-content-center gap-5">
      {ProductMacBook.map((product) => (
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
              Add to chart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardMacBook;
