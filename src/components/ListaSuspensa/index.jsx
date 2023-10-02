/* eslint-disable react/prop-types */
import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <label htmlFor={props.label}>{props.label}</label>
      <select
        className="select select-error w-full max-w-xs"
        value={props.valor}
        onChange={(evento) => props.aoAlterado(evento.target.value)}
        required={props.obrigatorio}
      >
        <option value=""></option>
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
