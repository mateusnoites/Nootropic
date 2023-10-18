import nooImg from '../../images/noo.png'
import './Login.css'

function Login() {
  document.title = "Entrar";
  
  return (
    <div className="loginPage">
      <main>
        <div class="cadernos">
        </div>

        <div class="login">

          <div class="cabecalho">
            <h1>Entrar</h1>
            <a href="/"><img src={nooImg} alt="Logo Nootropic" /></a>
          </div>

          <form>
            <p>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" />
            </p>

            <p>
              <label htmlFor="senha">Senha</label>
              <input type="password" id="senha" />
            </p>

            <p class="concordar">
              <input type="checkbox" id="concordo" />
              <label htmlFor="concordo">Lembrar de mim</label>
            </p>
            
            <button type="submit">Enviar</button>
          </form>

          <hr />

          <p class="encaminhaCadastro">Não tem uma conta? <a href="/cadastro">Cadastre-se</a>.</p>

        </div>
      </main>
    </div>
  )
}

export default Login