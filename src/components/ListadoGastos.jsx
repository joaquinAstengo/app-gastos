import React from 'react';
import Gasto from './Gasto';

const ListadoGastos = ({gastos, setGastoEditar, eliminarGasto }) => {

    return (
        <div className='listado-gastos contenedor'>
            <h2>{gastos.length ? 'Gastos' : 'No hay gastos'}</h2>
            
            {gastos.map(gasto =>(
                <Gasto
                eliminarGasto={eliminarGasto}
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                ></Gasto>
                ))}
        </div>
    )
}

export default ListadoGastos;