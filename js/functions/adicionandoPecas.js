"use strict";

export const adicionandoPecas = (operacao, pecaClicada) => {
  const inputPeca = pecaClicada.querySelector("[data-contador]");

  if (operacao === "-") {
    inputPeca.value = parseInt(inputPeca.value) - 1;
  } else {
    inputPeca.value = parseInt(inputPeca.value) + 1;
  }
};
