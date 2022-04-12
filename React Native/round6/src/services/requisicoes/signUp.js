import api from "../api";

export async function registerUser(name, middleName, birthday, email, password) {
    try{
    await api.post('/users',{
        firstName: name,
        lastName: middleName,
        birthDate:birthday,
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



