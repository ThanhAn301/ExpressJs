// const res = require("express/lib/response");

class NewsController {
    //GET NEWS
    index(req, res){
        res.render('news');
    }
    // get /news/:slug
    show(req,res){
        res.send('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    }
}

module.exports = new NewsController;

// class NewsController {
//     // [Get => news]
//     index(req, res) {        
//         res.render('news');
//     }
// }
// module.exports = new NewsController;