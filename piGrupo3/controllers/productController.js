const { Association } = require('sequelize');
const db = require('../database/models')
const op = db.Sequelize.Op;
//let products = db.productos
//let lenProducts = products.length
//let usuario = db.usuario



const productController = {
    listProducts: function(req,res){
        
        db.Producto.findAll({
            include: [{association: "user"}]
        })
            .then(function(productos){
                return res.render('index', {productos:productos})
            })
            .catch(function(error){
                return res.send(error);
            })
    },
    productAdd: function(req,res){
        return res.render('productAdd');
    },

    productDetail: function(req,res){
        let id = req.params.id;
        db.Producto.findByPk(id,
            {
                include: [{association: 'user'}]
            })
        .then(function(products){
            return res.render('productDetail', {
                products: products,
                user: req.session.user
            })
        })
        .catch(function(error){
            return res.send(error);
        })
    },
    searchResults: function(req,res) {
        
        let nombre = req.query.search;
        
        db.Producto.findAll({
            where: {
                producto: {[op.like]: '%'+ nombre + '%'}
            },
            include: [{association: "user"}]
        })

        .then(function(products){
            return res.render('searchResults', { products: products, search: nombre });
        })

        .catch (function(error){
            return res.send(error);
        })

    
    },

}

module.exports = productController;