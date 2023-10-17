import React, { useState } from 'react'
import ModalPublicar from '../../../../ui/components/menu/publicar/modalPublicar/ModalPublicar'
import FormularioPublicacao from '../../../../ui/components/menu/publicar/FormularioPublicacao/FormularioPublicacao'

function Publicar() {

  const [openModal, setOpenModal] = useState(false)
  console.log(openModal)

  return (
    <>

      <button onClick={(e) => setOpenModal(true)}>Modal</button>

      <div>

      

      <ModalPublicar isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
          <FormularioPublicacao></FormularioPublicacao>
      </ModalPublicar>
    </div>
    </>
    
  )
}

export default Publicar