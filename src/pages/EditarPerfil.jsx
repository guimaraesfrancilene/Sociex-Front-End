import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiUser, FiSave, FiX } from 'react-icons/fi'
import Sidebar from '../components/Sidebar'
import imgMenu from '../assets/menulateral.png'

function EditarPerfil({ tipoUsuario = 'Estudante', dadosIniciais }) {
  const navigate = useNavigate()
  const [menuAberto, setMenuAberto] = useState(false)

  // Dados padrão ajustados para a Sociedade e outros perfis
  const dadosPadrao = {
    nomeSocial: 'Lucas Alencar',
    email: 'contato@sociex.com',
    telefone: '(11) 99999-9999',
    // Campos de Estudante
    curso: 'Engenharia de Software', 
    matricula: '202610942', 
    periodo: '5º Período',
    // Campos da Sociedade (Líder comunitário, ONG ou Cidadão)
    tipoInstituicao: 'Líder Comunitário', // ONG, Associação, Cidadão
    comunidadeRegiao: 'Bairro Central / Zona Norte',
    // Campos de Empresa
    cnpj: '00.000.000/0001-00',
    ramo: 'Tecnologia',
    // Gerais
    bio: 'Desejo conectar os problemas da nossa comunidade com soluções universitárias.',
    linkedin: '',
    github: ''
  }

  const [perfil, setPerfil] = useState(dadosIniciais || dadosPadrao)

  const handleChange = (e) => {
    const { name, value } = e.target
    setPerfil(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Perfil de ${tipoUsuario} atualizado com sucesso!`)
    navigate(-1)
  }

  return (
    <>
      <Sidebar 
        menuAberto={menuAberto} 
        setMenuAberto={setMenuAberto} 
        nomeUsuario={perfil.nomeSocial} 
        tipoUsuario={tipoUsuario} 
      />

      <main className="main-container">
        
        <header className="navbar">
          <div className="logo-topo" onClick={() => setMenuAberto(true)} style={{ cursor: 'pointer' }}>
            <img src={imgMenu} alt="Menu" style={{ height: '40px' }} />
          </div>
          <nav className="nav-links">
            <span onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>Voltar</span>
          </nav>
        </header>

        <section className="projects-box-container" style={{ marginTop: '30px' }}>
          <div className="projects-container-inner" style={{ padding: '30px' }}>
            
            <div className="projects-header" style={{ marginBottom: '30px', borderBottom: '1px solid #ddd', paddingBottom: '15px' }}>
              <h2>EDITAR PERFIL ({tipoUsuario.toUpperCase()})</h2>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Foto de Perfil */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '10px' }}>
                <div className="menu-avatar" style={{ width: '90px', height: '90px', fontSize: '2.5rem', margin: '0 auto', backgroundColor: '#660022', color: 'white' }}>
                  <FiUser />
                </div>
                <button type="button" className="btn-visualizar" style={{ marginTop: '12px', width: 'auto', padding: '6px 15px', alignSelf: 'center' }}>
                  Alterar Foto
                </button>
              </div>

              {/* Grid de Campos */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Nome Completo / Representante</label>
                  <input type="text" name="nomeSocial" value={perfil.nomeSocial} onChange={handleChange} required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc' }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>E-mail de Contato</label>
                  <input type="email" name="email" value={perfil.email} onChange={handleChange} required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc' }} />
                </div>

                {/* 🎓 CAMPOS EXCLUSIVOS: ESTUDANTE */}
                {tipoUsuario === 'Estudante' && (
                  <>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                      <label style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#777' }}>Matrícula / RA (Bloqueado)</label>
                      <input type="text" value={perfil.matricula} disabled style={{ width: '100%', padding: '12px', borderRadius: '8px', backgroundColor: '#e9ecef', color: '#6c757d', cursor: 'not-allowed', border: '1px solid #ddd' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                      <label style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#777' }}>Curso</label>
                      <input type="text" value={perfil.curso} disabled style={{ width: '100%', padding: '12px', borderRadius: '8px', backgroundColor: '#e9ecef', color: '#6c757d', cursor: 'not-allowed', border: '1px solid #ddd' }} />
                    </div>
                  </>
                )}

                {/* 🏡 CAMPOS EXCLUSIVOS: SOCIEDADE */}
                {tipoUsuario === 'Sociedade' && (
                  <>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                      <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Tipo de Atuação / Vínculo</label>
                      <select name="tipoInstituicao" value={perfil.tipoInstituicao} onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', backgroundColor: '#fff' }}>
                        <option value="Cidadão Autônomo">Cidadão Autônomo</option>
                        <option value="Representante de ONG">Representante de ONG</option>
                        <option value="Associação de Moradores">Associação de Moradores</option>
                        <option value="Coletivo Social">Coletivo Social</option>
                      </select>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                      <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Comunidade / Região Atendida</label>
                      <input type="text" name="comunidadeRegiao" value={perfil.comunidadeRegiao} onChange={handleChange} placeholder="Ex: Zona Sul, Ocupação X, etc." style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc' }} />
                    </div>
                  </>
                )}

                {/* 🏢 CAMPOS EXCLUSIVOS: EMPRESA */}
                {tipoUsuario === 'Empresa' && (
                  <>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                      <label style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#777' }}>CNPJ (Bloqueado)</label>
                      <input type="text" value={perfil.cnpj} disabled style={{ width: '100%', padding: '12px', borderRadius: '8px', backgroundColor: '#e9ecef', color: '#6c757d', cursor: 'not-allowed', border: '1px solid #ddd' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                      <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Ramo de Atuação</label>
                      <input type="text" name="ramo" value={perfil.ramo} onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc' }} />
                    </div>
                  </>
                )}

                {/* Descrição e Redes */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', gridColumn: '1 / span 2' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Sobre você / Descrição da sua causa</label>
                  <textarea name="bio" value={perfil.bio} onChange={handleChange} rows="3" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', resize: 'none' }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Telefone / WhatsApp</label>
                  <input type="text" name="telefone" value={perfil.telefone} onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc' }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Rede Social ou Site (Opcional)</label>
                  <input type="url" name="linkedin" value={perfil.linkedin} onChange={handleChange} placeholder="https://instagram.com/..." style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc' }} />
                </div>

              </div>

              {/* Botões */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px', marginTop: '20px', borderTop: '1px solid #ddd', paddingTop: '20px' }}>
                <button type="button" className="btn-visualizar" style={{ backgroundColor: '#777', color: '#fff' }} onClick={() => navigate(-1)}>
                  <FiX /> Cancelar
                </button>
                <button type="submit" className="btn-visualizar" style={{ backgroundColor: '#660022', color: '#fff' }}>
                  <FiSave /> Salvar Alterações
                </button>
              </div>

            </form>

          </div>
        </section>

      </main>
    </>
  )
}

export default EditarPerfil