function LoginUniversidade() {
  return (
    <section className="layout-duplo">
      <div className="lado-esquerdo">
        <img src="/logo.png" width="350" alt="Logo SOCIEX" />

        <h2 className="titulo">
          SOCIEX
        </h2>

        <p className="frase-titulo">Faça do seu problema uma oportunidade!</p>
      </div>

      <div className="lado-direito">
        <div className="card">

          <h2 className="titulo-login">
            Preencha os campos abaixo para entrar
          </h2>

          <label>E-mail Institucional</label>

          <input
            type="email"
            placeholder="Digite seu e-mail"
          />

          <label>Senha</label>

          <input
            type="password"
            placeholder="Digite sua senha"
          />

          <button>
            ENTRAR
          </button>
          <div className="opcoes-login">
          <p>
            Não tem uma conta? <a href="#">Cadastre-se</a>
          </p>

          
           {/* GOOGLE LOGIN (NO FINAL) */}
          <button className="botao-google">
            <img src="/google.png" width="15" alt="Google" />
            Entrar com Google
          </button>
          </div>
        </div>
      </div>
    </section>


  );
}

export default LoginUniversidade;

