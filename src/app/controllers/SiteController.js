const res = require("express/lib/response");
const Course = require("../models/Course");

class SiteController {
    //GET
    index(req, res,next){
        Course.find({}).then(courses => {
            courses = courses.map(course => course.toObject())
            res.render('home',{courses})
        }).catch(next)
        //res.render('home')
    }
    // get /search
    show(req,res){
        res.render('search')
    }
}

module.exports = new SiteController;