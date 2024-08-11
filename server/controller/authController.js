//auth controller

export const authCheck = ( req , res ) =>{
    try{
        res.status(200).json({success:true , isAuthenticated: true , user : req.decodedUser })
    }catch( error ){
        console.error(`Error in auth checking controlller :`, error);
        throw new Error(`Failed in Auth Controller: ${error.message}`);
    }
}