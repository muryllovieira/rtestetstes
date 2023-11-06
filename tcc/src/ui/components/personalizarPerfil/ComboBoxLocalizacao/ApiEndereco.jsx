const BASE_URL = 'https://servicodados.ibge.gov.br/api/v1'

export const fetchEstados = async () => {
    const url = `${BASE_URL}/localidades/estados`
    return await fetch(url)
    .then(response => response.json())
}

export const fetchCidadesPorEstado = async (estado) => {
    const url = `${BASE_URL}/localidades/estados/${estado}/municipios`
    return await fetch(url)
    .then(response => response.json())
}

export const fetchBairroPorCidade = async (cidade) => {
    const url = `${BASE_URL}/localidades/municipios/${cidade}/distritos`
    return await fetch(url)
    .then(response => response.json())
}