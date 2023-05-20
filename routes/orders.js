const express = require("express");
const { connectToDb, db } = require("../db");
const { authMiddleware } = require('./authMiddleware.js')


const orders = express.Router();

orders.get("/", authMiddleware, async (req, res) => {
    const orders = await db.orders.find().toArray();
    res.status(200).json({
      message: "Success",
      data: orders,
    });
  });

  orders.get("/", authMiddleware, async (req, res) => {
    const orders = await db.orders.find().toArray();
    const lowQuantity = req.query.lowQuantity;
    if (lowQuantity){
      const lowQuantityOrders = await db.orders.find().toArray().filter(order => order.quantity < 100);
      res.status(200).json({
        message: "Success",
        data: lowQuantityOrders,
      });
    }
    else {
      res.status(200).json({
        message: "Success",
        data: orders,
      });
    }
  })
module.exports = {orders};