import React, { useContext, useState } from 'react'
import "./styleComboBoxLocalizacao.css"
import UserContext from '../../../../data/hooks/context/UserContext'
import InputEstados from './inputEstados/InputEstados'
import InputCidades from './inputCidades/InputCidades'
import InputBairros from './inputBairros/InputBairros.jsx'
import { useEffect } from 'react'
import { localizacaoFetch } from '../../../../data/services/api/ApiService.js'

const ComboBoxLocalizacao = ({ onChange, setarLocalizacao }) => {

    // const handleInputChange = (e) => {
    //     e.preventDefault()
    //     const { value, accessKey } = e.target
    //     console.log(value, accessKey)
    //     setFormValues({ ...formValues, [value]: accessKey })
    // }

    const { estado, setEstado } = useContext(UserContext)
    const { cidade, setCidade } = useContext(UserContext)
    const { bairro, setBairro } = useContext(UserContext)

    const [estados, setEstados] = useState([])
    const [cidades, setCidades] = useState([])
    const [bairros, setBairros] = useState([])

    const [estadoSelecionado, setEstadoSelecionado] = useState('')
    const [cidadeSelecionado, setCidadeSelecionado] = useState(0)
    const [bairroSelecionado, setBairroSelecionado] = useState('')
    const [nomeCidadeSelecionado, setNomeCidadeSelecionado] = useState('')

    const pegarEstados = async () => {
        try {
            const response = await localizacaoFetch.get('/api/estados')

            setEstados(response.data)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    const pegarCidades = async () => {
        try {
            const response = await localizacaoFetch.get(`/api/estado/${estadoSelecionado}/cidades`)

            console.log(response)
            setCidades(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const pegarBairros = async () => {
        try {
            const response = await localizacaoFetch.get(`/api/cidade/${cidadeSelecionado}/bairros/`)

            console.log(response)
            setBairros(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        pegarEstados()
    }, [])

    useEffect(() => {
        pegarCidades()
    }, [estadoSelecionado])

    useEffect(() => {
        pegarBairros()
    }, [cidadeSelecionado])

    useEffect(() => {
        setBairros([])
    }, [estadoSelecionado])


    useEffect(() => {
        setEstado(estadoSelecionado)
        setCidade(nomeCidadeSelecionado)
        setBairro(bairroSelecionado)
    }, [nomeCidadeSelecionado])

    useEffect(() => {
        setBairro(bairroSelecionado)
    }, [bairroSelecionado])

    const compararCidade = () => {

        if(cidades === undefined) {
            return null
        } else if(cidades === null) {
            return null
        } else if(cidades.length == 0) {
            return null
        } else if(cidades == 0) {
            return null
        } else {

            const cidadeEmNumero = parseInt(cidadeSelecionado)

            cidades.map((item, indice) => {
                if(cidadeEmNumero == item.Id) {
                    setNomeCidadeSelecionado(item.Nome)
                }
            })
        }

    }

    useEffect(() => {
        compararCidade()
    }, [bairroSelecionado])

    useEffect(() => {
        setarLocalizacao(bairroSelecionado, nomeCidadeSelecionado, estadoSelecionado)
    },[nomeCidadeSelecionado])

    return (
        <div className='comboBoxContainer' >

            <div className='comboBox'>
                <p className='text'>Estados:</p>


                <input value={estadoSelecionado} onChange={(e) => setEstadoSelecionado(e.target.value)} list='states' className='inputNone' placeholder='Selecione um Estado' />
                <select name='state' onChange={(e) => setEstadoSelecionado(e.target.value)} className='inputList'>
                    <option value="">Selecione um estado...</option>
                    {
                        estados === undefined ? (
                            null
                        ) : (

                            estados.map((item, indice) => (
                                <option accessKey={indice} key={indice} value={item.Nome} dataNome={item.Nome}>
                                    {item.Nome}
                                </option>
                            ))

                        )
                    }
                </select>

            </div>


            <div className='comboBox'>
                <p className='text'>Cidades:</p>

                <input list='cities' className='inputNone' placeholder='Selecione uma Cidade' />
                <select name='city' onChange={(e) => setCidadeSelecionado(e.target.value)} className='inputList'>
                    <option value="">Selecione uma cidade...</option>
                    {
                        cidades === undefined ? (

                            null

                        ) : (

                            cidades === null ? (

                                null

                            ) : (

                                cidades.length == 0 ? (
                                    null
                                ) : (

                                    cidades.map((item) => (

                                        <option accessKey={item.Nome} key={item.Id} value={item.Id} dataNome={item.Nome}>
                                            {item.Nome}
                                        </option>

                                    ))

                                )

                            )

                        )
                    }
                </select>

            </div>


            <div className='comboBox'>

                <p className='text'>Bairros:</p>

                <input onChange={(e) => setBairro(e.target.value)} className='inputNone' list='neighborhoods' placeholder='Selecione um Bairro' />
                <select name='neighborhood' onChange={(e) => setBairroSelecionado(e.target.value)} className='inputList'>
                    <option value="">Selecione um bairro...</option>
                    {

                        bairros === undefined ? (
                            null
                        ) : (
                            bairros === null ? (
                                null
                            ) : (
                                bairros.length == 0 ? (

                                    null

                                ) : (

                                    bairros.map((item) => (
                                        <option key={item.Id} value={item.Nome}>
                                            {item.Nome}
                                        </option>
                                    ))

                                )
                            )
                        )

                    }
                </select>
            </div>

        </div>
    )
}

export default ComboBoxLocalizacao