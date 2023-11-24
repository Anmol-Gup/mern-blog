const mongoose=require('mongoose')
const schema=mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true,
    },
    comments:{
        type:Array,
        require:true
    }
})

const comments=mongoose.model('Comment',schema)
module.exports=comments