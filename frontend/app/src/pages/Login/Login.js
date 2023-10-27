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
  const [loginError, setLoginError] = useState(null);

  function enviarDados(evt) {
    evt.preventDefault();
    const usuario = {
      email: email,
      senha: senha
    }
  
    axios.post('http://localhost:8080/login', usuario)
      .then(response => {
        if (response.data.success) {
          navigate('/dashboard/' + usuario.email);
        } else {
          setLoginError("Credenciais inválidas. Tente novamente.");  
        }
      })
      .catch(error => {
        setLoginError("Credenciais inválidas. Tente novamente.");
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

          {loginError && <p className="error-message">{loginError}</p>}

          <hr />

          <p className="encaminhaCadastro">Não tem uma conta? <a href="/cadastro">Cadastre-se</a>.</p>

        </div>
      </main>
    </div>
  )
}

export default Login