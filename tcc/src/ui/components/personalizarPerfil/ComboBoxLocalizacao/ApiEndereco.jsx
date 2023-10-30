const BASE_URL = 'https://servicodados.ibge.gov.br/api/v1'

export const fetchEstados = () => {
    const url = `${BASE_URL}/localidades/estados`
    return fetch(url)
    .then(response => response.json())
}

export const fetchCidadesPorEstado = (estado) => {
    const url = `${BASE_URL}/localidades/estados/${estado}/municipios`
    return fetch(url)
    .then(response => response.json())
}

export const fetchBairroPorCidade = async (cidade) => {
    const url = `${BASE_URL}/localidades/municipios/${cidade}/subdistritos`
    return await fetch(url)
    .then(response => response.json())
}