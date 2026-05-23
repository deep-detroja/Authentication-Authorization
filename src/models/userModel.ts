import  {Schema,model} from "mongoose";


const userSchema = new Schema({
    email : {
        type    :String,
        required: true,
        lowercase: true,
        unique: true,
        trim : true
    },
    passwordHash : {
        type: String,
        required:true,
    },
    role:{
        type:String,
        enum:['user','admin']
    },
    name:{
        type:String
    },
    isEmailVerified:{
        type:Boolean,
        default:false
    },
    twoFactorEnabled:{
        type:Boolean,
        default:false
    },
    twoFactorSecret:{
        type:String,
        default:undefined
    },
    resetPasswordToken:{
        type:String,
        default:undefined,
    },
    tokenVersion:{
        type:Number,
        default:0
    },
     resetPasswordExpires:{
        type:Date,
        default:undefined,
    }
} , { timestamps : true });

export const User = model('User',userSchema)