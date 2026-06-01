import googleIcon from "../assets/icons/google.png";
import logoFoto from "../assets/images/logo.png";

function LoginSociedade() {
  return (
    <section className="layout-duplo">
      <div className="lado-esquerdo">
        <img src={logoFoto} width="350" alt="Logo SOCIEX" />

        <h2 className="titulo">SOCIEX</h2>

        <p className="frase-titulo">Faça do seu problema uma oportunidade.</p>
      </div>

      <div className="lado-direito">
        <div className="card">
          <h2 className="titulo-login">Preencha os campos abaixo para entrar</h2>


          {/* EMAIL */}
          <div className="campo-input">
            <label>E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
            />
          </div>

          {/* SENHA */}
          <div className="campo-input">
            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
            />
          </div>

          {/* BOTÃO */}
          <button className="botao-entrar">
            ENTRAR
          </button>

          {/* CADASTRO */}
          <div className="opcoes-login">
            <p>
              Não tem conta?{" "}
              <a href="#" className="link-cadastro">
                Cadastre-se
              </a>
            </p>
          </div>

          {/* GOOGLE LOGIN */}
          <button className="botao-google">
            <img src={googleIcon} width="15" alt="Google" />
            Entrar com Google
          </button>
        </div>
      </div>
    </section>
  );
}

export default LoginSociedade;