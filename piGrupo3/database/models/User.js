module.exports = function(sequelize, DataTypes) {
    let alias = 'User'; //este alias se busca como nombre de la tabla enplural dentro de la base de datos

    let cols = {    
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING
        },
        nombreUsuario: {
            type: DataTypes.STRING
        },
        contrasena: {
            type: DataTypes.STRING
        },
        fotoPerfil: {
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
        }
    };
    let config = {
        tableName: 'usuarios',
        timestamps: true,
        underscored: false,
    };
    const User = sequelize.define(alias, cols, config);

    User.associate = function(models){
        User.hasMany(models.Producto,{
            as: "products",
            foreignKey: "idUsuario"
        })
    }

    return User;
    
}

