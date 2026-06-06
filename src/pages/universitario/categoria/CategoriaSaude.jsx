import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Categoria.css'
import imgSaude from '../../../assets/saude.png'
import imgMenu from '../../../assets/menulateral.png'
import { FiInfo, FiChevronLeft, FiUser, FiFileText, FiLogOut, FiEdit } from 'react-icons/fi'

const projetos = [
  { id: 1, nome: 'Projeto Saúde 1', submissao: '27/JAN/23', atualizacao: '23/ABR/23' },
  { id: 2, nome: 'Projeto Saúde 2', submissao: '20/ABR/23', atualizacao: '12/JUL/23' },
]

function CategoriaSaude() {
  const navigate = useNavigate()
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <div className="categoria-container">
      {menuAberto && <div className="menu-overlay" onClick={() => setMenuAberto(false)} />}
      <div className={`menu-lateral ${menuAberto ? 'aberto' : ''}`}>
        <button className="menu-fechar" onClick={() => setMenuAberto(false)}><FiChevronLeft /></button>
        <div className="menu-perfil">
          <div className="menu-avatar"><FiUser /></div>
          <h3>Nome do Usuário</h3>
          <p>Estudante</p>
        </div>
        <div className="menu-divider" />
        <ul className="menu-itens">
          <li onClick={() => navigate('/universitario/projetos')}><FiFileText /> Meus Projetos</li>
          <li onClick={() => navigate('/')}><FiLogOut /> Desconectar</li>
          <li onClick={() => navigate('/universitario/perfil')}><FiEdit /> Editar Perfil</li>
        </ul>
      </div>

      <header className="navbar">
        <div className="logo-topo" onClick={() => setMenuAberto(true)} style={{ cursor: 'pointer' }}>
          <img src={imgMenu} alt="Menu" style={{ height: '40px' }} />
        </div>
        <nav className="nav-links">
          <span onClick={() => navigate('/universitario/dashboard')}>Início</span>
          <a href="#">Sobre nós</a>
        </nav>
      </header>

      <section className="categoria-header">
        <div className="categoria-info">
          <img src={imgSaude} alt="Saúde" style={{ height: '150px' }} />
          <div>
            <h2>SAÚDE</h2>
            <p>Projetos voltados para a melhoria da saúde pública, acesso a serviços médicos e promoção do bem-estar das comunidades.</p>
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

export default CategoriaSaude