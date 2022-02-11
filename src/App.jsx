import { useState } from 'react';
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Header from './components/Header';
import Modal from './components/Modal';

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animar, setAnimar] = useState(false)

  const handleNuevoGasto = () => {
    setModal(true)

    setTimeout(() => {
      setAnimar(true)
    }, 300);

  }
  return (

    <>
      <Header
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
      ></Header>
      {isValidPresupuesto && (
        <div className='nuevo-gasto'>
          <img
            onClick={handleNuevoGasto}
            src={IconoNuevoGasto}
            alt="Icono Nuevo Gasto"
          />
        </div>
      )}

      {modal && <Modal animar={animar} setAnimar={setAnimar} setModal={setModal}></Modal>}

    </>
  )
}

export default App
