import React from 'react'
import './styleFormularioEditarMeuPerfil.css'
import IconObject from '../../../global/IconesGlobais/iconesGlobais'
import InputGlobal from '../../../global/InputGlobal/InputGlobal'
import TelaCinza from '../../../../../pages/menu/menu/perfil/images/telaCinza.svg'
import TelaRoxa from '../../../../../pages/menu/menu/perfil/images/telaRoxa.svg'
import IconeEditar from '../../../../../pages/menu/menu/perfil/images/iconeEditarFoto.svg'
import TelaTransparente from '../../../../../pages/menu/menu/perfil/images/telaTransparente.svg'
import { useState, useContext, useEffect } from 'react'
import blogFetch from '../../../../../data/services/api/ApiService'
import UserContext from '../../../../../data/hooks/context/UserContext'
import { useNavigate } from 'react-router-dom'
import { uploadImage } from '../../../../../data/services/firebase/firebase'
import ModalCarregarGlobal from '../../../global/ModalCarregarGlobal/ModalCarregarGlobal'
import { fetchCidadesPorEstado } from '../../../../../ui/components/personalizarPerfil/ComboBoxLocalizacao/ApiEndereco.jsx'
import { fetchEstados } from '../../../../../ui/components/personalizarPerfil/ComboBoxLocalizacao/ApiEndereco.jsx'
import { fetchBairroPorCidade } from '../../../../../ui/components/personalizarPerfil/ComboBoxLocalizacao/ApiEndereco.jsx'
import InputEstados from '../../../personalizarPerfil/ComboBoxLocalizacao/inputEstados/InputEstados'
import InputCidades from '../../../personalizarPerfil/ComboBoxLocalizacao/inputCidades/InputCidades'
import InputBairros from '../../../personalizarPerfil/ComboBoxLocalizacao/inputBairros/InputBairros'
import BotaoTag from '../../../personalizarPerfil/BotaoTag/BotaoTag.jsx'


function FormularioEditarMeuPerfil({ aberto, open, nomePerfil, tagPerfil, cidadePerfil, estadoPerfil, bairroPerfil, descricaoPerfil, tagsPerfil, idLocalizacao, reloadUser, imgPerfil, funcLoading }) {

    const navigate = useNavigate()

    const { accessToken } = useContext(UserContext)
    const { id } = useContext(UserContext)

    const [estado, setEstado] = useState(estadoPerfil)
    const [cidade, setCidade] = useState(cidadePerfil)
    const [bairro, setBairro] = useState(bairroPerfil)
    const [descricao, setDescricao] = useState(descricaoPerfil)
    const [nome, setNome] = useState(nomePerfil)
    const [tagPerfilEditado, setTagPerfil] = useState(tagPerfil)
    const [tags, setTags] = useState(tagsPerfil)
    const [localizacao, setLocalizacao] = useState(idLocalizacao)
    const [fotoPerfil, setFotoPerfil] = useState(imgPerfil)
    const [statusResponse, setStatusResponse] = useState(0)

    const [tagsSelecionadas, setTagsSelecionadas] = useState([])
    const [clique, setClique] = useState(false)

    console.log(tagsPerfil)

    useEffect(() => {
        console.log(statusResponse)
    }, [statusResponse])

    const [images, setImage] = useState([])
    const [imageURL, setImageURL] = useState([])


    useEffect(() => {
        if (images.length < 1) return

        const newImageUrl = []
        images.forEach(image => newImageUrl.push(URL.createObjectURL(image)))
        setImageURL(newImageUrl)

    }, [images])

    function onImageChange(e) {
        setImage([...e.target.files])
    }

    const formatarTags = () => {

        const tagEditada = []

        tags.map((tag) => {
            const dadosTag = {
                id_tag: tag.id_tag,
                nome: tag.nome_tag
            }

            tagEditada.push(dadosTag)
        })

        return tagEditada

    }

    const salvarFoto = async () => {

        if (images !== undefined && images !== null && images[0] !== undefined && images[0] !== null) {
            try {

                const responseImg = await uploadImage(images[0], images[0].name)

                return await responseImg

            } catch (error) {
                console.log(error)
            }

            return await responseImg
        } else {
            return false
        }


    }

    //Endpoints enderecos

    const salvarNovosDadosPerfil = async () => {

        const tag = formatarTags()

        const foto = await salvarFoto()

        funcLoading(true, 0, '/explorar')

        if (foto == false) {

            funcLoading(true, 0, '/explorar')



            try {
                // const response = { status: 200}
                const response = await blogFetch.put('/usuario/editar_perfil', {
                    id_usuario: id,
                    id_localizacao: localizacao,
                    bairro: bairro,
                    cidade: cidade,
                    estado: estado,
                    nome: nome,
                    descricao: descricao,
                    foto: fotoPerfil,
                    nome_de_usuario: tagPerfilEditado,
                    tags: tag
                }, {
                    headers: {
                        'x-access-token': accessToken
                    },

                })

                console.log(response)
                // setStatusResponse(response.status)

                if (response.status == 200) {
                    funcLoading(true, 200, '/menu/explorar', 'Usuário editado com sucesso.')
                } else {
                    funcLoading(true, 500, '/menu/explorar', 'Erro 500 - Problema no servidor. Tente Novamente.')
                }

            } catch (error) {
                console.log(error)

                funcLoading(true, error.response.status, '/menu/explorar')




                reloadUser()

                funcLoading(true, response.status, '/menu/explorar')


            }


        } else {

            funcLoading(true, 0, '/explorar')

            setFotoPerfil(foto)

            try {
                const response = await blogFetch.put('/usuario/editar_perfil', {
                    id_usuario: id,
                    id_localizacao: localizacao,
                    bairro: bairro,
                    cidade: cidade,
                    estado: estado,
                    nome: nome,
                    descricao: descricao,
                    foto: foto,
                    nome_de_usuario: tagPerfilEditado,
                    tags: tag
                }, {
                    headers: {
                        'x-access-token': accessToken
                    }
                })

                reloadUser()

                funcLoading(true, response.status, '/menu/explorar')



                if (response.status == 200) {
                    funcLoading(true, 200, '/menu/explorar', 'Usuário editado com sucesso.')
                } else {
                    funcLoading(true, 500, '/menu/explorar', 'Erro 500 - Problema no servidor. Tente Novamente.')
                }

            } catch (error) {
                console.log(error)

                funcLoading(true, error.response.status, '/menu/explorar')

                funcLoading(true, error.response.status, '/menu/explorar')
                console.log('erro')
            }

            console.log('com foto')



        }

    }


    //Localização
    const [formValues, setFormValues] = useState({})

    const handleInputChange = (e) => {
        e.preventDefault()
        const { value, name } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    //Tags

    const pegarTags = async () => {
        try {
            const response = await blogFetch.get('/tag', {
                headers: {
                    "x-access-token": accessToken
                }
            })

            setTags(response.data.tags)
            console.log(response.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        pegarTags()
    }, [])


    const listarTagsDoPerfil = () => {

        const listaTagsPerfil = []

        if (tagsPerfil === undefined) {

            console.log(tagsPerfil)

            return false

        } else {
            tagsPerfil.map((item, index) => {
                tags.map((tag, indice) => {

                    if (item.id_tag == tag.id_tag) {


                        listaTagsPerfil.push({
                            id_tag: item.id_tag,
                            nome: item.nome,
                            id_categoria: item.id_categoria,
                            imagem: item.imagem,
                            nome_categoria: item.nome_categoria,
                            selecao: true
                        })


                    }
                })
            })

            console.log(listaTagsPerfil)

            return listaTagsPerfil
        }


    }

    const adicionarTagsComSelecao = () => {

        const listaTagsPerfil = listarTagsDoPerfil()

        if (listaTagsPerfil == false) {
            console.log('as')
        } else {

            const letTags = [...tags]

            const letTagsSelecionadas = [...tagsSelecionadas]


            letTags.map((letTag, letIndex) => {
                listaTagsPerfil.map((item, indice) => {
                    if (letTag.id_tag == item.id_tag) {

                        letTags.splice(letIndex, 1)

                        letTags.unshift(item)

                        letTagsSelecionadas.push({
                            id_tag: item.id_tag,
                            novo: true
                        })

                    }
                })
            })

            console.log(letTagsSelecionadas)
            console.log(letTags)


            setTagsSelecionadas(letTagsSelecionadas)

            setTags(letTags)

        }

    }

    const pegarTagsSelecionadasListaTagsAlterada = () => {

        const listaTags = []

        tags.map((tag, index) => {
            tagsSelecionadas.map((item, indice) => {

                if (item.novo == true && tag.id_tag == item.id_tag) {
                    listaTags.push(item)
                }

            })
        })

        console.log(listaTags)

        return listaTags
    }

    const removerTagsListaTagsListaSelecionadas = () => {

        const listaTagsSelecionadasAlteradas = pegarTagsSelecionadasListaTagsAlterada()

        const listaTagsRemovidas = []

        if (listaTagsSelecionadasAlteradas.length == 0) {

            return false

        } else {

            listaTagsSelecionadasAlteradas.map((tagSel, indexSel) => {
                tags.map((tag, index) => {
                    tagsSelecionadas.map((item, indice) => {
                        if (tagSel.id_tag == item.id_tag) {

                            tagsSelecionadas.splice(indice, 1)

                            tags.splice(index, 1)

                            listaTagsRemovidas.push({
                                id_categoria: tag.id_categoria,
                                id_tag: tag.id_tag,
                                imagem: tag.imagem,
                                nome: tag.nome,
                                nome_categoria: tag.nome_categoria
                            })

                        }
                    })
                })
            })

            return listaTagsRemovidas
        }

    }

    const adicionarTagsSemAlteracaoListaTags = () => {

        const listaTagsRemovidas = removerTagsListaTagsListaSelecionadas()

        if (listaTagsRemovidas == false) {
            return false
        } else {
            listaTagsRemovidas.map((tagRemovida, indice) => {
                tags.push(tagRemovida)
            })

            return true
        }
    }

    const alterarTagsSelecionadas = () => {

        const tagsSelecionadasAlteradas = []

        tagsSelecionadas.map((tag, indice) => {
            tagsSelecionadasAlteradas.push({
                id_tag: tag.id_tag
            })
        })

        return tagsSelecionadasAlteradas
    }

    useEffect(() => {

        const listaTagsInalterada = adicionarTagsSemAlteracaoListaTags()

        if (listaTagsInalterada == false) {
            console.log('deu erro')
        } else {
            console.log('deu certo')
        }

    }, [clique])

    useEffect(() => {

        adicionarTagsComSelecao()

    }, [tagsPerfil])

    //
    // const { value, name } = e.target
    // console.dir(e.target.selectedOptions[0].textContent)
    // setFormValues(
    //     { ...formValues, [name]: value, nome: e.target.selectedOptions[0].textContent, }
    // )




    console.log(formValues)
    return (
        <>

            <form className='formularioAtualizarPerfil'>

                <div className='secaoMeuPerfil__apresentacaoPerfil'>
                    <i onClick={open} >{IconObject.voltarOuCancelar}</i>
                    <h1 className='apresentacaoMeuPerfil__tituloPerfil'>MEU PERFIL</h1>
                    <i onClick={salvarNovosDadosPerfil}>
                        {IconObject.salvarMeuPerfil}
                    </i>
                </div>

                <div>
                    <label className='formularioAtualizarPerfil__atualizarFoto' itemID='picture__input' tabIndex="0" onChange={(e) => onChange(e.target.value)}>

                        <img src={IconeEditar} className='iconeEditarPerfil' alt="" />
                        <img src={TelaTransparente} className='telaTransparente' alt="" />


                        <input type="file" multiple accept='image/*' id='picture__input' onChange={onImageChange} />
                        {imageURL.map(imageSrc => <img src={imageSrc} className='atualizarFoto__fotoEscolhida' />)}

                        <img src={fotoPerfil} className='atualizarFoto__fotoAntiga' alt="" />
                        <img src={TelaCinza} className='telaCinza' alt="" />
                        <img src={TelaRoxa} className='telaRoxa' alt="" />

                    </label>
                </div>

                <div className='formularioAtualizarPerfil__atualizarNome'>
                    <label>
                        NOME
                    </label>
                    <InputGlobal
                        placeholder={'Atualize seu nome'}
                        type={'text'}
                        onChange={setNome}
                        valueperfil={nome}
                    ></InputGlobal>
                </div>

                <div className='formularioAtualizarPerfil__atualizarTag'>
                    <label>
                        Tag De Usuário
                    </label>
                    <InputGlobal
                        placeholder={'Atualize sua tag de usuário'}
                        type={'text'}
                        onChange={setTagPerfil}
                        valueperfil={tagPerfilEditado}
                    ></InputGlobal>
                </div>

                <form className='containerInputs'>

                    <div className='containerInputs__labelCidadesInput'>
                        <label>
                            Estado
                        </label>
                        <input type='text' className='containerInputs__inputListaEstados' list='states' placeholder='Selecione...' onChange={(e) => setEstado(e.target.value)} value={estado} />
                        {/* <InputEstados id={'states'} onChange={handleInputChange} /> */}
                    </div>

                    <div className='containerInputs__labelCidadesInput'>
                        <label>
                            Cidade
                        </label>
                        <input type='text' className='containerInputs__inputListaCidades' list='cities' placeholder='Selecione...' onChange={(e) => setCidade(e.target.value)} value={cidade} />
                        {/* <InputCidades id={'cities'} onChange={handleInputChange} state={formValues.state} /> */}
                    </div>

                    <div className='containerInputs__labelBairroInput'>
                        <label>
                            Bairro
                        </label>
                        <input type='text' className='containerInputs__inputListaBairros' list='district' placeholder='Selecione...' onChange={(e) => setBairro(e.target.value)} value={bairro} />
                        {/* <InputBairros id={'district'} onChange={handleInputChange} city={formValues.city} /> */}
                    </div>

                </form>

                <div className='formularioAtualizarPerfil__atualizarDescricao'>
                    <label>
                        Descrição
                    </label>
                    <input className='formularioAtualizarPerfil__editarDescricao' type="text" onChange={(e) => setDescricao(e.target.value)} value={descricao} />
                </div>

                {/* <div className='formularioAtualizarPerfil__atualizarTags'>

                    <div className='atualizarTags'>

                        {

                            tags === undefined ? (

                                <p>Carregando</p>

                            ) : (

                                tags.length == 0 ? (
                                    <p>Carregando</p>
                                ) : (
                                    tags.map((item, indice) => {

                                        if (item.selecao == true) {
                                            return (
                                                <BotaoTag
                                                    text={item.nome}
                                                    key={item.id_tag}
                                                    selecao={item.selecao}
                                                    option={() => {
                                                        tags.map((tag, indice) => {
                                                            if (item.id_tag == tag.id_tag) {
                                                                tags.splice(indice, 1)

                                                                const letTags = [...tags]

                                                                letTags.push({
                                                                    id_tag: item.id_tag,
                                                                    nome: item.nome,
                                                                    id_categoria: item.id_categoria,
                                                                    imagem: item.imagem,
                                                                    nome_categoria: item.nome_categoria
                                                                })

                                                                const letTagsSelecionadas = [...tagsSelecionadas]

                                                                letTagsSelecionadas.map((letItem, letIndice) => {
                                                                    if (item.id_tag == letItem.id_tag) {
                                                                        letTagsSelecionadas.splice(letIndice, 1)
                                                                    }
                                                                })

                                                                setTags(letTags)

                                                                setTagsSelecionadas(letTagsSelecionadas)
                                                            }
                                                        })
                                                    }}
                                                ></BotaoTag>
                                            )
                                        } else {
                                            return (
                                                <BotaoTag
                                                    key={item.id_tag}
                                                    text={item.nome}
                                                    option={() => {



                                                        tags.map((tag, indice) => {
                                                            if (item.id_tag == tag.id_tag) {

                                                                tags.splice(indice, 1)

                                                                const letTags = [...tags]

                                                                letTags.unshift({
                                                                    id_tag: item.id_tag,
                                                                    nome: item.nome,
                                                                    id_categoria: item.id_categoria,
                                                                    imagem: item.imagem,
                                                                    nome_categoria: item.nome_categoria,
                                                                    selecao: true
                                                                })

                                                                setTags(letTags)

                                                                const letTagsSelecionadas = [...tagsSelecionadas]

                                                                letTagsSelecionadas.unshift({
                                                                    id_tag: item.id_tag,
                                                                    novo: true
                                                                })

                                                                setTagsSelecionadas(letTagsSelecionadas)

                                                            }
                                                        })


                                                    }}
                                                ></BotaoTag>
                                            )
                                        }
                                    })
                                )

                            )

                        }

                    </div>

                </div> */}



            </form>
        </>
    )
}

export default FormularioEditarMeuPerfil