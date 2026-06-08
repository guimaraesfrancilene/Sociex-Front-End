import React, { useState } from 'react';
import './AdicionarProjeto.css'; // Certifique-se de que o caminho do CSS está correto

export default function QuestionarioSociex() {
  // Estado para controlar a etapa atual (1 a 4)
  const [currentStep, setCurrentStep] = useState(1);
  
  // Estado para controlar se o formulário foi enviado com sucesso
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Estado para armazenar os dados do formulário
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

  // Função para atualizar os campos do formulário
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Avançar etapa ou finalizar
  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo(0, 0);
    } else {
      // Validação do checkbox de termos na última etapa
      if (!formData.aceitouTermos) {
        alert("Você precisa aceitar os termos de uso para finalizar.");
        return;
      }
      
      console.log("Dados enviados com sucesso:", formData);
      setIsSubmitted(true);
      window.scrollTo(0, 0);
    }
  };

  // Voltar etapa
  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev + 1); // Corrigido para diminuir a etapa
      setCurrentStep((prev) => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  // Reseta o formulário para enviar uma nova resposta
  const handleRestart = () => {
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
    setIsSubmitted(false);
  };

  // Auxiliar para renderizar os indicadores do Stepper
  const renderStepIndicator = (stepNumber, label, romanNumeral) => {
    let className = "step";
    let indicatorText = romanNumeral;

    if (stepNumber < currentStep) {
      className = "step completed";
      indicatorText = "✓";
    } else if (stepNumber === currentStep) {
      className = "step active";
    }

    return (
      <div className={className} id={`step-indicator-${stepNumber}`}>
        <div className="step-circle">{indicatorText}</div>
        <div className="step-label">{label}</div>
      </div>
    );
  };

  return (
    <div className="app-container">
      {!isSubmitted ? (
        <div id="form-area">
          {/* STEPPER */}
          <div className="stepper">
            {renderStepIndicator(1, "Classificação", "I")}
            {renderStepIndicator(2, "Detalhamento", "II")}
            {renderStepIndicator(3, "Histórico", "III")}
            {renderStepIndicator(4, "Considerações e Privacidade", "IV")}
          </div>

          {/* FORMULÁRIO */}
          <form className="card" onSubmit={(e) => e.preventDefault()}>
            
            {/* ETAPA 1 */}
            {currentStep === 1 && (
              <div className="form-step active" id="step-1">
                <div className="step-header">
                  <span>Etapa 1 de 4</span>
                  <h2>I. CLASSIFICAÇÃO DO SETOR</h2>
                  <p>Definição da área de atuação e segmento do problema.</p>
                </div>

                <div className="form-group">
                  <label>1. Em que categoria esse problema se encaixa?</label>
                  <div className="radio-group">
                    {["Cultura e Turismo", "Educação", "Saúde", "Agropecuária", "Outro"].map((cat) => (
                      <label key={cat} className="radio-option">
                        <input
                          type="radio"
                          name="categoria"
                          value={cat}
                          checked={formData.categoria === cat}
                          onChange={handleChange}
                        />{" "}
                        {cat}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>2. Caso tenha marcado "Outro", especifique a categoria:</label>
                  <input
                    type="text"
                    name="outraCategoria"
                    placeholder="Especifique a categoria aqui..."
                    value={formData.outraCategoria}
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}

            {/* ETAPA 2 */}
            {currentStep === 2 && (
              <div className="form-step active" id="step-2">
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
                  <textarea
                    name="principalProblema"
                    placeholder="Descreva o problema com o máximo de detalhes possível..."
                    value={formData.principalProblema}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>
                    4. Quem ou o que está envolvido na causa principal deste problema?
                    <span>(Ex: Pessoas, Processos, Tecnologia, Fornecedores).</span>
                  </label>
                  <input
                    type="text"
                    name="envolvidos"
                    placeholder="Especifique os envolvidos..."
                    value={formData.envolvidos}
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}

            {/* ETAPA 3 */}
            {currentStep === 3 && (
              <div className="form-step active" id="step-3">
                <div className="step-header">
                  <span>Etapa 3 de 4</span>
                  <h2>III. HISTÓRICO E SOLUÇÕES</h2>
                  <p>O que já foi feito e o que é necessário para mudar o cenário.</p>
                </div>

                <div className="form-group">
                  <label>5. Alguma medida já foi tentada para solucionar esse problema?</label>
                  <div className="radio-group row-layout">
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="medidaTentada"
                        value="Sim"
                        checked={formData.medidaTentada === "Sim"}
                        onChange={handleChange}
                      /> Sim
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="medidaTentada"
                        value="Não"
                        checked={formData.medidaTentada === "Não"}
                        onChange={handleChange}
                      /> Não
                    </label>
                  </div>
                  <textarea
                    style={{ marginTop: '15px' }}
                    name="acoesTomadas"
                    placeholder="Se respondeu 'Sim', descreva abaixo as ações tomadas..."
                    value={formData.acoesTomadas}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>
                    6. Quais recursos você considera necessários para solucionar o problema?
                    <span>(Ex: Financiamento, consultoria, treinamento, tecnologia, software...).</span>
                  </label>
                  <textarea
                    name="recursosNecessarios"
                    placeholder="Descreva os recursos necessários..."
                    value={formData.recursosNecessarios}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            )}

            {/* ETAPA 4 */}
            {currentStep === 4 && (
              <div className="form-step active" id="step-4">
                <div className="step-header">
                  <span>Etapa 4 de 4</span>
                  <h2>IV. CONSIDERAÇÕES E PRIVACIDADE</h2>
                  <p>Finalização e termos de uso das informações.</p>
                </div>

                <div className="form-group">
                  <label>7. Há algum comentário adicional que deseja incluir?</label>
                  <textarea
                    name="comentarioAdicional"
                    placeholder="Escreva aqui seu comentário..."
                    value={formData.comentarioAdicional}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>8. Deseja tornar este projeto público para visualização de terceiros?</label>
                  <div className="radio-group row-layout">
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="tornarPublico"
                        value="Sim"
                        checked={formData.tornarPublico === "Sim"}
                        onChange={handleChange}
                      /> Sim
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="tornarPublico"
                        value="Não"
                        checked={formData.tornarPublico === "Não"}
                        onChange={handleChange}
                      /> Não
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
                  <input
                    type="checkbox"
                    id="aceitouTermos"
                    name="aceitouTermos"
                    checked={formData.aceitouTermos}
                    onChange={handleChange}
                  />
                  Li e aceito os <strong>termos de uso</strong> e a <strong>política de privacidade</strong> do SOCIEX.
                </label>
              </div>
            )}

            {/* BOTÕES DE NAVEGAÇÃO */}
            <div className="actions-container">
              {currentStep > 1 && (
                <button type="button" className="btn btn-secondary" onClick={handlePrev}>
                  Voltar
                </button>
              )}
              <button type="button" className="btn btn-primary" onClick={handleNext}>
                {currentStep === 4 ? 'Finalizar Questionário' : 'Próximo'}
              </button>
            </div>
          </form>
        </div>
      ) : (
        /* TELA DE SUCESSO MODIFICADA */
        <div id="success-screen" className="success-container">
          <img 
            src="image_c7835f.jpg" 
            alt="Projeto Enviado com Sucesso" 
            className="success-banner-img" 
          />
          
          <div className="success-actions-vertical">
            <button type="button" className="btn btn-primary" onClick={handleRestart}>
              Enviar novo formulário
            </button>
            
            <button type="button" className="btn btn-secondary" onClick={() => window.location.href = '/'}>
              Concluído
            </button>
          </div>
        </div>
      )}
    </div>
  );
}