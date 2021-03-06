import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto';
import ControlPresupuesto from '../ControlPresupuesto';
import { useState } from "react";


const Header = ({ gastos, presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto}) => {

  return (
    <header>
      <h1>Planificador de gastos</h1>
      {isValidPresupuesto ? (
        <ControlPresupuesto
        gastos={gastos}
        presupuesto={presupuesto}
        ></ControlPresupuesto>
      ): (
        <NuevoPresupuesto
        setIsValidPresupuesto={setIsValidPresupuesto}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
      ></NuevoPresupuesto>
      )}
      
    </header>
  )
}

export default Header