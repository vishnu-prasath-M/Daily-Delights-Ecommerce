import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import mygif from "../assets/tick2.gif";
import buy from '../assets/icons/check-out.png';

const Cart = ({ cartItems: propCartItems, removeFromCart, updateQuantity }) => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orders, setOrders] = useState(() => {
    return JSON.parse(localStorage.getItem('orders')) || [];
  });

  // Initialize cartItems from localStorage or props
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    return storedCartItems.length > 0 ? storedCartItems : propCartItems || [];
  });

  const navigate = useNavigate();

  // Sync cartItems with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Sync cartItems with propCartItems if propCartItems changes
  useEffect(() => {
    if (propCartItems && propCartItems.length > 0) {
      setCartItems(propCartItems);
    }
  }, [propCartItems]);

  // Sync orders with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const handleOrderNow = (index) => {
    const orderedItem = cartItems[index]; // Get the selected item based on index
    setOrderPlaced(true);

    // Add the ordered item to the orders list
    setOrders((prevOrders) => {
      const updatedOrders = [...prevOrders, orderedItem];
      localStorage.setItem('orders', JSON.stringify(updatedOrders));
      return updatedOrders;
    });

    // Remove the item from the cart
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart); // Update state
    localStorage.setItem('cartItems', JSON.stringify(updatedCart)); // Update localStorage

    setTimeout(() => {
      setOrderPlaced(false);
      navigate('/orders'); // Navigate to orders page after placing the order
    }, 3000); // Simulate order processing delay
  };

  const updateQuantities = (index, newQuantity) => {
    const updatedCart = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart); // Update state
    localStorage.setItem('cartItems', JSON.stringify(updatedCart)); // Save updated cart to localStorage
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index); // Remove the item at the specified index
    setCartItems(updatedCart); // Update state
    localStorage.setItem('cartItems', JSON.stringify(updatedCart)); // Update localStorage
  };

  return (
    <div className="container mx-auto p-6 flex flex-col justify-center items-center mt-20 max-sm:mt-[100px] md:mt-[100px] max-sm:text-sm">
      <div>
        <h2 className="text-2xl font-bold mb-4 max-sm:text-[20px]">Your Cart</h2>
      </div>

      {orderPlaced && (
        <div className="bg-gray-200 p-4 rounded-lg flex flex-col items-center order-placed absolute top-[100px] left-[550px] text-[18px] max-sm:left-[80px] max-sm:top-[50%]">
          <img src={mygif} alt="Order placed" />
          <h1>Order Placed Successfully!</h1>
        </div>
      )}

      <div>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty</p>
        ) : (
          <div className="gap-6 flex flex-wrap">
            {cartItems.map((item, index) => (
              <div key={index} className="border p-4 rounded-lg shadow-lg w-[270px] max-sm:w-[250px] max-sm:h-[290px]">
                <img src={item.imageUrl} alt={item.name} className="w-full h-32 rounded-md max-sm:w-[180px] max-sm:h-[120px]" />
                <h3 className="text-lg font-semibold mt-4 max-sm:mt-1 max-sm:text-[15px]">{item.name}</h3>
                <div className='flex flex-col max-sm:flex-row max-sm:gap-9'>
                  <p className="text-yellow-500 mt-2">⭐ {item.rating}</p>
                  <p className="text-green-500 font-bold mt-2">₹ {item.price}</p>
                </div>
                <div className="flex items-center mt-2">
                  <button
                    className="bg-gray-100 p-0.5 px-1.5 rounded cursor-pointer"
                    onClick={() => updateQuantities(index, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="bg-gray-100 p-0.5 px-1.5 rounded cursor-pointer"
                    onClick={() => updateQuantities(index, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='flex bg-red-500 text-white hover:bg-red-700 px-2 py-1 mt-4 rounded w-fit h-fit justify-center items-center'>
                    <button onClick={() => handleRemoveFromCart(index)}>
                      Remove
                    </button>
                  </div>
                  {cartItems.length > 0 && (
                    <div className='bg-blue-500 text-white px-2 py-1 mt-4 rounded hover:bg-blue-700 flex gap-2 w-fit justify-center items-center max-sm:p-1'>
                      <button onClick={() => handleOrderNow(index)}>
                        Order Now
                      </button>
                      <img onClick={() => handleOrderNow(index)} className='w-[27px] h-[20px] cursor-pointer' src={buy} alt="Order" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;