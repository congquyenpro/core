const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/course_dev',{
            useNewUrlParser : true,
            useUnifiedTopology : true
        });
        console.log('ok');
    }catch(error){
        console.log('error');
    }
}
module.exports = {connect};