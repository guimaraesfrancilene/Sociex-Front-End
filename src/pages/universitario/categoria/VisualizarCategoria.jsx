import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FiInfo } from 'react-icons/fi'
import Sidebar from '../../../components/Sidebar'
import imgMenu from '../../../assets/menulateral.png'
import './Categoria.css' 

// Importação das 4 imagens das categorias
import imgTurismo from '../../../assets/turismo.png'
import imgAgropecuaria from '../../../assets/agropecuaria.png'
import imgSaude from '../../../assets/saude.png'
import imgEducacao from '../../../assets/educacao.png'

// Banco de dados centralizado contendo as informações das 4 categorias
const bancoCategorias = {
  turismo: {
    titulo: "CULTURA E TURISMO",
    imagem: imgTurismo,
    descricao: "Nessa categoria os projetos podem ser muito diversificados, focando na valorização do patrimônio local, no desenvolvimento sustentável das comunidades e na promoção de experiências autênticas.",
    projetos: [
      { id: 1, nome: 'App TurismoBR', submissao: '27/JAN/23', atualizacao: '23/ABR/23' },
      { id: 2, nome: 'MuseuVirtual', submissao: '20/ABR/23', atualizacao: '12/JUL/23' },
      { id: 3, nome: 'TurismoSustentável', submissao: '25/DEZ/23', atualizacao: '25/MAR/24' },
      { id: 4, nome: 'CulturaFest', submissao: '01/FEV/23', atualizacao: '15/MAI/23' },
      { id: 5, nome: 'Turismo+Jovem', submissao: '20/ABR/25', atualizacao: '20/JUL/23' },
    ]
  },
  agropecuaria: {
    titulo: "AGROPECUÁRIA",
    imagem: imgAgropecuaria,
    descricao: "Projetos voltados para o desenvolvimento do setor agropecuário, agricultura sustentável e inovação no campo.",
    projetos: [
      { id: 1, nome: 'AgroApp', submissao: '27/JAN/23', atualizacao: '23/ABR/23' },
      { id: 2, nome: 'Pecuária+', submissao: '20/ABR/23', atualizacao: '12/JUL/23' },
      { id: 3, nome: 'Tecnologia Agrícola', submissao: '25/DEZ/23', atualizacao: '25/MAR/24' },
      { id: 4, nome: 'AgroInova', submissao: '01/FEV/23', atualizacao: '15/MAI/23' },
      { id: 5, nome: 'ProduTec', submissao: '20/ABR/25', atualizacao: '20/JUL/23' },
    ]
  },
  saude: {
    titulo: "SAÚDE",
    imagem: imgSaude,
    descricao: "Projetos voltados para a melhoria da saúde pública, acesso a serviços médicos e promoção do bem-estar das comunidades.",
    projetos: [
      { id: 1, nome: 'Saúde+', submissao: '27/JAN/23', atualizacao: '23/ABR/23' },
      { id: 2, nome: 'Saúde em Foco', submissao: '20/ABR/23', atualizacao: '12/JUL/23' },
      { id: 3, nome: 'MedConnect', submissao: '25/DEZ/23', atualizacao: '25/MAR/24' },
      { id: 4, nome: 'Saúde Digital', submissao: '01/FEV/23', atualizacao: '15/MAI/23' },
      { id: 5, nome: 'DiskSaúde', submissao: '20/ABR/25', atualizacao: '20/JUL/23' },
    ]
  },
  educacao: {
    titulo: "EDUCAÇÃO",
    imagem: imgEducacao,
    descricao: "Projetos voltados para o desenvolvimento educacional, inclusão digital e acesso ao conhecimento para todas as faixas etárias.",
    projetos: [
      { id: 1, nome: 'EducaApp', submissao: '18/JAN/23', atualizacao: '23/ABR/23' },
      { id: 2, nome: 'EstudeBem', submissao: '15/ABR/23', atualizacao: '30/OUT/23' },
      { id: 3, nome: 'SmartStudy', submissao: '12/ABR/23', atualizacao: '25/JUL/23' },
      { id: 4, nome: 'CursoTop', submissao: '20/JUL/23', atualizacao: '12/OUT/23' },
      { id: 5, nome: 'EducaTech', submissao: '20/DEZ/23', atualizacao: '30/MAR/23' },
    ]
  }
}

function VisualizarCategoria({ tipoUsuario = 'Estudante' }) {
  const navigate = useNavigate()
  const { idCategoria } = useParams() 
  const [menuAberto, setMenuAberto] = useState(false)

  // Retorna os dados correspondentes ou adota turismo como fallback
  const dadosDaCategoria = bancoCategorias[idCategoria] || bancoCategorias.turismo

  // Redirecionamento dinâmico do botão início da Navbar
  const obterRotaInicio = () => {
    if (tipoUsuario === 'Sociedade') return '/sociedade/dashboard'
    if (tipoUsuario === 'Empresa') return '/empresa/dashboard'
    return '/universitario/dashboard'
  }

  return (
    <>
      {/* Container isolado com Z-Index máximo para a Sidebar não sumir sob o fundo bege */}
      <div style={{ position: 'fixed', zIndex: 999999 }}>
        <Sidebar 
          menuAberto={menuAberto} 
          setMenuAberto={setMenuAberto} 
          nomeUsuario="Nome Usuário" 
          tipoUsuario={tipoUsuario} 
        />
      </div>

      <div className="categoria-container">
        
        {/* Navbar alinhada com as classes exatas do seu CSS */}
        <header className="categoria-navbar" style={{ position: 'relative', zIndex: 9999 }}>
          <div 
            className="categoria-logo" 
            onClick={(e) => {
              e.stopPropagation();
              setMenuAberto(true);
            }} 
            style={{ cursor: 'pointer', display: 'inline-block', position: 'relative', zIndex: 10000 }}
          >
            <img src={imgMenu} alt="Menu" style={{ height: '40px', pointerEvents: 'none' }} />
          </div>
          <nav className="nav-links">
            <span onClick={() => navigate(obterRotaInicio())} style={{ cursor: 'pointer' }}>Início</span>
            <a href="#">Sobre nós</a>
          </nav>
        </header>

        {/* Cabeçalho Adaptável */}
        <section className="categoria-header">
          <div className="categoria-info">
            <img src={dadosDaCategoria.imagem} alt={dadosDaCategoria.titulo} style={{ height: '150px' }} />
            <div>
              <h2>{dadosDaCategoria.titulo}</h2>
              <p>{dadosDaCategoria.descricao}</p>
            </div>
          </div>
          
          {/* Renderização Condicional do Botão de Cadastro */}
          
            <button className="btn-adicionar" onClick={() => navigate('/composto/adicionarproblema')}>
              + Adicionar projeto nessa categoria...
            </button>
        </section>

        {/* Cards de estatísticas dinâmicos */}
        <section className="categoria-stats">
          <div className="stat-card">
            <span className="stat-numero">{dadosDaCategoria.projetos.length}</span>
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

        {/* Tabela de Projetos */}
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
              {dadosDaCategoria.projetos.map((projeto) => (
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
    </>
  )
}

export default VisualizarCategoria