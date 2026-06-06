import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './DashboardComposto.css'
import imgMenu from '../../assets/menulateral.png'
import imgLogo from '../../assets/logo.png'
import imgTurismo from '../../assets/turismo.png'
import imgEducacao from '../../assets/educacao.png'
import imgSaude from '../../assets/saude.png'
import imgAgropecuaria from '../../assets/agropecuaria.png'
import { 
  FiSearch, 
  FiUser, 
  FiFileText, 
  FiAward, 
  FiMessageSquare, 
  FiLogOut, 
  FiEdit, 
  FiSettings, 
  FiChevronLeft 
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
  { icone: imgTurismo, nome: 'Turismo e Cultura' },
  { icone: imgEducacao, nome: 'Educação' },
  { icone: imgSaude, nome: 'Saúde' },
  { icone: imgAgropecuaria, nome: 'Agropecuária' },
]

function DashboardComposto() {
  const [busca, setBusca] = useState('')
  const [menuAberto, setMenuAberto] = useState(false)
  const navigate = useNavigate()

  const projetosFiltrados = projetos.filter(p =>
    p.titulo.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <main className="main-container">

      {/* Menu Lateral */}
      {menuAberto && (
        <div className="menu-overlay" onClick={() => setMenuAberto(false)} />
      )}

      <div className={`menu-lateral ${menuAberto ? 'aberto' : ''}`}>
        <button className="menu-fechar" onClick={() => setMenuAberto(false)}><FiChevronLeft /></button>
        <div className="menu-perfil">
          <div className="menu-avatar"><FiUser /></div>
          <h3>Nome do Usuário</h3>
          <p>Empresario</p>
        </div>
        <div className="menu-divider" />
        <ul className="menu-itens">
          <li onClick={() => navigate('/composto/projetos')}><FiFileText /> Meus Projetos</li>
          <li onClick={() => navigate('/composto/certificados')}><FiAward /> Meus Certificados</li>
          <li onClick={() => navigate('/chat')}><FiMessageSquare /> Chat</li>
          <li onClick={() => navigate('/')}><FiLogOut /> Desconectar</li>
          <li onClick={() => navigate('/composto/perfil')}><FiEdit /> Editar Perfil</li>
        </ul>
      </div>

      {/* Navbar */}
      <header className="navbar">
        <div className="logo-topo" onClick={() => setMenuAberto(true)} style={{ cursor: 'pointer' }}>
          <img src={imgMenu} alt="Menu" style={{ height: '40px' }} />
        </div>
        <nav className="nav-links">
          <a href="DashboardComposto.jsx" className="active">Início</a>
          <a href="sobre.html">Sobre nós</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero-section">
        <div className="hero-images-container">
          <img src={imgLogo} alt="Logo Sociex" style={{ height: '90px' }} />
        </div>
        <h1>SOCIEX</h1>
        <p >TRANSFORME SEU PROBLEMA EM OPORTUNIDADE!</p>
        <div className="search-bar">
          <span><FiSearch /></span>
          <input
            type="text"
            placeholder="Buscar Projetos"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
      </section>

      {/* Categorias */}
      <section className="categories-section">
        <h2>CATEGORIAS :</h2>
        <div className="categories-grid">
          {categorias.map((cat) => (
            <div key={cat.nome} className="category-item">
              <img src={cat.icone} alt={cat.nome} style={{ height: '100px' }} />
              <span>{cat.nome}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projetos */}
      <section className="projects-box-container">
        <div className="projects-container-inner">
          <div className="projects-header">
            <h2>PROJETOS EM ANDAMENTO:</h2>
            <button className="btn-ver-todos"><FiSettings /> VER TODOS OS PROJETOS</button>
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

export default DashboardComposto;