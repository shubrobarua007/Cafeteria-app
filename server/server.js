const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Hello World App is running');
});

app.post('/products', (req, res)=>{
    const productData = req.body;

    console.log("Received product:", productData);


    res.status(201).json({
        message:'Product received',
        data:productData,
    })
});




app.listen(port,()=>{    console.log(`Server is running on ${port}`)
})