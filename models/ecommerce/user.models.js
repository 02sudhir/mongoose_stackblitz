import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true
  },
  useremail:{
    type:String,
    required:true,
    unique:true,
    lowercase:true
  },
  password:{
    type:String,
    required:true

  }
  

}, { timstamps: true });


export const User = mongoose.model('User', userSchema);
