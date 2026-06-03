import "../styles/style.css";

// Importação das imagens da nova pasta de assets
import menulateralImg from "../assets/images/menulateral.png";
import logo1Img from "../assets/images/logo1.png";
import turismoImg from "../assets/images/turismo.png";
import educacaoImg from "../assets/images/educacao.png";
import saudeImg from "../assets/images/saude.png";
import agropecuariaImg from "../assets/images/agropecuaria.png";

function TelaPrincipal() {
  return (
    <main className="main-container">
      <header className="navbar">
        <div className="logo-topo">
          <img src={menulateralImg} alt="Logo SociEx" />
        </div>
        <nav className="nav-links">
          <span className="active">Início</span>
          <a href="sobre.html">Sobre nós</a>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-images-container">
          <div className="logo-grande">
            <img src={logo1Img} alt="Brasão SociEx" />
          </div>
        </div>

        <h1>SOCIEX</h1>
        <p>TRANSFORME SEU PROBLEMA EM OPORTUNIDADE!</p>

        <div className="search-bar">
          <span>🔍</span>
          <input type="text" placeholder="Buscar Projetos" />
        </div>
      </section>

      <section className="categories-section">
        <h2>CATEGORIAS :</h2>
        <div className="categories-grid">
          <div className="category-item">
            <img src={turismoImg} alt="Turismo e Cultura" />
            <span>Turismo e Cultura</span>
          </div>
          <div className="category-item">
            <img src={educacaoImg} alt="Educação" />
            <span>Educação</span>
          </div>
          <div className="category-item">
            <img src={saudeImg} alt="Saúde" />
            <span>Saúde</span>
          </div>
          <div className="category-item">
            <img src={agropecuariaImg} alt="Agropecuária" />
            <span>Agropecuária</span>
          </div>
        </div>
      </section>

      <section className="projects-box-container">
        <div className="projects-container-inner">
          <div className="projects-header">
            <h2>PROJETOS A SEREM ACEITOS:</h2>
            <button className="btn-ver-todos">
              <span className="btn-icon"></span> VER TODOS OS PROJETOS
            </button>
          </div>

          <div className="projects-grid">
            <div className="project-card">
              <div className="card-icon">
                <img src={saudeImg} alt="Ícone Saúde" />
              </div>
              <h3>Iniciativa de Telemedicina Rural</h3>
              <p>
                Projeto para levar consultas médicas online a comunidades isoladas
              </p>
              <button className="btn-visualizar">VISUALIZAR</button>
            </div>

            <div className="project-card">
              <div className="card-icon">
                <img src={educacaoImg} alt="Ícone Educação" />
              </div>
              <h3>Aplicativo de Alfabetização Digital</h3>
              <p>Cursos gratuitos de inclusão digital para idosos e jovens</p>
              <button className="btn-visualizar">VISUALIZAR</button>
            </div>

            <div className="project-card">
              <div className="card-icon">
                <img src={agropecuariaImg} alt="Ícone Agropecuária" />
              </div>
              <h3>Otimização de Colheita Vertical</h3>
              <p>
                Pesquisa e implementação de sistemas de irrigação inteligentes
                para pequenas propriedades
              </p>
              <button className="btn-visualizar">VISUALIZAR</button>
            </div>

            <div className="project-card">
              <div className="card-icon">
                <img src={turismoImg} alt="Ícone Turismo" />
              </div>
              <h3>Ecoturismo na Amazônia</h3>
              <p>
                Desenvolvimento de cotas de turismo sustentável com foco em
                cultura indígena
              </p>
              <button className="btn-visualizar">VISUALIZAR</button>
            </div>

            <div className="project-card">
              <div className="card-icon">
                <img src={saudeImg} alt="Ícone Saúde" />
              </div>
              <h3>Iniciativa de Telemedicina Rural</h3>
              <p>
                Projeto para levar consultas médicas online a comunidades isoladas
              </p>
              <button className="btn-visualizar">VISUALIZAR</button>
            </div>

            <div className="project-card">
              <div className="card-icon">
                <img src={turismoImg} alt="Ícone Turismo" />
              </div>
              <h3>Ecoturismo na Amazônia</h3>
              <p>
                Desenvolvimento de cotas de turismo sustentável com foco em
                cultura indígena
              </p>
              <button className="btn-visualizar">VISUALIZAR</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TelaPrincipal;