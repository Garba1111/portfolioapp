const express = require('express');
const app = express();
const port = 1010;
const script = express()

app.set('view engine', 'ejs');
app.use(express.static('public'));
// app.use('/app',express.static('router'));
app.use(express.static('router'));
app.use(express.static('img'));
app.use(express.static('font-awesome'));

const bodyParser = require ('body-parser')
app.use(bodyParser.urlencoded({extended:true}))

app.use('/', require('./router/home'))

const db = [
    {
        id:'',
        name:'',
        email:'',
        talk:'comment'
    }
]

app.post('/home',(req,res)=>{
    const collect = req.body
    if (collect.name != null && collect.email != null && collect.talk != null) {

        
        
    } else {
        res.render('home')
    }


})




app.listen(port,()=> {
    console.log('Running on localhost:1010')
})

