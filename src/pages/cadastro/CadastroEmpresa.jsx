import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import logoFoto from "../../assets/logo.png";
import './Cadastro.css'
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'

function CadastroEmpresa() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    nome: '',
    cnpj: '',
    area: '',
    email: '',
    telefone: '',
    senha: ''
  })
  const [mostrarSenha, setMostrarSenha] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleCadastro() {
    if (!form.nome || !form.cnpj || !form.area || !form.email || !form.telefone || !form.senha) {
      alert('Preencha todos os campos!')
      return
    }
    navigate('/login/empresa')
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
            <label>Informe nome da empresa</label>
            <input
              type="text"
              name="nome"
              placeholder="Nome da Empresa"
              value={form.nome}
              onChange={handleChange}
            />
          </div>

          <div className="login-campo">
            <label>Informe o CNPJ</label>
            <input
              type="text"
              name="cnpj"
              placeholder="00.000.000/0000-00"
              value={form.cnpj}
              onChange={handleChange}
            />
          </div>

          <div className="login-campo">
            <label>Informe área de atuação</label>
            <input
              type="text"
              name="area"
              placeholder="Área de atuação"
              value={form.area}
              onChange={handleChange}
            />
          </div>

          <div className="login-campo">
            <label>Informe seu e-mail</label>
            <div className="login-senha-wrapper">
              <FiMail />
              <input
                type="email"
                name="email"
                placeholder="E-mail Corporativo"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="login-campo">
            <label>Informe telefone</label>
            <input
              type="text"
              name="telefone"
              placeholder="Telefone"
              value={form.telefone}
              onChange={handleChange}
            />
          </div>

          <div className="login-campo">
            <label>Informe uma senha</label>
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

          <button className="btn-primario" onClick={handleCadastro}>
            Cadastrar
          </button>

          <p className="login-cadastro">
            Já possui uma conta?{' '}
            <Link to="/login/empresa">Faça Login</Link>
          </p>
        </div>
      </div>

    </div>
  )
}

export default CadastroEmpresa