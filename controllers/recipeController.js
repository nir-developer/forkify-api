const Recipe = require('../models/Recipe')

exports.findAllRecipes = async (req,res,next)=>{
    try 
    {
        const recipes = await Recipe.find(); 

        console.log(`recipeController.findAllRecipes - retured recipes`, recipes)

        res.status(200).json({
            status:'success',
            results:recipes.length, 
            data:{
                recipes
            }
        })
    }
    catch(err)
    {
        res.status(404).json({
            status:'fail', 
            message:`can not find recipes`
        })
    }
}

exports.createRecipe = async (req,res,next) =>{

 try 
 {
    const recipe  = await Recipe.create(req.body)

    res.status(201).json({
        status:'succss', 
        data:{
            recipe
        }
    })
 }
 catch(err)
 {
    res.status(400).json({
        status:'fail', 
        message:`${err.message} (${err.status})`
    })
 }
}


exports.findRecipeById = async (req,res,next) =>{
    try 
    {
        const recipe = await Recipe.findById(req.params.id)

        //NOTE: if not found then mongoose will return null 
        //I SHOULD THROW AN ERROR 404 MANUALY
        if(!recipe) throw new Error(`recipe with id ${req.params.id} not found`)
        


        res.status(200).json({
            status:'success', 
            data:{recipe}
        })

    }
    catch(err)
    {
        res.status(404).json({
            status:'fail', 
            message:err.message
        })
    }
}

/**
 *  const task = await Task.findById(req.params.id)

        console.log(task)

        // MUST RETURN next()  (but it worked for me even without)
        if(task === null)
         {
            const err = new AppError(`task with id ${req.params.id} not found`, 404)
            return next(err)

            //OR SIMPLY : (my solution)
           // throw err;
         }

        res.status(200).json({
            status:'success', 
            data:{
                task
            }
        })
    }
   
 */
