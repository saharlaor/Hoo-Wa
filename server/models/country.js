const mongoose= require('mongoose')
const {Schema}= require('mongoose')

const languageSchema= new Schema({
    id:{
        type: String,
        required:true
    },  
    originalName:{
        type:String,
        require:true,
    },
    translatedName:{
        type:Number,
        require:true,
    },
   
})

const language= mongoose.model('language', languageSchema)
module.exports= language
