
const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'));


// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/blog', (req, res) => {
    res.send('Hello blog!')
})
//we can use as a varibale like below
app.get('/blog/:slug', (req, res) => {
    res.send(`hello ${req.params.slug}`)
    
    console.log(req.params);
    console.log(req.query);
    
    
})

app.get('/about', (req, res) => {
    res.send('About us')
})

app.get('/contact', (req, res) => {
    res.send('Hello contact me!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})