import { useState } from "react";
import { categorias } from "../helpers/data/Categorias";
import Mensaje from "./Mensaje";
import CerrarBtn from "../img/cerrar.svg";

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {
  const [mensaje, setMensaje] = useState("");

  const [form, setForm] = useState({
    nombre: "",
    cantidad: 0,
    categoria: "",
  });

  const ocultarModal = () => {
    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, cantidad, categoria } = form;
    if ([nombre, cantidad, categoria].includes("")) {
      setMensaje("Todos los campos son obligatorios");

      setTimeout(() => {
        setMensaje("");
      }, 3000);
      return;
    }
    setMensaje("");
    guardarGasto(form);
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="Cerrar Modal" onClick={ocultarModal} />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
      >
        <legend>Nuevo Gasto</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            id="nombre"
            type="text"
            placeholder="Añade el Nombre del Gasto"
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            id="cantidad"
            type="number"
            placeholder="Añade la cantidad del gasto: ej.300"
            value={form.cantidad}
            onChange={(e) =>
              setForm({ ...form, cantidad: Number(e.target.value) })
            }
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            value={form.categoria}
            onChange={(e) => setForm({ ...form, categoria: e.target.value })}
          >
            {categorias.map(({ label, value, disabled }) => (
              <option
                key={value}
                value={value}
                disabled={disabled ? true : false}
              >
                {label}
              </option>
            ))}
          </select>
        </div>

        <input type="submit" value="Añadir gastos" />
      </form>
    </div>
  );
};

export default Modal;
