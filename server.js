

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
  app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const userByEmail = await prisma.user.findUnique({ where: { email:  email} });
    if (!Email) {
      res.status(400).json({ message: "Account not found, please signup!" });
    } else {
      const SysPass = userByEmail.password;
      if (password != SysPass) {
        res.status(400).json({ message: "Invaild credentials" });
      } else {
        res.status(200).json({ message: " Login succesful" });
      }
    }
  });
  app.listen(port,()=>{
    res.send(`hello listen to my port${port}`)
  })
