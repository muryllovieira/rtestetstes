import React, { useEffect, useState, useContext } from 'react'
import blogFetch from '../../../../data/services/api/ApiService'
import UserContext from '../../../../data/hooks/context/UserContext'
import TagGlobal from '../../../../ui/components/global/TagGlobal/TagGlobal'
import BotaoRecomendacao from '../../../../ui/components/menu/meuPerfil/BotaoRecomendacao/BotaoRecomendacao'
import CardPublicacaoMeuPerfil from '../../../../ui/components/menu/meuPerfil/CardPublicacaoMeuPerfil/CardPublicacaoMeuPerfil'
import CardUsuarioMeuPerfil from '../../../../ui/components/menu/meuPerfil/CardUsuarioMeuPerfil/CardUsuarioMeuPerfil'
import { Link } from 'react-router-dom'
import setaEsquerda from './images/setaEsquerda.svg'
import './stylePerfilSelecionado.css'

function PerfilSelecionado() {

    const {accessToken} = useContext(UserContext)
    const {idPerfil} = useContext(UserContext)
    console.log(idPerfil, accessToken)

    const [perfil, setPerfil] = useState(null)
    const [tags, setTags] = useState([])

    const getPerfil = async () => {
        try {
            const response = await blogFetch.get(`/usuario/meu_perfil/${idPerfil}`, {
                headers: {
                    'x-access-token' : accessToken
                }
            })

            setPerfil(response.data)
            console.log(perfil)

            if (response.data.usuario.tags === undefined) {
                console.log('a')
            } else {
                setTags(response.data.usuario.tags)
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPerfil()
    }, [])


  return (
    <>
        <div className="containerPerfil">

                
                  <div className="containerPerfil__containerCardPerfil">

                    {/* SVG Absolute */}
                      <svg className='marcaTransparentePerfil' xmlns="http://www.w3.org/2000/svg" width="410" height="226" viewBox="0 0 410 226" fill="none">
                        <path d="M0 20C0 8.9543 8.9543 0 20 0H390C401.046 0 410 8.9543 410 20V181.613C410 193.724 399.321 203.055 387.319 201.432L309.128 190.855C307.384 190.62 305.616 190.615 303.871 190.842L40.6858 225.027C31.7245 226.191 23.0959 221.202 19.6347 212.854L1.52516 169.178C0.51827 166.75 0 164.147 0 161.518V20Z" fill="url(#paint0_linear_461_13635)" fillOpacity="0.4"/>
                        <defs>
                        <linearGradient id="paint0_linear_461_13635" x1="205" y1="0" x2="205" y2="279" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#A89BFF"/>
                        <stop offset="1" stopColor="#C98FEC"/>
                        </linearGradient>
                        </defs>
                      </svg>
        
                      <svg className='marcaPerfil' xmlns="http://www.w3.org/2000/svg" width="410" height="200" viewBox="0 0 410 200" fill="none">
                        <path d="M0 20C0 8.95431 8.9543 0 20 0H390C401.046 0 410 8.95431 410 20V160.046C410 172.521 398.705 181.951 386.431 179.725L309.07 165.695C307.036 165.326 304.956 165.275 302.906 165.543L46.8069 199.062C38.0246 200.211 29.5323 195.448 25.9351 187.354L1.72377 132.878C0.587246 130.321 0 127.554 0 124.756V20Z" fill="url(#paint0_linear_461_13634)"/>
                        <defs>
                        <linearGradient id="paint0_linear_461_13634" x1="205" y1="0" x2="205" y2="258" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#A89BFF"/>
                        <stop offset="1" stopColor="#C98FEC"/>
                        </linearGradient>
                        </defs>
                      </svg>
                    {/* SVG Absolute */}

                    <section className='containerCardPerfil__secaoMeuPerfil'>

                          {
                            perfil === null ? (
                              <p>Carregando...</p>
                            ) : (
                                <>
                                <div className='secaoMeuPerfil__apresentacaoPerfil'>
                                    <h1 className='apresentacaoMeuPerfil__tituloPerfil'>{perfil.usuario.nome}</h1>
                                    <Link to={"/menu/servicos"}>
                                      <img src={setaEsquerda} className="botaoVoltar" />
                                  </Link>
                                </div>
                                <CardUsuarioMeuPerfil
                                    key={perfil.usuario.id}
                                    nomePerfil={perfil.usuario.nome}
                                    tagPerfil={perfil.usuario.nome_de_usuario}
                                    localicaoPerfil={`${perfil.usuario.cidade},${perfil.usuario.estado}`}
                                    fotoPerfil={perfil.usuario.foto}
                                ></CardUsuarioMeuPerfil>
                                </>
                              
                            )
                          }
                    
                          <div className='secaoMeuPerfil__botoesRecomendacao'>
                            <BotaoRecomendacao
                              url={'/'}
                              value={'RECOMENDAÇÕES'}
                            ></BotaoRecomendacao>
                            <BotaoRecomendacao
                              url={'/'}
                              value={'RECOMENDADOS'}
                            ></BotaoRecomendacao>
                          </div>
                        

                          {
                             perfil === null ? (
                              <p>Carregando...</p>
                            ) : (
                              <p className='secaoMeuPerfil__descricaoPerfil'>
                              {perfil.usuario.descricao}
                              </p>
                            )
                          }

                          <div>
                            
                            {
                              perfil === null ? (
                                <p className='carregandoPerfil'>Usuário Não Encontrado</p>
                              ) : (
                                
                                <div className="containerPerfil__containerTags">
                                  {
                                    tags.length == 0 ? (
                                      <>Sem Tags</>
                                    ) : (
                                      <>
                                      
                                       {
                                         perfil.usuario.tags[0] === undefined ? (
                                          <></>
                                        ) : (
                                          <TagGlobal
                                            key={perfil.usuario.tags[0].id_tag}
                                            id={perfil.usuario.tags[0].id_tag}
                                            value={perfil.usuario.tags[0].nome_tag}
                                          ></TagGlobal>
                                        ) 
                                       }
                                       
                                        {
                                          perfil.usuario.tags[1] === undefined ? (
                                            <></>
                                          ) : (
                                            <TagGlobal
                                              key={perfil.usuario.tags[1].id_tag}
                                              id={perfil.usuario.tags[1].id_tag}
                                              value={perfil.usuario.tags[1].nome_tag}
                                            ></TagGlobal>
                                          ) 
                                        }

                                        {
                                          perfil.usuario.tags[2] === undefined ? (
                                            <></>
                                          ) : (
                                            <TagGlobal
                                              key={perfil.usuario.tags[2].id_tag}
                                              id={perfil.usuario.tags[2].id_tag}
                                              value={perfil.usuario.tags[2].nome_tag}
                                            ></TagGlobal>
                                          ) 
                                        }

                                      </>
                                    )
                                  }
                                </div>
                              )
                            }

                             {/* {
                              user.usuario.tags.map((tag, index) => 
                                 {if (index < 3) {
                                    <TagGlobal
                                    id={tag.id_tag}
                                    value={tag.nome_tag}
                                    numero={'100'}
                                  ></TagGlobal>
                                 }}
                              )
                            }  */}

                          </div>
                     
                    </section>
                  </div>

          <div className="containerPerfil__containerPublicacoes">
              <CardPublicacaoMeuPerfil/>
          </div>

        </div>

        
    </>
  )
}

export default PerfilSelecionado