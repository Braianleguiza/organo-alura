import "./Rodape.css";

const Rodape = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank" rel="noreferrer">
                            <img
                                className="text-white"
                                src="/imagens/linkedin.svg"
                                alt=""
                            />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" rel="noreferrer" target="_blank">
                            <img src="/imagens/email.svg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/Braianleguiza"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src="/imagens/github.svg" alt="git icon" />
                        </a>
                    </li>
                </ul>
            </section>
            <section className="flex">
                <img
                    height={32}
                    width={32}
                    src="./src/assets/logo.png"
                    alt=""
                />{" "}
                <span style={{ marginTop: 5 }}>CineClássicos</span>
            </section>
            <section>
                <p>Desenvolvido por Braian Leguiza.</p>
            </section>
        </footer>
    );
};

export default Rodape;
