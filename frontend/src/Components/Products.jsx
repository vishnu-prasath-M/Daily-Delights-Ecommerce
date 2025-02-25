import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import cartu from "../assets/icons/carts.png";
import axios from 'axios';
import { FaFilter } from 'react-icons/fa';

const ProductList = ({ addToCart }) => {
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const searchQuery = searchParams.get('search') || '';

    const location = useLocation();

    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const [priceRange, setPriceRange] = useState('');
    const [category, setCategory] = useState('');
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
                const allRes = await axios.get('https://daily-delights-ecommerce1.onrender.com/products');
                setAllProducts(allRes.data);
                setFilteredProducts(allRes.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        let filtered = allProducts.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (priceRange) {
            const maxPrice = parseInt(priceRange.split('under')[1].trim());
            filtered = filtered.filter(product => product.price <= maxPrice);
        }

        if (category) {
            filtered = filtered.filter(product => product.category === category);
        }

        setFilteredProducts(filtered);
    }, [searchQuery, priceRange, category, allProducts]);

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
        <div key={product._id} className="border p-4 rounded-lg shadow-lg max-sm:p-2 max-sm:mx-1 max-sm:w-full">
            <div className="bg-gray-200 rounded-lg max-sm:w-full">
                <img src={product.imageUrl} alt={product.name} className="w-full h-40 rounded-md max-sm:w-full max-sm:h-40 object-fill" />
            </div>
            <div>
                <h3 className="text-lg font-semibold mt-4 max-sm:text-[14px] max-sm:mt-2">{product.name}</h3>
                <div className='flex flex-row justify-between max-sm:flex-row max-sm:items-center max-sm:justify-between'>
                    <p className="text-yellow-500 mt-2 max-sm:text-sm max-sm:mt-0">⭐ {product.rating}</p>
                    <p className="text-green-500 font-bold mt-2 max-sm:mt-0">₹ {product.price}</p>
                </div>
            </div>
            <div className="flex flex-col gap-6 mt-1 items-center max-sm:flex-col max-sm:gap-1">
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
                <div className="flex bg-green-200 px-10 py-2 text-[12.8px] rounded-md gap-1 cursor-pointer hover:scale-95 max-sm:text-[12px]">
                    <button
                        onClick={() => handleAddToCart(product)}
                    >
                        Add To Cart
                    </button>
                    <img  onClick={() => handleAddToCart(product)} className="w-5 h-5 max-sm:w-4 max-sm:h-4" src={cartu} alt="cart" />
                </div>
            </div>
        </div>
    );

    const handleFilterToggle = () => {
        setShowFilter(!showFilter);
    };

    const handlePriceRangeChange = (range) => {
        if (priceRange === range) {
            setPriceRange(''); // Deselect if the same option is clicked again
        } else {
            setPriceRange(range); // Select the new option
        }
        setShowFilter(false);
    };

    const handleCategoryChange = (cat) => {
        if (category === cat) {
            setCategory(''); // Deselect if the same option is clicked again
        } else {
            setCategory(cat); // Select the new option
        }
        setShowFilter(false);
    };

    return (
        <div className="container mx-auto my-8 mt-28 flex">
            {/* Filter Section */}
            <div className={`w-1/4 p-4 fixed left-0 h-screen overflow-y-auto bg-white shadow-lg max-sm:w-full max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:bg-white max-sm:z-50 max-sm:shadow-lg ${showFilter ? 'max-sm:block' : 'max-sm:hidden'}`}>
                <h2 className="text-xl font-bold mb-4">Filters</h2>
                <div className="mb-4">
                    <h3 className="font-semibold mb-2">Price Range</h3>
                    <div className="flex flex-col">
                        <label>
                            <input
                                type="radio"
                                name="price"
                                checked={priceRange === 'under 50'}
                                onChange={() => handlePriceRangeChange('under 50')}
                            /> Under 50
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="price"
                                checked={priceRange === 'under 100'}
                                onChange={() => handlePriceRangeChange('under 100')}
                            /> Under 100
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="price"
                                checked={priceRange === 'under 200'}
                                onChange={() => handlePriceRangeChange('under 200')}
                            /> Under 200
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="price"
                                checked={priceRange === 'under 300'}
                                onChange={() => handlePriceRangeChange('under 300')}
                            /> Under 300
                        </label>
                    </div>
                </div>
                <div className="mb-4">
                    <h3 className="font-semibold mb-2">Category</h3>
                    <div className="flex flex-col">
                        <label>
                            <input
                                type="radio"
                                name="category"
                                checked={category === 'Fruits'}
                                onChange={() => handleCategoryChange('Fruits')}
                            /> Fruits
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="category"
                                checked={category === 'Vegetables'}
                                onChange={() => handleCategoryChange('Vegetables')}
                            /> Vegetables
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="category"
                                checked={category === 'Juice'}
                                onChange={() => handleCategoryChange('Juice')}
                            /> Juice
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="category"
                                checked={category === 'Chocolate'}
                                onChange={() => handleCategoryChange('Chocolate')}
                            /> Chocolate
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="category"
                                checked={category === 'Stationary'}
                                onChange={() => handleCategoryChange('Stationary')}
                            /> Stationary
                        </label>
                    </div>
                </div>
            </div>

            {/* Products Section */}
            <div className="w-3/4 p-4 ml-[25%] max-sm:ml-0 max-sm:w-full">
            <div className='flex items-center mb-5 bg-gray-100 px-1.5 py-1 w-fit rounded-lg'>
            <h2 onClick={handleFilterToggle} className='cursor-pointer'>Filters</h2>
            <button className="sm:hidden cursor-pointer" onClick={handleFilterToggle}>
                    <FaFilter /> 
                    
                </button>
                
            </div>
                
                <h1 id="all-products" className="text-3xl font-bold mb-4">All Products</h1>
                <div className="grid grid-cols-4 gap-4 max-sm:grid-cols-1 max-sm:gap-7 max-sm:mx-8">
                    {filteredProducts.map(renderProduct)}
                </div>
            </div>
        </div>
    );
};

export default ProductList;