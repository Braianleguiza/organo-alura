const filmesInicial = [
  {
    nome: "Titanic",
    ano: 1997,
    imagem:
      "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png",
    descricao:
      "Titanic é um filme épico de romance e desastre americano de 1997 dirigido, escrito, produzido e coeditado por James Cameron.",
    categoria: "Romance",
    favorito: false,
  },
  {
    nome: "Indiana Jones e a Última Cruzada",
    ano: 1989,
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/f/fc/Indiana_Jones_and_the_Last_Crusade_A.jpg",
    descricao:
      "Indiana Jones e a Última Cruzada é um filme de aventura de 1989 dirigido por Steven Spielberg.",
    categoria: "Aventura",
    favorito: false,
  },
  {
    nome: "De Volta para o Futuro",
    ano: 1985,
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/9/97/BackFuturePoster.jpg",
    descricao:
      "De Volta para o Futuro é um filme de ficção científica de 1985 dirigido por Robert Zemeckis.",
    categoria: "Ficção científica",
    favorito: false,
  },
  {
    nome: "Matrix",
    ano: 1999,
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg",
    descricao:
      "Matrix é um filme de ficção científica de 1999 dirigido por Lana Wachowski e Lilly Wachowski.",
    categoria: "Ficção científica",
    favorito: false,
  },
  {
    nome: "As Branquelas",
    ano: 2004,
    imagem: "https://upload.wikimedia.org/wikipedia/pt/d/de/White_chicks.jpeg",
    descricao:
      "As Branquelas é uma comédia de 2004 dirigida por Keenen Ivory Wayans.",
    categoria: "Comédia",
    favorito: false,
  },
  {
    nome: "Todo Mundo em Pânico",
    ano: 2000,
    imagem: "https://upload.wikimedia.org/wikipedia/pt/d/d8/ScaryMovie.jpg",
    descricao:
      "Todo Mundo em Pânico é uma comédia de 2000 dirigida por Keenen Ivory Wayans.",
    categoria: "Comédia",
    favorito: false,
  },
  {
    nome: "O Poderoso Chefão",
    ano: 1972,
    imagem: "https://upload.wikimedia.org/wikipedia/pt/d/de/Godfather_1972.jpg",
    descricao:
      "O Poderoso Chefão é um filme de drama de 1972 dirigido por Francis Ford Coppola.",
    categoria: "Drama",
    favorito: false,
  },
  {
    nome: "Homens de Honra",
    ano: 2000,
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/2/2d/Men_of_Honor_P%C3%B4ster.jpg",
    descricao:
      "Homens de Honra é um filme norte-americano de 2000, dirigido por George Tillman Jr., com roteiro de Scott Marshall Smith. ",
    categoria: "Drama",
    favorito: false,
  },
  {
    nome: "Um Sonho de Liberdade",
    ano: 1994,
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/d/d2/The_Shawshank_Redemption_p%C3%B4ster.png",
    descricao:
      "Um Sonho de Liberdade é um filme norte-americano de drama lançado em 1994, escrito e dirigido por Frank Darabont baseado na novela Rita Hayworth and Shawshank Redemption, de Stephen King.",
    categoria: "Drama",
    favorito: false,
  },
  {
    nome: "À Espera de um Milagre",
    ano: 1999,
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/8/8f/%C3%80_Espera_de_um_Milagre.jpg",
    descricao:
      "À Espera de um Milagre é um filme norte-americano de 1999, dos gêneros drama, policial e fantasia, dirigido e roteirizado por Frank Darabont, com base no livro homônimo de Stephen King, lançado em 1996.",
    categoria: "Drama",
    favorito: false,
  },
  {
    nome: "Clube da Luta",
    ano: 1999,
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/2/2b/FightClubPoster.jpg",
    descricao:
      "Clube da Luta é um filme de drama de 1999 dirigido por David Fincher.",
    categoria: "Drama",
    favorito: false,
  },
  {
    nome: "O Senhor dos Anéis: A Sociedade do Anel",
    ano: 2001,
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/3/38/Lord_of_the_Rings_Fellowship_of_the_Ring.jpg",
    descricao:
      "O Senhor dos Anéis: A Sociedade do Anel é um épico de fantasia de 2001 dirigido por Peter Jackson.",
    categoria: "Épico",
    favorito: false,
  },
  {
    nome: "Troia",
    ano: 2004,
    imagem: "https://upload.wikimedia.org/wikipedia/pt/e/ec/Troia_poster.jpg",
    descricao:
      "Troia é um filme épico britano-malto-estadunidense de 2004, dirigido por Wolfgang Petersen, com roteiro de David Benioff baseado no poema épico Ilíada, de Homero, sobre a Guerra de Troia.",
    categoria: "Épico",
    favorito: false,
  },
  {
    nome: "King Kong",
    ano: 2004,
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/6/6a/Kingkong_bigfinal1.jpg",
    descricao:
      "King Kong é um filme estadunidense de 2005, dos gêneros épico, ação, aventura, e fantasia, co-escrito, produzido e dirigido por Peter Jackson, sendo um remake de King Kong, de 1933.",
    categoria: "Épico",
    favorito: false,
  },
  {
    nome: "Coração Valente",
    ano: 1995,
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/0/0e/Braveheart_poster.jpg",
    descricao:
      "Coração Valente é um filme norte-americano de 1995, estrelado e realizado por Mel Gibson.",
    categoria: "Épico",
    favorito: false,
  },
  {
    nome: "300",
    ano: 2006,
    imagem: "https://upload.wikimedia.org/wikipedia/pt/1/19/300_poster.jpg",
    descricao:
      "300 é um filme de fantasia e guerra norte-americano de 2006, co-escrito e dirigido por Zack Snyder. É baseado na série de quadrinhos homônima de Frank Miller e Lynn Varley, publicada pela Dark Horse Comics em 1998.",
    categoria: "Épico",
    favorito: false,
  },
  {
    nome: "Gladiador",
    ano: 2000,
    imagem:
      "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png",
    descricao:
      "Gladiador é um épico de ação de 2000 dirigido por Ridley Scott.",
    categoria: "Épico",
    favorito: false,
  },
  {
    nome: "Pulp Fiction",
    ano: 1994,
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/8/82/Pulp_Fiction_cover.jpg",
    descricao:
      "Pulp Fiction é um filme de suspense de 1994 dirigido por Quentin Tarantino.",
    categoria: "Suspense",
    favorito: false,
  },
  {
    nome: "Seven: Os Sete Crimes Capitais",
    ano: 1995,
    imagem: "https://upload.wikimedia.org/wikipedia/pt/2/27/Seven_1995.jpg",
    descricao:
      "Seven: Os Sete Crimes Capitais é um filme de suspense de 1995 dirigido por David Fincher.",
    categoria: "Suspense",
    favorito: false,
  },
  {
    nome: "Jurassic Park",
    ano: 1993,
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/e/e7/Jurassic_Park_poster.jpg",
    descricao:
      "Jurassic Park é um filme de aventura de 1993 dirigido por Steven Spielberg.",
    categoria: "Aventura",
    favorito: false,
  },
  {
    nome: "Forrest Gump",
    ano: 1994,
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/c/c0/ForrestGumpPoster.jpg",
    descricao:
      "Forrest Gump é um filme de comédia dramática de 1994 dirigido por Robert Zemeckis.",
    categoria: "Comédia",
    favorito: false,
  },
  {
    nome: "Clube dos Cinco",
    ano: 1985,
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/5/50/The_Breakfast_Club.jpg",
    descricao:
      "Clube dos Cinco é um filme de comédia-drama de 1985 dirigido por John Hughes.",
    categoria: "Drama",
    favorito: false,
  },
  {
    nome: "Scarface",
    ano: 1983,
    imagem: "https://upload.wikimedia.org/wikipedia/pt/9/9c/Scarfaceposter.jpg",
    descricao:
      "Scarface é um filme de crime de 1983 dirigido por Brian De Palma.",
    categoria: "Suspense",
    favorito: false,
  },
  {
    nome: "E.T.: O Extraterrestre",
    ano: 1982,
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/6/66/E_t_the_extra_terrestrial_ver3.jpg",
    descricao:
      "E.T.: O Extraterrestre é um filme de aventura de 1982 dirigido por Steven Spielberg.",
    categoria: "Aventura",
    favorito: false,
  },
  {
    nome: "Piratas do Caribe: A Maldição do Pérola Negra",
    ano: 2003,
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/e/e6/Pirates_of_the_Caribbean_-_The_Curse_of_the_Black_Pearl.jpg",
    descricao:
      "Piratas do Caribe é um filme estadunidense de fantasia Swashbuckler de 2003 baseado no brinquedo Pirates of the Caribbean dos parques temáticos da Walt Disney Parks and Resorts.",
    categoria: "Aventura",
    favorito: false,
  },
  {
    nome: "Harry Potter e a Pedra Filosofal",
    ano: 2001,
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/1/1d/Harry_Potter_Pedra_Filosofal_2001.jpg",
    descricao:
      "Harry Potter é um filme britano-americano de 2001, dos gêneros aventura e fantasia, dirigido por Chris Columbus, com roteiro de Steven Kloves baseado no livro homônimo de J. K. Rowling.",
    categoria: "Aventura",
    favorito: false,
  },
  {
    nome: "O Silêncio dos Inocentes",
    ano: 1991,
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/0/0a/Silence_of_the_lambs.png",
    descricao:
      "O Silêncio dos Inocentes é um filme de suspense de 1991 dirigido por Jonathan Demme.",
    categoria: "Suspense",
    favorito: false,
  },
  {
    nome: "O Sexto Sentido",
    ano: 1999,
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/6/66/The_sixth_sense.jpg",
    descricao:
      "O Sexto Sentido é um filme de suspense de 1999 dirigido por M. Night Shyamalan.",
    categoria: "Suspense",
    favorito: false,
  },
  {
    nome: "Toy Story",
    ano: 1995,
    imagem: "https://upload.wikimedia.org/wikipedia/pt/a/a7/Toy_Story_1995.jpg",
    descricao:
      "Toy Story é um filme de animação de 1995 produzido pela Pixar Animation Studios.",
    categoria: "Animação",
    favorito: true,
  },
  {
    nome: "O Rei Leão",
    ano: 1994,
    imagem: "https://upload.wikimedia.org/wikipedia/pt/b/b3/The_Lion_King.jpg",
    descricao:
      "O Rei Leão é um filme de animação de 1994 produzido pela Walt Disney Animation Studios.",
    categoria: "Animação",
    favorito: false,
  },
  {
    nome: "Beleza Americana",
    ano: 1999,
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/9/99/AmericanBeautyPoster.jpg",
    descricao:
      "Beleza Americana é um filme de comédia dramática de 1999 dirigido por Sam Mendes.",
    categoria: "Comédia",
    favorito: false,
  },
  {
    nome: "Esqueceram de Mim",
    ano: 1990,
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/8/8f/Esqueceram-de-mim.jpg",
    descricao:
      "Esqueceram de Mim é um filme de comédia de Natal estadunidense de 1990, escrito e produzido por John Hughes e dirigido por Chris Columbus. ",
    categoria: "Comédia",
    favorito: false,
  },
  {
    nome: "Todo Poderoso",
    ano: 2003,
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/6/60/BruceAlmighty_poster.jpg",
    descricao:
      "Todo Poderoso é um filme de comédia e fantasia estadunidense de 2003, dirigido por Tom Shadyac e escrito por Steve Koren, Mark O'Keefe e Steve Oedekerk.",
    categoria: "Comédia",
    favorito: false,
  },
  {
    nome: "A Origem",
    ano: 2010,
    imagem: "https://upload.wikimedia.org/wikipedia/pt/8/84/AOrigemPoster.jpg",
    descricao:
      "A Origem é um filme de ficção científica de 2010 dirigido por Christopher Nolan.",
    categoria: "Ficção científica",
    favorito: false,
  },
  {
    nome: "WALL-E",
    ano: 2008,
    imagem: "https://upload.wikimedia.org/wikipedia/pt/3/30/WALL-E.jpg",
    descricao:
      "WALL-E (estilizado como WALL·E) é um filme de animação americano de 2008 produzido pela Pixar Animation Studios e dirigido por Andrew Stanton.",
    categoria: "Animação",
    favorito: false,
  },
  {
    nome: "UP",
    ano: 2009,
    imagem: "https://upload.wikimedia.org/wikipedia/pt/a/a8/Up_p%C3%B4ster.jpg",
    descricao:
      "Up é um filme norte-americano do gênero animação sendo o 10º longa-metragem de animação produzida pelos estúdios Pixar lançada nos Estados Unidos em 29 de maio de 2009",
    categoria: "Animação",
    favorito: false,
  },
  {
    nome: "Bolt",
    ano: 2008,
    imagem: "https://upload.wikimedia.org/wikipedia/pt/5/5c/Bolt-filme.jpg",
    descricao:
      "Bolt é um filme de animação estadunidense de 2008, dos gêneros comédia e aventura, dirigido por Chris Williams e Byron Howard",
    categoria: "Animação",
    favorito: false,
  },
  {
    nome: "O Castelo Animado",
    ano: 2004,
    imagem:
      "https://upload.wikimedia.org/wikipedia/en/a/a0/Howls-moving-castleposter.jpg",
    descricao:
      "O Castelo Animado é um filme japonês de animação e fantasia lançado em 2004, vagamente baseado no romance Howl's Moving Castle (1986) da dramaturga britânica Diana Wynne Jones.",
    categoria: "Animação",
    favorito: false,
  },
  {
    nome: "Brilho Eterno de uma Mente sem Lembranças",
    ano: 2004,
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/a/af/Eternal_Sunshine_of_the_Spotless_Mind.jpg",
    descricao:
      "Brilho Eterno de uma Mente sem Lembranças é um filme de romance de 2004 dirigido por Michel Gondry.",
    categoria: "Romance",
    favorito: false,
  },
  {
    nome: "Encontro Marcado",
    ano: 1998,
    imagem: "https://upload.wikimedia.org/wikipedia/pt/f/f0/Meet_Joe_Black.jpg",
    descricao:
      "Encontro Marcado é um filme de fantasia romântico americano lançado em 1998, remake do filme Death Takes a Holiday, de 1934.",
    categoria: "Romance",
    favorito: false,
  },
  {
    nome: "V de Vingança",
    ano: 2005,
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/9/9f/Vforvendettamov.jpg",
    descricao:
      "V de Vingança é um filme de ação de 2005 dirigido por James McTeigue.",
    categoria: "Aventura",
    favorito: false,
  },
  {
    nome: "Donnie Darko",
    ano: 2001,
    imagem: "https://upload.wikimedia.org/wikipedia/pt/5/58/Donnie_Darko.jpg",
    descricao:
      "Donnie Darko é um filme de ficção científica de 2001 dirigido por Richard Kelly.",
    categoria: "Ficção científica",
    favorito: false,
  },
  {
    nome: "Logan",
    ano: 2017,
    imagem: "https://upload.wikimedia.org/wikipedia/pt/5/53/Logan_2017.jpg",
    descricao:
      "Logan é um filme canado-australiano-estadunidense de 2017, dos gêneros ação, drama e ficção científica, dirigido por James Mangold, com base no personagem da Marvel Comics, Wolverine.",
    categoria: "Ficção científica",
    favorito: false,
  },
  {
    nome: "Vingadores: Ultimato",
    ano: 2019,
    imagem:
      "https://upload.wikimedia.org/wikipedia/pt/9/9b/Avengers_Endgame.jpg",
    descricao:
      "Vingadores: Ultimato é um filme de super-herói americano de 2019, baseado na equipe Vingadores da Marvel Comics.",
    categoria: "Ficção científica",
    favorito: false,
  },
  {
    nome: "O Grande Truque",
    ano: 2006,
    imagem: "https://upload.wikimedia.org/wikipedia/pt/8/8c/The_Prestige.jpg",
    descricao:
      "O Grande Truque é um filme de mistério de 2006 dirigido por Christopher Nolan.",
    categoria: "Suspense",
    favorito: false,
  },
];

export default filmesInicial;
