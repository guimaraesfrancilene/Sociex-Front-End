import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import './MeusProjetos.css'

const projetosEstudante = [
  {
    id: 1,
    titulo: 'Sistema de Controle de Estoque',
    empresa: 'Mercado Boa Vista',
    categoria: 'Tecnologia',
    status: 'Em desenvolvimento',
    dataAceite: '12/05/2026',
    prazo: '30/07/2026',
  },
  {
    id: 2,
    titulo: 'Aplicativo de Entrega Local',
    empresa: 'Entrega Rápida ME',
    categoria: 'Tecnologia',
    status: 'Concluído',
    dataAceite: '01/04/2026',
    prazo: '01/06/2026',
  },
  {
    id: 3,
    titulo: 'Plataforma de E-learning',
    empresa: 'Instituto Educar',
    categoria: 'Educação',
    status: 'Em análise',
    dataAceite: '20/04/2026',
    prazo: '20/08/2026',
  },
]

const statusClasses = {
  'Em desenvolvimento': 'mp-status-dev',
  'Concluído': 'mp-status-concluido',
  'Em análise': 'mp-status-analise',
}

export default function MeusProjetos() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [busca, setBusca] = useState('')
  const [filtroStatus, setFiltroStatus] = useState('Todos')
  const navigate = useNavigate()

  const projetosFiltrados = projetosEstudante.filter((p) => {
    const buscaOk = p.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      p.empresa.toLowerCase().includes(busca.toLowerCase())
    const statusOk = filtroStatus === 'Todos' || p.status === filtroStatus
    return buscaOk && statusOk
  })

  return (
    <div className="mp-page">
      <Sidebar
        menuAberto={menuAberto}
        setMenuAberto={setMenuAberto}
        nomeUsuario="Nome do Estudante"
        tipoUsuario="Estudante"
      />

      {/* HEADER */}
      <header className="mp-header">
        <div className="mp-header-left">
          <button className="mp-logo-btn" onClick={() => setMenuAberto(true)} aria-label="Abrir menu">
            <img src="/src/assets/menulateral.png" alt="Menu" style={{ width: '36px', height: '36px', objectFit: 'contain' }} />
          </button>
          <div>
            <h1 className="mp-titulo">Meus Projetos</h1>
            <span className="mp-subtitulo">
              {projetosFiltrados.length} projeto{projetosFiltrados.length !== 1 ? 's' : ''} encontrado{projetosFiltrados.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
        <nav className="mp-nav">
          <span className="mp-nav-link" onClick={() => navigate('/universitario/dashboard')}>Início</span>
          <span className="mp-nav-link" onClick={() => navigate('/sobre')}>Sobre nós</span>
        </nav>
      </header>

      {/* FILTROS */}
      <section className="mp-filtros">
        <div className="mp-search-box">
          <span className="mp-search-icon">🔍</span>
          <input
            type="text"
            placeholder="Buscar por projeto ou empresa..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="mp-search-input"
          />
        </div>

        <div className="mp-status-btns">
          {['Todos', 'Em análise', 'Em desenvolvimento', 'Concluído'].map((s) => (
            <button
              key={s}
              className={`mp-btn-status ${filtroStatus === s ? 'mp-btn-status--ativo' : 'mp-btn-status--outline'}`}
              onClick={() => setFiltroStatus(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </section>

      <span className="mp-secao-label">MEUS PROJETOS</span>

      {/* GRID */}
      <main className="mp-grid">
        {projetosFiltrados.length === 0 ? (
          <p className="mp-vazio">Nenhum projeto encontrado.</p>
        ) : (
          projetosFiltrados.map((projeto) => (
            <div key={projeto.id} className="mp-card">
              <div className="mp-card-top">
                <h3 className="mp-card-titulo">{projeto.titulo}</h3>
                <span className={`mp-status-badge ${statusClasses[projeto.status]}`}>
                  {projeto.status}
                </span>
              </div>
              <span className="mp-card-tag">{projeto.categoria}</span>
              <div className="mp-card-info">
                <p className="mp-card-empresa">{projeto.empresa}</p>
                <p className="mp-card-data">Aceito em: {projeto.dataAceite}</p>
                <p className="mp-card-data">Prazo: {projeto.prazo}</p>
              </div>
              <div className="mp-card-footer">
                <button className="mp-btn-visualizar" onClick={() => navigate('/visualizarprojeto')}>
                  VISUALIZAR
                </button>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  )
}