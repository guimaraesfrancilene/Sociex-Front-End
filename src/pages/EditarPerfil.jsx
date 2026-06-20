import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiUser, FiSave, FiX } from 'react-icons/fi'
import Sidebar from '../components/Sidebar'
import imgMenu from '../assets/menulateral.png'

function EditarPerfil({ tipoUsuario = 'Estudante', dadosIniciais }) {
  const navigate = useNavigate()
  const [menuAberto, setMenuAberto] = useState(false)

  // Altera o fundo da tela inteira (body) para o bege #fdf2ce ao entrar na página
  useEffect(() => {
    const corOriginal = document.body.style.backgroundColor
    document.body.style.backgroundColor = '#fdf2ce' 
    document.body.style.background = '#fdf2ce'
    
    return () => {
      document.body.style.backgroundColor = corOriginal
    }
  }, [])

  const dadosPadrao = {
    nomeSocial: 'Lucas Alencar',
    email: 'contato@sociex.com',
    telefone: '(11) 99999-9999',
    instituicao: 'Universidade de São Paulo', 
    cidade: 'São Paulo',                     
    curso: 'Engenharia de Software', 
    matricula: '202610942', 
    periodo: '5º Período',
    tipoInstituicao: 'Líder Comunitário', 
    comunidadeRegiao: 'Bairro Central / Zona Norte',
    cnpj: '00.000.000/0001-00',
    ramo: 'Tecnologia',
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

      {/* Container principal com o fundo bege #fdf2ce */}
      <main style={{ 
        backgroundColor: '#fdf2ce', 
        background: '#fdf2ce', 
        minHeight: '100vh', 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column' 
      }}>
        
        {/* Navbar acompanhando o fundo #fdf2ce */}
        <header className="navbar" style={{ backgroundColor: '#fdf2ce' }}>
          <div className="logo-topo" onClick={() => setMenuAberto(true)} style={{ cursor: 'pointer' }}>
            <img src={imgMenu} alt="Menu" style={{ height: '40px' }} />
          </div>
          <nav className="nav-links">
            <span onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>Voltar</span>
          </nav>
        </header>

        {/* Seção centralizada com fundo #fdf2ce */}
        <section style={{ marginTop: '30px', backgroundColor: '#fdf2ce', width: '100%', paddingBottom: '40px' }}>
          
          {/* Card central um pouco mais largo (maxWidth alterado de 600px para 750px) */}
          <div style={{ 
            padding: '30px', 
            maxWidth: '750px', 
            margin: '0 auto', 
            backgroundColor: '#ffffff', 
            border: '1px solid #e0e0e0', 
            borderRadius: '12px',       
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)' 
          }}>
            
            {/* Título limpo */}
            <div style={{ marginBottom: '30px', borderBottom: '1px solid #ddd', paddingBottom: '15px' }}>
              <h2 style={{ margin: 0, color: '#333' }}>EDITAR PERFIL</h2>
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
                
                {/* Campo de Nome Dinâmico */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
                    {tipoUsuario === 'Empresa' ? 'Nome da Empresa / Representante' : 'Nome Completo / Representante'}
                  </label>
                  <input 
                    type="text" 
                    name="nomeSocial" 
                    value={perfil.nomeSocial} 
                    onChange={handleChange} 
                    required 
                    placeholder={tipoUsuario === 'Empresa' ? 'Ex: Minha Empresa LTDA / João Silva' : 'Ex: Lucas Alencar'}
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', backgroundColor: '#fff' }} 
                  />
                </div>

                {/* Campo de e-mail dinâmico */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
                    {tipoUsuario === 'Estudante' && 'E-mail Institucional'}
                    {tipoUsuario === 'Empresa' && 'E-mail Corporativo'}
                    {tipoUsuario !== 'Estudante' && tipoUsuario !== 'Empresa' && 'E-mail de Contato'}
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    value={perfil.email} 
                    onChange={handleChange} 
                    required 
                    placeholder={
                      tipoUsuario === 'Estudante' ? 'seu.nome@institucional.com' : 
                      tipoUsuario === 'Empresa' ? 'contato@empresa.com' : 'contato@exemplo.com'
                    }
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', backgroundColor: '#fff' }} 
                  />
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
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                      <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Instituição de Ensino</label>
                      <input type="text" name="instituicao" value={perfil.instituicao} onChange={handleChange} required placeholder="Ex: USP, UNICAMP, etc." style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', backgroundColor: '#fff' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                      <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Cidade</label>
                      <input type="text" name="cidade" value={perfil.cidade} onChange={handleChange} required placeholder="Ex: São Paulo" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', backgroundColor: '#fff' }} />
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
                      <input type="text" name="comunidadeRegiao" value={perfil.comunidadeRegiao} onChange={handleChange} placeholder="Ex: Zona Sul, Ocupação X, etc." style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', backgroundColor: '#fff' }} />
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
                      <input type="text" name="ramo" value={perfil.ramo} onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', backgroundColor: '#fff' }} />
                    </div>
                  </>
                )}

                {/* Descrição e Redes */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', gridColumn: '1 / span 2' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Sobre você / Descrição da sua causa</label>
                  <textarea name="bio" value={perfil.bio} onChange={handleChange} rows="3" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', resize: 'none', backgroundColor: '#fff' }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Telefone / WhatsApp</label>
                  <input type="text" name="telefone" value={perfil.telefone} onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', backgroundColor: '#fff' }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Rede Social ou Site (Opcional)</label>
                  <input type="url" name="linkedin" value={perfil.linkedin} onChange={handleChange} placeholder="https://instagram.com/..." style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', backgroundColor: '#fff' }} />
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