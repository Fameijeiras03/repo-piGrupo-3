const { Association } = require('sequelize');
const db = require('../database/models')
const op = db.Sequelize.Op;
//let products = db.productos
//let lenProducts = products.length
//let usuario = db.usuario



const productController = {

    productAdd: function(req,res){
        if(req.session.user == undefined){
            return res.redirect('/users/login')
        }
        return res.render('productAdd');
    },

    productStore: function(req,res){
        if(req.session.user == undefined){
            return res.redirect('/users/login')
        }
        db.Producto.create({
            producto: req.body.producto,
            descripcion: req.body.descripcion,
            imagen: req.body.imagen,
            idUsuario: req.session.user.id
        })
        .then(function(){
            return res.redirect('/')
        })

        .catch(function(error){
            return res.send(error);
        });
    },
    
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
    
    productDetail: function(req,res){
        let id = req.params.id;
        db.Producto.findByPk(id,
            {include: [
                {association: 'user'},
                {
                    association: 'comentarios',
                    include: [{association: 'user'}]
                }
            ]
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