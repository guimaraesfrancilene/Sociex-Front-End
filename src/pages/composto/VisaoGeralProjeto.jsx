import "./VisaoGeralProjetos.css";
import {
  FaSearch,
  FaCamera,
  FaCheckCircle,
  FaTimesCircle
} from "react-icons/fa";

export default function VisaoProjetos() {
  const status = ["Pendente", "Em Análise", "Aprovado", "Recusado", "Finalizado", "Cancelado"];

  const projetos = [
    { nome: "Gestão de Rebanho", categoria: "Agropecuária" },
    { nome: "Fluxo de Pacientes", categoria: "Saúde" },
    { nome: "Museu Virtual", categoria: "Turismo & Cultura" },
    { nome: "Culturafest", categoria: "Turismo & Cultura" },
    { nome: "Med Connect", categoria: "Saúde" },
    { nome: "Educa App", categoria: "Educação" },
    { nome: "Pecuária+", categoria: "Agropecuária" },
    { nome: "Smart Study", categoria: "Educação" },
  ];

  return (
    <div className="pagina">

      <header className="topo">
        <div className="titulo">
          <h1>Visão Geral de Projetos</h1>
          <p>(10 pendentes)</p>
        </div>
        <nav>
          <a href="/">Início</a>
          <a href="/">Sobre nós</a>
        </nav>
      </header>

      <div className="barra-filtros">
        <div className="pesquisa">
          <FaSearch />
          <input type="text" placeholder="BUSCAR por nome." />
          <FaCamera />
        </div>

        <select>
          <option>CATEGORIA</option>
        </select>

        <button className="ativo">Todos</button>
        <button>Aceitos</button>
        <button>Recusados</button>
      </div>

      <h3 className="titulo-status">STATUS</h3>
      
      <div className="status-container">
        <div className="status-lista">
          {status.map((s, i) => (
            <span key={i} className="tag-status">{s}</span>
          ))}
        </div>
      </div>

      <div className="cards">
        {projetos.map((projeto, index) => (
          <div className="card" key={index}>
            <h2>{projeto.nome}</h2>
            <span className="categoria">{projeto.categoria}</span>
            <p className="data">25Nov/2025</p>
            <div className="acoes">
              <button className="visualizar">VISUALIZAR</button>
              <FaCheckCircle className="ok" />
              <FaTimesCircle className="erro" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}import "./VisaoProjetos.css";
import {
  FaSearch,
  FaCamera,
  FaCheckCircle,
  FaTimesCircle
} from "react-icons/fa";

export default function VisaoProjetos() {
  const status = ["Pendente", "Em Análise", "Aprovado", "Recusado", "Finalizado", "Cancelado"];

  const projetos = [
    { nome: "Gestão de Rebanho", categoria: "Agropecuária" },
    { nome: "Fluxo de Pacientes", categoria: "Saúde" },
    { nome: "Museu Virtual", categoria: "Turismo & Cultura" },
    { nome: "Culturafest", categoria: "Turismo & Cultura" },
    { nome: "Med Connect", categoria: "Saúde" },
    { nome: "Educa App", categoria: "Educação" },
    { nome: "Pecuária+", categoria: "Agropecuária" },
    { nome: "Smart Study", categoria: "Educação" },
  ];

  return (
    <div className="pagina">

      <header className="topo">
        <div className="titulo">
          <h1>Visão Geral de Projetos</h1>
          <p>(10 pendentes)</p>
        </div>
        <nav>
          <a href="/">Início</a>
          <a href="/">Sobre nós</a>
        </nav>
      </header>

      <div className="barra-filtros">
        <div className="pesquisa">
          <FaSearch />
          <input type="text" placeholder="BUSCAR por nome." />
          <FaCamera />
        </div>

        <select>
          <option>CATEGORIA</option>
        </select>

        <button className="ativo">Todos</button>
        <button>Aceitos</button>
        <button>Recusados</button>
      </div>

      <h3 className="titulo-status">STATUS</h3>
      
      <div className="status-container">
        <div className="status-lista">
          {status.map((s, i) => (
            <span key={i} className="tag-status">{s}</span>
          ))}
        </div>
      </div>

      <div className="cards">
        {projetos.map((projeto, index) => (
          <div className="card" key={index}>
            <h2>{projeto.nome}</h2>
            <span className="categoria">{projeto.categoria}</span>
            <p className="data">25Nov/2025</p>
            <div className="acoes">
              <button className="visualizar">VISUALIZAR</button>
              <FaCheckCircle className="ok" />
              <FaTimesCircle className="erro" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}