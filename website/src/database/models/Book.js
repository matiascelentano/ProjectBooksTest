module.exports = (sequelize, dataTypes) =>{
    let alias = 'Book';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        rating: {
            type: dataTypes.FLOAT,
            allowNull: true,
            defaultValue: null
        },
        info: {
            type: dataTypes.STRING(1250),
            allowNull: true,
            defaultValue: 'Sin descripción'
        }
    };
    let config = {
        timestamps: false,
        deletedAt: false
    };
    
    const Book = sequelize.define(alias,cols,config);

    return Book;
}