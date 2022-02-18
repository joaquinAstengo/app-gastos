import { useState, useEffect } from 'react';
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
  const [gastoEditar, setGastoEditar] = useState({})

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {

      setModal(true)

      setTimeout(() => {
        setAnimar(true)
      }, 300);
    }


  }, [gastoEditar])

  const guardarGasto = gasto => {
    if (gasto.id) {
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados)
      setGastoEditar({})
    } else {
      gasto.id = generarId()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
    }

  }

  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id);
    setGastos(gastosActualizados)
  }

  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})
<<<<<<< HEAD
=======

>>>>>>> tmp
    setTimeout(() => {
      setAnimar(true)
    }, 300);

  }
  return (

    <>
      <div className={modal ? 'fijar' : ''}>

        <Header
          gastos={gastos}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
        ></Header>


        {isValidPresupuesto && (
          <>
            <main>
              <ListadoGastos
                eliminarGasto={eliminarGasto}
                gastos={gastos}
                setGastoEditar={setGastoEditar}
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
          setGastoEditar={setGastoEditar}
          animar={animar}
          setAnimar={setAnimar}
          setModal={setModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
        ></Modal>}

      </div>
    </>
  )
}

export default App
