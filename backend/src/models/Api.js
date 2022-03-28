






const mongoose = require('mongoose')
 
const ApiSchema = mongoose.Schema({
    name:String,
    description:String,
    endpoints: String,
    imageUrl:String,
    author:String
},
{
    timestamps:true
}
);

// export model API with ApiSchema
module.exports = mongoose.model('Api',ApiSchema);