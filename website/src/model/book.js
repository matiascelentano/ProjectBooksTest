const path = require('path')
const fs = require('fs')

const book = {
    all: ()=>{
        const directory = path.resolve(__dirname, '../data/books.json')
        const file = fs.readFileSync(directory, 'utf-8')
        const list = JSON.parse(file)
        return list 
    }
}

module.exports = book;