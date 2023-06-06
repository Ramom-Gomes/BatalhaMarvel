import './App.css';
import React, { useState } from 'react';
import {timeCapitaoAmerica, timeHomemDeFerro} from "./personagens/personagens";
import FotoInterrogacao from "./images/interrogacao.png";

function App() {

  const [personagemSelecionado, setPersonagemSelecionado] = useState(null);
  const [personagemSelecionado2, setPersonagemSelecionado2] = useState(null);
  const [timeCapitaoEscolhidos, setTimeCapitaoEscolhidos] = useState([]);
  const [timeHomemDeFerroEscolhidos, setTimeHomemDeFerroEscolhidos] = useState([]);
  const [ambosTimesSelecionados, setAmbosTimesSelecionados] = useState(false);
  const [mensagemVisivel, setMensagemVisivel] = useState(false);
  const [resultadoVisivel, setResultadoVisivel] = useState(false);
 

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

  function calcularMediaDoTime(time) {
    const somatorio = time.reduce((acumulador, personagem) => {
      return acumulador + personagem.mediaGeral;
    }, 0);
    const media = somatorio / time.length;
    return media;
  }

  function handleLutarClick() {
    const mediaCapitao = calcularMediaDoTime(timeCapitaoEscolhidos);
    const mediaHomemDeFerro = calcularMediaDoTime(timeHomemDeFerroEscolhidos);
    
    let resultado = "";
    if (mediaCapitao > mediaHomemDeFerro) {
      resultado = `O Time do Capitão venceu a batalha! Média: ${mediaCapitao.toFixed(0)}`;
    } else if (mediaHomemDeFerro > mediaCapitao) {
      resultado = `O Time do Homem de Ferro venceu a batalha! Média: ${mediaHomemDeFerro.toFixed(0)}`;
    } else {
      resultado = "A batalha terminou em empate!";
    }

    setResultadoVisivel(resultado);
    setMensagemVisivel(true);
  }
  
  function handleFecharResultado() {
    setResultadoVisivel(false);
    setMensagemVisivel(false);
    setTimeCapitaoEscolhidos([]);
    setTimeHomemDeFerroEscolhidos([]);
    setAmbosTimesSelecionados(false);
  }


  return (
    <>
      <main className='main'>
        <section className='timeazul'>
          <div className='timeazulcaracteristicas'>
            <div className='personagemnomeposicao'>
              {personagemSelecionado && (
                <h1 className='personagemnome'>{personagemSelecionado.nome}</h1>
              )}
              {!personagemSelecionado && (
                <h1 className='personagemnome'>personagem</h1>
              )}
            </div>
            <div className='personagenscaracteristicasfundo'>
              <div className='personagenscaracteristicas'>
                {personagemSelecionado && (
                  <>
                    <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>força</p><p>{personagemSelecionado.forcaFisica}</p></div>
                    <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>velocidade</p><p>{personagemSelecionado.velocidade}</p></div>
                    <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>agilidade</p><p>{personagemSelecionado.agilidade}</p></div>
                    <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>resistência</p><p>{personagemSelecionado.resistencia}</p></div>
                    <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>inteligência</p><p>{personagemSelecionado.inteligencia}</p></div>
                    <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>coragem</p><p>{personagemSelecionado.coragem}</p></div>
                    <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>habilidades</p><p>{personagemSelecionado.habilidade}</p></div>
                    <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>experiência</p><p>{personagemSelecionado.Experiencia}</p></div>
                    <div className='personagenscaracteristicaespecifica2'><p>Poder total</p><p>{personagemSelecionado.mediaGeral}</p></div>
                  </>
                )}
                {!personagemSelecionado && (
                  <>
                    <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>força</p><p>00</p></div>
                    <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>velocidade</p><p>00</p></div>
                    <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>agilidade</p><p>00</p></div>
                    <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>resistência</p><p>00</p></div>
                    <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>inteligência</p><p>00</p></div>
                    <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>coragem</p><p>00</p></div>
                    <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>habilidades</p><p>00</p></div>
                    <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>experiência</p><p>00</p></div>
                    <div className='personagenscaracteristicaespecifica2'><p>Poder total</p><p>00</p></div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className='timeazulpersonagens'>
            <div className='timeazulescolherpersonagem'>
              <div>
                <h1 className='timeazultitulo'>time azul</h1>
                <p className='timeazulinfo'>escolha três personagens</p>
              </div>
              <div className='timeazulescolhadepersonagens'>
                {timeCapitaoAmerica.map(personagem => (
                  <img className='timeazulpersonagensparaescolher' 
                  src={personagem.imagem} 
                  alt={personagem.nome}
                  onMouseEnter={() => setPersonagemSelecionado(personagem)}
                  onClick={() => adicionarOuRemoverDoTimeCapitao(personagem)} 
                  />
                ))}
              </div>
            </div>
            <div className='timeazulpersonagensescolhidos'>
              <h1 className='timeazulescolhidostitulo'>escolhidos</h1>
              <div className='timeazulescolhidos'>
              <img className='timeazulescolhidosposicao' 
                src={timeCapitaoEscolhidos && timeCapitaoEscolhidos.length > 0 ? timeCapitaoEscolhidos[0].imagem : FotoInterrogacao} 
                alt={personagemSelecionado ? personagemSelecionado.nome : ''}
              />
                <img className='timeazulescolhidosposicao' 
                src={timeCapitaoEscolhidos && timeCapitaoEscolhidos.length > 1 ? timeCapitaoEscolhidos[1].imagem : FotoInterrogacao} 
                alt={personagemSelecionado ? personagemSelecionado.nome : ''}
              />
                <img className='timeazulescolhidosposicao2' 
                src={timeCapitaoEscolhidos && timeCapitaoEscolhidos.length > 2 ? timeCapitaoEscolhidos[2].imagem : FotoInterrogacao} 
                alt={personagemSelecionado ? personagemSelecionado.nome : ''}
              />
              </div>
            </div>
          </div>
        </section>
        <section className='timevermelho'>
          <div className='timevermelhopersonagens'>
            <div className='timevermelhoescolherpersonagem'>
              <div>
                <h1 className='timevermelhotitulo'>time azul</h1>
                <p className='timevermelhoinfo'>escolha três personagens</p>
              </div>
              <div className='timevermelhoescolhadepersonagens'>
                {timeHomemDeFerro.map(personagem => (
                  <img className='timeazulpersonagensparaescolher' 
                  src={personagem.imagem} 
                  alt={personagem.nome}
                  onMouseEnter={() => setPersonagemSelecionado2(personagem)}
                  onClick={() => adicionarOuRemoverDoTimeHomemDeFerro(personagem)}
                  />
                ))}
              </div>
            </div>
            <div className='timevermelholpersonagensescolhidos'>
              <h1 className='timevermelholescolhidostitulo'>escolhidos</h1>
              <div className='timevermelholescolhidos'>
              <img className='timevermelhoescolhidosposicao' 
                src={timeHomemDeFerroEscolhidos && timeHomemDeFerroEscolhidos.length > 0 ? timeHomemDeFerroEscolhidos[0].imagem : FotoInterrogacao} 
                alt={personagemSelecionado ? personagemSelecionado.nome : ''}
              />
              <img className='timevermelhoescolhidosposicao' 
                src={timeHomemDeFerroEscolhidos && timeHomemDeFerroEscolhidos.length > 1 ? timeHomemDeFerroEscolhidos[1].imagem : FotoInterrogacao} 
                alt={personagemSelecionado ? personagemSelecionado.nome : ''}
              />
              <img className='timevermelhoescolhidosposicao2' 
                src={timeHomemDeFerroEscolhidos && timeHomemDeFerroEscolhidos.length > 2 ? timeHomemDeFerroEscolhidos[2].imagem : FotoInterrogacao} 
                alt={personagemSelecionado ? personagemSelecionado.nome : ''}
              />
              </div>
            </div>
          </div>
          <div className='timevermelhocaracteristicas'>
            <div className='personagemnomeposicao2'>
              {personagemSelecionado2 && (
                <h1 className='personagemnome'>{personagemSelecionado2.nome}</h1>
              )}
              {!personagemSelecionado2 && (
                <h1 className='personagemnome'>personagem</h1>
              )}
            </div>
            <div className='personagenscaracteristicasfundo'>
              <div className='personagensvermelhocaracteristicas'>
                {personagemSelecionado2 && (
                  <>
                    <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>força fisíca</p><p>{personagemSelecionado2.forcaFisica}</p></div>
                    <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>velocidade</p><p>{personagemSelecionado2.velocidade}</p></div>
                    <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>agilidade</p><p>{personagemSelecionado2.agilidade}</p></div>
                    <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>resistência</p><p>{personagemSelecionado2.resistencia}</p></div>
                    <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>inteligência</p><p>{personagemSelecionado2.inteligencia}</p></div>
                    <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>coragem</p><p>{personagemSelecionado2.coragem}</p></div>
                    <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>habilidades</p><p>{personagemSelecionado2.habilidade}</p></div>
                    <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>experiência</p><p>{personagemSelecionado2.Experiencia}</p></div>
                    <div className='personagenscaracteristicaespecifica2'><p>Poder total</p><p>{personagemSelecionado2.mediaGeral}</p></div>
                  </>
                )}
                {!personagemSelecionado2 && (
                  <>
                    <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>força fisíca</p><p>00</p></div>
                    <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>velocidade</p><p>00</p></div>
                    <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>agilidade</p><p>00</p></div>
                    <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>resistência</p><p>00</p></div>
                    <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>inteligência</p><p>00</p></div>
                    <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>coragem</p><p>00</p></div>
                    <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>habilidades</p><p>00</p></div>
                    <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>experiência</p><p>00</p></div>
                    <div className='personagenscaracteristicaespecifica2'><p>Poder total</p><p>00</p></div>
                  </>
                )}
              </div>
            </div>
            <button className='botaolutar' disabled={!ambosTimesSelecionados} onClick={handleLutarClick}>lutar</button>
            {mensagemVisivel && (
                <div className="caixa-mensagem">
                  <p>{resultadoVisivel}</p>
                  <div>...</div>
                  <button className='botaofecharresultado' onClick={handleFecharResultado}>Jogar Novamente</button>
                </div>
            )}
            {resultadoVisivel && <div className="fundo-transparente"/>}
          </div>
        </section>
      </main>
    </>
  )
}

export default App
