"use strict";

import { adicionandoPecas } from "./functions/adicionandoPecas.js";
import { atualizandoEstatisticas } from "./functions/atualizandoEstatisticas.js";

const botoes = document.querySelectorAll("[data-controle]");

botoes.forEach((botao) => {
  botao.addEventListener("click", (evento) => {
    adicionandoPecas(evento.target.dataset.controle, evento.target.parentNode);
    atualizandoEstatisticas(evento.target.dataset.peca);
  });
});
