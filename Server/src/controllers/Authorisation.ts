


async function userlogin (req : Request, res : Response){
   console.log('user logged in')
}



async function usersignup (req : Request, res : Response){
    console.log('user signed up')
}

module.exports = {
    userlogin,
    usersignup
}