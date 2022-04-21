import api from "../api";

import AsyncStorage from '@react-native-async-storage/async-storage';

export async function loginUser(email, password) {
    try{
  const resultado = await api.post('/auth/login',{
        email:email,
        password:password,
            },{
                headers:{
                    "Content-Type": "application/json",
                }
            });
          AsyncStorage.setItem("TOKEN", resultado.data.token)    
          console.log(`Dados usuário${JSON.stringify(resultado)}`);
          return true
        }
        catch (error) {
          console.log(error)
          return false
        }
   
    }



