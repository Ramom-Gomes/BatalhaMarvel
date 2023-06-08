import React, { useState } from "react";
import capitao from '../images/capitao.jpg';
import falcao from '../images/falcao.jpg';
import invernal from '../images/invernal.jpg';
import formiga from '../images/formiga.jpg';
import arqueiro from '../images/arqueiro.jpg';
import feiticeira from '../images/feiticeira.jpg';
import ferro from '../images/ferro.jpg';
import maquina from '../images/maquina.jpg'
import viuva from '../images/viuva.jpg';
import pantera from '../images/pantera.jpg';
import visao from '../images/visao.jpg';
import aranha from '../images/aranha.jpg';


export const timeCapitaoAmerica = [
    {
      nome: "Capitão América",
      forcaFisica: 95,
      velocidade: 75,
      agilidade: 70,
      resistencia: 90,
      inteligencia: 70,
      coragem: 90,
      habilidade: 75,
      Experiencia: 95,
      mediaGeral: 82,
      imagem: capitao
    },
    {
      nome: "Falcão",
      forcaFisica: 70,
      velocidade: 90,
      agilidade: 90,
      resistencia: 80,
      inteligencia: 75,
      coragem: 85,
      habilidade: 80,
      Experiencia: 70,
      mediaGeral: 80,
      imagem: falcao
    },
    {
      nome: "Soldado Invernal",
      forcaFisica: 90,
      velocidade: 70,
      agilidade: 70,
      resistencia: 90,
      inteligencia: 60,
      coragem: 90,
      habilidade: 70,
      Experiencia: 90,
      mediaGeral: 79,
      imagem: invernal
    },
    {
      nome: "Homem-Formiga",
      forcaFisica: 80,
      velocidade: 80,
      agilidade: 80,
      resistencia: 80,
      inteligencia: 80,
      coragem: 80,
      habilidade: 80,
      Experiencia: 75,
      mediaGeral: 79,
      imagem: formiga
    },
    {
      nome: "Gavião Arqueiro",
      forcaFisica: 75,
      velocidade: 90,
      agilidade: 90,
      resistencia: 80,
      inteligencia: 80,
      coragem: 80,
      habilidade: 80,
      Experiencia: 80,
      mediaGeral: 81,
      imagem: arqueiro
    },
    {
      nome: "Feiticeira Escarlate",
      forcaFisica: 75,
      velocidade: 80,
      agilidade: 80,
      resistencia: 85,
      inteligencia: 90,
      coragem: 80,
      habilidade: 95,
      Experiencia: 80,
      mediaGeral: 83,
      imagem: feiticeira
    },
];



export const timeHomemDeFerro = [
    {
      nome: "Homem de Ferro",
      forcaFisica: 80,
      velocidade: 80,
      agilidade: 75,
      resistencia: 80,
      inteligencia: 99,
      coragem: 60,
      habilidade: 90,
      Experiencia: 90,
      mediaGeral: 82,
      imagem: ferro
    },
    {
      nome: "Máquina de Combate",
      forcaFisica: 85,
      velocidade: 70,
      agilidade: 70,
      resistencia: 80,
      inteligencia: 80,
      coragem: 85,
      habilidade: 80,
      Experiencia: 85,
      mediaGeral: 79,
      imagem: maquina
    },
    {
      nome: "Viúva Negra",
      forcaFisica: 60,
      velocidade: 70,
      agilidade: 90,
      resistencia: 70,
      inteligencia: 80,
      coragem: 80,
      habilidade: 90,
      Experiencia: 90,
      mediaGeral: 79,
      imagem: viuva
    },
    {
      nome: "Pantera Negra",
      forcaFisica: 80,
      velocidade: 80,
      agilidade: 80,
      resistencia: 85,
      inteligencia: 80,
      coragem: 85,
      habilidade: 80,
      Experiencia: 85,
      mediaGeral: 81,
      imagem: pantera
    },
    {
      nome: "Visão",
      forcaFisica: 80,
      velocidade: 70,
      agilidade: 80,
      resistencia: 80,
      inteligencia: 99,
      coragem: 80,
      habilidade: 90,
      Experiencia: 85,
      mediaGeral: 83,
      imagem: visao
    },
    {
      nome: "Homem-Aranha",
      forcaFisica: 75,
      velocidade: 85,
      agilidade: 85,
      resistencia: 75,
      inteligencia: 75,
      coragem: 80,
      habilidade: 85,
      Experiencia: 80,
      mediaGeral: 80,
      imagem: aranha
    }
];  

function calcularMedia(personagem) {
  const atributos = Object.entries(personagem);
  const valoresNumericos = atributos
    .filter(([chave, valor]) => typeof valor === 'number' && chave !== 'mediaGeral')
    .map(([chave, valor]) => valor);
  const soma = valoresNumericos.reduce((total, atributo) => total + atributo, 0);
  const media = soma / valoresNumericos.length;
  return media;
}

// Loop para calcular e exibir a média de cada personagem
for (let i = 0; i < timeHomemDeFerro.length; i++) {
  const personagem = timeHomemDeFerro[i];
  const media = calcularMedia(personagem);
  console.log(`Média de ${personagem.nome}: ${media.toFixed(2)}`);
}