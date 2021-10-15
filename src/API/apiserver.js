import axios from "axios"


const baseUrl = 'http://localhost:3004'

const criar = async (conteudo) => {
  const url = `${baseUrl}/carritos`
  return await axios.post(url, conteudo)
}


