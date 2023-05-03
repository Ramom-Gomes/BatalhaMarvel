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
      /*
      habilidades: {
        forcaFisica: 95,
        velocidade: 60,
        agilidade: 60,
        resistencia: 90,
        inteligencia: 70,
        habilidadeCombate: 100,
        poderesEspeciais: 70,
        nivelExperiencia: 95,
      },
      */
      forcaFisica: 95,
      velocidade: 60,
      agilidade: 60,
      resistencia: 90,
      inteligencia: 70,
      habilidadeCombate: 100,
      poderesEspeciais: 70,
      nivelExperiencia: 95,
      imagem: capitao
    },
    {
      nome: "Falcão",
      /*
      habilidades: {
        forcaFisica: 70,
        velocidade: 90,
        agilidade: 90,
        resistencia: 80,
        inteligencia: 60,
        habilidadeCombate: 80,
        poderesEspeciais: 50,
        nivelExperiencia: 70,
      },
      */
      forcaFisica: 70,
      velocidade: 90,
      agilidade: 90,
      resistencia: 80,
      inteligencia: 60,
      habilidadeCombate: 80,
      poderesEspeciais: 50,
      nivelExperiencia: 70,
      imagem: falcao
    },
    {
      nome: "Soldado Invernal",
      /*
      habilidades: {
        forcaFisica: 90,
        velocidade: 70,
        agilidade: 70,
        resistencia: 90,
        inteligencia: 60,
        habilidadeCombate: 90,
        poderesEspeciais: 70,
        nivelExperiencia: 90,
      },
      */
      forcaFisica: 90,
      velocidade: 70,
      agilidade: 70,
      resistencia: 90,
      inteligencia: 60,
      habilidadeCombate: 90,
      poderesEspeciais: 70,
      nivelExperiencia: 90,
      imagem: invernal
    },
    {
      nome: "Homem-Formiga",
      /*
      habilidades: {
        forcaFisica: 75,
        velocidade: 70,
        agilidade: 80,
        resistencia: 70,
        inteligencia: 80,
        habilidadeCombate: 70,
        poderesEspeciais: 75,
        nivelExperiencia: 60,
      },
      */
      forcaFisica: 75,
      velocidade: 70,
      agilidade: 80,
      resistencia: 70,
      inteligencia: 80,
      habilidadeCombate: 70,
      poderesEspeciais: 75,
      nivelExperiencia: 60,
      imagem: formiga
    },
    {
      nome: "Gavião Arqueiro",
      /*
      habilidades: {
        forcaFisica: 75,
        velocidade: 60,
        agilidade: 70,
        resistencia: 80,
        inteligencia: 60,
        habilidadeCombate: 80,
        poderesEspeciais: 60,
        nivelExperiencia: 80,
      },
      */
      forcaFisica: 75,
      velocidade: 60,
      agilidade: 70,
      resistencia: 80,
      inteligencia: 60,
      habilidadeCombate: 80,
      poderesEspeciais: 60,
      nivelExperiencia: 80,
      imagem: arqueiro
    },
    {
      nome: "Feiticeira Escarlate",
      /*
      habilidades: {
        forcaFisica: 70,
        velocidade: 60,
        agilidade: 70,
        resistencia: 70,
        inteligencia: 90,
        habilidadeCombate: 70,
        poderesEspeciais: 95,
        nivelExperiencia: 70,
      },
      */
      forcaFisica: 70,
      velocidade: 60,
      agilidade: 70,
      resistencia: 70,
      inteligencia: 90,
      habilidadeCombate: 70,
      poderesEspeciais: 95,
      nivelExperiencia: 70,
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
      habilidadeCombate: 90,
      poderesEspeciais: 85,
      nivelExperiencia: 90,
      imagem: ferro
    },
    {
      nome: "Máquina de Combate",
      forcaFisica: 75,
      velocidade: 50,
      agilidade: 60,
      resistencia: 80,
      inteligencia: 80,
      habilidadeCombate: 80,
      poderesEspeciais: 75,
      nivelExperiencia: 85,
      imagem: maquina
    },
    {
      nome: "Viúva Negra",
      forcaFisica: 60,
      velocidade: 70,
      agilidade: 90,
      resistencia: 70,
      inteligencia: 80,
      habilidadeCombate: 95,
      poderesEspeciais: 75,
      nivelExperiencia: 90,
      imagem: viuva
    },
    {
      nome: "Pantera Negra",
      forcaFisica: 90,
      velocidade: 80,
      agilidade: 90,
      resistencia: 85,
      inteligencia: 80,
      habilidadeCombate: 95,
      poderesEspeciais: 80,
      nivelExperiencia: 95,
      imagem: pantera
    },
    {
      nome: "Visão",
      forcaFisica: 80,
      velocidade: 70,
      agilidade: 80,
      resistencia: 80,
      inteligencia: 100,
      habilidadeCombate: 85,
      poderesEspeciais: 95,
      nivelExperiencia: 85,
      imagem: visao
    },
    {
      nome: "Homem-Aranha",
      forcaFisica: 75,
      velocidade: 85,
      agilidade: 95,
      resistencia: 70,
      inteligencia: 80,
      habilidadeCombate: 85,
      poderesEspeciais: 80,
      nivelExperiencia: 80,
      imagem: aranha
    }
];  

/*
personagens.forEach(function(personagem) {
  const somaPropriedades = personagem.forcaFisica + personagem.velocidade + personagem.agilidade;
  personagem.mediaGeral = somaPropriedades / 3;
});

console.log(personagens);
*/