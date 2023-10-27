import axios from 'axios';
import { useState } from 'react';
import nooImg from '../../images/noo.png'
import Usuario from '../../models/Usuario';
import './Cadastro.css'

function Cadastro() {
  document.title = 'Cadastro';

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [senha, setSenha] = useState('');

  function enviarDados() {
    const usuario = new Usuario(nome, sobrenome, email, tel, senha);
  
    axios.post('http://localhost:8080/cadastro', { usuario })
      .then(response => {
        alert("Cadastro confirmado!");
      })
      .catch(error => {
        alert("Ocorreu um erro ao tentar cadastrar você.")
      });
  }

  return (
    <div className="cadastroPage">
      <main>
        <div className="cadernos">
        </div>

        <div className="cadastro">

          <div className="cabecalho">
            <h1>Cadastre-se</h1>
            <a href="/"><img src={nooImg} alt="Logo Nootropic" /></a>
          </div>

          <form>
            <div className="nomes">
              <label htmlFor="nome">Primeiro nome <br />
                <input type="text" placeholder="João" id="nome" label="Primeiro nome" value={nome} onChange={(e) => setNome(e.target.value)} />
              </label>

              <label htmlFor="sobrenome">Sobrenome <br />
                <input type="text" placeholder="Silva" id="sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
              </label>
            </div>

            <p>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" placeholder="exemplo@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </p>

            <p>
              <label htmlFor="telefone">Telefone</label>
              <input type="tel" id="telefone" placeholder="+55 (99) 9999-9999" value={tel} onChange={(e) => setTel(e.target.value)} />
            </p>

            <p>
              <label htmlFor="senha">Senha</label>
              <input type="password" id="senha" placeholder="********" value={senha} onChange={(e) => setSenha(e.target.value)} />
            </p>
            <p className="senhaDetalhes">Crie uma senha forte com 8 a 16 caracteres.</p>

            <p className="concordar">
              <input type="checkbox" id="concordo" />
              <label htmlFor="concordo">Concordo com o envio dos meus dados.</label>
            </p>

            <button onClick={enviarDados} type="submit">Enviar</button>
          </form>

          <hr />

          <p className="encaminhaLogin">Já tem uma conta? <a href="/login">Faça login</a>.</p>
        </div>
      </main>
    </div>
  )
}

export default Cadastro