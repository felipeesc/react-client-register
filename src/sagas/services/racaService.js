import axios from 'axios'

const urlRacas = 'cliente/tipoAnimal'

const recuperarRacas = async () => {
  const racas = await axios.get(urlRacas)
  return racas?.data
}

export default {
  recuperarRacas,
}
