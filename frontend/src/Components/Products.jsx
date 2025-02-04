import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import cartu from "../assets/icons/carts.png"
import axios from 'axios';

const ProductList = ({ addToCart }) => {
    // const [products, setProducts] = useState([]);
    
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const searchQuery = searchParams.get('search') || '';

    const location = useLocation();

    const [allProducts, setAllProducts] = useState([]);
  const [fruits, setFruits] = useState([]);
  const [vegetables, setVegetables] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [juice ,setJuice] = useState([]);
  const [chocolate ,setChocolate] = useState([]);
  const [stationary ,setStationary] = useState([]);

  const [quantities, setQuantities] = useState({});
   


useEffect(() => {
  if (location.hash) {
    const element = document.querySelector(location.hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}, [location]);


    useEffect(() => {
        const fetchProducts = async () => {
          try {
            // Fetch all products
            const allRes = await axios.get('https://daily-delights-ecommerce1.onrender.com/products');
            setAllProducts(allRes.data);
    
            // Fetch categorized products
            const fruitsRes = await axios.get('https://daily-delights-ecommerce1.onrender.com/category/Fruits');
            setFruits(fruitsRes.data);
    
            const vegetablesRes = await axios.get('https://daily-delights-ecommerce1.onrender.com/category/Vegetables');
            setVegetables(vegetablesRes.data);
    
            const snacksRes = await axios.get('https://daily-delights-ecommerce1.onrender.com/category/Snacks');
            setSnacks(snacksRes.data);

            const juiceRes = await axios.get('https://daily-delights-ecommerce1.onrender.com/category/Juice');
            setJuice(juiceRes.data);

            const chocolateRes = await axios.get('https://daily-delights-ecommerce1.onrender.com/category/Chocolate');
            setChocolate(chocolateRes.data);

            const stationaryRes = await axios.get('https://daily-delights-ecommerce1.onrender.com/category/Stationary');
            setStationary(stationaryRes.data);

          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchProducts();
      }, []);

      const filteredProducts = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

      const handleQuantityChange = (productId, change) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: Math.max(1, (prevQuantities[productId] || 1) + change)
        }));
    };

    const handleAddToCart = (product) => {
        const quantity = quantities[product._id] || 1;
        addToCart({ ...product, quantity });
    };

      const renderProduct = (product) => (
        <div key={product._id} className="border p-4 rounded-lg shadow-lg max-sm:p-2 max-sm:mx-1">
            <div className="bg-gray-200 rounded-lg max-sm:w-fit">
                <img src={product.imageUrl} alt={product.name} className="w-full h-40 rounded-md max-sm:w-[200px] max-sm:h-[100px]" />
            </div>
            <div>
                <h3 className="text-lg font-semibold mt-4 max-sm:text-[14px] max-sm:mt-2">{product.name}</h3>
                <div className='flex flex-col max-sm:flex-row max-sm:items-center max-sm:justify-between'>
                <p className="text-yellow-500 mt-2 max-sm:text-sm max-sm:mt-0">⭐ {product.rating}</p>
                <p className="text-green-500 font-bold mt-2 max-sm:mt-0">₹ {product.price}</p>
                </div>
            </div>
            <div className="flex gap-6 mt-1 items-center max-sm:flex-col max-sm:gap-1">
                <div className="flex gap-2 items-center">
                <button
                        className="bg-gray-100 p-0.5 px-1.5 rounded cursor-pointer max-sm:p-0 max-sm:px-1"
                        onClick={() => handleQuantityChange(product._id, 1)}
                    >
                        +
                    </button>
                    <span className='max-sm:text-sm'>{quantities[product._id] || 1}</span>
                    <button
                        className="bg-gray-100 p-0.5 px-1.5 rounded cursor-pointer max-sm:p-0 max-sm:px-1"
                        onClick={() => handleQuantityChange(product._id, -1)}
                        disabled={(quantities[product._id] || 1) <= 1}
                    >
                        -
                    </button>
                </div>
                <div className="flex bg-green-200 px-2 py-1 text-[12.8px] rounded-md gap-1 cursor-pointer hover:scale-95 max-sm:text-[12px]">
                    <button
                        onClick={() => handleAddToCart(product)} // Add product to cart
                    >
                        Add To Cart
                    </button>
                    <img className="w-5 max-sm:w-4 max-sm:h-4" src={cartu} alt="cart" />
                </div>
            </div>
        </div>
    );

    return (
        
        <div className="container mx-auto my-8 mt-28 ">
        <h1 id="all-products" className="text-3xl font-bold mb-4 ml-[550px] md:ml-[100px] max-sm:ml-5 max-sm:text-[18px]">All Products</h1>
        <div className="grid grid-cols-5 gap-4 max-sm:grid-cols-2 max-sm:gap-3 md:grid-cols-3">
        {filteredProducts.map(renderProduct)}
        </div>
  
        <h1 id="fruits" className="text-3xl font-bold mt-8 mb-4 ml-[600px] md:ml-[100px] max-sm:ml-5 max-sm:text-[18px]">Fruits</h1>
        <div  className="grid grid-cols-5 gap-4 max-sm:grid-cols-2 max-sm:gap-3 md:grid-cols-3">
          {fruits.map(renderProduct)}
        </div>
  
        <h1 id="vegetables" className="text-3xl font-bold mt-8 mb-4 ml-[600px] md:ml-[100px] max-sm:ml-5 max-sm:text-[18px]">Vegetables</h1>
        <div className="grid grid-cols-5 gap-4 max-sm:grid-cols-2 max-sm:gap-3 md:grid-cols-3">
          {vegetables.map(renderProduct)}
        </div>
  
        <h1 id="snacks" className="text-3xl font-bold mt-10 mb-4 ml-[600px] md:ml-[100px] max-sm:ml-5 max-sm:text-[18px]">Snacks</h1>
        <div className="grid grid-cols-5 gap-4 max-sm:grid-cols-2 max-sm:gap-3 md:grid-cols-3">
          {snacks.map(renderProduct)}
        </div>

        <h1 id="juice" className="text-3xl font-bold mt-10 mb-4 ml-[600px] md:ml-[100px] max-sm:ml-5 max-sm:text-[18px]">Juice</h1>
        <div className="grid grid-cols-5 gap-4 max-sm:grid-cols-2 max-sm:gap-3 md:grid-cols-3">
          {juice.map(renderProduct)}
        </div>

        <h1 id="chocolate" className="text-3xl font-bold mt-10 mb-4 ml-[600px] md:ml-[100px] max-sm:ml-5 max-sm:text-[18px]">Chocolates</h1>
        <div className="grid grid-cols-5 gap-4 max-sm:grid-cols-2 max-sm:gap-3 md:grid-cols-3">
          {chocolate.map(renderProduct)}
        </div>

        
        <h1 id="stationary" className="text-3xl font-bold mt-10 mb-4 ml-[600px] md:ml-[100px] max-sm:ml-5 max-sm:text-[18px]">Stationary</h1>
        <div className="grid grid-cols-5 gap-4 max-sm:grid-cols-2 max-sm:gap-3 md:grid-cols-3">
          {stationary.map(renderProduct)}
        </div>



      </div>

        
    );
};

export default ProductList
