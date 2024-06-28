///////////////////////////////////////////////////////// produzido por Handerson ///////////////////////////////////////////////////////////
////////////////////////////////////////////////////////      data 28/06/2024    ///////////////////////////////////////////////////////////

//função recursiva para cadastrar, calcular e classificar o rank do jogador
function startCalcRank(jogador) {
  //definindo variaveis
  let listaDejogador = jogador ?? [];
  let nmDoJogador;
  let qtdVitoriasDoJogador;
  let qtdDerrotasDoJogador;
  let rankDoJogador;

  questionsCalcRank(
    nmDoJogador,
    qtdVitoriasDoJogador,
    qtdDerrotasDoJogador,
    rankDoJogador,
    listaDejogador
  );
}
//funçao para realizar as perguntas
function questionsCalcRank(
  nmDoJogador,
  qtdVitoriasDoJogador,
  qtdDerrotasDoJogador,
  rankDoJogador,
  listaDejogador
) {
  const readline = require("node:readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question(
    "Bem vindo ao sistema de classificação de rank dos jogadores. Por favor informe os seguintes dados:\nQual o nome do jogador ? ",
    (nome) => {
      nmDoJogador = nome;
      rl.question("Quantas vitórias o jogador obteve ? ", (vitorias) => {
        qtdVitoriasDoJogador = vitorias;
        rl.question("Quantas derrotas o jogador obteve ? ", (derrotas) => {
          qtdDerrotasDoJogador = derrotas;
          let totalDeVitorias = qtdVitoriasDoJogador - qtdDerrotasDoJogador;
          rankDoJogador = classificarNivel(totalDeVitorias, rankDoJogador);

          listaDejogador.push([nmDoJogador, totalDeVitorias, rankDoJogador]);
          console.log(
            "O Herói tem de saldo de ** " +
              totalDeVitorias +
              " ** está no nível de ** " +
              rankDoJogador +
              " **"
          );
          rl.question(
            "Deseja cadastrar mais um jogador e sua classificação: sim (s) ou nao (n) ? ",
            (prosseguir) => {
              printjogador(listaDejogador);
              if (prosseguir == "s") {
                rl.close();
                startCalcRank(listaDejogador);
              } else {
                console.log(
                  "Obrigado por usar a calculadora de classificador de rank de jogador, até logo!"
                );
                rl.close();
              }
            }
          );
        });
      });
    }
  );
  return {
    nmDoJogador,
    qtdVitoriasDoJogador,
    qtdDerrotasDoJogador,
    rankDoJogador,
  };
}
//função classificar o rank do jogador
function classificarNivel(totalDeVitorias, rankDoJogador) {
  switch (true) {
    case totalDeVitorias <= 10:
      rankDoJogador = "Ferro";
      break;
    case totalDeVitorias >= 11 && totalDeVitorias <= 20:
      rankDoJogador = "Bronze";
      break;
    case totalDeVitorias >= 21 && totalDeVitorias <= 50:
      rankDoJogador = "Prata";
      break;
    case totalDeVitorias >= 51 && totalDeVitorias <= 80:
      rankDoJogador = "Ouro";
      break;
    case totalDeVitorias >= 81 && totalDeVitorias <= 90:
      rankDoJogador = "Diamante";
      break;
    case totalDeVitorias >= 91 && totalDeVitorias <= 100:
      rankDoJogador = "Lendário";
      break;
    case totalDeVitorias >= 101:
      rankDoJogador = "Imortal";
      break;
    default:
      rankDoJogador = "Desconhecido";
      break;
  }
  return rankDoJogador;
}
//função imprimir lista de jogadores e seus niveis do rank
function printjogador(listaDejogador) {
  let qtdjogador = 0;
  console.log("Lista de jogadores cadastrados:");
  console.log("Qtd | Nome | Vitória(s) | Nível");
  listaDejogador.forEach((element) => {
    console.log(
      " " + ++qtdjogador + " ",
      " | ",
      element[0],
      " | ",
      element[1],
      " | ",
      element[2]
    );
  });
}
//função principal
startCalcRank();
