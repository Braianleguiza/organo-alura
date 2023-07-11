const filmesInicial = [
    {
        nome: "Titanic",
        ano: 1997,
        imagem: "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png",
        descricao:
            "Titanic é um filme épico de romance e desastre americano de 1997 dirigido, escrito, produzido e coeditado por James Cameron.",
        categoria: "Romance",
    },
    {
        nome: "Indiana Jones e a Última Cruzada",
        ano: 1989,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/f/fc/Indiana_Jones_and_the_Last_Crusade_A.jpg",
        descricao:
            "Indiana Jones e a Última Cruzada é um filme de aventura de 1989 dirigido por Steven Spielberg.",
        categoria: "Aventura",
    },
    {
        nome: "De Volta para o Futuro",
        ano: 1985,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/9/97/BackFuturePoster.jpg",
        descricao:
            "De Volta para o Futuro é um filme de ficção científica de 1985 dirigido por Robert Zemeckis.",
        categoria: "Ficção científica",
    },
    {
        nome: "Matrix",
        ano: 1999,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg",
        descricao:
            "Matrix é um filme de ficção científica de 1999 dirigido por Lana Wachowski e Lilly Wachowski.",
        categoria: "Ficção científica",
    },
    {
        nome: "As Branquelas",
        ano: 2004,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/d/de/White_chicks.jpeg",
        descricao:
            "As Branquelas é uma comédia de 2004 dirigida por Keenen Ivory Wayans.",
        categoria: "Comédia",
    },
    {
        nome: "Todo Mundo em Pânico",
        ano: 2000,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/d/d8/ScaryMovie.jpg",
        descricao:
            "Todo Mundo em Pânico é uma comédia de 2000 dirigida por Keenen Ivory Wayans.",
        categoria: "Comédia",
    },
    {
        nome: "O Poderoso Chefão",
        ano: 1972,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/d/de/Godfather_1972.jpg",
        descricao:
            "O Poderoso Chefão é um filme de drama de 1972 dirigido por Francis Ford Coppola.",
        categoria: "Drama",
    },
    {
        nome: "Clube da Luta",
        ano: 1999,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/2/2b/FightClubPoster.jpg",
        descricao:
            "Clube da Luta é um filme de drama de 1999 dirigido por David Fincher.",
        categoria: "Drama",
    },
    {
        nome: "O Senhor dos Anéis: A Sociedade do Anel",
        ano: 2001,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/3/38/Lord_of_the_Rings_Fellowship_of_the_Ring.jpg",
        descricao:
            "O Senhor dos Anéis: A Sociedade do Anel é um épico de fantasia de 2001 dirigido por Peter Jackson.",
        categoria: "Épico",
    },
    {
        nome: "Gladiador",
        ano: 2000,
        imagem: "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png",
        descricao:
            "Gladiador é um épico de ação de 2000 dirigido por Ridley Scott.",
        categoria: "Épico",
    },
    {
        nome: "Pulp Fiction",
        ano: 1994,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/8/82/Pulp_Fiction_cover.jpg",
        descricao:
            "Pulp Fiction é um filme de suspense de 1994 dirigido por Quentin Tarantino.",
        categoria: "Suspense",
    },
    {
        nome: "Seven: Os Sete Crimes Capitais",
        ano: 1995,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/2/27/Seven_1995.jpg",
        descricao:
            "Seven: Os Sete Crimes Capitais é um filme de suspense de 1995 dirigido por David Fincher.",
        categoria: "Suspense",
    },
    {
        nome: "Jurassic Park",
        ano: 1993,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/e/e7/Jurassic_Park_poster.jpg",
        descricao:
            "Jurassic Park é um filme de aventura de 1993 dirigido por Steven Spielberg.",
        categoria: "Aventura",
    },
    {
        nome: "Forrest Gump",
        ano: 1994,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/c/c0/ForrestGumpPoster.jpg",
        descricao:
            "Forrest Gump é um filme de comédia dramática de 1994 dirigido por Robert Zemeckis.",
        categoria: "Comédia",
    },
    {
        nome: "Clube dos Cinco",
        ano: 1985,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/5/50/The_Breakfast_Club.jpg",
        descricao:
            "Clube dos Cinco é um filme de comédia-drama de 1985 dirigido por John Hughes.",
        categoria: "Drama",
    },
    {
        nome: "Scarface",
        ano: 1983,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/9/9c/Scarfaceposter.jpg",
        descricao:
            "Scarface é um filme de crime de 1983 dirigido por Brian De Palma.",
        categoria: "Suspense",
    },
    {
        nome: "E.T.: O Extraterrestre",
        ano: 1982,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/6/66/E_t_the_extra_terrestrial_ver3.jpg",
        descricao:
            "E.T.: O Extraterrestre é um filme de aventura de 1982 dirigido por Steven Spielberg.",
        categoria: "Aventura",
    },
    {
        nome: "O Silêncio dos Inocentes",
        ano: 1991,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/0/0a/Silence_of_the_lambs.png",
        descricao:
            "O Silêncio dos Inocentes é um filme de suspense de 1991 dirigido por Jonathan Demme.",
        categoria: "Suspense",
    },
    {
        nome: "O Sexto Sentido",
        ano: 1999,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/6/66/The_sixth_sense.jpg",
        descricao:
            "O Sexto Sentido é um filme de suspense de 1999 dirigido por M. Night Shyamalan.",
        categoria: "Suspense",
    },
    {
        nome: "Toy Story",
        ano: 1995,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/a/a7/Toy_Story_1995.jpg",
        descricao:
            "Toy Story é um filme de animação de 1995 produzido pela Pixar Animation Studios.",
        categoria: "Animação",
    },
    {
        nome: "O Rei Leão",
        ano: 1994,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/b/b3/The_Lion_King.jpg",
        descricao:
            "O Rei Leão é um filme de animação de 1994 produzido pela Walt Disney Animation Studios.",
        categoria: "Animação",
    },
    {
        nome: "Beleza Americana",
        ano: 1999,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/9/99/AmericanBeautyPoster.jpg",
        descricao:
            "Beleza Americana é um filme de comédia dramática de 1999 dirigido por Sam Mendes.",
        categoria: "Comédia",
    },
    {
        nome: "A Origem",
        ano: 2010,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/8/84/AOrigemPoster.jpg",
        descricao:
            "A Origem é um filme de ficção científica de 2010 dirigido por Christopher Nolan.",
        categoria: "Ficção científica",
    },
    {
        nome: "Amnésia",
        ano: 2000,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/c/cf/MementoCartaz.jpg",
        descricao:
            "Amnésia é um filme de suspense de 2000 dirigido por Christopher Nolan.",
        categoria: "Suspense",
    },
    {
        nome: "Brilho Eterno de uma Mente sem Lembranças",
        ano: 2004,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/a/af/Eternal_Sunshine_of_the_Spotless_Mind.jpg",
        descricao:
            "Brilho Eterno de uma Mente sem Lembranças é um filme de romance de 2004 dirigido por Michel Gondry.",
        categoria: "Romance",
    },
    {
        nome: "V de Vingança",
        ano: 2005,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/9/9f/Vforvendettamov.jpg",
        descricao:
            "V de Vingança é um filme de ação de 2005 dirigido por James McTeigue.",
        categoria: "Aventura",
    },
    {
        nome: "Donnie Darko",
        ano: 2001,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/5/58/Donnie_Darko.jpg",
        descricao:
            "Donnie Darko é um filme de ficção científica de 2001 dirigido por Richard Kelly.",
        categoria: "Ficção científica",
    },
    {
        nome: "O Grande Truque",
        ano: 2006,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/8/8c/The_Prestige.jpg",
        descricao:
            "O Grande Truque é um filme de mistério de 2006 dirigido por Christopher Nolan.",
        categoria: "Suspense",
    },
];

export default filmesInicial;
