import React, { useState } from 'react';

export default function CadastroSimples() {
  // 1. Estado para os inputs do formulário
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
    confirmarSenha: ''
  });

  // 2. Estados para alternar os olhinhos das senhas de forma independente
  const [verSenha, setVerSenha] = useState(false);
  const [verConfirmarSenha, setVerConfirmarSenha] = useState(false);

  // 3. Função para sincronizar o que é digitado com o estado do React
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // 4. Ação de envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    console.log('Dados enviados para cadastro:', formData);
    // Aqui viria sua chamada ao backend (ex: axios.post('/api/cadastro', formData))
  };

  return (
    <div style={styles.container}>
      
      {/* LADO ESQUERDO: Logo, Nome da Marca e Slogan */}
      <div style={styles.leftSide}>
        <div style={styles.logoContainer}>
          {/* Lembrete: Mova sua imagem para a pasta 'public' do projeto */}
          <img 
            src="/logo.png" 
            alt="Logo SOCIEX" 
            style={styles.logoImg} 
          />
        </div>
        <h1 style={styles.brandName}>SOCIEX</h1>
        <p style={styles.tagline}>Faça do seu problema uma oportunidade!</p>
      </div>

      {/* LADO DIREITO: Título e Card do Formulário */}
      <div style={styles.rightSide}>
        <h2 style={styles.pageTitle}>Cadastrar uma conta</h2>
        
        <div style={styles.formCard}>
          <p style={styles.formSubtitle}>Preencha os campos abaixo e crie uma nova conta</p>
          
          <form onSubmit={handleSubmit}>
            
            {/* Campo: E-mail */}
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Informe seu e-mail</label>
              <div style={styles.inputContainer}>
                <i className="fa-regular fa-envelope left-icon" style={styles.leftIcon}></i>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={styles.formInput} 
                  placeholder="E-mail" 
                  required 
                />
              </div>
            </div>

            {/* Campo: Senha */}
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Informe sua senha</label>
              <div style={styles.inputContainer}>
                <i className="fa-solid fa-lock left-icon" style={styles.leftIcon}></i>
                <input 
                  type={verSenha ? "text" : "password"} 
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  style={{ ...styles.formInput, ...styles.formInputHasRightIcon }} 
                  placeholder="Senha" 
                  required 
                />
                <i 
                  className={`fa-regular ${verSenha ? 'fa-eye' : 'fa-eye-slash'} right-icon`} 
                  style={styles.rightIcon}
                  onClick={() => setVerSenha(!verSenha)}
                ></i>
              </div>
            </div>

            {/* Campo: Confirmar Senha */}
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Confirme sua senha</label>
              <div style={styles.inputContainer}>
                <i className="fa-solid fa-lock left-icon" style={styles.leftIcon}></i>
                <input 
                  type={verConfirmarSenha ? "text" : "password"} 
                  name="confirmarSenha"
                  value={formData.confirmarSenha}
                  onChange={handleChange}
                  style={{ ...styles.formInput, ...styles.formInputHasRightIcon }} 
                  placeholder="Senha" 
                  required 
                />
                <i 
                  className={`fa-regular ${verConfirmarSenha ? 'fa-eye' : 'fa-eye-slash'} right-icon`} 
                  style={styles.rightIcon}
                  onClick={() => setVerConfirmarSenha(!verConfirmarSenha)}
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

// Estilos convertidos para objetos JavaScript (CamelCase)
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
    marginBottom: '15px',
  },
  logoImg: {
    maxWidth: '220px',
    height: 'auto',
    objectFit: 'contain',
  },
  brandName: {
    color: '#590623',
    fontSize: '3.8rem',
    fontWeight: 800,
    letterSpacing: '1px',
    lineHeight: 1,
    marginBottom: '25px',
  },
  tagline: {
    color: '#000000',
    fontSize: '1.6rem',
    fontWeight: 800,
    maxWidth: '320px',
    lineHeight: 1.2,
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
    fontSize: '2.5rem',
    fontWeight: 500,
    marginBottom: '25px',
  },
  formCard: {
    backgroundColor: '#FAF1D6',
    borderRadius: '20px',
    padding: '40px 45px',
    width: '100%',
    maxWidth: '490px',
    boxShadow: '0 12px 28px rgba(0, 0, 0, 0.25)',
    textAlign: 'center',
  },
  formSubtitle: {
    color: '#D27828',
    fontSize: '1.6rem',
    fontWeight: 600,
    lineHeight: 1.2,
    marginBottom: '30px',
  },
  formGroup: {
    marginBottom: '20px',
    textAlign: 'left',
  },
  formLabel: {
    display: 'block',
    color: '#590623',
    fontWeight: 700,
    fontSize: '1.1rem',
    marginBottom: '4px',
  },
  inputContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  leftIcon: {
    position: 'absolute',
    color: '#8A8A8A',
    fontSize: '1.1rem',
    left: '14px',
  },
  rightIcon: {
    position: 'absolute',
    color: '#8A8A8A',
    fontSize: '1.1rem',
    right: '14px',
    cursor: 'pointer',
  },
  formInput: {
    width: '100%',
    padding: '9px 14px',
    paddingLeft: '42px',
    border: '1px solid #CCCCCC',
    borderRadius: '8px',
    fontSize: '1.1rem',
    color: '#333333',
    backgroundColor: '#FFFFFF',
    outline: 'none',
  },
  formInputHasRightIcon: {
    paddingRight: '42px',
  },
  btnSubmit: {
    width: '100%',
    backgroundColor: '#590623',
    color: '#ffffff',
    border: 'none',
    padding: '10px',
    borderRadius: '10px',
    fontSize: '1.25rem',
    fontWeight: 600,
    cursor: 'pointer',
    marginTop: '15px',
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