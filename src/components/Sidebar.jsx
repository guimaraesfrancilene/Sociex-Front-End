import { useNavigate } from 'react-router-dom'
import { FiUser, FiFileText, FiLogOut, FiEdit, FiChevronLeft } from 'react-icons/fi'

export default function Sidebar({ menuAberto, setMenuAberto, nomeUsuario, tipoUsuario }) {
  const navigate = useNavigate()

  const obterRotaPerfil = () => {
    if (tipoUsuario === 'Sociedade') return '/sociedade/perfil'
    if (tipoUsuario === 'Empresa') return '/empresa/perfil'
    return '/universitario/perfil' // Padrão se for estudante
  };

  return (
    <>
      {/* Overlay de fundo forçado com estilo embutido */}
      {menuAberto && (
        <div 
          className="menu-overlay" 
          onClick={() => setMenuAberto(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 998
          }}
        />
      )}

      {/* Estrutura do Menu Lateral forçado com estilo embutido */}
      <div 
        className={`menu-lateral ${menuAberto ? 'aberto' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          marginTop: '0px',
          button: 0,
          left: menuAberto ? '0' : '-350px', // Abre e fecha baseado no estado
          width: '350px',
          height: '100vh', // Ocupa toda a altura da tela obrigatoriamente
          backgroundColor: '#6B0F2B', // Mude para a cor do seu projeto se quiser
          zIndex: 999,
          transition: 'left 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box'
        }}
      >
        <button className="menu-fechar" onClick={() => setMenuAberto(false)}>
          <FiChevronLeft />
        </button>
        
        <div className="menu-perfil">
          <div className="menu-avatar"><FiUser /></div>
          <h3>{nomeUsuario || 'Nome do Usuário'}</h3>
          <p>{tipoUsuario || 'Usuário'}</p>
        </div>
        
        <div className="menu-divider" />
        
        <ul className="menu-itens">
          <li onClick={() => { navigate('/universitario/projetos'); setMenuAberto(false); }}>
            <FiFileText /> Meus Projetos
          </li>
          <li onClick={() => { navigate(obterRotaPerfil()); setMenuAberto(false); }}>
            <FiEdit /> Editar Perfil
          </li>
          <li onClick={() => { navigate('/'); setMenuAberto(false); }}>
            <FiLogOut /> Desconectar
          </li>
        </ul>
      </div>
    </>
  )
}