export async function logger(req, res, next){
    console.log(req.method, req.url);
    
    next()
}

export async function errorHandeling(error, req, res, next){

  if (error.statusCode) {

        return res.status(err.statusCode).json({
            success: false,
            message: err.message
        });}
       
    console.error("CRITICAL SERVER ERROR:", error);
   
    res.status(500).json({
        success: false,
        message: "something went wrong"
    })
  }


export async function createError(message, statusCode){
    const error = new Error(message);
    error.statusCode = statusCode;
    return error;
}