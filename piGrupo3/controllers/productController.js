const lD = require('../localData/index')
let products = lD.productos
let lenProducts = products.length
let usuario = lD.usuario

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

        return res.render('index',{productsList: productsList,  coments: coments, usuario: usuario, logueado: true})
    },
    productAdd: function(req,res){
        return res.render('productAdd');
    },

    productDetail: function(req,res){
        let id = Number(req.params.id)
        let product = null

        for (let i = 0; i < lenProducts; i++) {
            if (Number(products[i].id) === id) {
                product = products[i]
            }
        }

        if (product == null) {
            return res.status(404).render('error', { message: 'Producto no encontrado' })
        }

        return res.render('productDetail', { product: product })
    },
    searchResults: function(req,res) {
        return res.render('searchResults',{products:products, usuario:usuario})
    },

}

module.exports = productController;