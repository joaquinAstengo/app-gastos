import { useState } from 'react';
import { generarId } from './helpers'
import Header from './components/Header';
import ListadoGastos from './components/ListadoGastos';
import Modal from './components/Modal';
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animar, setAnimar] = useState(false)
  const [gastos, setGastos] = useState([])


  const guardarGasto = gasto => {
    gasto.id = generarId()
    gasto.fecha = Date.now()
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
    <div className={modal && 'fijar'}>

      <Header
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
      ></Header>


      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos
              gastos={gastos}
            ></ListadoGastos>
          </main>

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

        </div>
    </>
  )
}

export default App
