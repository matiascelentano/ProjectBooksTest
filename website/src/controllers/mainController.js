const db = require('../database/models')
const mainController = {
    index: async (req, res)=>{
        try {
            let books = await db.Book.findAll();
            console.log(books);
            res.render('home')
        } catch (error) {
            throw error
        };
    }
}

module.exports = mainController;