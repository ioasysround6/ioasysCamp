import api from "../api";

export async function loginUser(email, password) {
    try{
    await api.post('/auth/login',{
        email:email,
        password:password,
            },{
                headers:{
                    "Content-Type": "application/json",
                }
            });
          return true
        }
        catch (error) {
          console.log(error)
          return false
        }
   
    }



