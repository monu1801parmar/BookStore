// const mongoose = require("mongoose")

// const conn = async ()=>{
//     try{
//     await mongoose.connect(`${process.env.URI}`);
//     console.log("Connected to DataBase")
//     }catch (error) {
//         console.log(error);
//     }
// };
// conn();


// 

const mongoose = require("mongoose");

const conn = async () => {
  try {
    await mongoose.connect(process.env.URI, {
      dbName: "bookstore",
    });
    console.log("✅ Connected to DataBase with atlas");
  } catch (error) {
    console.log("❌ Error connecting to DB:", error.message);
  }
};

module.exports = conn;


