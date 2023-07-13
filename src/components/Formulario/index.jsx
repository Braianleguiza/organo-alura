/* eslint-disable react/prop-types */
import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
    const [nome, setNome] = useState();
    const [ano, setAno] = useState();
    const [categoria, setCategoria] = useState();
    const [imagem, setImagem] = useState();
    const [descricao, setDescricao] = useState();

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoFilmeCadastrado({
            nome: nome,
            ano: ano,
            imagem: imagem,
            categoria: categoria,
            descricao: descricao,
        });
        setNome("");
        setAno("");
        setImagem("");
        setCategoria("");
        setDescricao("");
    };
    return (
        <section className="formulario">
            <form className="bg-neutral" onSubmit={aoSalvar}>
                <h1>Prencha os dados do filme: </h1>
                <CampoTexto
                    obrigatorio
                    label="Nome"
                    placeholder="Digite o nome do filme"
                    valor={nome}
                    aoAlterado={(valor) => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio
                    label="Ano de publicação"
                    placeholder="Digite o ano"
                    valor={ano}
                    aoAlterado={(valor) => setAno(valor)}
                />
                <CampoTexto
                    obrigatorio
                    label="Imagem"
                    valor={imagem}
                    placeholder="Informe o endereço da imagem"
                    aoAlterado={(valor) => setImagem(valor)}
                />
                <CampoTexto
                    obrigatorio
                    label="Descricao"
                    valor={descricao}
                    placeholder="Informe a descricao do filme"
                    aoAlterado={(valor) => setDescricao(valor)}
                />
                <ListaSuspensa
                    obrigatorio
                    label="Categorias"
                    itens={props.categorias}
                    valor={categoria}
                    aoAlterado={(valor) => setCategoria(valor)}
                />
                <div className="botao-container">
                    <Botao>Criar Card</Botao>
                </div>
            </form>
        </section>
    );
};

export default Formulario;
