import { useState } from 'react'
import CerrarModal from '../img/cerrar.svg'
import Mensaje from './Mensaje'


const Modal = ({ setModal, animar, setAnimar, guardarGasto }) => {

    const [gasto, setGasto] = useState([]);
    const [mensaje, setMensaje] = useState('');
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [categoria, setCategoria] = useState('');

    const cerrarModal = () => {
        setAnimar(false)
        setTimeout(() => {
            setModal(false)
        }, 300);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if ([nombre, cantidad, categoria].includes('')) {
            setMensaje('Todos los campos son obligatorios')
        } else {
            console.log('Subiendo')
        }
        guardarGasto({ nombre, cantidad, categoria })
    }

    return (

        <div className='modal'>
            <div className='cerrar-modal'>
                <img src={CerrarModal} alt="Cerrar Modal" onClick={cerrarModal} />
            </div>
            <form className={`formulario ${animar ? "animar" : "cerrar"}`}>
                <legend>Nuevo Gasto</legend>
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
                <input onClick={handleSubmit} type="submit" value="Añadir Gasto" />
            </form>
        </div>
    )
}

export default Modal