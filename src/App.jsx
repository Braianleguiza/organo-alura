/* eslint-disable no-debugger */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Categoria from "./components/Categoria";
import Rodape from "./components/Rodape";

function App() {
    const categorias = [
        {
            nome: "Aventura",
            corPrimaria: "#57c278",
            corSecundaria: "#d9f7e9",
        },
        {
            nome: "Comédia",
            corPrimaria: "#82CFFA",
            corSecundaria: "#E8F8FF",
        },
        {
            nome: "Drama",
            corPrimaria: "#A6D157",
            corSecundaria: "#F0F8E2",
        },
        {
            nome: "Épico",
            corPrimaria: "#E06B69",
            corSecundaria: "#FEE7E9",
        },
        {
            nome: "Ficção científica",
            corPrimaria: "#DB6EBF",
            corSecundaria: "#FAE9F6",
        },
        {
            nome: "Romance",
            corPrimaria: "#FFBB05",
            corSecundaria: "#FFF5D9",
        },
        {
            nome: "Suspense",
            corPrimaria: "#FF8A29",
            corSecundaria: "#FEEFDF",
        },
    ];

    const [filmes, setFilmes] = useState([]);

    const aoNovoFilmeAdicionado = (filme) => {
        debugger;
        setFilmes([...filmes, filme]);
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
                    key={categoria.nome}
                    nome={categoria.nome}
                    corPrimaria={categoria.corPrimaria}
                    corSecundaria={categoria.corSecundaria}
                    filmes={filmes.filter(
                        (filme) => filme.categoria === categoria.nome
                    )}
                />
            ))}
            <Rodape />
        </div>
    );
}

export default App;
