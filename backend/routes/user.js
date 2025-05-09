const express = require("express");
const { User, Account } = require("../db");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const {authMiddleware} = require("../middleware");

const router = express.Router();

const signupSchema = zod.object({
    email: zod.string(),
    password: zod.string(),
    firstname: zod.string(),
    lastname: zod.string()
});

const signinSchema = zod.object({
    email: zod.string(),
    password: zod.string()
})

router.post("/signup", async (req, res) => {
    const body = req.body;
    const {success} = signupSchema.safeParse(body);
    
    if(!success){
        return res.json({
            message: "Email is already taken / Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({
        email: body.e
    })

    if(existingUser){
        return res.json({
            message: "Email is already taken / Incorrect inputs"
        })
    }

    const user = await User.create({
        email: req.body.email,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    })

    const userId = user._id;

    const account = await Account.create({
        userId,
        balance: 1 + Math.random() * 10000

    })

    const token  = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })

});



router.post("/signin", async (req,res) => {
    const body = req.body;
    const { success } = signinSchema.safeParse(body);
    if(!success){
        return res.status(411).json({
            message: "Invaild Inputs"
        })
    }

    const user = await User.findOne({
        email: req.body.eamil,
        password: req.body.password
    })

    if(user){
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);

        res.json({
            token: token
        })
        return;
    }

    return res.status(411).json({
        message: "Error while logging in"
    })

})

const updateSchema = zod.object({
    firstname: zod.string(),
    password: zod.string(),
    lastname: zod.string()
})

router.put("/", authMiddleware, async (req, res) => {
    const parsed = updateSchema.safeParse(req.body);
  
    if (!parsed.success) {
      return res.status(411).json({
        message: "Error while updating information",
      });
    }
  
    await User.updateOne({ _id: req.userId }, req.body);
  
    res.json({
      message: "Updated successfully" });
  });
  
  

  router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstname: {
                "$regex": filter
            }
        }, {
            lastname: {
                "$regex": filter 
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            _id: user._id
        }))
    })
})

module.exports = router;
