module.exports = function(sequelize, DataTypes){

    let alias = 'Comentario';

    let cols ={
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        idProducto: {
            type: DataTypes.INTEGER
        },

        idUsuario:{
            type: DataTypes.INTEGER
        },

        comentario: {
            type: DataTypes.STRING
        },

        createdAt:{
            type: DataTypes.DATE
        },

        updatedAt:{
            type: DataTypes.DATE
        },

        deletedAt: {
            type: DataTypes.DATE,
        },
    }

    let config = {
        tableName: 'comentarios',
        timestamps: true,
        underscored: false,
    }
    let Comentario = sequelize.define(alias, cols, config);

    Comentario.associate = function(models){
        Comentario.belongsTo(models.Producto,{
            as: "product",
            foreignKey: "idProducto"
        });
        
        Comentario.belongsTo(models.User, {
        as: "user",
        foreignKey: "idUsuario"
    });
    }
    return Comentario;

}