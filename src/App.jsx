import { useState, useEffect } from 'react';
import { generarId } from './helpers'
import Header from './components/Header';
import Filtros from './components/Filtros';
import ListadoGastos from './components/ListadoGastos';
import Modal from './components/Modal';
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {

  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  )
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
 
  const [modal, setModal] = useState(false)
  const [animar, setAnimar] = useState(false)

  const [gastos, setGastos] = useState(localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : [])
  const [gastoEditar, setGastoEditar] = useState({})

  const [filtro, setFiltro] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState([])


  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true)
      setTimeout(() => {
        setAnimar(true)
      }, 300);
    }
  }, [gastoEditar])


  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? 0)
  }, [gastos])


  useEffect(() => {
    if(filtro) {
      const gastosFiltrados = gastos.filter((gasto)=> gasto.categoria === filtro)
      setGastosFiltrados(gastosFiltrados)
    }
  }, [filtro])


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
    setTimeout(() => {
      setAnimar(true)
    }, 300);
  }


  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto])


  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto') ?? 0)
    if (presupuestoLS > 0) {
      setIsValidPresupuesto(true)
    }
  }, [])


  return (
    <>
      <div className={modal ? 'fijar' : ''}>
        <Header
          gastos={gastos}
          setGastos={setGastos}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
        ></Header>

        {isValidPresupuesto && (
          <>
            <main>

              <Filtros
              filtro={filtro}
              setFiltro={setFiltro}>
              </Filtros>
              
              <ListadoGastos
                eliminarGasto={eliminarGasto}
                gastos={gastos}
                setGastoEditar={setGastoEditar}
                filtro={filtro}
                gastosFiltrados={gastosFiltrados}
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
