export async function logger(req, res, next){
    console.log(req.method, req.url);
    
    next()
}

export function errorHandeling(error, req, res, next){

  if (error.statusCode) {

        return res.status(error.statusCode).json({
            success: false,
            message: error.message
        });}
       
    console.error("CRITICAL SERVER ERROR:", error);
   
    res.status(500).json({
        success: false,
        message: "something went wrong"
    })
  }


export function createError( statusCode, message){
    const error = new Error(message);
    error.statusCode = statusCode;
    return error;
}