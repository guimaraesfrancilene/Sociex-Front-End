import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import logoFoto from "../../assets/logo.png";
import './Cadastro.css'
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'

function CadastroSociedade() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: '',
    senha: '',
    confirmarSenha: ''
  })
  const [mostrarSenha, setMostrarSenha] = useState(false)
  const [mostrarConfirmar, setMostrarConfirmar] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleCadastro() {
    if (!form.email || !form.senha || !form.confirmarSenha) {
      alert('Preencha todos os campos!')
      return
    }
    if (form.senha !== form.confirmarSenha) {
      alert('As senhas não coincidem!')
      return
    }
    navigate('/login/sociedade')
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
        <h2 className="cadastro-titulo">Cadastrar uma conta</h2>

        <div className="card cadastro-card">
          <p className="cadastro-instrucao">
            Preencha os campos abaixo<br />e crie uma nova conta
          </p>

          <div className="login-campo">
            <label>Informe seu e-mail</label>
            <div className="login-senha-wrapper">
              <FiMail />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="login-campo">
            <label>Informe sua senha</label>
            <div className="login-senha-wrapper">
              <FiLock />
              <input
                type={mostrarSenha ? 'text' : 'password'}
                name="senha"
                placeholder="Senha"
                value={form.senha}
                onChange={handleChange}
              />
              <span
                className="login-icone-olho"
                onClick={() => setMostrarSenha(!mostrarSenha)}
              >
                {mostrarSenha ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
          </div>

          <div className="login-campo">
            <label>Confirme sua senha</label>
            <div className="login-senha-wrapper">
              <FiLock />
              <input
                type={mostrarConfirmar ? 'text' : 'password'}
                name="confirmarSenha"
                placeholder="Senha"
                value={form.confirmarSenha}
                onChange={handleChange}
              />
              <span
                className="login-icone-olho"
                onClick={() => setMostrarConfirmar(!mostrarConfirmar)}
              >
                {mostrarConfirmar ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
          </div>

          <button className="btn-primario" onClick={handleCadastro}>
            Cadastrar
          </button>

          <p className="login-cadastro">
            Já possui uma conta?{' '}
            <Link to="/login/sociedade">Faça Login</Link>
          </p>
        </div>
      </div>

    </div>
  )
}

export default CadastroSociedade