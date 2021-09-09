const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb+srv://luisluft:QxdfxCN6wVajzBlP@cluster0.afnld.mongodb.net/test", {
      useNewUrlParser: true,
    });
  } catch (error) {
    console.log("Error connecting to mongodb: ", error);
  }
}

module.exports = { connect };
