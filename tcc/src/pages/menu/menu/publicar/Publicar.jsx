import React, { useState } from 'react'
import ModalPublicar from '../../../../ui/components/menu/publicar/modalPublicar/ModalPublicar'
import FormularioPublicar from '../../../../ui/components/menu/publicar/formularioPublicar/FormularioPublicar'

function Publicar() {

  const [openModal, setOpenModal] = useState(true)
  console.log(openModal)

  return (
    <>

      <button onClick={() => setOpenModal}>Modal</button>

      <div>

      

      <ModalPublicar isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
      </ModalPublicar>
    </div>
    </>
    
  )
}

export default Publicar