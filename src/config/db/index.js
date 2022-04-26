const mongoose = require('mongoose')
async function connect(){
    try{
        await mongoose.connect('mongodb://localhost/f8_education_dev');
        console.log('Succesful');
    }catch (error){
        console.log('Fail');
    }
}

module.exports = {connect};