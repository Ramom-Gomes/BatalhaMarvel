import './App.css';
import {timeCapitaoAmerica, timeHomemDeFerro} from "./personagens/personagens";

function App() {

  return (
    <main className='main'>
      <section className='timeazul'>
        <div className='timeazulcaracteristicas'>
          <div>
            <h1 className='personagemnome'>nome personagem</h1>
          </div>
          <div className='personagenscaracteristicasfundo'>
            <div className='personagenscaracteristicas'>
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
        <div className='timeazulpersonagens'>
          <div className='timeazulescolherpersonagem'>
            <div>
              <h1 className='timeazultitulo'>time azul</h1>
              <p className='timeazulinfo'>escolha três personagens</p>
            </div>
            <div className='timeazulescolhadepersonagens'>
              {timeCapitaoAmerica.map(personagem => (
                <img className='timeazulpersonagensparaescolher' src={personagem.imagem} alt={personagem.nome} />
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
