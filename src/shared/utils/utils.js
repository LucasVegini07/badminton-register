/* eslint-disable import/prefer-default-export */
/**
 * arquivo com funções úteis para todo o projeto:
 * formatação de valores monetários
 * formatação de datas e demais
 */

const DataForBackend = data => {
  const newData = `${data[6] + data[7] + data[8] + data[9]}-${data[3]}${
    data[4]
  }-${data[0]}${data[1]}`;

  return newData;
};

const DataFromBackend = data => {
  const newData = `${data[8] + data[9]}/${data[5]}${data[6]}/${data[0]}${
    data[1]
  }${data[2]}${data[3]}`;

  return newData;
};

export { DataForBackend, DataFromBackend };
