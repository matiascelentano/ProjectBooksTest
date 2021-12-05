const db = require('../database/models')
const mainController = {
    index: async (req, res)=>{
        try {
            let libros = await db.Book.findAll();
            res.render('home', {libros});
        } catch (error) {
            throw error
        };
    }
}

module.exports = mainController;