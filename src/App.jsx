/* eslint-disable react/jsx-key */
import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Categoria from "./components/Categoria";
import Rodape from "./components/Rodape";
import filmesInicial from "./storages/store";
import "tailwindcss/tailwind.css";

function App() {
    const categorias = [
        {
            nome: "Animação",
            corPrimaria: "#3FD1C9",
            corSecundaria: "#FEEFDF",
            icon: "/imagens/cartoon.svg",
        },
        {
            nome: "Aventura",
            corPrimaria: "#3AB54A",
            corSecundaria: "#d9f7e9",
            icon: "/imagens/aventura.svg",
        },
        {
            nome: "Comédia",
            corPrimaria: "#F9D71C",
            corSecundaria: "#E8F8FF",
            icon: "/imagens/comedy.svg",
        },
        {
            nome: "Drama",
            corPrimaria: "#E74C3C",
            corSecundaria: "#F0F8E2",
            icon: "/imagens/drama.svg",
        },
        {
            nome: "Épico",
            corPrimaria: "#8C67AB",
            corSecundaria: "#FEE7E9",
            icon: "/imagens/epic.svg",
        },
        {
            nome: "Ficção científica",
            corPrimaria: "#3498DB",
            corSecundaria: "#FAE9F6",
            icon: "/imagens/fiction.svg",
        },
        {
            nome: "Romance",
            corPrimaria: "#FF6EC7",
            corSecundaria: "#FFF5D9",
            icon: "/imagens/romance.svg",
        },
        {
            nome: "Suspense",
            corPrimaria: "#8B0000",
            corSecundaria: "#FEEFDF",
            icon: "/imagens/suspense.svg",
        },
    ];

    const [filmes, setFilmes] = useState(filmesInicial);

    const aoNovoFilmeAdicionado = (filme) => {
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
                    icon={categoria.icon}
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
