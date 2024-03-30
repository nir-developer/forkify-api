const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema( {

    //CHECK - HE HAS DUPLICATE TITLES - SO NOT UNIQUE
    title:{
        type:String, 
        required:[true, 'Recipe must have a title'], 
        //unique: [true, 'Recipe must have a unique title']
    },  
    publisher:String, 
    source:String, 
    image:String, 
    servings:Number, 
    cookingTime:Number, 
    ingredients:[
        {
            quantity:{
                type:Number, 
                //required:[true, 'ingredient must have a quantity']
            },
            unit:{
                type:String , 
                //required:[true, 'ingredient must have a unit'], 
            }, 
            description:{
                type:String, 
                //required:[true, 'ingredient must have a description']
            }

        }
    ]


})


const Recipe = new mongoose.model('recipe', recipeSchema)

module.exports = Recipe; 

/**
 * {
    "id": "5ed6604591c37cdc054bcd09",
    "title": "Cauliflower Pizza Crust (with BBQ Chicken Pizza)",
    "publisher": "Closet Cooking",
    "source": "http://feedproxy.google.com/~r/ClosetCooking/~3/xvkmVGnlXNQ/cauliflower-pizza-crust-with-bbq.html",
    "image": "http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg",
    "servings": 4,
    "cookingTime": 75,
    "ingredients": [
        {
            "quantity": 1,
            "unit": "",
            "description": "medium head cauliflower cut into florets"
        },
        {
            "quantity": 1,
            "unit": "",
            "description": "egg"
        },
        {
            "quantity": 0.5,
            "unit": "cup",
            "description": "mozzarella shredded"
        },
        {
            "quantity": 1,
            "unit": "tsp",
            "description": "oregano or italian seasoning blend"
        },
        {
            "quantity": null,
            "unit": "",
            "description": "Salt and pepper to taste"
        },
        {
            "quantity": 1,
            "unit": "cup",
            "description": "chicken cooked and shredded"
        },
        {
            "quantity": 0.5,
            "unit": "cup",
            "description": "barbecue sauce"
        },
        {
            "quantity": 0.75,
            "unit": "cup",
            "description": "mozzarella shredded"
        },
        {
            "quantity": null,
            "unit": "",
            "description": "Red onion to taste thinly sliced"
        },
        {
            "quantity": null,
            "unit": "",
            "description": "Fresh cilantro to taste"
        }
    ]
}
 */