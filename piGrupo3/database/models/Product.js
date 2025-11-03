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
    let Productos = sequelize.define(alias, cols, config);

    return Productos;
}