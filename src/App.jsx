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
import CategoriaTurismo from './pages/universitario/categoria/CategoriaTurismo'
import CategoriaEducacao from './pages/universitario/categoria/CategoriaEducacao'
import CategoriaSaude from './pages/universitario/categoria/CategoriaSaude'
import CategoriaAgropecuaria from './pages/universitario/categoria/CategoriaAgropecuaria'
import AdicionarProjeto from './pages/composto/AdicionarProjeto'
import VisaoGeralProjeto from './pages/composto/VisaoGeralProjeto';
import DashboardSociedade from './pages/composto/DashboardSociedade';
import LandingPage from './pages/landing-page'




function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} /> 
     { /* <Route path="/" element={<Home />} /> */}
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
      <Route path="/universitario/categoria/turismo" element={<CategoriaTurismo />} />
      <Route path="/universitario/categoria/educacao" element={<CategoriaEducacao />} />
      <Route path="/universitario/categoria/saude" element={<CategoriaSaude />} />
      <Route path="/universitario/categoria/agropecuaria" element={<CategoriaAgropecuaria/>} />
      <Route path="/composto/adicionarprojeto" element={<AdicionarProjeto />} />
      <Route path="/visaogeralprojeto" element={<VisaoGeralProjeto />}
/>
    </Routes>
  )
}

export default App