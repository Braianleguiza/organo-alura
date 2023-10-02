/* eslint-disable react/prop-types */
import Filme from "../Filme";
import "./Categoria.css";

const Categoria = ({
  filmes,
  corPrimaria,
  nome,
  icon,
  mudarCor,
  aoDeletar,
  aoFavoritar,
}) => {
  if (!Array.isArray(filmes)) {
    return <div>Erro: dados de filmes inválidos</div>;
  }

  return filmes.length > 0 ? (
    <section
      className="categoria"
      style={{
        border: "4px solid " + corPrimaria + 80,
        backgroundImage: "url(/imagens/fundo.png)",
      }}
    >
      <input
        value={corPrimaria}
        type="color"
        className="input-cor"
        onChange={(evento) => mudarCor(evento.target.value, nome)}
      />
      <h3
        className="text-5xl font-bold"
        style={{
          borderColor: corPrimaria + 80,
          display: "inline-flex",
        }}
      >
        <img style={{ marginRight: "5px" }} src={icon} alt={nome} />
        <span>{nome}</span>
      </h3>
      <div className="filmes">
        {filmes.map((filme) => {
          return (
            <Filme
              key={filme.nome + filme.ano}
              nome={filme.nome}
              categoria={filme.categoria}
              imagem={filme.imagem}
              fundo={corPrimaria}
              descricao={filme.descricao}
              ano={filme.ano}
              aoDeletar={aoDeletar}
              favorito={filme.favorito}
              aoFavoritar={aoFavoritar}
            />
          );
        })}
      </div>
    </section>
  ) : null;
};

export default Categoria;
