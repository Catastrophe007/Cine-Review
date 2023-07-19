import mongoose from "mongoose";

const postSchema =mongoose.Schema({
  title : String,
  genre : [String],
  
  synopsis : String,
  director : String,
  
  likes :{
    type : [String],
    default : [],
  },
  rating :{
    type : Number,
    default : 0,
  },
  image : String,
})
const postMovie =mongoose.model('postMovie',postSchema);
export default postMovie;