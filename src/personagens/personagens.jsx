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
      velocidade: 60,
      agilidade: 60,
      resistencia: 90,
      inteligencia: 70,
      coragem: 90,
      habilidade: 75,
      Experiencia: 95,
      mediaGeral: 79,
      imagem: capitao
    },
    {
      nome: "Falcão",
      forcaFisica: 70,
      velocidade: 90,
      agilidade: 90,
      resistencia: 80,
      inteligencia: 60,
      coragem: 85,
      habilidade: 80,
      Experiencia: 70,
      mediaGeral: 78,
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
      forcaFisica: 75,
      velocidade: 70,
      agilidade: 80,
      resistencia: 70,
      inteligencia: 80,
      coragem: 70,
      habilidade: 75,
      Experiencia: 60,
      mediaGeral: 73,
      imagem: formiga
    },
    {
      nome: "Gavião Arqueiro",
      forcaFisica: 75,
      velocidade: 60,
      agilidade: 70,
      resistencia: 80,
      inteligencia: 60,
      coragem: 80,
      habilidade: 75,
      Experiencia: 80,
      mediaGeral: 72,
      imagem: arqueiro
    },
    {
      nome: "Feiticeira Escarlate",
      forcaFisica: 70,
      velocidade: 60,
      agilidade: 70,
      resistencia: 70,
      inteligencia: 90,
      coragem: 80,
      habilidade: 95,
      Experiencia: 70,
      mediaGeral: 75,
      imagem: feiticeira
    },
];

export const timeHomemDeFerro = [
    {
      nome: "Homem de Ferro",
      forcaFisica: 80,
      velocidade: 60,
      agilidade: 70,
      resistencia: 80,
      inteligencia: 100,
      coragem: 60,
      habilidade: 90,
      Experiencia: 90,
      mediaGeral: 79,
      imagem: ferro
    },
    {
      nome: "Máquina de Combate",
      forcaFisica: 75,
      velocidade: 50,
      agilidade: 60,
      resistencia: 80,
      inteligencia: 80,
      coragem: 80,
      habilidade: 70,
      Experiencia: 85,
      mediaGeral: 73,
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
      forcaFisica: 90,
      velocidade: 80,
      agilidade: 90,
      resistencia: 85,
      inteligencia: 80,
      coragem: 95,
      habilidade: 90,
      Experiencia: 95,
      mediaGeral: 88,
      imagem: pantera
    },
    {
      nome: "Visão",
      forcaFisica: 80,
      velocidade: 70,
      agilidade: 80,
      resistencia: 80,
      inteligencia: 100,
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
      agilidade: 95,
      resistencia: 70,
      inteligencia: 80,
      coragem: 90,
      habilidade: 85,
      Experiencia: 80,
      mediaGeral: 82,
      imagem: aranha
    }
];  

/*
verificando se tem alguma personagem escolhido

function adicionarOuRemoverDoTimeCapitao(personagem) {
  const novoTimeCapitaoEscolhidos = timeCapitaoEscolhidos.includes(personagem)
    ? timeCapitaoEscolhidos.filter(item => item !== personagem)
    : timeCapitaoEscolhidos.length < 3
      ? [...timeCapitaoEscolhidos, personagem]
      : timeCapitaoEscolhidos;

  setTimeCapitaoEscolhidos(novoTimeCapitaoEscolhidos);
  setAmbosTimesSelecionados(
    novoTimeCapitaoEscolhidos.length > 0 && timeHomemDeFerroEscolhidos.length > 0
  );
}

function adicionarOuRemoverDoTimeHomemDeFerro(personagem) {
  const novoTimeHomemDeFerro = timeHomemDeFerroEscolhidos.includes(personagem)
    ? timeHomemDeFerroEscolhidos.filter(item => item !== personagem)
    : timeHomemDeFerroEscolhidos.length < 3
      ? [...timeHomemDeFerroEscolhidos, personagem]
      : timeHomemDeFerroEscolhidos;

  setTimeHomemDeFerroEscolhidos(novoTimeHomemDeFerro);
  setAmbosTimesSelecionados(
    timeCapitaoEscolhidos.length > 0 && novoTimeHomemDeFerro.length > 0
  );
}


<button disabled={!ambosTimesSelecionados}>Lutar!</button>
*/

/*
calculando média dos times

function calcularMediaDoTime(time) {
  const somatorio = time.reduce((acumulador, personagem) => {
    return acumulador + personagem.media;
  }, 0);
  const media = somatorio / time.length;
  return media;
}

function handleLutarClick() {
  const mediaCapitao = calcularMediaDoTime(timeCapitaoEscolhidos);
  const mediaHomemDeFerro = calcularMediaDoTime(timeHomemDeFerroEscolhidos);
  
  if (mediaCapitao > mediaHomemDeFerro) {
    alert("O Time do Capitão venceu a batalha!");
  } else if (mediaHomemDeFerro > mediaCapitao) {
    alert("O Time do Homem de Ferro venceu a batalha!");
  } else {
    alert("A batalha terminou em empate!");
  }
}
*/