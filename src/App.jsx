import { useState } from 'react';
import Header from './components/Header';
import ListadoGastos from './components/ListadoGastos';
import Modal from './components/Modal';
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import { generarId } from './helpers'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animar, setAnimar] = useState(false)
  const [gastos, setGastos] = useState([])


  const guardarGasto = gasto => {
    gasto.id = generarId()
    setGastos([...gastos, gasto])
  }

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
        <>
          <ListadoGastos></ListadoGastos>

          <div className='nuevo-gasto'>
            <img
              onClick={handleNuevoGasto}
              src={IconoNuevoGasto}
              alt="Icono Nuevo Gasto"
            />
          </div>
        </>
      )}

      {modal && <Modal
        animar={animar}
        setAnimar={setAnimar}
        setModal={setModal}
        guardarGasto={guardarGasto}
      ></Modal>}

    </>
  )
}

export default App
