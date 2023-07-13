/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./Filme.css";

const Filme = ({ nome, categoria, imagem, fundo, descricao }) => {
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
                <span
                    className="badge text-white"
                    style={{ backgroundColor: fundo, color: "#fff" }}
                >
                    {categoria}
                </span>
                <p className="max-w-xs">{descricao}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default Filme;
