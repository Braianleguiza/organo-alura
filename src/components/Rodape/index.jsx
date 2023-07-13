import "./Rodape.css";

const Rodape = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/imagens/linkedin.svg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src="/imagens/email.svg" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src="/imagens/github.svg" alt="" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img
                    height={32}
                    width={32}
                    src="./src/assets/logo.png"
                    alt=""
                />
            </section>
            <section>
                <p>Desenvolvido por Braian Leguiza.</p>
            </section>
        </footer>
    );
};

export default Rodape;
