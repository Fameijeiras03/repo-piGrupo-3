const lD = require('../localData/index')
let products = lD.productos
let lenProducts = products.length

const productController = {
    listProducts: function(req,res){
        let productsList = products
        let coments = []
        let cantComents = 0
        for (let i = 0; i < lenProducts; i++) {
            let c = products[i].comentarios
            coments.push(c)
            if (c) {
            cantComents = cantComents + c.length
            }
            
        }
        return res.render('index',{productsList: productsList,  coments: coments})
    },
    productAdd: function(req,res){
        return res.render('productAdd');
    }



}

module.exports = productController
