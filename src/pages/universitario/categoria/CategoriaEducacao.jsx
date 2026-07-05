import { useNavigate } from 'react-router-dom'
import './Categoria.css'
import imgEducacao from '../../../assets/educacao.png'
import imgMenu from '../../../assets/menulateral.png'
import { FiInfo } from 'react-icons/fi'

const projetos = [
  { id: 1, nome: 'EducaApp', submissao: '18/JAN/23', atualizacao: '23/ABR/23' },
  { id: 2, nome: 'EstudeBem', submissao: '15/ABR/23', atualizacao: '30/OUT/23' },
  { id: 3, nome: 'SmartStudy', submissao: '12/ABR/23', atualizacao: '25/JUL/23' },
  { id: 4, nome: 'CursoTop', submissao: '20/JUL/23', atualizacao: '12/OUT/23' },
  { id: 5, nome: 'EducaTech', submissao: '20/DEZ/23', atualizacao: '30/MAR/23' },
]

function CategoriaEducacao() {
  const navigate = useNavigate()
  

  return (
    <div className="categoria-container">
      <header className="navbar">
        <div className="logo-topo">
          <img src={imgMenu} alt="Menu" style={{ height: '40px' }} />
        </div>
        <nav className="nav-links">
          <span onClick={() => navigate('/universitario/dashboard')}>Início</span>
          <a href="#">Sobre nós</a>
        </nav>
      </header>

      <section className="categoria-header">
        <div className="categoria-info">
          <img src={imgEducacao} alt="Educação" style={{ height: '150px' }} />
          <div>
            <h2>EDUCAÇÃO</h2>
            <p>Projetos voltados para o desenvolvimento educacional, inclusão digital e acesso ao conhecimento para todas as faixas etárias.</p>
          </div>
        </div>
        <button className="btn-adicionar">+ Adicionar projeto nessa categoria...</button>
      </section>

      <section className="categoria-stats">
        <div className="stat-card">
          <span className="stat-numero">4</span>
          <span className="stat-label">Total<br />Submetidos</span>
        </div>
        <div className="stat-card">
          <span className="stat-numero">2</span>
          <span className="stat-label">Em<br />Análise</span>
        </div>
        <div className="stat-card">
          <span className="stat-numero">1</span>
          <span className="stat-label">Em<br />Execução</span>
        </div>
      </section>

      <hr className="categoria-divisor" />

      <section className="categoria-tabela-container">
        <table className="categoria-tabela">
          <thead>
            <tr>
              <th>PROJETOS</th>
              <th>DATA DE SUBMISSÃO</th>
              <th>ÚLTIMA ATUALIZAÇÃO</th>
              <th>DETALHES</th>
            </tr>
          </thead>
          <tbody>
            {projetos.map((projeto) => (
              <tr key={projeto.id}>
                <td>{projeto.nome}</td>
                <td>{projeto.submissao}</td>
                <td>{projeto.atualizacao}</td>
                <td><FiInfo size={22} color="#6B0F2B" style={{ cursor: 'pointer' }} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default CategoriaEducacao