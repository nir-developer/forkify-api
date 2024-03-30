const recipeController = require('../controllers/recipeController')
const express = require('express')


const recipeRouter = express.Router(); 

recipeRouter.route('/')
    .get(recipeController.findAllRecipes) 
    .post(recipeController.createRecipe)


recipeRouter.route('/:id')
    .get(recipeController.findRecipeById)
    



module.exports = recipeRouter; 