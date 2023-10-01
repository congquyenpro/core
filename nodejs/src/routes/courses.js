const express = require('express');
const router =  express.Router();

const courseController = require('../app/controllers/CourseController');

//create
router.get('/create',courseController.create);
router.post('/store',courseController.store);

//edit
router.get('/:id/edit',courseController.edit);
router.put('/:id',courseController.update);

//delete
router.delete('/:id',courseController.delete);


router.get('/:slug',courseController.show);


module.exports = router;