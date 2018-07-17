var mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/social',function(){
    useMongoClient:true,
    console.log('mongodb connected')
})
module.exports=mongoose