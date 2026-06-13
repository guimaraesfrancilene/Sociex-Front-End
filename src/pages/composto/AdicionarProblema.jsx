import React, { useState } from 'react';
import './QuestionarioDiagnostico.css';

const CATEGORIAS = [
  { value: 'cultura_turismo', label: 'Cultura e Turismo' },
  { value: 'educacao', label: 'Educação' },
  { value: 'saude', label: 'Saúde' },
  { value: 'agropecuaria', label: 'Agropecuária' },
  { value: 'outro', label: 'Outro' },
];

const PALAVRAS_CHAVE = [
  'Tecnologia',
  'Inovação',
  'Sustentabilidade',
  'Gestão',
  'Educação',
  'Saúde',
  'Social',
  'Digital',
  'Pesquisa',
  'Meio Ambiente',
];

const DURACOES = ['1 a 3 meses', '3 a 6 meses', '6 a 12 meses', 'Mais de 12 meses'];

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
  resultadoEsperado: '',
  inicioPrevisto: '',
  duracaoEstimada: '',
  vagas: 0,
  medidaTentada: '',
  acoesTentadas: '',
  recursosNecessarios: '',
  disponibilidadeReunioes: '',
  comentarioAdicional: '',
  projetoPublico: '',
  aceiteTermos: false,
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

  const togglePalavra = (palavra) => {
    setData((prev) => {
      const jaSelecionada = prev.palavrasChave.includes(palavra);
      return {
        ...prev,
        palavrasChave: jaSelecionada
          ? prev.palavrasChave.filter((p) => p !== palavra)
          : [...prev.palavrasChave, palavra],
      };
    });
  };

  const validar = () => {
    if (step === 0) {
      if (!data.categoria) return 'Selecione a categoria do seu desafio.';
      if (data.categoria === 'outro' && !data.outraCategoria.trim()) {
        return 'Especifique a categoria do seu desafio.';
      }
      if (!data.tituloDesafio.trim()) return 'Informe o título do seu desafio.';
    }
    if (step === 1) {
      if (!data.problemaPrincipal.trim()) return 'Descreva o principal problema da sua empresa.';
    }
    if (step === 3) {
      if (!data.aceiteTermos) return 'É necessário aceitar os termos de uso para finalizar.';
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
    console.log('Respostas do questionário:', data);
  };

  if (enviado) {
    return (
      <div className="quest-page">
        <div className="quest-card quest-card--success">
          <span className="quest-eyebrow">QUESTIONÁRIO ENVIADO</span>
          <h1 className="quest-title">Obrigado pela sua resposta!</h1>
          <p className="quest-subtitle">
            As informações do seu desafio foram registradas. A equipe SOCIEX irá analisar e conectar você
            com a equipe universitária mais adequada.
          </p>
        </div>
      </div>
    );
  }

  const atual = STEPS[step];

  return (
    <div className="quest-page">
      <form className="quest-card" onSubmit={finalizar}>
        <div className="quest-header">
          <span className="quest-eyebrow">
            ETAPA {step + 1} DE {STEPS.length}
          </span>
          <h1 className="quest-title">{atual.label}</h1>
          <p className="quest-subtitle">{atual.subtitle}</p>
          <div className="quest-progress">
            {STEPS.map((_, i) => (
              <span key={i} className={`quest-progress-bar ${i <= step ? 'is-active' : ''}`} />
            ))}
          </div>
        </div>

        <div className="quest-body">
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
                  <span className="quest-number">2.</span> Caso seu problema esteja em outra categoria,
                  especifique aqui:
                </p>
                <input
                  type="text"
                  className="quest-input"
                  placeholder="Descreva a categoria..."
                  value={data.outraCategoria}
                  onChange={(e) => set('outraCategoria', e.target.value)}
                  disabled={data.categoria !== 'outro'}
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
                  <span className="quest-number">4.</span> Selecione as palavras-chave que descrevem seu
                  desafio:
                </p>
                <div className="quest-tags">
                  {PALAVRAS_CHAVE.map((palavra) => (
                    <button
                      type="button"
                      key={palavra}
                      className={`quest-tag ${data.palavrasChave.includes(palavra) ? 'is-active' : ''}`}
                      onClick={() => togglePalavra(palavra)}
                    >
                      {palavra}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <div className="quest-question">
                <p className="quest-question-text">
                  <span className="quest-number">5.</span> Qual o principal problema que afeta o
                  desempenho da sua empresa?
                </p>
                <p className="quest-hint">Por favor, forneça detalhes sobre o impacto e a recorrência.</p>
                <textarea
                  className="quest-input quest-textarea"
                  placeholder="Descreva o problema com o máximo de detalhes possível..."
                  value={data.problemaPrincipal}
                  onChange={(e) => set('problemaPrincipal', e.target.value)}
                />
              </div>

              <div className="quest-question">
                <p className="quest-question-text">
                  <span className="quest-number">6.</span> Quem ou o que está envolvido na causa principal
                  deste problema?
                </p>
                <input
                  type="text"
                  className="quest-input"
                  placeholder="Ex: Pessoas, Processos, Tecnologia, Fornecedores"
                  value={data.envolvidos}
                  onChange={(e) => set('envolvidos', e.target.value)}
                />
              </div>

              <div className="quest-question">
                <p className="quest-question-text">
                  <span className="quest-number">7.</span> Qual resultado você espera ao final do projeto?
                </p>
                <textarea
                  className="quest-input quest-textarea"
                  placeholder="Descreva o resultado ideal que você espera..."
                  value={data.resultadoEsperado}
                  onChange={(e) => set('resultadoEsperado', e.target.value)}
                />
              </div>

              <div className="quest-question">
                <p className="quest-question-text">
                  <span className="quest-number">8.</span> Qual o prazo esperado para a solução?
                </p>
                <div className="quest-row">
                  <div className="quest-field">
                    <span className="quest-field-label">INÍCIO PREVISTO</span>
                    <input
                      type="date"
                      className="quest-input"
                      value={data.inicioPrevisto}
                      onChange={(e) => set('inicioPrevisto', e.target.value)}
                    />
                  </div>
                  <div className="quest-field">
                    <span className="quest-field-label">DURAÇÃO ESTIMADA</span>
                    <select
                      className="quest-input"
                      value={data.duracaoEstimada}
                      onChange={(e) => set('duracaoEstimada', e.target.value)}
                    >
                      <option value="" disabled>
                        Selecione...
                      </option>
                      {DURACOES.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="quest-question">
                <p className="quest-question-text">
                  <span className="quest-number">9.</span> Quantas vagas para universitários você deseja
                  abrir?
                </p>
                <div className="quest-stepper">
                  <button
                    type="button"
                    className="quest-stepper-btn"
                    onClick={() => set('vagas', Math.max(0, data.vagas - 1))}
                  >
                    −
                  </button>
                  <span className="quest-stepper-value">{data.vagas}</span>
                  <button
                    type="button"
                    className="quest-stepper-btn"
                    onClick={() => set('vagas', data.vagas + 1)}
                  >
                    +
                  </button>
                  <span className="quest-stepper-label">estudantes</span>
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="quest-question">
                <p className="quest-question-text">
                  <span className="quest-number">10.</span> Alguma medida já foi tentada para solucionar
                  esse problema?
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
                  placeholder="Descreva abaixo as ações tomadas"
                  value={data.acoesTentadas}
                  onChange={(e) => set('acoesTentadas', e.target.value)}
                  disabled={data.medidaTentada !== 'sim'}
                />
              </div>

              <div className="quest-question">
                <p className="quest-question-text">
                  <span className="quest-number">11.</span> Quais recursos você considera necessários para
                  solucionar o problema?
                </p>
                <textarea
                  className="quest-input quest-textarea"
                  placeholder="Ex: Financiamento, consultoria, treinamento, tecnologia, software..."
                  value={data.recursosNecessarios}
                  onChange={(e) => set('recursosNecessarios', e.target.value)}
                />
              </div>

              <div className="quest-question">
                <p className="quest-question-text">
                  <span className="quest-number">12.</span> Sua organização tem disponibilidade para
                  reuniões periódicas com a equipe universitária?
                </p>
                <div className="quest-radio-group quest-radio-group--inline">
                  <RadioOption
                    name="disponibilidade"
                    value="sim"
                    label="Sim"
                    checked={data.disponibilidadeReunioes === 'sim'}
                    onChange={(v) => set('disponibilidadeReunioes', v)}
                  />
                  <RadioOption
                    name="disponibilidade"
                    value="nao"
                    label="Não"
                    checked={data.disponibilidadeReunioes === 'nao'}
                    onChange={(v) => set('disponibilidadeReunioes', v)}
                  />
                  <RadioOption
                    name="disponibilidade"
                    value="talvez"
                    label="Talvez"
                    checked={data.disponibilidadeReunioes === 'talvez'}
                    onChange={(v) => set('disponibilidadeReunioes', v)}
                  />
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="quest-question">
                <p className="quest-question-text">
                  <span className="quest-number">13.</span> Há algum comentário adicional que deseja
                  incluir?
                </p>
                <textarea
                  className="quest-input quest-textarea"
                  placeholder="Escreva aqui qualquer informação extra que considere relevante..."
                  value={data.comentarioAdicional}
                  onChange={(e) => set('comentarioAdicional', e.target.value)}
                />
              </div>

              <div className="quest-question">
                <p className="quest-question-text">
                  <span className="quest-number">14.</span> Deseja tornar este projeto público para
                  visualização de terceiros?
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

              <div className="quest-terms">
                <p className="quest-terms-title">📄 TERMOS DE USO</p>
                <p className="quest-terms-text">
                  As informações fornecidas neste formulário serão utilizadas exclusivamente para fins de
                  conexão com equipes universitárias dentro da plataforma SOCIEX. Seus dados não serão
                  compartilhados com terceiros fora do ecossistema da plataforma. Ao finalizar, você
                  concorda com os termos de uso e a política de privacidade do SOCIEX.
                </p>
              </div>

              <label className="quest-checkbox">
                <input
                  type="checkbox"
                  checked={data.aceiteTermos}
                  onChange={(e) => set('aceiteTermos', e.target.checked)}
                />
                <span className="quest-checkbox-box" />
                <span className="quest-checkbox-label">
                  Li e aceito os <strong>termos de uso</strong> e a{' '}
                  <strong>política de privacidade</strong> do SOCIEX.
                </span>
              </label>
            </>
          )}
        </div>

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
              FINALIZAR QUESTIONÁRIO
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
