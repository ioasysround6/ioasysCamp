import api from '../api';

export async function buscaDadosUsuario(token) {
    try {
      const resultado = await api.get('/users/profile',{
          headers:{
            "Authorization": `Bearer ${token}`,
          }
      });
      return resultado.data
    }
    catch (error) {
      console.log(error)
      return {}
    }
  }