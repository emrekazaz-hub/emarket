import { useCart } from "../../CartContext/CartContext";
import { Images } from "../../Images/Images";
import React, { useEffect, useRef } from "react";
import "./Products.css";
import CardScrollDeneme from "../../CardScrollDeneme/CardScrollDeneme";

export const ProductAirpods = [
  {
    id: "1air",
    name: "Airpods 1",
    price: 1,
    details: "details about airpods 1",
    image: Images[0].ImageAirpods,
  },
  {
    id: "2air",
    name: "Airpods 2",
    price: 2,
    details: "details about airpods 2",
    image: Images[0].ImageAirpods2,
  },
  {
    id: "3air",
    name: "Airpods 3",
    price: 3,
    details: "details about airpods 3",
    image: Images[0].ImageAirpods,
  },
  {
    id: "4air",
    name: "Airpods 4",
    price: 3,
    details: "details about airpods 4",
    image: Images[0].ImageAirpods2,
  },
  {
    id: "5air",
    name: "Airpods 5",
    price: 3,
    details: "details about airpods 5",
    image: Images[0].ImageAirpods,
  },
  {
    id: "6air",
    name: "Airpods 6",
    price: 3,
    details: "details about airpods 6",
    image: Images[0].ImageAirpods2,
  },
  {
    id: "7air",
    name: "Airpods 7",
    price: 3,
    details: "details about airpods 7",
    image: Images[0].ImageAirpods,
  },
  {
    id: "8air",
    name: "Airpods 8",
    price: 3,
    details: "details about airpods 8",
    image: Images[0].ImageAirpods2,
  },
  {
    id: "9air",
    name: "Airpods 9",
    price: 3,
    details: "details about airpods 9",
    image: Images[0].ImageAirpods,
  },
  {
    id: "10air",
    name: "Airpods 10",
    price: 3,
    details: "details about airpods 10",
    image: Images[0].ImageAirpods2,
  },
];

const CardAirpods = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleScrollDeneme = (scroll) => {
    CardScrollDeneme(scroll)
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
    <div className="custom-card-container">
      <div
        className="card-container d-flex flex-wrap justify-content-center gap-5"
        ref={cardContentRef}
      >
        {ProductAirpods.map((product, index) => (
          <div
            className={`card animatee card-row ${index === 0 ? "animate" : ""}`}
            style={{ width: "25rem", transitionDelay: `${index * 0.1}s` }}
            key={product.id}
          >
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
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardAirpods;
