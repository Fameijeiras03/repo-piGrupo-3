const db = require('../database/models')


const userController = {
    


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