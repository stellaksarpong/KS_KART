

// prisma client
const { PrismaClient } = require('@prisma/client');
// Create a new instance of Prisma Client
const prisma = new PrismaClient();

const express=require('express')
const app=express()
const port=3000
app.get('/',(res,send)=>{
    res.send("Hello KS_KART")
})
app.post("/signup", async (req, res) => {
    const data = req.body;
    const user = await prisma.user.create({
      data,
    });
    res.status(201).json({ user });
  });
