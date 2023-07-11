/* eslint-disable react/prop-types */
import Filme from "../Filme";
import "./Categoria.css";

const Categoria = (props) => {
    if (!Array.isArray(props.filmes)) {
        return <div>Erro: dados de filmes inválidos</div>;
    }

    return props.filmes.length > 0 ? (
        <section
            className="categoria"
            style={{
                backgroundColor: props.corSecundaria,
                backgroundImage: "url(/imagens/fundo.png)",
            }}
        >
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className="filmes">
                {props.filmes.map((filme) => (
                    <Filme
                        key={filme}
                        nome={filme.nome}
                        categoria={filme.categoria}
                        imagem={filme.imagem}
                        fundo={props.corPrimaria}
                        descricao={filme.descricao}
                    />
                ))}
            </div>
        </section>
    ) : null;
};

export default Categoria;
