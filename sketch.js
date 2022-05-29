

function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

// Desenho do Jogo
function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();

}




