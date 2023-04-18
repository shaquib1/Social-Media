const router =require('express').Router();

router.get('/',(req,res)=>{
    res.send("this is user routes");
})


module.exports=router