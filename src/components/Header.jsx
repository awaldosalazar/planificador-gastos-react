import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = ({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPrespuesto,
}) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>
        {isValidPresupuesto ? (
            <ControlPresupuesto presupuesto={presupuesto}/>
        ) : (
            <NuevoPresupuesto
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              setIsValidPrespuesto={setIsValidPrespuesto}
            />
        )}
    </header>
  );
};

export default Header;
