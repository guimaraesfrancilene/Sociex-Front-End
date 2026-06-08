import { useNavigate } from 'react-router-dom'
import './Categoria.css'
import imgTurismo from '../../../assets/turismo.png'
import imgMenu from '../../../assets/menulateral.png'
import { FiInfo} from 'react-icons/fi'

const projetos = [
  { id: 1, nome: 'App TurismoBR', submissao: '27/JAN/23', atualizacao: '23/ABR/23' },
  
  { id: 2, nome: 'MuseuVirtual', submissao: '20/ABR/23', atualizacao: '12/JUL/23' },
  { id: 3, nome: 'TurismoSustentável', submissao: '25/DEZ/23', atualizacao: '25/MAR/24' },
  { id: 4, nome: 'CulturaFest', submissao: '01/FEV/23', atualizacao: '15/MAI/23' },
  { id: 5, nome: 'Turismo+Jovem', submissao: '20/ABR/25', atualizacao: '20/JUL/23' },
]

function CategoriaTurismo() {
  const navigate = useNavigate()

  return (
    <div className="categoria-container">


      {/* Navbar */}
      <header className="navbar">
        <div className="logo-topo">
          <img src={imgMenu} alt="Menu" style={{ height: '40px' }} />
        </div>
        <nav className="nav-links">
          <span onClick={() => navigate('/universitario/dashboard')}>Início</span>
          <a href="#">Sobre nós</a>
        </nav>
      </header>

      {/* Cabeçalho da categoria */}
      <section className="categoria-header">
        <div className="categoria-info">
          <img src={imgTurismo} alt="Turismo" style={{ height: '150px' }} />
          <div>
            <h2>CULTURA E TURISMO</h2>
            <p>Nessa categoria os projetos podem ser muito diversificados, focando na valorização do patrimônio local, no desenvolvimento sustentável das comunidades e na promoção de experiências autênticas.</p>
          </div>
        </div>
        <button className="btn-adicionar">+ Adicionar projeto nessa categoria...</button>
      </section>

      {/* Cards de estatísticas */}
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

      {/* Tabela de projetos */}
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
                <td>
                  <FiInfo size={22} color="#6B0F2B" style={{ cursor: 'pointer' }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

    </div>
  )
}

export default CategoriaTurismo