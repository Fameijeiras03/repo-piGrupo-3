module.exports = function(sequelize, DataTypes) {
    let alias = 'Producto';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        imagen: {
            type: DataTypes.STRING
        },
        producto: {
            type: DataTypes.STRING
        },
        descripcion: {
            type: DataTypes.STRING
        },
        idUsuario:{
            type: DataTypes.INTEGER
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
        deletedAt: {
            type: DataTypes.DATE,
        },
        
    };
    let config = {
        tableName: 'productos',
        timestamps: true,
        underscored: false,
    }
    let Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models){
        Producto.belongsTo(models.User,{
            as: "user",
            foreignKey: "idUsuario"
        })
    }

    return Producto;
}