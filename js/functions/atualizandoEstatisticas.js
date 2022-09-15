"use strict";

export const atualizandoEstatisticas = (peca) => {
  const valoresPecas = {
    bracos: {
      forca: 29,
      poder: 35,
      energia: -21,
      velocidade: -5,
    },

    blindagem: {
      forca: 41,
      poder: 20,
      energia: 0,
      velocidade: -20,
    },
    nucleos: {
      forca: 0,
      poder: 7,
      energia: 48,
      velocidade: -24,
    },
    pernas: {
      forca: 27,
      poder: 21,
      energia: -32,
      velocidade: 42,
    },

    foguetes: {
      forca: 0,
      poder: 28,
      energia: 0,
      velocidade: -2,
    },
  };
  const estatisticas = document.querySelectorAll("[data-estatistica]");

  estatisticas.forEach((element) => {
    element.textContent = parseInt(element.textContent) + valoresPecas[peca][element.dataset.estatistica];
  });
};
