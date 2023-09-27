const Course = require('../models/Courses');

class SiteController{
    index(req,res,next){
/*      Courses.find({},function(err,course){
            if (!err){
                res.json(courses);
            }else{
                next(err);
            }
        }) */

        //promise
        Course.find({}).lean()
            .then(courses => res.render('home',{
                courses //~ ourses = courses
            }))
            .catch(next);
    }

    search(req,res){
        res.render('search');
    }
}
module.exports =new  SiteController();
