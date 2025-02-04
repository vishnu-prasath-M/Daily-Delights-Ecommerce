import React, { useEffect, useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    return storedOrders.filter(item => item && item.imageUrl && item.name && item.price);
  });

  const [showTracker, setShowTracker] = useState(false);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders.filter(item => item && item.imageUrl && item.name && item.price));
  }, []);

  const handleCancelOrder = (index) => {
    const updatedOrders = orders.filter((_, i) => i !== index);
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  const handleTrackOrder = () => {
    setShowTracker(true); // Show the tracker when "Track Order" is clicked
  };

  return (
    <div className="container mx-auto p-6 flex flex-col justify-center items-center mt-20 max-sm:mt-[100px] md:mt-[130px] max-sm:text-sm">
      <h2 className="text-2xl font-bold mb-4 max-sm:text-[20px]">Your Orders</h2>

      {orders.length === 0 ? (
        <p className="text-gray-600">You have no orders yet</p>
      ) : (
        <div className="gap-6 flex flex-wrap justify-center">
          {orders.map((item, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-lg w-[250px] max-sm:w-[250px] max-sm:h-[290px]">
              <img src={item.imageUrl} alt={item.name} className="w-full h-32 rounded-md max-sm:w-[180px] max-sm:h-[120px]" />
              <h3 className="text-lg font-semibold mt-4 max-sm:mt-1 max-sm:text-[15px]">{item.name}</h3>
              <div className="flex flex-col max-sm:flex-row max-sm:gap-9">
                <p className="text-yellow-500 mt-2">⭐ {item.rating}</p>
                <p className="text-green-500 font-bold mt-2">₹ {item.price}</p>
              </div>
              <button 
                className="mt-4 px-2 py-1 bg-red-500 text-white rounded-md"
                onClick={() => handleCancelOrder(index)}
              >
                Cancel Order
              </button>

              <button 
        className="mt-8 px-2 py-1 bg-blue-500 text-white rounded-md"
        onClick={handleTrackOrder}
      >
        Track Order
      </button>
            </div>
          ))}
        </div>
      )}

      

      {showTracker && (
        <div className="mt-8 w-full">
          <div className="flex justify-between items-center max-w-3xl mx-auto">
            <div className="flex-1 text-center">
              <div className="bg-green-500 w-5 h-5 rounded-full mx-auto"></div>
              <p className="mt-2">Ordered</p>
            </div>
            <div className="flex-1 border-t-4 border-green-500"></div>
            <div className="flex-1 text-center">
              <div className="bg-green-500 w-5 h-5 rounded-full mx-auto"></div>
              <p className="mt-2">Shipped</p>
            </div>
            <div className="flex-1 border-t-4 border-gray-300"></div>
            <div className="flex-1 text-center">
              <div className="bg-gray-300 w-5 h-5 rounded-full mx-auto"></div>
              <p className="mt-2">Arriving Tomorrow</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
