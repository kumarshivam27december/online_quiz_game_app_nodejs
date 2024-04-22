import mongoose from "mongoose";


export default async function connect(){
    await mongoose.connect("mongodb+srv://admin:admin123@quiz.dylwpfs.mongodb.net/?retryWrites=true&w=majority&appName=Quiz")
    //await mongoose.connect('mongodb://localhost:27017/Quiz')
    console.log("database connected")
}