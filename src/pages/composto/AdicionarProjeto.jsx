import React, { useState } from 'react';

export default function QuestionarioSociex() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    categoria: '',
    outraCategoria: '',
    principalProblema: '',
    envolvidos: '',
    medidaTentada: '',
    acoesTomadas: '',
    recursosNecessarios: '',
    comentarioAdicional: '',
    tornarPublico: '',
    aceitouTermos: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
    } else {
      if (!formData.aceitouTermos) {
        alert("Você precisa aceitar os termos de uso para finalizar.");
        return;
      }
      console.log("Dados enviados:", formData);
      setShowSuccess(true);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  const restartForm = () => {
    setFormData({
      categoria: '',
      outraCategoria: '',
      principalProblema: '',
      envolvidos: '',
      medidaTentada: '',
      acoesTomadas: '',
      recursosNecessarios: '',
      comentarioAdicional: '',
      tornarPublico: '',
      aceitouTermos: false
    });
    setCurrentStep(1);
    setShowSuccess(false);
  };

  const getStepCircleText = (stepIndex) => {
    if (stepIndex < currentStep) return "✓";
    if (stepIndex === 1) return "I";
    if (stepIndex === 2) return "II";
    if (stepIndex === 3) return "III";
    return "IV";
  };

  const getStepClass = (stepIndex) => {
    if (stepIndex < currentStep) return "step completed";
    if (stepIndex === currentStep) return "step active";
    return "step";
  };

  return (
    <div className="app-container">
      {!showSuccess ? (
        <div id="form-area">
          {/* Barra de progresso (Stepper) */}
          <div className="stepper">
            <div className={getStepClass(1)} id="step-indicator-1">
              <div className="step-circle">{getStepCircleText(1)}</div>
              <div className="step-label">Classificação</div>
            </div>
            <div className={getStepClass(2)} id="step-indicator-2">
              <div className="step-circle">{getStepCircleText(2)}</div>
              <div className="step-label">Detalhamento</div>
            </div>
            <div className={getStepClass(3)} id="step-indicator-3">
              <div className="step-circle">{getStepCircleText(3)}</div>
              <div className="step-label">Histórico</div>
            </div>
            <div className={getStepClass(4)} id="step-indicator-4">
              <div className="step-circle">{getStepCircleText(4)}</div>
              <div className="step-label">Considerações e Privacidade</div>
            </div>
          </div>

          {/* Container do formulário centralizado */}
          <div className="card-container">
            <form id="multi-step-form" className="card" onSubmit={(e) => e.preventDefault()}>
              
              {/* Etapa 1 */}
              <div className={`form-step ${currentStep === 1 ? 'active' : ''}`} id="step-1" style={{ display: currentStep === 1 ? 'block' : 'none' }}>
                <div className="step-header">
                  <span>Etapa 1 de 4</span>
                  <h2>I. CLASSIFICAÇÃO DO SETOR</h2>
                  <p>Definição da área de atuação e segmento do problema.</p>
                </div>

                <div className="form-group">
                  <label>1. Em que categoria esse problema se encaixa?</label>
                  <div className="radio-group">
                    <label className="radio-option">
                      <input type="radio" name="categoria" value="Cultura e Turismo" checked={formData.categoria === "Cultura e Turismo"} onChange={handleInputChange} /> Cultura e Turismo
                    </label>
                    <label className="radio-option">
                      <input type="radio" name="categoria" value="Educação" checked={formData.categoria === "Educação"} onChange={handleInputChange} /> Educação
                    </label>
                    <label className="radio-option">
                      <input type="radio" name="categoria" value="Saúde" checked={formData.categoria === "Saúde"} onChange={handleInputChange} /> Saúde
                    </label>
                    <label className="radio-option">
                      <input type="radio" name="categoria" value="Agropecuária" checked={formData.categoria === "Agropecuária"} onChange={handleInputChange} /> Agropecuária
                    </label>
                    <label className="radio-option">
                      <input type="radio" name="categoria" value="Outro" checked={formData.categoria === "Outro"} onChange={handleInputChange} /> Outro
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label>2. Caso tenha marcado "Outro", especifique a categoria:</label>
                  <input type="text" name="outraCategoria" placeholder="Especifique a categoria aqui..." value={formData.outraCategoria} onChange={handleInputChange} />
                </div>
              </div>

              {/* Etapa 2 */}
              <div className={`form-step ${currentStep === 2 ? 'active' : ''}`} id="step-2" style={{ display: currentStep === 2 ? 'block' : 'none' }}>
                <div className="step-header">
                  <span>Etapa 2 de 4</span>
                  <h2>II. DETALHAMENTO DO DESAFIO</h2>
                  <p>Descrição minuciosa da dor atual da empresa.</p>
                </div>

                <div className="form-group">
                  <label>
                    3. Qual o principal problema que afeta o desempenho da sua empresa?
                    <span>Por favor, forneça detalhes sobre o impacto e a recorrência.</span>
                  </label>
                  <textarea name="principalProblema" placeholder="Descreva o problema com o máximo de detalhes possível..." value={formData.principalProblema} onChange={handleInputChange}></textarea>
                </div>

                <div className="form-group">
                  <label>
                    4. Quem ou o que está envolvido na causa principal deste problema?
                    <span>(Ex: Pessoas, Processos, Tecnologia, Fornecedores).</span>
                  </label>
                  <input type="text" name="envolvidos" placeholder="Especifique os envolvidos..." value={formData.envolvidos} onChange={handleInputChange} />
                </div>
              </div>

              {/* Etapa 3 */}
              <div className={`form-step ${currentStep === 3 ? 'active' : ''}`} id="step-3" style={{ display: currentStep === 3 ? 'block' : 'none' }}>
                <div className="step-header">
                  <span>Etapa 3 de 4</span>
                  <h2>III. HISTÓRICO E SOLUÇÕES</h2>
                  <p>O que já foi feito e o que é necessário para mudar o cenário.</p>
                </div>

                <div className="form-group">
                  <label>5. Alguma medida já foi tentada para solucionar esse problema?</label>
                  <div className="radio-group row-layout">
                    <label className="radio-option">
                      <input type="radio" name="medidaTentada" value="Sim" checked={formData.medidaTentada === "Sim"} onChange={handleInputChange} /> Sim
                    </label>
                    <label className="radio-option">
                      <input type="radio" name="medidaTentada" value="Não" checked={formData.medidaTentada === "Não"} onChange={handleInputChange} /> Não
                    </label>
                  </div>
                  <textarea style={{ marginTop: '15px' }} name="acoesTomadas" placeholder="Se respondeu 'Sim', descreva abaixo as ações tomadas..." value={formData.acoesTomadas} onChange={handleInputChange}></textarea>
                </div>

                <div className="form-group">
                  <label>
                    6. Quais recursos você considera necessários para solucionar o problema?
                    <span>(Ex: Financiamento, consultoria, treinamento, tecnologia, software...).</span>
                  </label>
                  <textarea name="recursosNecessarios" placeholder="Descreva os recursos necessários..." value={formData.recursosNecessarios} onChange={handleInputChange}></textarea>
                </div>
              </div>

              {/* Etapa 4 */}
              <div className={`form-step ${currentStep === 4 ? 'active' : ''}`} id="step-4" style={{ display: currentStep === 4 ? 'block' : 'none' }}>
                <div className="step-header">
                  <span>Etapa 4 de 4</span>
                  <h2>IV. CONSIDERAÇÕES E PRIVACIDADE</h2>
                  <p>Finalização e termos de uso das informações.</p>
                </div>

                <div className="form-group">
                  <label>7. Há algum comentário adicional que deseja incluir?</label>
                  <textarea name="comentarioAdicional" placeholder="Escreva aqui seu comentário..." value={formData.comentarioAdicional} onChange={handleInputChange}></textarea>
                </div>

                <div className="form-group">
                  <label>8. Deseja tornar este projeto público para visualização de terceiros?</label>
                  <div className="radio-group row-layout">
                    <label className="radio-option">
                      <input type="radio" name="tornarPublico" value="Sim" checked={formData.tornarPublico === "Sim"} onChange={handleInputChange} /> Sim
                    </label>
                    <label className="radio-option">
                      <input type="radio" name="tornarPublico" value="Não" checked={formData.tornarPublico === "Não"} onChange={handleInputChange} /> Não
                    </label>
                  </div>
                </div>

                <div className="terms-box">
                  <h4>📋 Termos de Uso</h4>
                  <p>
                    As informações fornecidas neste formulário serão utilizadas exclusivamente para fins de conexão 
                    com equipes universitárias dentro da plataforma SOCIEX. Seus dados não serão compartilhados com 
                    terceiros fora do ecossistema da plataforma. Ao finalizar, você concorda com os termos de uso e 
                    a política de privacidade do SOCIEX.
                  </p>
                </div>

                <label className="checkbox-option">
                  <input type="checkbox" id="aceitouTermos" name="aceitouTermos" checked={formData.aceitouTermos} onChange={handleInputChange} />
                  Li e aceito os <strong>termos de uso</strong> e a <strong>política de privacidade</strong> do SOCIEX.
                </label>
              </div>

              <div className="actions-container">
                <button type="button" className="btn btn-secondary" id="btn-prev" style={{ display: currentStep === 1 ? 'none' : 'block' }} onClick={handlePrev}>Voltar</button>
                <button type="button" className="btn btn-primary" id="btn-next" onClick={handleNext}>
                  {currentStep === 4 ? 'Concluir' : 'Próximo'}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        /* Tela de Sucesso */
        <div id="success-screen" className="success-container" style={{ display: 'flex' }}>
          <img 
            src="https://www.image2url.com/r2/default/images/1780937861537-ca7e7a0c-79ae-469c-a885-3defd63c0926.png" 
            alt="Projeto Enviado" 
            className="success-img" 
            style={{ width: '100%', maxWidth: '650px', height: 'auto', marginBottom: '30px' }}
          />
          <h2 className="success-title">Questionário Concluído!</h2>
          <p className="success-text">As suas respostas foram enviadas e processadas com sucesso. Obrigado pela sua colaboração!</p>
          <button type="button" className="btn btn-primary" onClick={restartForm}>Enviar outra resposta</button>
        </div>
      )}
    </div>
  );
}