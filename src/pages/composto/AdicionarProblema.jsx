import React, { useState } from 'react';
import React, { useState } from 'react';
import './AdicionarProblema.css'; 
import logoAbelha from './logoabelha.jpg'; 

const CATEGORIAS = [
  { value: 'cultura_turismo', label: 'Cultura e Turismo' },
  { value: 'educacao', label: 'Educação' },
  { value: 'saude', label: 'Saúde' },
  { value: 'agropecuaria', label: 'Agropecuária' },
];

const PALAVRAS_CHAVE = [
  'Tecnologia', 'Inovação', 'Sustentabilidade', 'Gestão', 
  'Educação', 'Saúde', 'Social', 'Digital', 'Pesquisa', 'Meio Ambiente'
];

const STEPS = [
  {
    label: 'I. CLASSIFICAÇÃO DO SETOR',
    subtitle: 'Definição da área de atuação e segmento do problema.',
  },
  {
    label: 'II. DETALHAMENTO DO DESAFIO',
    subtitle: 'Descrição minuciosa da dor atual da empresa.',
  },
  {
    label: 'III. HISTÓRICO E SOLUÇÕES',
    subtitle: 'O que já foi feito e o que é necessário para mudar o cenário.',
  },
  {
    label: 'IV. CONSIDERAÇÕES E PRIVACIDADE',
    subtitle: 'Finalização e termos de uso das informações.',
  },
];

const INITIAL_DATA = {
  categoria: '',
  outraCategoria: '',
  tituloDesafio: '',
  palavrasChave: [],
  problemaPrincipal: '',
  envolvidos: '',
  medidaTentada: '',
  acoesTentadas: '',
  recursosNecessarios: '',
  comentarioAdicional: '',
  projetoPublico: '',
};

function RadioOption({ name, value, label, checked, onChange }) {
  return (
    <label className="quest-radio">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      />
      <span className="quest-radio-circle" />
      <span className="quest-radio-label">{label}</span>
    </label>
  );
}

export default function QuestionarioDiagnostico() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(INITIAL_DATA);
  const [error, setError] = useState('');
  const [enviado, setEnviado] = useState(false);

  const set = (field, value) => {
    setData((prev) => ({ ...prev, [field]: value }));
    setError('');
  };

  const togglePalavraChave = (palavra) => {
    setData((prev) => {
      const listaAtual = prev.palavrasChave;
      const novaLista = listaAtual.includes(palavra)
        ? listaAtual.filter((p) => p !== palabra)
        : [...listaAtual, palabra];
      return { ...prev, palavrasChave: novaLista };
    });
  };

  const validar = () => {
    if (step === 0) {
      if (!data.categoria && !data.outraCategoria.trim()) {
        return 'Selecione a categoria do seu problema ou especifique uma outra.';
      }
      if (!data.tituloDesafio.trim()) {
        return 'Por favor, insira o título do seu desafio.';
      }
    }
    if (step === 1) {
      if (!data.problemaPrincipal.trim()) return 'Descreva o principal problema.';
    }
    return '';
  };

  const irParaProximo = () => {
    const msg = validar();
    if (msg) {
      setError(msg);
      return;
    }
    setError('');
    setStep((s) => Math.min(STEPS.length - 1, s + 1));
  };

  const voltar = () => {
    setError('');
    setStep((s) => Math.max(0, s - 1));
  };

  const finalizar = (e) => {
    e.preventDefault();
    const msg = validar();
    if (msg) {
      setError(msg);
      return;
    }
    setEnviado(true);
    console.log('Respostas enviadas:', data);
  };

  // TELA DE SUCESSO EXIBINDO A SUA IMAGEM
  if (enviado) {
    return (
      <div className="quest-page">
        <div className="quest-success-container">
          <img 
            src={logoAbelha} 
            alt="Projeto Enviado" 
            className="quest-success-img" 
          />
        </div>
      </div>
    );
  }

  const atual = STEPS[step];

  return (
    <div className="quest-page">
      {/* Barra vermelha superior igual à imagem */}
      <div className="quest-top-bar">
        ETAPA {step + 1} DE {STEPS.length}
      </div>

      <div className="quest-card">
        <div className="quest-header">
          <h1 className="quest-title">{atual.label}</h1>
          <p className="quest-subtitle">{atual.subtitle}</p>
        </div>

        <form className="quest-body" onSubmit={finalizar}>
          {step === 0 && (
            <>
              <div className="quest-question">
                <p className="quest-question-text">
                  <span className="quest-number">1.</span> Em que categoria esse problema se encaixa?
                </p>
                <div className="quest-radio-group">
                  {CATEGORIAS.map((cat) => (
                    <RadioOption
                      key={cat.value}
                      name="categoria"
                      value={cat.value}
                      label={cat.label}
                      checked={data.categoria === cat.value}
                      onChange={(v) => set('categoria', v)}
                    />
                  ))}
                </div>
              </div>

              <div className="quest-question">
                <p className="quest-question-text">
                  <span className="quest-number">2.</span> Caso seu problema esteja em outra categoria, especifique aqui:
                </p>
                <input
                  type="text"
                  className="quest-input"
                  placeholder="Descreva a categoria..."
                  value={data.outraCategoria}
                  onChange={(e) => set('outraCategoria', e.target.value)}
                />
              </div>

              <div className="quest-question">
                <p className="quest-question-text">
                  <span className="quest-number">3.</span> Qual o título do seu desafio?
                </p>
                <input
                  type="text"
                  className="quest-input"
                  placeholder="Ex: Sistema de monitoramento de irrigação rural"
                  value={data.tituloDesafio}
                  onChange={(e) => set('tituloDesafio', e.target.value)}
                />
              </div>

              <div className="quest-question">
                <p className="quest-question-text">
                  <span className="quest-number">4.</span> Selecione as palavras-chave que descrevem seu desafio:
                </p>
                <div className="quest-tag-group">
                  {PALAVRAS_CHAVE.map((palavra) => {
                    const selecionada = data.palavrasChave.includes(palavra);
                    return (
                      <button
                        key={palavra}
                        type="button"
                        className={`quest-tag ${selecionada ? 'quest-tag--active' : ''}`}
                        onClick={() => togglePalavraChave(palavra)}
                      >
                        {palavra}
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <div className="quest-question">
                <p className="quest-question-text">
                  <span className="quest-number">5.</span> Qual o principal problema que afeta o desempenho da sua empresa?
                </p>
                <textarea
                  className="quest-input quest-textarea"
                  placeholder="Descreva o problema em detalhes..."
                  value={data.problemaPrincipal}
                  onChange={(e) => set('problemaPrincipal', e.target.value)}
                />
              </div>

              <div className="quest-question">
                <p className="quest-question-text">
                  <span className="quest-number">6.</span> Quem ou o que está envolvido na causa principal deste problema?
                </p>
                <input
                  type="text"
                  className="quest-input"
                  placeholder="Ex: Pessoas, Processos, Tecnologia..."
                  value={data.envolvidos}
                  onChange={(e) => set('envolvidos', e.target.value)}
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="quest-question">
                <p className="quest-question-text">
                  <span className="quest-number">7.</span> Alguma medida já foi tentada para solucionar esse problema?
                </p>
                <div className="quest-radio-group quest-radio-group--inline">
                  <RadioOption
                    name="medidaTentada"
                    value="sim"
                    label="Sim"
                    checked={data.medidaTentada === 'sim'}
                    onChange={(v) => set('medidaTentada', v)}
                  />
                  <RadioOption
                    name="medidaTentada"
                    value="nao"
                    label="Não"
                    checked={data.medidaTentada === 'nao'}
                    onChange={(v) => set('medidaTentada', v)}
                  />
                </div>
                <textarea
                  className="quest-input quest-textarea"
                  placeholder="Descreva as ações que já foram tomadas anteriormente..."
                  value={data.acoesTentadas}
                  onChange={(e) => set('acoesTentadas', e.target.value)}
                  disabled={data.medidaTentada !== 'sim'}
                />
              </div>

              <div className="quest-question">
                <p className="quest-question-text">
                  <span className="quest-number">8.</span> Quais recursos você considera necessários para solucionar o problema?
                </p>
                <textarea
                  className="quest-input quest-textarea"
                  placeholder="Ex: Financiamento, consultoria, software específico..."
                  value={data.recursosNecessarios}
                  onChange={(e) => set('recursosNecessarios', e.target.value)}
                />
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="quest-question">
                <p className="quest-question-text">
                  <span className="quest-number">9.</span> Há algum comentário adicional que deseja incluir?
                </p>
                <textarea
                  className="quest-input quest-textarea"
                  placeholder="Escreva aqui quaisquer outras informações úteis..."
                  value={data.comentarioAdicional}
                  onChange={(e) => set('comentarioAdicional', e.target.value)}
                />
              </div>

              <div className="quest-question">
                <p className="quest-question-text">
                  <span className="quest-number">10.</span> Deseja tornar este projeto público para visualização de terceiros?
                </p>
                <div className="quest-radio-group quest-radio-group--inline">
                  <RadioOption
                    name="projetoPublico"
                    value="sim"
                    label="Sim"
                    checked={data.projetoPublico === 'sim'}
                    onChange={(v) => set('projetoPublico', v)}
                  />
                  <RadioOption
                    name="projetoPublico"
                    value="nao"
                    label="Não"
                    checked={data.projetoPublico === 'nao'}
                    onChange={(v) => set('projetoPublico', v)}
                  />
                </div>
              </div>
            </>
          )}

          {error && <p className="quest-error">{error}</p>}

          <div className="quest-nav">
            {step > 0 && (
              <button type="button" className="quest-btn quest-btn--ghost" onClick={voltar}>
                VOLTAR
              </button>
            )}
            {step < STEPS.length - 1 && (
              <button type="button" className="quest-btn quest-btn--primary" onClick={irParaProximo}>
                PRÓXIMO
              </button>
            )}
            {step === STEPS.length - 1 && (
              <button type="submit" className="quest-btn quest-btn--primary">
                FINALIZAR
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}