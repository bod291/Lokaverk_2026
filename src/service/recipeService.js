const db = require('../lib/db');

const getALLRecipes = async () => {
    const result = await db.query('SELECT * FROM recipes ORDER BY id ASC');
    return result.rows;
};

module.exports = {
    getALLRecipes
};