import React, { useState } from 'react';

const OrderTracker = () => {
  const [showTracker, setShowTracker] = useState(false);

  const handleTrackOrder = () => {
    setShowTracker(true);
  };

  return (
    <div className="p-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleTrackOrder}
      >
        Track Order
      </button>

      {showTracker && (
        <div className="mt-4 ">
          <div className="flex justify-between items-center">
            <div className="flex-1 text-center">
              <div className="bg-green-500 w-8 h-8 rounded-full mx-auto"></div>
              <p className="mt-2">Ordered</p>
            </div>
            <div className="flex-1 border-t-4 border-green-500"></div>
            <div className="flex-1 text-center">
              <div className="bg-green-500 w-8 h-8 rounded-full mx-auto"></div>
              <p className="mt-2">Shipped</p>
            </div>
            <div className="flex-1 border-t-4 border-gray-300"></div>
            <div className="flex-1 text-center">
              <div className="bg-gray-300 w-8 h-8 rounded-full mx-auto"></div>
              <p className="mt-2">Arriving Tomorrow</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderTracker;
