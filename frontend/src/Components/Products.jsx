import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import cartu from "../assets/icons/carts.png";
import axios from 'axios';
import { FaFilter, FaTimes } from 'react-icons/fa'; // Import FaTimes for the close icon
import '../index.css'; // Import the index.css file


const ProductList = ({ addToCart }) => {
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const searchQuery = searchParams.get('search') || '';

    const location = useLocation();

    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const [priceRanges, setPriceRanges] = useState([]);
    const [categories, setCategories] = useState([]);
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

        if (priceRanges.length > 0) {
            filtered = filtered.filter(product => 
                priceRanges.some(range => {
                    const maxPrice = parseInt(range.split('under')[1].trim());
                    return product.price <= maxPrice;
                })
            );
        }

        if (categories.length > 0) {
            filtered = filtered.filter(product => categories.includes(product.category));
        }

        setFilteredProducts(filtered);
    }, [searchQuery, priceRanges, categories, allProducts]);

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

    const handleCloseFilter = () => {
        setShowFilter(false); // Close the filter section
    };

    const handlePriceRangeChange = (range) => {
        setPriceRanges(prevRanges =>
            prevRanges.includes(range)
                ? prevRanges.filter(r => r !== range)
                : [...prevRanges, range]
        );
    };

    const handleCategoryChange = (cat) => {
        setCategories(prevCats =>
            prevCats.includes(cat)
                ? prevCats.filter(c => c !== cat)
                : [...prevCats, cat]
        );
    };

    return (
        <div className="container mx-auto my-8 mt-28 flex">
            {/* Filter Section */}
            <div className={`w-1/4 p-4 fixed left-0 h-screen overflow-y-auto bg-white shadow-lg max-sm:w-full max-sm:fixed max-sm:top-0 max-sm:left-0 max-sm:bg-white max-sm:z-50 max-sm:shadow-lg ${showFilter ? 'max-sm:block' : 'max-sm:hidden'}`}>
                {/* Close Button for Small Screens */}
                <div className="flex justify-between items-center mb-4 max-sm:flex">
                    <h2 className="text-xl font-bold">Filters</h2>
                    <button
                        className="sm:hidden cursor-pointer text-gray-600 hover:text-gray-800"
                        onClick={handleCloseFilter}
                    >
                        <FaTimes className="w-6 h-6" /> {/* Close icon */}
                    </button>
                </div>
                <div className="mb-4">
                    <h3 className="font-semibold mb-2">Price Range</h3>
                    <div className="flex flex-col">
                        {['under 50', 'under 100', 'under 200', 'under 300'].map(range => (
                            <label key={range} className="checkbox-wrapper-46">
                                <input
                                    type="checkbox"
                                    className="inp-cbx"
                                    checked={priceRanges.includes(range)}
                                    onChange={() => handlePriceRangeChange(range)}
                                />
                                <span className="cbx">
                                    <span>
                                        <svg width="12px" height="10px" viewBox="0 0 12 10">
                                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                        </svg>
                                    </span>
                                    <span>{range}</span>
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
                <div className="mb-4">
                    <h3 className="font-semibold mb-2">Category</h3>
                    <div className="flex flex-col">
                        {['Fruits', 'Vegetables', 'Juice', 'Chocolate', 'Stationary'].map(cat => (
                            <label key={cat} className="checkbox-wrapper-46">
                                <input
                                    type="checkbox"
                                    className="inp-cbx"
                                    checked={categories.includes(cat)}
                                    onChange={() => handleCategoryChange(cat)}
                                />
                                <span className="cbx">
                                    <span>
                                        <svg width="12px" height="10px" viewBox="0 0 12 10">
                                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                        </svg>
                                    </span>
                                    <span>{cat}</span>
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            {/* Vertical Line Separator */}
            <div className="w-[2px] bg-gray-300 h-screen fixed left-1/4 ml-4 max-sm:hidden"></div>

            {/* Products Section */}
            <div className="w-3/4 p-4 ml-[25%] max-sm:ml-0 max-sm:w-full">
                {/* Filter Button (Visible only on small screens) */}
                <div className='flex items-center mb-5 bg-gray-100 px-1.5 py-1 w-fit rounded-lg max-sm:flex sm:hidden'>
                    <h2 onClick={handleFilterToggle} className='cursor-pointer'>Filters</h2>
                    <button className="cursor-pointer" onClick={handleFilterToggle}>
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
