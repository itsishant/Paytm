const express = require("express");
const { authMiddleware } = require("../middleware");
const { Account } = require("../db");
const { mongo, default: mongoose } = require("mongoose");

const router = express.Router();

router.get("/getBalance", authMiddleware, async (req ,res) => {
    const account = await Account.findOne({
        userId: req.userId
    }) 

    if(!account){
        res.status(411).json({
            messgae: "Account not founded"
        })
    }

res.status(200).json({ balance: account.balance });



})

router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();
  
    const { amount, to } = req.body;
   
    if (isNaN(amount) || amount <= 0) {
        return res.status(400).json({
            message: "Invalid transfer amount"
        });
    }

    const account = await Account.findOne({ userId: req.userId }).session(session);

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    await session.commitTransaction();
    return res.status(200).json({
        message: "Transfer successful"
    });
});


module.exports = router;