import React, { useState } from 'react';

export default function CadastroUsuario() {
  // 1. Estado para gerenciar os dados de todos os inputs do formulário
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    cidade: '',
    instituicao: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  });

  // 2. Estados para alternar a visibilidade de cada campo de senha de forma independente
  const [verSenha, setVerSenha] = useState(false);
  const [verConfirmarSenha, setVerConfirmarSenha] = useState(false);

  // 3. Atualiza os dados do formulário dinamicamente
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // 4. Lógica executada ao submeter o formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    console.log('Dados do cadastro enviados:', formData);
    // Aqui você colocaria a chamada fetch/axios para o seu servidor futuramente
  };

  return (
    <div style={styles.container}>
      
      {/* LADO ESQUERDO: Logo, Nome e Frase */}
      <div style={styles.leftSide}>
        <div style={styles.logoContainer}>
          {/* Lembrete: Coloque o arquivo logo.png dentro da pasta 'public' do projeto */}
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
            
            {/* Campo: Nome Completo */}
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Informe nome completo</label>
              <input 
                type="text" 
                name="nomeCompleto"
                value={formData.nomeCompleto}
                onChange={handleChange}
                style={styles.formInput} 
                placeholder="Nome Completo" 
                required 
              />
            </div>

            {/* Campo: Cidade */}
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Informe sua cidade</label>
              <input 
                type="text" 
                name="cidade"
                value={formData.cidade}
                onChange={handleChange}
                style={styles.formInput} 
                placeholder="Cidade" 
                required 
              />
            </div>

            {/* Campo: Instituição */}
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Informe sua Instituição</label>
              <input 
                type="text" 
                name="instituicao"
                value={formData.instituicao}
                onChange={handleChange}
                style={styles.formInput} 
                placeholder="Instituição" 
                required 
              />
            </div>

            {/* Campo: E-mail com Ícone */}
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Informe seu e-mail Institucional</label>
              <div style={styles.inputContainer}>
                <i className="fa-regular fa-envelope" style={styles.leftIcon}></i>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ ...styles.formInput, ...styles.hasIconLeft }} 
                  placeholder="E-mail Institucional" 
                  required 
                />
              </div>
            </div>

            {/* Campo: Senha com Ícones dinâmicos */}
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Informe sua senha</label>
              <div style={styles.inputContainer}>
                <i className="fa-solid fa-lock" style={styles.leftIcon}></i>
                <input 
                  type={verSenha ? "text" : "password"} 
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  style={{ ...styles.formInput, ...styles.hasIconLeft }} 
                  placeholder="Senha" 
                  required 
                />
                <i 
                  className={`fa-regular ${verSenha ? 'fa-eye' : 'fa-eye-slash'}`} 
                  style={styles.rightIcon}
                  onClick={() => setVerSenha(!verSenha)}
                ></i>
              </div>
            </div>

            {/* Campo: Confirmar Senha */}
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Confirme sua senha</label>
              <div style={styles.inputContainer}>
                <i className="fa-solid fa-lock" style={styles.leftIcon}></i>
                <input 
                  type={verConfirmarSenha ? "text" : "password"} 
                  name="confirmarSenha"
                  value={formData.confirmarSenha}
                  onChange={handleChange}
                  style={{ ...styles.formInput, ...styles.hasIconLeft }} 
                  placeholder="Repita a senha" 
                  required 
                />
                <i 
                  className={`fa-regular ${verConfirmarSenha ? 'fa-eye' : 'fa-eye-slash'}`} 
                  style={styles.rightIcon}
                  onClick={() => setVerConfirmarSenha(!verConfirmarSenha)}
                ></i>
              </div>
            </div>

            <button type="submit" style={styles.btnSubmit}>Cadastrar</button>
          </form>
        </div>
      </div>

    </div>
  );
}

// Seus estilos CSS convertidos para objetos JavaScript (CamelCase)
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
    padding: '35px 40px',
    width: '100%',
    maxWidth: '480px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
  },
  formSubtitle: {
    color: '#D27828',
    fontSize: '1.5rem',
    fontWeight: 600,
    textAlign: 'center',
    lineHeight: 1.3,
    marginBottom: '25px',
  },
  formGroup: {
    marginBottom: '16px',
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
    padding: '12px',
    borderRadius: '8px',
    fontSize: '1.2rem',
    fontWeight: 700,
    cursor: 'pointer',
    marginTop: '15px',
  }
};