import api from '../api';

export async function buscaCommunities() {
    try {
      const resultado = await api.get('/stories/');
      return resultado.data
    }
    catch (error) {
      console.log(error)
      return {}
    }
  }