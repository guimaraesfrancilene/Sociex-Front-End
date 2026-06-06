import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import logoFoto from "../../assets/logo.png";
import './Cadastro.css'
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'

function CadastroUniversitario() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    nome: '',
    cidade: '',
    instituicao: '',
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
    if (!form.nome || !form.cidade || !form.instituicao || !form.email || !form.senha || !form.confirmarSenha) {
      alert('Preencha todos os campos!')
      return
    }
    if (form.senha !== form.confirmarSenha) {
      alert('As senhas não coincidem!')
      return
    }
    navigate('/login/universitario')
  }

  return (
    <div className="tela-container">

      {/* Lado esquerdo */}
      <div className="lado-esquerdo">
         <div className="logo">
      <img src={logoFoto}  width="350" alt="Logo SOCIEX" />
        </div>
        <h1>SOCIEX</h1>
        <p>Faça do seu problema<br />uma oportunidade!</p>
      </div>

      {/* Lado direito */}
      <div className="lado-direito">
        <h2 className="cadastro-titulo">Cadastrar uma conta</h2>

        <div className="card cadastro-card">
          <p className="cadastro-instrucao">
            Preencha os campos abaixo<br />e crie uma nova conta
          </p>

          <div className="login-campo">
            <label>Informe nome completo</label>
            <input
              type="text"
              name="nome"
              placeholder="Nome Completo"
              value={form.nome}
              onChange={handleChange}
            />
          </div>

          <div className="login-campo">
            <label>Informe sua cidade</label>
            <input
              type="text"
              name="cidade"
              placeholder="Cidade"
              value={form.cidade}
              onChange={handleChange}
            />
          </div>

          <div className="login-campo">
            <label>Informe sua Instituição</label>
            <input
              type="text"
              name="instituicao"
              placeholder="Instituição"
              value={form.instituicao}
              onChange={handleChange}
            />
          </div>

          <div className="login-campo">
            <label>Informe seu e-mail Institucional</label>
            <div className="login-senha-wrapper">
              <FiMail />
              <input
                type="email"
                name="email"
                placeholder="E-mail Institucional"
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
                placeholder="Repita a senha"
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
            <Link to="/login/universitario">Faça Login</Link>
          </p>
        </div>
      </div>

    </div>
  )
}

export default CadastroUniversitario