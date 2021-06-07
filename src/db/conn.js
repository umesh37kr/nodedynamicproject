const mongoose =  require("mongoose");

//creating a database
mongoose.connect("mongodb://localhost:27017/nodeDynamic",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() =>{
    console.log("connection sucessfull")
}).catch((err) =>{
    console.log(err);
})