const Course = require('../models/Courses');

class CourseController{
    //:slug
    show(req,res,next){
        Course.findOne({slug:req.params.slug}).lean()
            .then((course) => {
                res.render('courses/show',{course});
            })
            .catch(next);
    }
    
    //create
    create(req,res,next){
        res.render('courses/create');   
    }
    store(req,res,next){
        const formData = req.body;
        formData.image = `http://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
        const course = new Course(formData);
        course.save()
            .then( () => res.redirect('/'));  
    }

    //update
    edit(req,res,next){
        Course.findById(req.params.id).lean()
            .then((course) => {
                res.render('courses/edit',{course});
            })
            .catch(next);
    }
    update(req,res,next){
        Course.updateOne({_id:req.params.id},req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    //delete
    delete(req,res,next){
        Course.deleteOne({_id:req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

}
module.exports =new  CourseController();
