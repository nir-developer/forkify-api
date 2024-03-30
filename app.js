const recipeRouter = require('./routes/recipeRoutes')

const express = require('express')
const bodyParser = require('body-parser')
const morgan=  require('morgan') ;
const cors  = require('cors')
const path  = require('path')


const app = express(); 


// if(process.env.NODE_ENV === 'development') 
// {
//     console.log(process.env.NODE_ENV); 
//     app.use(morgan('dev'))
// } 
app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())


//CORS
app.use(cors())


//END POINTS
app.use('/forkify/api/v1/recipes',recipeRouter) ;


app.get('/', (req,res,next) =>{
   
    res.status(200).json({
        status:'success',
        //requestTime:new Date().toISOString()
    }) 
    
    next(); 
})

app.get('/forkify/api/v1/recipes', (req,res,next)=>{

    res.json('OK')
})



module.exports = app;  