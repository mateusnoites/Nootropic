import nooImg from '../../images/noo.png'
import './Cadastro.css'

function Cadastro() {
  document.title = 'Cadastro';

  return (
    <div className="cadastroPage">
      <main>
        <div class="cadernos">
        </div>

        <div class="cadastro">

          <div class="cabecalho">
            <h1>Cadastre-se</h1>
            <a href="/"><img src={nooImg} alt="Logo Nootropic" /></a>
          </div>

          <form>
            <div class="nomes">
              <label for="nome">Primeiro nome <br />
                <input type="text" placeholder="João" id="nome" label="Primeiro nome" />
              </label>

              <label for="sobrenome">Sobrenome <br />
                <input type="text" placeholder="Silva" id="sobrenome" />
              </label>
            </div>

            <p>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" placeholder="exemplo@email.com" />
            </p>

            <p>
              <label htmlFor="telefone">Telefone</label>
              <input type="tel" id="telefone" placeholder="+55 (99) 9999-9999" />
            </p>

            <p>
              <label htmlFor="senha">Senha</label>
              <input type="password" id="senha" placeholder="********" />
              <p className="senhaDetalhes">Crie uma senha forte com 8 a 16 caracteres.</p>
            </p>

            <p className="concordar">
              <input type="checkbox" id="concordo" />
              <label htmlFor="concordo">Concordo com o envio dos meus dados.</label>
            </p>

            <button type="submit">Enviar</button>
          </form>

          <hr />

          <p className="encaminhaLogin">Já tem uma conta? <a href="/login">Faça login</a>.</p>
        </div>
      </main>
    </div>
  )
}

export default Cadastro