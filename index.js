const express = require('express');

const app=express();

app.get('/',(req,res)=>res.send('Welcome'))

const PORT = process.env.PORT || 6000

app.listen(PORT, ()=>console.log('app running 6000'))