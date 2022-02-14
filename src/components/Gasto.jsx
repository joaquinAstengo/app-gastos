import React from 'react'
import { formatearFecha } from '../helpers';
import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'


const diccionarioIconos = {
  ahorro : IconoAhorro,
  comida : IconoComida,
  gastos : IconoGastos,
  casa: IconoCasa,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones,
}

const Gasto = ({setGastado, gasto }) => {
  const { categoria, nombre, cantidad, id, fecha } = gasto;
  return (
    <div className='gasto sombra'>
      <div className='contenido-gasto'>
        <img src={diccionarioIconos[categoria]} alt="" />
        <div className='descripcion-gasto'>
          <p className='nombre-gasto'>{nombre}</p>
          <p className='categoria'>{categoria}</p>
          <p className='fecha-gasto'>
            Agregado el {''}
            <span>{formatearFecha(fecha)}</span>
          </p>
        </div>
        <p className='cantidad-gasto'>${cantidad}</p>
      </div>
    </div>
  )
}

export default Gasto;