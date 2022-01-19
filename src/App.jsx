import { useState } from 'react'
import Header from './components/Header';
import Modal from './components/Modal';
import { generarId } from './helpers';
import IconoNuevoGasto from './img/nuevo-gasto.svg';

const App = () => {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPrespuesto] = useState(false);
  

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastos, setGastos] = useState([]);

  const handleNuevoGasto = () =>{
    setModal(true);
    setTimeout(() => {
      setAnimarModal(true);
    }, 500)
  }

  const guardarGasto = gasto => {
    gasto.id = generarId();
    setGastos([...gastos, gasto]);

    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 200);
  }
  return (
    <div>
      <Header 
      presupuesto={presupuesto} 
      setPresupuesto={setPresupuesto} 
      isValidPresupuesto={isValidPresupuesto}
      setIsValidPrespuesto={setIsValidPrespuesto}
      />
      {isValidPresupuesto &&
      <div className='nuevo-gasto'>
        <img
          src={IconoNuevoGasto}
          alt='Icono nuevo gasto'
          onClick={handleNuevoGasto}
      />

      </div>}

      {modal && <Modal setModal={setModal} animarModal={animarModal} setAnimarModal={setAnimarModal} guardarGasto={guardarGasto} />}
    </div>
  )
}

export default App
