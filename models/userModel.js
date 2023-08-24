import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
   name:{
    type:String,
    required:true,
    trim:true
   },
   email:{
    type:String,
    required:true,
    unique:true
   },
   password:{
    type:String,
    required:true
   },
   phone: {
      type: String,
      required: true,
      unique: true, // Add a unique constraint to ensure the phone number is unique
      validate: {
        validator: function (v) {
          // Use a regular expression to validate the phone number format
          // For example, to allow only digits and a specific length (e.g., 10 digits):
          return /^\d{10}$/.test(v);
        },
        message: props => `${props.value} is not a valid phone number!`
      }
    },
   address:{
    type:String,
    required:true
   },
   answer:{
      type:String,
      require:true
   },
   role:{
    type:Number,
    default:0
   }
},{timestamps:true});//when user will be created then timestamp will be created automatically

export default mongoose.model('users',userSchema)