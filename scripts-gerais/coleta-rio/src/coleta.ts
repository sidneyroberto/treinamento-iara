import axios from 'axios'
import { API_URL } from './config'
import { parseStringPromise } from 'xml2js'
import { find } from 'xml2js-xpath'

const codEstacao = '66945000'
const dataInicio = '2023-04-28'
const dataFinal = '2023-04-28'

const http = axios.create({
  baseURL: API_URL.replace('CODIGO', codEstacao)
    .replace('INICIO', dataInicio)
    .replace('FIM', dataFinal),
})

type Leitura = {
  codigoEstacao: string
  dataHora: Date
  chuva: number
  vazao: number
  nivel: number
}

const coletar = async () => {
  const resposta = await http.get('')
  const respostaJson = await parseStringPromise(resposta.data)
  const resultados = find(respostaJson, '//DadosHidrometereologicos')

  const leituras: Leitura[] = resultados.map((r) => {
    const dataHora = `${r.DataHora[0].trim()} UTC`

    const leitura: Leitura = {
      codigoEstacao: r.CodEstacao[0],
      dataHora: new Date(dataHora),
      chuva: Number(r.Chuva[0]),
      vazao: Number(r.Vazao[0]),
      nivel: Number(r.Nivel[0]),
    }

    return leitura
  })

  console.log(leituras)
}

coletar()
