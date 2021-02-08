export const retirarCharEspeciais = (valor) => {
  if (!valor) {
    return ''
  }
  return valor.replace(new RegExp('[^0-9]', 'g'), '')
}

export const retirarCharEspeciaisAlfaNumerico = (valor) => {
  if (!valor) {
    return undefined
  }
  return valor.replace(new RegExp('[^A-Za-z0-9]', 'g'), '')
}

export const convertDateToPtBr = (date) => {
  return new Date(date).toLocaleDateString('pt-BR')
}

export const formatarMoedaEmReal = (valorEmReal) => {
  const options = {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }
  return new Intl.NumberFormat('pt-BR', options).format(valorEmReal)
}

function isNumber(val) {
  const number = Number(val)
  return !Number.isNaN(number)
}

export const desformatarDeMoedaRealParaNumero = (valor) => {
  if (!valor) return 0.0
  if (isNumber(valor)) return parseFloat(Number(valor))
  const valorSemCifrao = valor.replace(new RegExp('R\\$', 'g'), '')
  const valorSemFormatacao = valorSemCifrao
    .replace(new RegExp('\\.', 'g'), '')
    .replace(new RegExp(',', 'g'), '.')
  return parseFloat(valorSemFormatacao)
}

export function convertBase64ToBlob(base64, contentType) {
  const byteCharacters = window.atob(base64)
  const sliceSize = base64.length
  const byteArrays = []

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize)
    const byteNumbers = new Array(slice.length)
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i)
    }

    const byteArray = new Uint8Array(byteNumbers)
    byteArrays.push(byteArray)
  }

  return new Blob(byteArrays, { type: contentType })
}

export function gerarDocumento(response, id, nomeDocumento = 'download-documento') {
  const documento = response.data
  const blob = convertBase64ToBlob(documento.conteudoArquivoBase64, 'application/pdf')
  // let blob = convertBase64ToBlob(documento.data, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')
  const link = document.createElement('a')
  link.id = id
  link.href = window.URL.createObjectURL(blob)
  link.download = documento?.nomeArquivo ? documento.nomeArquivo : nomeDocumento
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
