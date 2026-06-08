import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './DashboardEmpresa.css'
import imgMenu from '../../assets/menulateral.png'
import imgLogo from '../../assets/logo1.png'
import imgTurismo from '../../assets/turismo.png'
import imgEducacao from '../../assets/educacao.png'
import imgSaude from '../../assets/saude.png'
import imgAgropecuaria from '../../assets/agropecuaria.png'
import { 
  FiSearch, 
  FiPlus,
  FiSettings, 
} from 'react-icons/fi'

const projetos = [
  { id: 1, icone: imgSaude, titulo: 'Iniciativa de Telemedicina Rural', descricao: 'Projeto para levar consultas médicas online a comunidades isoladas' },
  { id: 2, icone: imgEducacao, titulo: 'Aplicativo de Alfabetização Digital', descricao: 'Cursos gratuitos de inclusão digital para idosos e jovens' },
  { id: 3, icone: imgAgropecuaria, titulo: 'Otimização de Colheita Vertical', descricao: 'Pesquisa e implementação de sistemas de irrigação inteligentes para pequenas propriedades' },
  { id: 4, icone: imgTurismo, titulo: 'Ecoturismo na Amazônia', descricao: 'Desenvolvimento de cotas de turismo sustentável com foco em cultura indígena' },
  { id: 5, icone: imgSaude, titulo: 'Iniciativa de Telemedicina Rural', descricao: 'Projeto para levar consultas médicas online a comunidades isoladas' },
  { id: 6, icone: imgTurismo, titulo: 'Ecoturismo na Amazônia', descricao: 'Desenvolvimento de cotas de turismo sustentável com foco em cultura indígena' },
]

const categorias = [
  { icone: imgTurismo, nome: 'Turismo e Cultura', path: '/universitario/categoria/turismo' },
  { icone: imgEducacao, nome: 'Educação', path: '/universitario/categoria/educacao' },
  { icone: imgSaude, nome: 'Saúde', path: '/universitario/categoria/saude' },
  { icone: imgAgropecuaria, nome: 'Agropecuária', path: '/universitario/categoria/agropecuaria' },
]

function DashboardEmpresa() {
  const [busca, setBusca] = useState('')
  const navigate = useNavigate()

  const projetosFiltrados = projetos.filter(p =>
    p.titulo.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <main className="main-container">
      
      {/* Navbar */}
      <header className="navbar">
        <div className="logo-topo" >
          <img src={imgMenu} alt="Menu" style={{ height: '40px' }} />
        </div>
        <nav className="nav-links">
          <a href="DashboardEmpresa.jsx" className="active">Início</a>
          <a href="sobre.jsx">Sobre nós</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero-section">
          <div className="hero-images-container">
            <img src={imgLogo} alt="Logo Sociex" style={{ height: '150px' }} />
          </div>
          <h1>SOCIEX</h1>
          <p>TRANSFORME SEU PROBLEMA EM OPORTUNIDADE!</p>

          <div className="search-wrapper">
            <div className="search-bar">
              <span><FiSearch /></span>
              <input
                type="text"
                placeholder="Buscar Projetos"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
            </div>
            <button className="btn-adicionar-projeto" onClick={() => navigate('/composto/adicionarprojeto')}>
              <FiPlus /> Adicionar Projeto
            </button>
          </div>

          {busca && (
            <div className="search-resultados">
              {projetosFiltrados.length > 0 ? (
                projetosFiltrados.map((projeto) => (
                  <div key={projeto.id} className="search-resultado-item">
                    <img src={projeto.icone} alt={projeto.titulo} style={{ height: '30px' }} />
                    <span>{projeto.titulo}</span>
                  </div>
                ))
              ) : (
                <p className="search-sem-resultado">Nenhum projeto encontrado</p>
              )}
            </div>
          )}

        </section>

      {/* Categorias */}
      <section className="categories-section">
        <h2>CATEGORIAS :</h2>
        <div className="categories-grid">
          {categorias.map((cat) => (
              <div key={cat.nome} className="category-item" onClick={() => navigate(cat.path)} style={{ cursor: 'pointer' }}>
              <img src={cat.icone} alt={cat.nome} style={{ height: '100px' }} />
              <span>{cat.nome}</span>
            </div> ))}
        </div>
      </section>

      {/* Projetos */}
      <section className="projects-box-container">
        <div className="projects-container-inner">
          <div className="projects-header">
            <h2>PROJETOS EM ANDAMENTO:</h2>
              <span className="btn-ver-todos" onClick={() => navigate('/visaogeralprojeto')}> 
            <FiSettings /> VER TODOS OS PROJETOS </span>
          </div>
          <div className="projects-grid">
            {projetosFiltrados.map((projeto) => (
              <div key={projeto.id} className="project-card">
                <div className="card-icon">
                  <img src={projeto.icone} alt={projeto.titulo} style={{ height: '40px' }} />
                </div>
                <h3>{projeto.titulo}</h3>
                <p>{projeto.descricao}</p>
                <button className="btn-visualizar">VISUALIZAR</button>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}

export default DashboardEmpresa;