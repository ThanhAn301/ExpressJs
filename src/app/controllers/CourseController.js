const res = require("express/lib/response");
const Course = require("../models/Course");

class CourseController {

    // get /search
    show(req,res,next){
        Course.findOne({ slug: req.params.slug }).then(course => {
            course = course.toObject()
            res.render('courses/show', {course})
        }).catch(next)
    }
    create(req,res,next){
        res.render('courses/create')
    }
    store(req,res,next){
        const course = new Course(req.body);
        course.save()
            .then( (err,data) => {res.redirect('/') } )
            .catch( (err,data) => {res.send( {err: 'dữ liệu sai '} ) } )
    }
    edit(req,res,next){
        Course.findById(req.params.id).then(course => {
            course = course? course.toObject(): course
            res.render('courses/edit', {course})
        }).catch(next)
    }
    update(req,res,next){
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }

    destroy(req,res,next){
        Course.deleteOne({_id: req.params.id})
            .then(()=> res.redirect('back'))
            .catch(next);   
    }
}

module.exports = new CourseController;