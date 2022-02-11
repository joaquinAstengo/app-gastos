import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

  const [mensaje, setMensaje] = useState('');


  const handlePresupuesto = (e) => {
    e.preventDefault()
    if (!presupuesto || presupuesto < 0) {
      setMensaje('No es un presupuesto válido')
      return
    }
    setMensaje('')
    setIsValidPresupuesto(true)
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form
        className='formulario'
        action=""
        onSubmit={handlePresupuesto}
      >
        <div className='campo'>
          {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
          <label htmlFor="">Definir Presupuesto</label>
          <input type="number"
            className='nuevo-presupuesto'
            placeholder='Añade tu presupuesto'
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
        </div>
        <input type="submit" value="añadir" />
      </form>
    </div>
  )
}

export default NuevoPresupuesto