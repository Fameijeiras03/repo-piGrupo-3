const lD = require('../localData/index')

let usuario  = lD.usuario
let products = lD.productos
let lenAutos = products.length

const userController = {
    profile: function (req, res) {
        let user = usuario
        let listProducts = []
        let coments = []
        let totalComentarios = 0

        for (let i = 0; i < lenAutos; i++) {
            let p = products[i]
            listProducts.push(p)

        let c = products[i].comentarios  // Puede o no tener comentarios el producto
            coments.push(c)

        // si tiene comentarios los agregamos a la lista para renderizarlo en la vista
            if (c) {
            totalComentarios = totalComentarios + c.length
            }
        }

        return res.render('profile', { 
            user: user, 
            listProducts: listProducts, 
            coments: coments,
            totalComentarios: totalComentarios
        })
        },


    register: function (req, res) {
        return res.render('register');
    }
    ,

    login: function(req, res){
        return res.render('login');
    },
    logout: function(req,res){
        return res.render('logout')
    }
}
    

module.exports = userController