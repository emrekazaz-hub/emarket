import { useCart } from "../../CartContext/CartContext";
import { Images } from "../../Images/Images";
import React, {useRef, useEffect} from "react";
import CardScrollDeneme from "../../CardScrollDeneme/CardScrollDeneme";
import './ProductsIPadStyle.css';

export const ProductIPad = [
  {
    id: "1ipad",
    name: "IPad",
    price: 1,
    details: "details about ipad 1",
    image: Images[0].ImageIPad,
  },
  {
    id: "2ipad",
    name: "IPad 2",
    price: 2,
    details: "details about ipad 2",
    image: Images[0].ImageIPad,
  },
  {
    id: "3ipad",
    name: "IPad 3",
    price: 3,
    details: "details about ipad 3",
    image: Images[0].ImageIPad,
  },
  {
    id: "4ipad",
    name: "IPad 4",
    price: 3,
    details: "details about ipad 4",
    image: Images[0].ImageIPad,
  },
  {
    id: "5ipad",
    name: "IPad 5",
    price: 3,
    details: "details about ipad 5",
    image: Images[0].ImageIPad,
  },
  {
    id: "6ipad",
    name: "IPad 6",
    price: 3,
    details: "details about ipad 6",
    image: Images[0].ImageIPad,
  },
];

const CardIPad = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const cardContentRef = useRef(null);

useEffect(() => {
  const handleScroll = () => {
    const cardRows = Array.from(document.getElementsByClassName("card-row"));

    cardRows.forEach((row) => {
      const rowOffsetTop = row.offsetTop;
      const rowHeight = row.clientHeight;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (
        rowOffsetTop < scrollPosition &&
        rowOffsetTop + rowHeight > scrollPosition
      ) {
        row.classList.add("animate");
      } else {
        row.classList.remove("animate");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <div>
      <CardScrollDeneme cardList={ProductIPad}/>
      <div className="card-container d-flex flex-wrap justify-content-center gap-5">
        {ProductIPad.map((product) => (
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
    </div>
  );
};

export default CardIPad;
