const lD = require('../localData/index')
let usuario = lD.usuario
let autos = lD.productos
let lenAutos = autos.length

const userController = {
    profile : function (req,res) {
        let user = usuario
        return res.render('profile', {'user': user})
    },
    listProducts : function(req,res) {
        let products = []
        for (let i = 0; i < lenAutos; i++) {
            products.push(autos[i].comentarios[0].texto)
            }
        return res.render('profile',{'products': products})
        }
        }
        


module.exports = userController