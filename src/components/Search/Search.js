import React from "react";

const Search = ({ filteredProducts }) => {
  return (
    <div>
      {filteredProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Search;