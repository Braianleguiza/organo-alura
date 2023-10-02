/* eslint-disable react/prop-types */
import "./CampoTexto.css";

const CampoTexto = (props) => {
  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        className="input input-bordered w-full max-w-xs"
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={props.placeholder}
        type="text"
      />
    </div>
  );
};

export default CampoTexto;
