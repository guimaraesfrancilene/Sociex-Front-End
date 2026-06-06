import React, { useState } from 'react';

export default function CadastroEmpresa() {
  // Estado para os campos do formulário
  const [formData, setFormData] = useState({
    nomeEmpresa: '',
    cnpj: '',
    areaAtuacaao: '',
    telefone: '',
    senha: ''
  });

  // Estado para mostrar/esconder a senha
  const [mostrarSenha, setMostrarSenha] = useState(false);

  // Função para atualizar os inputs dinamicamente
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função disparada ao enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados da empresa enviados:', formData);
    // Aqui você integraria com sua API/Backend futuramente
  };

  return (
    <div style={styles.container}>
      {/* LADO ESQUERDO: Logo, Nome e Slogan */}
      <div style={styles.leftSide}>
        <div style={styles.logoContainer}>
          {/* Dica: Mova sua imagem para a pasta 'public' ou 'assets' do seu projeto React */}
          <img 
            src="/logo.png" 
            alt="Logo SOCIEX" 
            style={styles.logoImg} 
          />
        </div>
        <h1 style={styles.brandName}>SOCIEX</h1>
        <p style={styles.tagline}>Faça do seu problema uma oportunidade!</p>
      </div>

      {/* LADO DIREITO: Formulário de Cadastro */}
      <div style={styles.rightSide}>
        <h2 style={styles.pageTitle}>Cadastrar uma conta</h2>
        
        <div style={styles.formCard}>
          <p style={styles.formSubtitle}>Preencha os campos abaixo e crie uma nova conta</p>
          
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Informe nome da empresa</label>
              <input 
                type="text" 
                name="nomeEmpresa"
                value={formData.nomeEmpresa}
                onChange={handleChange}
                style={styles.formInput} 
                placeholder="Nome da Empresa" 
                required 
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Informe o CNPJ</label>
              <input 
                type="text" 
                name="cnpj"
                value={formData.cnpj}
                onChange={handleChange}
                style={styles.formInput} 
                placeholder="00.000.000/0000-00" 
                required 
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Informe área de atuação</label>
              <input 
                type="text" 
                name="areaAtuacaao"
                value={formData.areaAtuacaao}
                onChange={handleChange}
                style={styles.formInput} 
                placeholder="Área de atuação" 
                required 
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Informe telefone</label>
              <input 
                type="tel" 
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                style={styles.formInput} 
                placeholder="Telefone" 
                required 
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Informe uma senha</label>
              <div style={styles.inputContainer}>
                <i className="fa-solid fa-lock" style={styles.leftIcon}></i>
                
                <input 
                  type={mostrarSenha ? "text" : "password"} 
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  style={{ ...styles.formInput, ...styles.hasIconLeft }} 
                  placeholder="Senha" 
                  required 
                />
                
                <i 
                  className={`fa-solid ${mostrarSenha ? 'fa-eye' : 'fa-eye-slash'}`} 
                  style={styles.rightIcon}
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                ></i>
              </div>
            </div>

            <button type="submit" style={styles.btnSubmit}>Cadastrar</button>
          </form>

          <p style={styles.loginFooter}>
            Já possui uma conta? <a href="#" style={styles.loginLink}>Faça Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}

// Objeto contendo os estilos originais convertidos para o padrão do React
const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#590623',
    fontFamily: "'Baloo 2', cursive, sans-serif",
  },
  leftSide: {
    flex: 1,
    backgroundColor: '#FAF1D6',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
    textAlign: 'center',
  },
  logoContainer: {
    marginBottom: '10px',
  },
  logoImg: {
    maxWidth: '240px',
    height: 'auto',
    objectFit: 'contain',
  },
  brandName: {
    color: '#590623',
    fontSize: '3.5rem',
    fontWeight: 800,
    letterSpacing: '1px',
    marginBottom: '10px',
    lineHeight: 1,
  },
  tagline: {
    color: '#000000',
    fontSize: '1.5rem',
    fontWeight: 700,
    maxWidth: '320px',
    lineHeight: 1.3,
  },
  rightSide: {
    flex: 1,
    backgroundColor: '#590623',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
  },
  pageTitle: {
    color: '#ffffff',
    fontSize: '2.4rem',
    fontWeight: 500,
    marginBottom: '20px',
  },
  formCard: {
    backgroundColor: '#FAF1D6',
    borderRadius: '18px',
    padding: '30px 40px',
    width: '100%',
    maxWidth: '480px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
  },
  formSubtitle: {
    color: '#D27828',
    fontSize: '1.5rem',
    fontWeight: 600,
    lineHeight: 1.3,
    marginBottom: '25px',
  },
  formGroup: {
    marginBottom: '16px',
    textAlign: 'left',
  },
  formLabel: {
    display: 'block',
    color: '#590623',
    fontWeight: 700,
    fontSize: '1.05rem',
    marginBottom: '2px',
  },
  inputContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  leftIcon: {
    position: 'absolute',
    color: '#a0a0a0',
    fontSize: '1.1rem',
    left: '14px',
  },
  rightIcon: {
    position: 'absolute',
    color: '#a0a0a0',
    fontSize: '1.1rem',
    right: '14px',
    cursor: 'pointer',
  },
  formInput: {
    width: '100%',
    padding: '8px 14px',
    border: '1px solid #CCCCCC',
    borderRadius: '8px',
    fontSize: '1.05rem',
    color: '#333333',
    backgroundColor: '#FFFFFF',
    outline: 'none',
  },
  hasIconLeft: {
    paddingLeft: '42px',
  },
  btnSubmit: {
    width: '100%',
    backgroundColor: '#590623',
    color: '#ffffff',
    border: 'none',
    padding: '10px',
    borderRadius: '8px',
    fontSize: '1.2rem',
    fontWeight: 600,
    cursor: 'pointer',
    marginTop: '10px',
    marginBottom: '15px',
  },
  loginFooter: {
    color: '#590623',
    fontSize: '1.05rem',
    fontWeight: 700,
  },
  loginLink: {
    color: '#D27828',
    textDecoration: 'none',
  }
};