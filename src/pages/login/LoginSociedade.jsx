import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import logoFoto from "../../assets/logo.png";
import './LoginSociedade.css'
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'

function LoginSociedade() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [mostrarSenha, setMostrarSenha] = useState(false)

  function handleLogin() {
    if (email && senha) {
      navigate('/composto/dashboard')
    } else {
      alert('Preencha todos os campos!')
    }
  }

  return (
    <div className="tela-container">

      <div className="lado-esquerdo">
        <div className="logo">
          <img src={logoFoto} width="350" alt="Logo" />
        </div>
        <h1>SOCIEX</h1>
        <p>Faça do seu problema<br />uma oportunidade!</p>
      </div>

      <div className="lado-direito">
        <h2 className="login-bemvindo">Seja Bem-Vindo(a)</h2>

        <div className="card">
          <p className="login-instrucao">
            Preencha os campos<br />abaixo para entrar
          </p>

          <div className="login-campo">
            <label>Informe seu email</label>
            <div className="login-senha-wrapper">
              <FiMail />
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="login-campo">
            <label>Informe sua senha</label>
            <div className="login-senha-wrapper">
              <FiLock />
              <input
                type={mostrarSenha ? 'text' : 'password'}
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <span
                className="login-icone-olho"
                onClick={() => setMostrarSenha(!mostrarSenha)}
              >
                {mostrarSenha ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
          </div>

          <button className="btn-primario" onClick={handleLogin}>
            Entrar
          </button>

          <button className="btn-secundario">
            <img src="https://www.google.com/favicon.ico" alt="Google" width="20" />
            Entrar com o Google
          </button>

          <p className="login-cadastro">
            Não tem conta?{' '}
            <Link to="/cadastro/sociedade">Cadastre-se</Link>
          </p>
        </div>
      </div>

    </div>
  )
}

export default LoginSociedade