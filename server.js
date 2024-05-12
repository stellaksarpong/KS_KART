

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
app.listen(port,() =>{
    console.log(`hello listen to my ${port}`)
})
