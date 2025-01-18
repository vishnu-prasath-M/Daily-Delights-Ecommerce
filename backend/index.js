const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI,{
    serverSelectionTimeoutMS: 10000, 
    socketTimeoutMS: 45000,        
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error("failed to connect"));

// Define a Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  price: Number,
  imageUrl: String,
  category: String,
});

const Product = mongoose.model('Product', productSchema,'products');

// Seed database with 5 products
const seedProducts = async () => {
  const products = [
    { name: 'Tomato Ketchup', rating: 4.5, price: 45, imageUrl: '/assets/snacks/s (15).jpg', category: 'Snacks'},
    { name: 'Lays Classic Chips', rating: 4.9, price: 20, imageUrl: "/assets/snacks/s (7).jpg", category: 'Snacks' },
    { name: 'PopCorn', rating: 3.0, price: 100, imageUrl: "/assets/snacks/s (4).jpg", category: 'Snacks' },
    { name: 'Mayonaise', rating: 4.0, price: 90, imageUrl: "/assets/snacks/s (17).jpg", category: 'Snacks' },
    { name: 'Cheetos', rating: 4.5, price: 50, imageUrl: "/assets/snacks/s (10).jpg", category: 'Snacks' },
    { name: 'Pringles', rating: 4.5, price: 50, imageUrl: "/assets/snacks/s (3).jpg", category: 'Snacks' },
    { name: 'Roasted almonds', rating: 4.5, price: 50, imageUrl: "/assets/snacks/s (1).jpg", category: 'Snacks' },
    { name: 'Lays strawberry', rating: 4.5, price: 50, imageUrl: "/assets/snacks/s (12).jpg", category: 'Snacks' },
  ];
  const fruits = [
    { name: 'Jerry', rating: 4.5, price: 150, imageUrl: '/assets/Fruits/f (11).jpg', category: 'Fruits' },
    { name: 'Grapes', rating: 4.0, price: 50, imageUrl: '/assets/Fruits/f (14).jpg', category: 'Fruits' },
    { name: 'Banana', rating: 4.7, price: 80, imageUrl: '/assets/Fruits/f (3).jpg', category: 'Fruits' },
    { name: 'Pomegranate', rating: 4.7, price: 120, imageUrl: '/assets/Fruits/f (8).jpg', category: 'Fruits' },
    { name: 'Strawberries', rating: 4.7, price: 200, imageUrl: '/assets/Fruits/f (17).jpg', category: 'Fruits' },
    { name: 'Mango', rating: 4.7, price: 150, imageUrl: '/assets/Fruits/f (18).jpg', category: 'Fruits' },
    { name: 'Papaya', rating: 4.7, price: 90, imageUrl: '/assets/Fruits/f (12).jpg', category: 'Fruits' },
    { name: 'Apple', rating: 4.7, price: 180, imageUrl: '/assets/Fruits/f (15).jpg', category: 'Fruits' },
    { name: 'Watermelon', rating: 4.7, price: 90, imageUrl: '/assets/Fruits/f (1).jpg', category: 'Fruits' },
    { name: 'Pineapple', rating: 4.7, price: 60, imageUrl: '/assets/Fruits/f (7).jpg', category: 'Fruits' },
    { name: 'Custard apple', rating: 4.7, price: 70, imageUrl: '/assets/Fruits/f (19).jpg', category: 'Fruits' },
    { name: 'Dragon Fruit', rating: 4.7, price: 90, imageUrl: '/assets/Fruits/f (2).jpg', category: 'Fruits' },
    { name: 'Lemon', rating: 4.7, price: 50, imageUrl: '/assets/Fruits/f (5).jpg', category: 'Fruits' },
    { name: 'Orange', rating: 4.7, price: 120, imageUrl: '/assets/Fruits/f (4).jpg', category: 'Fruits' },
    { name: 'Avocado', rating: 4.7, price: 45, imageUrl: '/assets/Fruits/f (16).jpg', category: 'Fruits' },
    { name: 'Guava', rating: 4.7, price: 30, imageUrl: '/assets/Fruits/f (22).jpg', category: 'Fruits' },
    { name: 'Jackfruit', rating: 4.7, price: 100, imageUrl: '/assets/Fruits/f (10).jpg', category: 'Fruits' },

  ];


  const vegetables = [
    { name: 'Carrot', rating: 4.3, price: 40, imageUrl: '/assets/Veg/veg (13).jpg', category: 'Vegetables' },
    { name: 'Coconut', rating: 4.6, price: 38, imageUrl: '/assets/Veg/veg (17).jpg', category: 'Vegetables' },
    { name: 'Pumpkin', rating: 4.8, price: 45, imageUrl: '/assets/Veg/veg (23).jpg', category: 'Vegetables' },
    { name: 'Cucumber', rating: 4.9, price: 20, imageUrl: '/assets/Veg/veg.jpg', category: 'Vegetables' },
    { name: 'Coriander', rating: 4.5, price: 30, imageUrl: '/assets/Veg/veg (19).jpg', category: 'Vegetables' },
    { name: 'Cauliflower', rating: 4.9, price: 60, imageUrl: '/assets/Veg/veg (9).jpg', category: 'Vegetables' },
    { name: 'Brinjal', rating: 4.5, price: 42, imageUrl: '/assets/Veg/veg (6).jpg', category: 'Vegetables' },
    { name: 'Lady’s Finger', rating: 4.1, price: 28, imageUrl: '/assets/Veg/veg (5).jpg', category: 'Vegetables' },
    { name: 'Tomato', rating: 4.9, price: 38, imageUrl: '/assets/Veg/veg (1).jpg', category: 'Vegetables' },
    { name: 'Sweet Potato ', rating: 4.0, price: 20, imageUrl: '/assets/Veg/veg (21).jpg', category: 'Vegetables' },
    { name: 'Garlic', rating: 4.0, price: 25, imageUrl: '/assets/Veg/veg (14).jpg', category: 'Vegetables' },
    { name: 'Green Chilli ', rating: 4.9, price: 30, imageUrl: '/assets/Veg/veg (8).jpg', category: 'Vegetables' },
    { name: 'Onion ', rating: 4.9, price: 50, imageUrl: '/assets/Veg/veg (20).jpg', category: 'Vegetables' },
    { name: 'Potato ', rating: 4.0, price: 30, imageUrl: '/assets/Veg/veg (3).jpg', category: 'Vegetables' },
    { name: 'Red Chilli ', rating: 4.7, price: 20, imageUrl: '/assets/Veg/veg (22).jpg', category: 'Vegetables' },
    { name: 'Ginger', rating: 4.7, price: 25, imageUrl: '/assets/Veg/veg (15).jpg', category: 'Vegetables' },
    { name: 'Bitter Gourd ', rating: 4.7, price: 50, imageUrl: '/assets/Veg/veg (28).jpg', category: 'Vegetables' },
    { name: 'Winter Melon-neer posani', rating: 4.0, price: 70, imageUrl: '/assets/Veg/veg (26).jpg', category: 'Vegetables' },
    { name: 'Beet Root', rating: 4.9, price: 45, imageUrl: '/assets/Veg/veg (2).jpg', category: 'Vegetables' },
    { name: 'Capsicum ', rating: 4.7, price: 50, imageUrl: '/assets/Veg/veg (24).jpg', category: 'Vegetables' },
    { name: ' RED Capsicum ', rating: 4.7, price: 50, imageUrl: '/assets/Veg/veg (16).jpg', category: 'Vegetables' },
    { name: 'Radish', rating: 4.0, price: 30, imageUrl: '/assets/Veg/veg (18).jpg', category: 'Vegetables' },
    { name: 'Cabbage ', rating: 4.0, price: 45, imageUrl: '/assets/Veg/veg (12).jpg', category: 'Vegetables' },
    { name: 'Curry Leaf', rating: 4.0, price: 10, imageUrl: '/assets/Veg/veg (25).jpg', category: 'Vegetables' },
   
  ];

  const juice = [
    { name: 'Tropicana Orange Juice', rating: 4.5, price: 20, imageUrl: '/assets/juice/j (1).jpg', category: 'Juice'},
    { name: 'Frooti Mango Juice', rating: 4.5, price: 50, imageUrl: '/assets/juice/j (2).jpg', category: 'Juice'},
    { name: 'Tropicana Apple Juice', rating: 4.5, price: 50, imageUrl: '/assets/juice/j (3).jpg', category: 'Juice'},
    { name: 'Fanta', rating: 4.5, price: 35, imageUrl: '/assets/juice/j (4).jpg', category: 'Juice'},
    { name: 'Mirinda', rating: 4.5, price: 35, imageUrl: '/assets/juice/j (5).jpg', category: 'Juice'},
    { name: 'Fanta Orange Juice', rating: 4.5, price: 35, imageUrl: '/assets/juice/j (6).jpg', category: 'Juice'},
    { name: 'Cococola', rating: 4.5, price: 45, imageUrl: '/assets/juice/j (7).jpg', category: 'Juice'},
    { name: 'Basil seed Juice', rating: 4.5, price: 40, imageUrl: '/assets/juice/j (8).jpg', category: 'Juice'},
    { name: 'Ginger Juice', rating: 4.5, price: 30, imageUrl: '/assets/juice/j (9).jpg', category: 'Juice'},
    { name: 'Sprite', rating: 4.5, price: 45, imageUrl: '/assets/juice/j (10).jpg', category: 'Juice'},
    
  ];

  const chocolates = [
    { name: 'Kisses Chocolate', rating: 4.5, price: 30, imageUrl: '/assets/Chocos/ch (1).jpg', category: 'Chocolate'},
    { name: 'Dairy Milk MiniBar', rating: 4.5, price: 40, imageUrl: '/assets/Chocos/ch (2).jpg', category: 'Chocolate'},
    { name: 'Hugs Chocolate', rating: 4.5, price: 40, imageUrl: '/assets/Chocos/ch (3).jpg', category: 'Chocolate'},
    { name: 'Dairy Milk', rating: 4.5, price: 40, imageUrl: '/assets/Chocos/ch (4).jpg', category: 'Chocolate'},
    { name: 'Hersheys Chocolate', rating: 4.5, price: 40, imageUrl: '/assets/Chocos/ch (5).jpg', category: 'Chocolate'},
    { name: 'Popcorn Chocolate', rating: 4.5, price: 40, imageUrl: '/assets/Chocos/ch (6).jpg', category: 'Chocolate'},
    { name: 'KitKat', rating: 4.5, price: 40, imageUrl: '/assets/Chocos/ch (7).jpg', category: 'Chocolate'},
    { name: 'Oreo Chocolate', rating: 4.5, price: 40, imageUrl: '/assets/Chocos/ch (8).jpg', category: 'Chocolate'},
    { name: 'Kisses Dark Chocolate', rating: 4.5, price: 40, imageUrl: '/assets/Chocos/ch (9).jpg', category: 'Chocolate'},


  ];

  const stationary = [
    { name: 'Huawei File', rating: 4.5, price: 20, imageUrl: '/assets/Station/st (1).jpg', category: 'Stationary'},
    { name: 'Knife', rating: 4.5, price: 20, imageUrl: '/assets/Station/st (2).jpg', category: 'Stationary'},
    { name: 'Kid Pencil', rating: 4.5, price: 20, imageUrl: '/assets/Station/st (3).jpg', category: 'Stationary'},
    { name: 'Star pencil', rating: 4.5, price: 20, imageUrl: '/assets/Station/st (4).jpg', category: 'Stationary'},
    { name: 'Binding notebook', rating: 4.5, price: 20, imageUrl: '/assets/Station/st (5).jpg', category: 'Stationary'},
    { name: 'Color Scale', rating: 4.5, price: 20, imageUrl: '/assets/Station/st (6).jpg', category: 'Stationary'},
    { name: 'Calculator', rating: 4.5, price: 20, imageUrl: '/assets/Station/st (7).jpg', category: 'Stationary'},
    { name: 'pen eraser', rating: 4.5, price: 20, imageUrl: '/assets/Station/st (9).jpg', category: 'Stationary'},
    { name: 'Toy BackBag', rating: 4.5, price: 20, imageUrl: '/assets/Station/st (11).jpg', category: 'Stationary'},
    { name: 'Purse Pouch', rating: 4.5, price: 20, imageUrl: '/assets/Station/st (12).jpg', category: 'Stationary'},
    { name: 'BalPoint pens', rating: 4.5, price: 20, imageUrl: '/assets/Station/st (13).jpg', category: 'Stationary'},
    { name: 'color file', rating: 4.5, price: 20, imageUrl: '/assets/Station/st (14).jpg', category: 'Stationary'},
    { name: 'kids cooling glass', rating: 4.5, price: 20, imageUrl: '/assets/Station/st (15).jpg', category: 'Stationary'},
    { name: 'clipboard', rating: 4.5, price: 20, imageUrl: '/assets/Station/st (16).jpg', category: 'Stationary'},
    { name: 'Lighting brush', rating: 4.5, price: 20, imageUrl: '/assets/Station/st (17).jpg', category: 'Stationary'},
    { name: 'Sharpner', rating: 4.5, price: 20, imageUrl: '/assets/Station/st (18).jpg', category: 'Stationary'},
    { name: 'kid camera', rating: 4.5, price: 20, imageUrl: '/assets/Station/st (19).jpg', category: 'Stationary'},
    { name: 'color tapes', rating: 4.5, price: 20, imageUrl: '/assets/Station/st (21).jpg', category: 'Stationary'},
    { name: 'fix gums', rating: 4.5, price: 20, imageUrl: '/assets/Station/st (22).jpg', category: 'Stationary'},
    { name: 'Scissors', rating: 4.5, price: 20, imageUrl: '/assets/Station/st (26).jpg', category: 'Stationary'},
    { name: 'invisible tapes', rating: 4.5, price: 20, imageUrl: '/assets/Station/st (29).jpg', category: 'Stationary'},
    { name: 'Notebook', rating: 4.5, price: 20, imageUrl: '/assets/Station/st (31).jpg', category: 'Stationary'},
    { name: 'plastic eraser', rating: 4.5, price: 20, imageUrl: '/assets/Station/st (33).jpg', category: 'Stationary'},
    { name: 'Long Notes', rating: 4.5, price: 20, imageUrl: '/assets/Station/st (34).jpg', category: 'Stationary'},


  ];



  await Product.deleteMany({});
  await Product.insertMany([...products, ...fruits, ...vegetables, ...juice, ...chocolates, ...stationary]);
  console.log('Database seeded!');
};

seedProducts();

app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/category/:category', async (req, res) => {
  try {
    const category = req.params.category;
    const products = await Product.find({ category });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));