const mongoose=require('mongoose')
const dbConnect=(url)=>{
    mongoose.connect(url).then(console.log('mongoose connected')).catch((err)=>{console.log(`mongoose not connected ${err}`)})
}

module.exports=dbConnect

