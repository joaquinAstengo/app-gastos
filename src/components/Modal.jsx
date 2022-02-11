import { useState } from 'react'
import CerrarModal from '../img/cerrar.svg'
const Modal = ({ setModal, animar, setAnimar }) => {
    const cerrarModal = () => {

        setAnimar(false)

        setTimeout(() => {
            setModal(false)

        }, 300);
    }
    return (

        <div className='modal'>
            <div className='cerrar-modal'>
                <img src={CerrarModal} alt="Cerrar Modal" onClick={cerrarModal} />
            </div>
            <form className={`formulario ${animar ? "animar" : "cerrar"}`}>
                <legend>Nuevo Gasto</legend>

                <div className="campo">
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input 
                    id='nombre'
                    type="text"
                    placeholder='Añade nombre de gasto'/>
                </div>
                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input 
                    id='cantidad'
                    type="number"
                    placeholder='Añade la cantidad de gasto'/>
                </div>
            </form>
        </div>
    )
}

export default Modal