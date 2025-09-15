const lD = require('../localData/index')
let usuario = lD.usuario
let autos = lD.productos
let lenAutos = autos.length

const userController = {
    profile : function (req,res) {
        let user = usuario
        let userProducts = autos
        return res.render('profile', {'user': user, userProducts})
    }
}

module.exports = userController