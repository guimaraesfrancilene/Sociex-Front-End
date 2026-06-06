import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LoginUniversitario from './pages/login/LoginUniversitario'
import LoginEmpresa from './pages/login/LoginEmpresa'
import LoginSociedade from './pages/login/LoginSociedade'
import CadastroUniversitario from './pages/cadastro/CadastroUniversitario'
import CadastroEmpresa from './pages/cadastro/CadastroEmpresa'
import CadastroSociedade from './pages/cadastro/CadastroSociedade'
import Dashboard from './pages/universitario/Dashboard'
import DashboardComposto from './pages/composto/DashboardComposto'
import CategoriaTurismo from './pages/universitario/categoria/CategoriaTurismo'
import CategoriaEducacao from './pages/universitario/categoria/CategoriaEducacao'
import CategoriaSaude from './pages/universitario/categoria/CategoriaSaude'
import CategoriaAgropecuaria from './pages/universitario/categoria/CategoriaAgropecuaria'
/*import Footer from './components/Footer'*/


function App() {
  return (
   /* <> */
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login/universitario" element={<LoginUniversitario />} />
      <Route path="/login/empresa" element={<LoginEmpresa />} />
      <Route path="/login/sociedade" element={<LoginSociedade />} />
      <Route path="/cadastro/universitario" element={<CadastroUniversitario />} /> 
      <Route path="/cadastro/empresa" element={<CadastroEmpresa />} /> 
      <Route path="/cadastro/sociedade" element={<CadastroSociedade />} /> 
      <Route path="/universitario/dashboard" element={<Dashboard />} />
      <Route path="/composto/dashboard" element={<DashboardComposto />} />
      <Route path="/universitario/categoria/turismo" element={<CategoriaTurismo />} />
      <Route path="/universitario/categoria/educacao" element={<CategoriaEducacao />} />
      <Route path="/universitario/categoria/saude" element={<CategoriaSaude />} />
      <Route path="/universitario/categoria/agropecuaria" element={<CategoriaAgropecuaria />} />
    </Routes>
    
   /* <Footer />
    </>*/
  )
}

export default App