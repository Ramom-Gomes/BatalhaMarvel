import './App.css';
import React, { useState } from 'react';
import {timeCapitaoAmerica, timeHomemDeFerro} from "./personagens/personagens";

function App() {

  const [personagemSelecionado, setPersonagemSelecionado] = useState(null);
  const [personagemSelecionado2, setPersonagemSelecionado2] = useState(null);
  const [timeCapitaoEscolhidos, setTimeCapitaoEscolhidos] = useState([]);
  const [timeHomemDeFerroEscolhidos, setTimeHomemDeFerroEscolhidos] = useState([]);

  function adicionarOuRemoverDoTimeCapitao(personagem) {
    const novoTimeCapitaoEscolhidos = timeCapitaoEscolhidos.includes(personagem)
      ? timeCapitaoEscolhidos.filter(item => item !== personagem)
      : timeCapitaoEscolhidos.length < 3
        ? [...timeCapitaoEscolhidos, personagem]
        : timeCapitaoEscolhidos;
  
    setTimeCapitaoEscolhidos(novoTimeCapitaoEscolhidos);
  }


  function adicionarOuRemoverDoTimeHomemDeFerro(personagem) {
    const novoTimeHomemDeFerro = timeHomemDeFerroEscolhidos.includes(personagem)
      ? timeHomemDeFerroEscolhidos.filter(item => item !== personagem)
      : timeHomemDeFerroEscolhidos.length < 3
        ? [...timeHomemDeFerroEscolhidos, personagem]
        : timeHomemDeFerroEscolhidos;
  
    setTimeHomemDeFerroEscolhidos(novoTimeHomemDeFerro);
  }
  


  return (
    <main className='main'>
      <section className='timeazul'>
        <div className='timeazulcaracteristicas'>
          <div>
            {personagemSelecionado && (
              <h1 className='personagemnome'>{personagemSelecionado.nome}</h1>
            )}
            {!personagemSelecionado && (
              <h1 className='personagemnome'>nome personagem</h1>
            )}
          </div>
          <div className='personagenscaracteristicasfundo'>
            <div className='personagenscaracteristicas'>
              {personagemSelecionado && (
                <>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>força fisíca</p><p>{personagemSelecionado.forcaFisica}</p></div>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>velocidade</p><p>{personagemSelecionado.velocidade}</p></div>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>agilidade</p><p>{personagemSelecionado.agilidade}</p></div>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>resistência</p><p>{personagemSelecionado.resistencia}</p></div>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>inteligência</p><p>{personagemSelecionado.inteligencia}</p></div>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>habilidade de combate</p><p>{personagemSelecionado.habilidadeCombate}</p></div>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>poderes especiais</p><p>{personagemSelecionado.poderesEspeciais}</p></div>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>nivel experiência</p><p>{personagemSelecionado.nivelExperiencia}</p></div>
                </>
              )}
              {!personagemSelecionado && (
                <>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>força fisíca</p><p>5</p></div>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>velocidade</p><p>5</p></div>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>agilidade</p><p>5</p></div>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>resistência</p><p>5</p></div>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>inteligência</p><p>5</p></div>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>habilidade de combate</p><p>5</p></div>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>poderes especiais</p><p>5</p></div>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>nível experiência</p><p>5</p></div>
                </>
              )}
              <div className='personagenscaracteristicaespecifica2'><p>Poder total</p><p>5</p></div>
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
              src={timeCapitaoEscolhidos && timeCapitaoEscolhidos.length > 0 ? timeCapitaoEscolhidos[0].imagem : ''} 
              alt={personagemSelecionado ? personagemSelecionado.nome : ''}
            />
              <img className='timeazulescolhidosposicao' 
              src={timeCapitaoEscolhidos && timeCapitaoEscolhidos.length > 1 ? timeCapitaoEscolhidos[1].imagem : ''} 
              alt={personagemSelecionado ? personagemSelecionado.nome : ''}
            />
              <img className='timeazulescolhidosposicao2' 
              src={timeCapitaoEscolhidos && timeCapitaoEscolhidos.length > 2 ? timeCapitaoEscolhidos[2].imagem : ''} 
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
              src={timeHomemDeFerroEscolhidos && timeHomemDeFerroEscolhidos.length > 0 ? timeHomemDeFerroEscolhidos[0].imagem : ''} 
              alt={personagemSelecionado ? personagemSelecionado.nome : ''}
            />
            <img className='timevermelhoescolhidosposicao' 
              src={timeHomemDeFerroEscolhidos && timeHomemDeFerroEscolhidos.length > 1 ? timeHomemDeFerroEscolhidos[1].imagem : ''} 
              alt={personagemSelecionado ? personagemSelecionado.nome : ''}
            />
            <img className='timevermelhoescolhidosposicao2' 
              src={timeHomemDeFerroEscolhidos && timeHomemDeFerroEscolhidos.length > 2 ? timeHomemDeFerroEscolhidos[2].imagem : ''} 
              alt={personagemSelecionado ? personagemSelecionado.nome : ''}
            />
            </div>
          </div>
        </div>
        <div className='timevermelhocaracteristicas'>
          <div>
            {personagemSelecionado2 && (
              <h1 className='personagemnome'>{personagemSelecionado2.nome}</h1>
            )}
            {!personagemSelecionado2 && (
              <h1 className='personagemnome'>nome personagem</h1>
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
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>habilidade de combate</p><p>{personagemSelecionado2.habilidadeCombate}</p></div>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>poderes especiais</p><p>{personagemSelecionado2.poderesEspeciais}</p></div>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>nivel experiência</p><p>{personagemSelecionado2.nivelExperiencia}</p></div>
                </>
              )}
              {!personagemSelecionado2 && (
                <>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>força fisíca</p><p>5</p></div>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>velocidade</p><p>5</p></div>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>agilidade</p><p>5</p></div>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>resistência</p><p>5</p></div>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>inteligência</p><p>5</p></div>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>habilidade de combate</p><p>5</p></div>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>poderes especiais</p><p>5</p></div>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>nível experiência</p><p>5</p></div>
                </>
              )}
              <div className='personagenscaracteristicaespecifica2'><p>Poder total</p><p>5</p></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
