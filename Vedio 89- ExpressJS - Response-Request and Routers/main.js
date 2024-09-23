const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
    console.log("Hey its a get request");
    res.send('Hello, I am get request.')
})

app.post('/', (req, res) => {
    console.log("Hey its a post request");
    res.send('Hello, I am post request.')
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
    
})