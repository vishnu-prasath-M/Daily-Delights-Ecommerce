import React from 'react';

import cluster from '../assets/images/cluster.png';
import tea from '../assets/images/tea.jpg';
import olive from '../assets/images/oliv.jpg';

const productss = [
  {
    image: cluster, // Imported image
    title: 'NatureBloom Granola Clusters',
    description: 'Healthy snack or breakfast option',
  },
  {
    image: tea, // Imported image
    title: 'PureEssence Herbal Tea',
    description: 'Relaxing and soothing beverage',
  },
  {
    image: olive, // Imported image
    title: 'GoldenHarvest Olive Oil',
    description: 'Ideal for cooking and salad dressing',
  },
];

const NewArrived = () => {
  return (
    <div className="p-6 bg-white ">
      <h2 className="text-2xl font-bold mb-4 ml-5 max-sm:text-lg">Newly Arrived Brands</h2>
      <div className="flex gap-6 justify-between mx-10 max-sm:mx-5  max-sm:flex-col">
        {productss.map((product, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 w-[300px] max-sm:w-[250px] hover:scale-105 cursor-pointer">
            <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded-t-lg" />
            <h3 className="mt-4 text-lg font-bold max-sm:text-sm">{product.title}</h3>
            <p className="text-gray-600 max-sm:text-sm">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrived;
