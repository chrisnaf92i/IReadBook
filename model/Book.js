import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    coverImageUrl:{
        type:String,
        required:true
    }
});

const bookModel = mongoose.model("Book", bookSchema)

export default bookModel;