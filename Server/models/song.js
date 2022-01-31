const mongoose= require('mongoose')
const {Schema}= require('mongoose')

const SongSchema= new Schema({
    originalTitle:{
        type: String,
        // required:true
    },  
    translatedTitle:{
        type:String,
        // require:true,
    },
    url:{
        type:String,
        // require:true,
    },
    originalLyrics:{
        type:String,
        // required: true
    },
    translatedLyrics:{
        type:String,
        // required: true
    }
   
})

const Song= mongoose.model('song', SongSchema)
module.exports= Song
