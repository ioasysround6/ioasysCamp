import api from '../api';

export async function buscaDiario() {
    try {
      const resultado = await api.get('/diares/');
      return resultado.data
    }
    catch (error) {
      console.log(error)
      return {}
    }
  }