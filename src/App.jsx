import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Categoria from "./components/Categoria";
import Rodape from "./components/Rodape";
import filmesInicial from "./storages/store";
import "tailwindcss/tailwind.css";
import InitialCategories from "./storages/categorias";

function App() {
    const [filmes, setFilmes] = useState(filmesInicial);
    const [categorias, setCategorias] = useState(InitialCategories());

    const aoNovoFilmeAdicionado = (filme) => {
        setFilmes([...filmes, filme]);
    };

    const deletaFilme = (id) => {
        setFilmes(filmes.filter((filme) => filme.nome + filme.ano !== id));
    };

    const mudarCorCategoria = (cor, nome) => {
        setCategorias(
            categorias.map((categoria) => {
                if (categoria.nome === nome) {
                    return {
                        ...categoria,
                        corPrimaria: cor,
                    };
                }
                return categoria;
            })
        );
    };
    const alterarFavorito = (id) => {
        setFilmes(
            filmes.map((filme) => {
                if (filme.nome + filme.ano === id) {
                    return {
                        ...filme,
                        favorito: !filme.favorito,
                    };
                }
                return filme;
            })
        );
    };

    return (
        <div>
            <Banner />
            <Formulario
                categorias={categorias.map((categoria) => categoria.nome)}
                aoFilmeCadastrado={(filme) => aoNovoFilmeAdicionado(filme)}
            />
            {categorias.map((categoria) => (
                <Categoria
                    mudarCor={mudarCorCategoria}
                    key={categoria.nome}
                    nome={categoria.nome}
                    icon={categoria.icon}
                    corPrimaria={categoria.corPrimaria}
                    corSecundaria={categoria.corSecundaria}
                    filmes={filmes.filter(
                        (filme) => filme.categoria === categoria.nome
                    )}
                    aoDeletar={deletaFilme}
                    aoFavoritar={alterarFavorito}
                />
            ))}
            <Rodape />
        </div>
    );
}

export default App;
