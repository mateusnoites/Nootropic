import './Home.css';
import nooImg from '../../images/noo.png'
import clockImg from '../../images/clock.png'

function Home() {
  return (
    <div className="homePage">
      <header>
        <img src={nooImg} alt="Logo Nootropic" />
      </header>

      
      <main>
        <div className="imagemRelogio">
          <img src={clockImg} alt="Relogio" />
        </div>
        <div className="informs">
          <div className="textos">
            <p className="quemSomos">QUEM SOMOS</p>
            <h1 className="titulo">Nootropic</h1>
      
            <h2 className="subtexto">Descubra o Nootropic: onde a sabedoria se torna 'nootória'!</h2>
      
            <p className="texto">Desperte a força adormecida! Nootropic é a chave para desbloquear todo o seu potencial. Torne-se um mestre da organização e conquiste o mundo com clareza mental e produtividade imparável.</p>
      
            <a href="/cadastro"><button className="confirm">Vamos lá!</button></a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home