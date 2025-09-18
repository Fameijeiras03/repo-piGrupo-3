const lD = require('../localData/index')
let products = lD.productos


const searchController = {
    searchResults: function(req,res) {
        return res.render('searchResults',{products:products})
    }
}


module.exports = searchController