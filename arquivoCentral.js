function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
  //somDaColisão.loop();
  //somDoPonto.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraCarro();
  mostraAtor();
  movimentaAtor();
  movimentaCarro();
  voltaPosiçao();
  verificaColisao();
  incluiPontos();
  marcaPontos();
}

