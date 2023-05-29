import React, { createContext, useContext, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Alışveriş Sepeti Bağlamı Oluşturma
const CartContext = createContext();

// Alışveriş Sepeti Bileşeni
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  // Sepete Ürün Ekleme Fonksiyonu
  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };
      if (updatedCartItems.hasOwnProperty(product.id)) {
        updatedCartItems[product.id] = {
          ...updatedCartItems[product.id],
          quantity: updatedCartItems[product.id].quantity + 1,
        };
      } else {
        updatedCartItems[product.id] = { product: product, quantity: 1 };
      }
      return updatedCartItems;
    });

    setShowAlert(true);
  };

  // Sepetten Ürün Kaldırma Fonksiyonu
  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };
      delete updatedCartItems[productId];
      return updatedCartItems;
    });
  };

  // Sepeti Temizleme Fonksiyonu
  const clearCart = () => {
    setCartItems([]);
  };

  // Toplam Fiyat Hesaplama
  const getTotalPrice = () => {
    let totalPrice = 0;
    Object.values(cartItems).forEach((item) => {
      totalPrice += item.product.price * item.quantity;
    });
    return totalPrice;
  };

  // Toast mesajını gösterme
  useEffect(() => {
    if (showAlert) {
      toast.success("Ürün sepete eklendi", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setShowAlert(false);
    }
  }, [showAlert]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, getTotalPrice }}
    >
      {children}
      <ToastContainer />
    </CartContext.Provider>
  );
};

// Alışveriş Sepeti Bağlamını Kullanma
export const useCart = () => {
  return useContext(CartContext);
};
