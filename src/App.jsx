import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LoginUniversitario from './pages/login/LoginUniversitario'
import LoginEmpresa from './pages/login/LoginEmpresa'
import LoginSociedade from './pages/login/LoginSociedade'
import CadastroUniversitario from './pages/cadastro/CadastroUniversitario'
import CadastroEmpresa from './pages/cadastro/CadastroEmpresa'
import CadastroSociedade from './pages/cadastro/CadastroSociedade'
import Dashboard from './pages/universitario/Dashboard'
import DashboardEmpresa from './pages/composto/DashboardEmpresa'
import AdicionarProblema from './pages/composto/AdicionarProblema';
import VisualizarProjeto from './pages/composto/VisualizarProjeto';
import VisaoGeralProjeto from './pages/composto/VisaoGeralProjeto';
import DashboardSociedade from './pages/composto/DashboardSociedade';
import LandingPage from './pages/landing-page'
import EditarPerfil from './pages/EditarPerfil'
import MeusProjetos from './pages/composto/MeusProjetos';
import VisualizarCategoria from './pages/universitario/categoria/VisualizarCategoria';
<<<<<<< HEAD
=======
import PublicLayout from './components/PublicLayout'
>>>>>>> 39dd0592fe506c868c13844bc9edecfa3fd2cb7f




function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/visaogeralprojeto" element={<VisaoGeralProjeto />} />
        <Route path="/visualizarprojeto" element={<VisualizarProjeto />} />
        <Route path="/universitario/dashboard" element={<Dashboard />} />
        <Route path="/composto/dashboardempresa" element={<DashboardEmpresa />} />
        <Route path="/composto/dashboardsociedade" element={<DashboardSociedade />} />
        <Route path="/universitario/perfil" element={<EditarPerfil tipoUsuario="Estudante" />} />
        <Route path="/sociedade/perfil" element={<EditarPerfil tipoUsuario="Sociedade" />} />
        <Route path="/empresa/perfil" element={<EditarPerfil tipoUsuario="Empresa" />} />
        <Route path="/composto/meusprojetos" element={<MeusProjetos />} />
        <Route path="/composto/adicionarprojeto" element={<AdicionarProblema />} />

      </Route>

      <Route path="/home" element={<Home />} />
      <Route path="/login/universitario" element={<LoginUniversitario />} />
      <Route path="/login/empresa" element={<LoginEmpresa />} />
      <Route path="/login/sociedade" element={<LoginSociedade />} />
      <Route path="/cadastro/universitario" element={<CadastroUniversitario />} /> 
      <Route path="/cadastro/empresa" element={<CadastroEmpresa />} /> 
      <Route path="/cadastro/sociedade" element={<CadastroSociedade />} /> 
      <Route path="/universitario/dashboard" element={<Dashboard />} />
      <Route path="/composto/dashboardempresa" element={<DashboardEmpresa />} />
      <Route path="/composto/dashboardsociedade" element={<DashboardSociedade/>} />
      <Route path="/composto/adicionarprojeto" element={<AdicionarProblema />} />
      <Route path="/visaogeralprojeto" element={<VisaoGeralProjeto />} />
      <Route path="/visualizarprojeto" element={<VisualizarProjeto />} />
      <Route path="/universitario/perfil" element={<EditarPerfil tipoUsuario="Estudante" />} />
      <Route path="/sociedade/perfil" element={<EditarPerfil tipoUsuario="Sociedade" />} />
      <Route path="/empresa/perfil" element={<EditarPerfil tipoUsuario="Empresa" />} />
      <Route path="/composto/MeusProjetos" element={<MeusProjetos />} />
      <Route path="/universitario/categoria/:idCategoria" element={<VisualizarCategoria tipoUsuario="Estudante" />} />
      <Route path="/sociedade/categoria/:idCategoria" element={<VisualizarCategoria tipoUsuario="Sociedade" />} />
      <Route path="/empresa/categoria/:idCategoria" element={<VisualizarCategoria tipoUsuario="Empresa" />} />
    </Routes>
  )
}

export default App