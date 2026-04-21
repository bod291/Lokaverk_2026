const recipeService = require('../services/recipeService');

const getHomePage = async (req, res) => {
    try {
        const recipes = await recipeService,getAllRecipes();

        res.render('index', {
            title: 'Uppskrifavefurinn'
            recipes: recipes
        });
    } catch (error) {
        console.error('Villa við að sækja uppskriftir:', error);
        res.status(500).send('kerfisvilla ö Get ekki hlaðið uppskriftum');
    }
};

module.exports = {
    getHomePage
};