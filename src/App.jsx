import './App.css';
import React, { useState } from 'react';
import {timeCapitaoAmerica, timeHomemDeFerro} from "./personagens/personagens";

function App() {

  const [personagemSelecionado, setPersonagemSelecionado] = useState(null);

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
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>força fisíca</p><p>{personagemSelecionado.habilidades.forcaFisica}</p></div>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>velocidade</p><p>{personagemSelecionado.habilidades.velocidade}</p></div>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>agilidade</p><p>{personagemSelecionado.habilidades.agilidade}</p></div>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>resistência</p><p>{personagemSelecionado.habilidades.resistencia}</p></div>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>inteligência</p><p>{personagemSelecionado.habilidades.inteligencia}</p></div>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>habilidade de combate</p><p>{personagemSelecionado.habilidades.habilidadeCombate}</p></div>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>poderes especiais</p><p>{personagemSelecionado.habilidades.poderesEspeciais}</p></div>
                  <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>nivel experiência</p><p>{personagemSelecionado.habilidades.nivelExperiencia}</p></div>
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
                />
              ))}
            </div>
          </div>
          <div className='timeazulpersonagensescolhidos'>
            <h1 className='timeazulescolhidostitulo'>escolhidos</h1>
            <div className='timeazulescolhidos'>
              <div className='timeazulescolhidosposicao'>escolhido 1</div>
              <div className='timeazulescolhidosposicao'>escolhido 2</div>
              <div className='timeazulescolhidosposicao2'>escolhido 3</div>
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
                <img className='timeazulpersonagensparaescolher' src={personagem.imagem} alt={personagem.nome} />
              ))}
            </div>
          </div>
          <div className='timevermelholpersonagensescolhidos'>
            <h1 className='timevermelholescolhidostitulo'>escolhidos</h1>
            <div className='timevermelholescolhidos'>
              <div className='timevermelhoescolhidosposicao'>escolhido 1</div>
              <div className='timevermelhoescolhidosposicao'>escolhido 2</div>
              <div className='timevermelhoescolhidosposicao2'>escolhido 3</div>
            </div>
          </div>
        </div>
        <div className='timevermelhocaracteristicas'>
          <div>
            <h1 className='personagemvermelhonome'>nome personagem</h1>
          </div>
          <div className='personagenscaracteristicasfundo'>
            <div className='personagensvermelhocaracteristicas'>
              <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>força</p><p>5</p></div>
              <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>força</p><p>5</p></div>
              <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>força</p><p>5</p></div>
              <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>força</p><p>5</p></div>
              <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>força</p><p>5</p></div>
              <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>força</p><p>5</p></div>
              <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>força</p><p>5</p></div>
              <div className='personagenscaracteristicaespecifica'><p className='personagemcaracteristicatitulo'>força</p><p>5</p></div>
              <div className='personagenscaracteristicaespecifica2'><p>Poder total</p><p>5</p></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
