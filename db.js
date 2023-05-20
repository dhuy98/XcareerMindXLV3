const { MongoClient } = require("mongodb");

const db = {};

const connectToDb = () => {
  const client = new MongoClient("mongodb+srv://web_65:7vIC6ZHyo3CpZ7rS@cluster0.sugjv2y.mongodb.net/test");
  client.connect(() => {
    console.log("success")
    const database = client.db("test_3");
    db.inventory = database.collection("inventory");
    db.order = database.collection("order");
    db.users = database.collection("users");
  });
};

module.exports = {connectToDb, db}