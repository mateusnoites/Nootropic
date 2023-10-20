import { useState } from 'react';
import axios from 'axios';
import nooImg from '../../images/noo.png'
import './Login.css'
import { useNavigate } from 'react-router-dom';

function Login() {
  document.title = "Entrar";

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  function enviarDados() {
    const usuario = {
      email: email,
      senha: senha
    }

    axios.post('http://localhost:5000/login', { usuario })
    .then(response => {
      console.log("Resposta do servidor:", response.data); // Verifique o que o servidor retorna
      navigate('/dashboard');
    })
    .catch(error => {
      console.error("Erro ao enviar dados:", error);
      alert("Ocorreu um erro ao tentar cadastrar você.");
    });
  
  }
  
  return (
    <div className="loginPage">
      <main>
        <div className="cadernos">
        </div>

        <div className="login">

          <div className="cabecalho">
            <h1>Entrar</h1>
            <a href="/"><img src={nooImg} alt="Logo Nootropic" /></a>
          </div>

          <form>
            <p>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </p>

            <p>
              <label htmlFor="senha">Senha</label>
              <input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
            </p>

            <p className="concordar">
              <input type="checkbox" id="concordo" />
              <label htmlFor="concordo">Lembrar de mim</label>
            </p>
            
            <button type="submit" onClick={enviarDados}>Enviar</button>
          </form>

          <hr />

          <p className="encaminhaCadastro">Não tem uma conta? <a href="/cadastro">Cadastre-se</a>.</p>

        </div>
      </main>
    </div>
  )
}

export default Login