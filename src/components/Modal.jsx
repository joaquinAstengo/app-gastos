<<<<<<< HEAD
import { useState, useEffect} from 'react'
import { createLogger } from 'vite';
=======
import { useState, useEffect } from 'react'
>>>>>>> tmp
import CerrarModal from '../img/cerrar.svg'
import Mensaje from './Mensaje'


<<<<<<< HEAD
const Modal = ({ setModal, animar, setAnimar,guardarGasto, gastoEditar }) => {
=======
const Modal = ({ setModal, animar, setAnimar, guardarGasto, gastoEditar, setGastoEditar }) => {
>>>>>>> tmp

    const [mensaje, setMensaje] = useState('');
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [categoria, setCategoria] = useState('');
    const [id, setId] = useState('')
    const [fecha, setFecha] = useState('')

 
    useEffect(() => {
        if (Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre);
            setCantidad(gastoEditar.cantidad);
            setCategoria(gastoEditar.categoria);
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
        }
    }, [])

    useEffect(()=>{
        if (Object.keys(gastoEditar).length > 0){
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
        }
    }, [])
    
    const cerrarModal = () => {
        setAnimar(false)
        setGastoEditar({})
        setTimeout(() => {
            setModal(false)
        }, 300);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if ([nombre, cantidad, categoria].includes('')) {
            setMensaje('Todos los campos son obligatorios')
            return
        }
        setMensaje('')

        guardarGasto({ nombre, cantidad, categoria, id, fecha })
        cerrarModal()

    }

    return (

        <div className='modal'>
            <div className='cerrar-modal'>
                <img src={CerrarModal} alt="Cerrar Modal" onClick={cerrarModal} />
            </div>
            <form className={`formulario ${animar ? "animar" : "cerrar"}`}>
                <legend>{gastoEditar.nombre ? "Editar Gasto" : "Nuevo Gasto"}</legend>
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
                <div className="campo">
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input
                        id='nombre'
                        type="text"
                        placeholder='Añade nombre de gasto'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)} />
                </div>
                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        id='cantidad'
                        type="number"
                        placeholder='Añade la cantidad de gasto'
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))} />
                </div>
                <div className="campo">
                    <label htmlFor="categoria">Seleccione su categoría</label>
                    <select
                        name="categoria"
                        id="categoria"
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                    >
                        <option value="">--Seleccione--</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="casa">Casa</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
                <input onClick={handleSubmit} type="submit" value={gastoEditar.nombre ? "Editar Gasto" : "Nuevo Gasto"} />
            </form>
        </div>
    )
}

export default Modal