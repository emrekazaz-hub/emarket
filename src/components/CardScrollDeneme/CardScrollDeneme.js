import React, { useEffect, useRef } from "react";

const CardScrollDeneme = ({ cardList }) => {
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
    <div ref={cardContentRef}>
      {cardList.map((product) => {
        
      })}
    </div>
  );
};

export default CardScrollDeneme;
