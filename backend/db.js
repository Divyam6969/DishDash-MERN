const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://divyammalik2003:malik2003@cluster0.w3kxnxy.mongodb.net/DishDashMern?retryWrites=true&w=majority';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
    const catData = await mongoose.connection.db.collection("foodCategory");
    global.food_category = await catData.find({}).toArray() ;
    const fetchedData = await mongoose.connection.db.collection("Sample");
    global.food_items = await fetchedData.find({}).toArray() ;
    // console.log(global.food_items);
  
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

module.exports = mongoDB;
