
import express from 'express';
import mongoose from 'mongoose';
import Accounts from './models/userShemer.js';
import cors  from'cors';
import jwt from'jsonwebtoken';
const app =express();



app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://user:MAHMOUD@project.qehjtmc.mongodb.net/?retryWrites=true&w=majority",{
  useNewUrlParser:true,
});
app.post('/login',async(req,res)=>{
     const account = await Accounts.findOne({
      name: req.body.name,
      password: req.body.password

     })
     if(account){
      const token = jwt.sign({
        name: req.body.name,
      },'lkjhgfdxsertèy_u{]#@{adzzaodkdf5i895623201')
      return res.json({status:'ok',user:token})
     }else{
      return res.json({status:'error',user:false})
     }
})
app.post('/insert', async (req, res) => {
  try {
		const accountName =req.body.nameCreation;
    const pass = req.body.passwordCreation;
    const mail = req.body.emailCreation;
    if (!accountName || typeof accountName !=='string')
    return res.json({status:"error",error:"Invalid Username"})
    if (!pass || typeof pass !=='string')
    return res.json({status:"error",error:"Invalid Password"})
		await Accounts.create({
      name:accountName,password:pass,email:mail

		})
		res.json({ status: 'ok' })
	} catch (err) {
		return res.json({ status: 'error', error: 'Account Already Exists' })
	}
})



app.listen(3001,()=>console.log("Server running on port 3001..."));