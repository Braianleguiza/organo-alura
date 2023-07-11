/* eslint-disable react/prop-types */
import "./Filme.css";

const Filme = ({ nome, categoria, imagem, fundo, descricao }) => {
    return (
        <div className="filme">
            <div className="cabecalho" style={{ backgroundColor: fundo }}>
                <img src={imagem} alt={nome} />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{categoria}</h5>
            </div>
            <div>
                <p>{descricao}</p>
            </div>
        </div>
    );
};

export default Filme;
