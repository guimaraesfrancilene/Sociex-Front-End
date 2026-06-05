import { useNavigate } from 'react-router-dom'
import logoFoto from "../assets/logo.png";
import './Home.css'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home-container">

      <div className="home-left">
        <div className="home-logo">
          <img src={logoFoto}  width="350" alt="Logo SOCIEX" />
       </div>
        <h1 className="home-titulo">SOCIEX</h1>
        <p className="home-subtitulo">
          Faça do seu problema<br />uma oportunidade!
        </p>
      </div>

      <div className="home-right">
        <div className="home-card">
          <h2>Escolha um perfil</h2>
          <p>Quem Eu Sou?</p>

          {[
            { label: 'Membro da Universidade', path: '/login/universitario' },
            { label: 'Empresário', path: '/login/empresa' },
            { label: 'Sociedade Civil', path: '/login/sociedade' },
          ].map((item) => (
            <button
              key={item.path}
              className="home-botao"
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Home