const db = require('../database/models')
//let products = db.productos
//let lenProducts = products.length
//let usuario = db.usuario



const productController = {
    listProducts: function(req,res){
        db.Producto.findAll()
            .then(function(productos){
                return res.send(productos)
            })
            .catch(function(error){
                return res.send(error);
            })
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