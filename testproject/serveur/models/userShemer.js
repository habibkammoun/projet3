import Mongoose from 'mongoose';

const UserSchemer=new Mongoose.Schema({
    name:{type:String , required:true, unique:true} ,
    password:String,
    email:{type:String , required:true, unique:true},
})
const Accounts=Mongoose.model('accounts',UserSchemer);

export default Accounts;