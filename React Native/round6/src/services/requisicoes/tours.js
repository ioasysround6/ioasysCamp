import api from "../api";

export async function buscaTours() {
    try {
      const resultado = await api.get('/tours/');
      return resultado.data
    }
    catch (error) {
      console.log(error)
      return {}
    }
  }