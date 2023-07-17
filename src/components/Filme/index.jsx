/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./Filme.css";
import { AiFillCloseCircle, AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

const Filme = ({
    nome,
    categoria,
    imagem,
    fundo,
    descricao,
    ano,
    aoDeletar,
    favorito,
    aoFavoritar,
}) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`card card-side bg-neutral shadow-xl ${
                hovered ? "card-hover" : ""
            }`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                boxShadow: hovered
                    ? `0 2px 4px 8px ${fundo}20, 0 0px 16px 8px ${fundo}50`
                    : "none",
                transition: "box-shadow 0.3s",
            }}
        >
            <AiFillCloseCircle
                size={25}
                onClick={() => {
                    aoDeletar(nome + ano);
                }}
                className="deletar"
            />
            <div
                className="figure"
                style={{
                    background: `url(${imagem})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            ></div>

            <div className="card-body">
                <h2 className="card-title">{nome}</h2>
                <div className="card-info">
                    <span
                        className="badge text-sm badge-sm text-white"
                        style={{ backgroundColor: fundo, color: "#fff" }}
                    >
                        {categoria}
                    </span>
                    <span className="badge badge-ghost text-sm badge-sm text-white">
                        {ano}
                    </span>
                </div>
                <p className="max-w-xs">{descricao}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Assistir</button>
                </div>
                <div className="favoritar">
                    {favorito ? (
                        <AiFillHeart
                            color={"#ff0000"}
                            size={25}
                            onClick={() => aoFavoritar(nome + ano)}
                        />
                    ) : (
                        <AiOutlineHeart
                            size={25}
                            onClick={() => aoFavoritar(nome + ano)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Filme;
