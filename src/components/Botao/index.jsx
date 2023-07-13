/* eslint-disable react/prop-types */
import "./Botao.css";

const Botao = (props) => {
    return <button className="btn btn-error botao">{props.children}</button>;
};

export default Botao;
