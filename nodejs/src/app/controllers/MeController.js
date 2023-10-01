const Course = require('../models/Courses');

class MeController{
    //:slug
    storedCourses(req,res,next){
        Course.find({}).lean()
            .then(courses => res.render('me/stored-courses',{courses}))
            .catch(next)  
    }


}
module.exports =new  MeController();
