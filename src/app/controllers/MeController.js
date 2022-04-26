const res = require("express/lib/response");
const Course = require("../models/Course");

class MeController {

    // get /search
    storeCourses(req,res,next){
        Course.find({}).then(courses => {
            courses = courses.map(course => course.toObject())
            res.render('me/storeCourses',{courses})
        }).catch(next)
    }
}

module.exports = new MeController;