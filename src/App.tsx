import React, { useState } from 'react';
import {
  FileText,
  Clock,
  Rocket,
  CheckCircle2,
  Filter,
  Search,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  AlertTriangle,
  Info,
  Calendar,
  Layers,
  Sparkles,
  TrendingUp,
  SlidersHorizontal
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'resumo' | 'demandas' | 'andamento' | 'impedimentos' | 'proximos'>('resumo');
  const [filterSetor, setFilterSetor] = useState<string>('');
  const [filterBusca, setFilterBusca] = useState<string>('');
  
  // KPI Details Toggle
  const [openKpi, setOpenKpi] = useState<string | null>(null);

  // Accordion Steps
  const [openSteps, setOpenSteps] = useState<number[]>([7]); // Step 7 default open

  const toggleStep = (stepNum: number) => {
    setOpenSteps(prev =>
      prev.includes(stepNum) ? prev.filter(s => s !== stepNum) : [...prev, stepNum]
    );
  };

  const toggleKpi = (id: string) => {
    setOpenKpi(openKpi === id ? null : id);
  };

  // Demandas data
  const demandasData = [
    // AGORA
    { id: 1, roteiro: 'AGORA', name: 'Inclusão dos campos Marca e Fornecedor no Protocolo', setor: 'Laboratório', status: 'Em Desenvolvimento', statusType: 'green', glpi: null },
    { id: 2, roteiro: 'AGORA', name: 'Integração amostras CQI x LASA', setor: 'Indústria', status: 'Em Desenvolvimento', statusType: 'green', glpi: null },
    { id: 3, roteiro: 'AGORA', name: 'Laudos de florescimento e pré-colheita', setor: 'Laboratório', status: 'Em Desenvolvimento', statusType: 'green', glpi: null },
    { id: 4, roteiro: 'AGORA', name: 'Integração do sistema de balança com o protocolo para identificação automática do caminhão', setor: 'Laboratório', status: 'Pronta p/ Desenvolvimento', statusType: 'orange', glpi: null },
    { id: 5, roteiro: 'AGORA', name: 'Salvamento automático de lançamentos no teste de Germinação', setor: 'Laboratório', status: 'Primeiro Entendimento', statusType: 'blue', glpi: '89293' },
    { id: 6, roteiro: 'AGORA', name: 'Troca de campo no cadastro de formação lotes', setor: 'Indústria', status: 'Backlog', statusType: 'gray', glpi: '87385' },
    { id: 7, roteiro: 'AGORA', name: 'Implementação da função de exportação de boletins e termos na emissão de documentos', setor: 'Laboratório', status: 'Backlog', statusType: 'gray', glpi: '89544' },
    { id: 8, roteiro: 'AGORA', name: 'Criação de fluxo de dados/View — Controle de Qualidade (LASA)', setor: 'PGO', status: 'Backlog', statusType: 'gray', glpi: '88289' },

    // PRÓXIMO
    { id: 9, roteiro: 'PRÓXIMO', name: 'Informações Cultivar e Lote em Qrcode de protocolo (Funcionalidade Nova)', setor: 'Indústria', status: 'Backlog', statusType: 'gray', glpi: '87877' },
    { id: 10, roteiro: 'PRÓXIMO', name: 'Criação de rotina para emissão de BAS de reanálise de lotes de fórmula', setor: 'Laboratório', status: 'Backlog', statusType: 'gray', glpi: '86016' },
    { id: 11, roteiro: 'PRÓXIMO', name: 'Inserção de emissão de BAS de reanálise e termo aditivo de lotes de fórmula', setor: 'Laboratório', status: 'Backlog', statusType: 'gray', glpi: '84536' },
    { id: 12, roteiro: 'PRÓXIMO', name: 'Solicitação de Ajuste em Relatório/Termo Aditivo', setor: 'Laboratório', status: 'Backlog', statusType: 'gray', glpi: '83975' },
    { id: 13, roteiro: 'PRÓXIMO', name: 'Reativação do teste de Envelhecimento acelerado', setor: 'Laboratório', status: 'Backlog', statusType: 'gray', glpi: '86019' },
    { id: 14, roteiro: 'PRÓXIMO', name: 'Testes operacionais do CQI no LASA (peneira, VOC)', setor: 'Laboratório', status: 'Backlog', statusType: 'gray', glpi: null },
    { id: 15, roteiro: 'PRÓXIMO', name: 'Criação de relatório para acompanhamento de amostras de campo', setor: 'Laboratório', status: 'Backlog', statusType: 'gray', glpi: '88051' },
    { id: 16, roteiro: 'PRÓXIMO', name: 'Rastreabilidade Colheita: Protocolo de Integração LASA', setor: 'Laboratório', status: 'Backlog', statusType: 'gray', glpi: '88311' },
    { id: 17, roteiro: 'PRÓXIMO', name: 'Inserção de fotos nos testes', setor: 'Laboratório', status: 'Backlog', statusType: 'gray', glpi: '77386' },

    // PENDENTE
    { id: 18, roteiro: 'PENDENTE', name: 'Inclusão do campo Número da Nota Fiscal (NF) na grid do relatório/termo aditivo', setor: 'Laboratório', status: 'Pendente', statusType: 'red', glpi: '83975' },

    // SEM ROTEIRO DEFINIDO
    { id: 19, roteiro: 'SEM ROTEIRO DEFINIDO', name: 'Divergência na Seleção de Cliente ao Informar NF do Lote', isNew: true, setor: 'Não informado', status: 'Backlog', statusType: 'gray', glpi: null },
    { id: 20, roteiro: 'SEM ROTEIRO DEFINIDO', name: 'Criar tratativa para cadastros de 2 produtos no mesmo cultivar Sapiens ⇒ Lasa', setor: 'TI', status: 'Backlog', statusType: 'gray', glpi: null },
    { id: 21, roteiro: 'SEM ROTEIRO DEFINIDO', name: 'Informações Cultivar e Lote em Qrcode de protocolo (Melhorias)', setor: 'Indústria', status: 'Backlog', statusType: 'gray', glpi: '87877' },
    { id: 22, roteiro: 'SEM ROTEIRO DEFINIDO', name: 'Adequação do sistema de leitura do QR Code', setor: 'Laboratório', status: 'Backlog', statusType: 'gray', glpi: '83194' },
    { id: 23, roteiro: 'SEM ROTEIRO DEFINIDO', name: 'Correção dos filtros de pesquisa nas telas do LASA', setor: 'Laboratório', status: 'Backlog', statusType: 'gray', glpi: '89999' }
  ];

  const filteredDemandas = demandasData.filter(d => {
    const matchSetor = !filterSetor || d.setor === filterSetor;
    const matchBusca = !filterBusca || d.name.toLowerCase().includes(filterBusca.toLowerCase()) || d.setor.toLowerCase().includes(filterBusca.toLowerCase());
    return matchSetor && matchBusca;
  });

  const getPillClass = (type: string) => {
    switch (type) {
      case 'green': return 'bg-emerald-100 text-emerald-800 border border-emerald-300';
      case 'orange': return 'bg-amber-100 text-amber-800 border border-amber-300';
      case 'blue': return 'bg-blue-100 text-blue-800 border border-blue-300';
      case 'red': return 'bg-rose-100 text-rose-800 border border-rose-300';
      default: return 'bg-slate-100 text-slate-700 border border-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-[#F1F2F5] text-[#1E2430] font-sans selection:bg-purple-100 selection:text-purple-900">
      {/* Top Bar */}
      <div className="bg-[#1E2430] text-[#C7CCD3] text-[11px] sm:text-xs py-2 px-3 sm:px-4 text-center overflow-x-auto whitespace-nowrap font-medium tracking-wide shadow-xs border-b border-slate-800/80">
        Foco no cliente · Honestidade · Valorização do Trabalho · Respeito ao Ser Humano · Trabalho em Equipe · Patriotismo · Inovação
      </div>

      <div className="max-w-[1200px] mx-auto px-3 py-4 sm:px-6 sm:py-8">
        {/* Header */}
        <header className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 shadow-sm border border-slate-200/80 mb-4 sm:mb-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2.5">
              <div className="h-9 sm:h-10 w-24 sm:w-28 bg-[#7B3FC4] rounded-lg flex items-center justify-center text-white font-black text-lg sm:text-xl tracking-wider shadow-xs">
                ATTO
              </div>
            </div>
            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-emerald-200 text-[11px] sm:text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Sistema LASA Ativo
            </div>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center mt-4 sm:mt-6 mb-2 tracking-tight leading-snug">
            STATUS REPORT — GESTÃO DE IDEIAS/MELHORIAS <span className="text-emerald-600">LASA</span>
          </h1>
          <div className="w-fit mx-auto bg-emerald-600 text-white font-bold text-xs sm:text-sm px-4 py-1.5 sm:px-6 sm:py-2 rounded-full tracking-wider shadow-xs">
            PERÍODO: 05/08 – 12/08
          </div>
        </header>

        {/* Tab Bar - Optimized for Smooth Mobile Touch Scrolling */}
        <nav className="flex gap-1.5 sm:gap-2 bg-white rounded-xl sm:rounded-2xl p-1.5 mb-4 sm:mb-6 shadow-sm border border-slate-200/80 overflow-x-auto scrollbar-none snap-x">
          {[
            { id: 'resumo', label: 'Resumo Executivo', icon: FileText },
            { id: 'demandas', label: 'Demandas', icon: Layers },
            { id: 'andamento', label: 'Em Andamento', icon: Rocket },
            { id: 'impedimentos', label: 'Impedimentos', icon: AlertTriangle },
            { id: 'proximos', label: 'Próximos Passos', icon: Clock }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`snap-start shrink-0 sm:shrink sm:flex-1 py-2.5 px-3.5 sm:py-3 sm:px-4 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 flex items-center justify-center gap-2 whitespace-nowrap ${
                  isActive
                    ? 'bg-[#1E2430] text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100/80'
                }`}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Tab Content */}
        <main>
          {/* TAB 1: RESUMO EXECUTIVO */}
          {activeTab === 'resumo' && (
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 shadow-sm border border-slate-200/80 space-y-6 sm:space-y-8 animate-fadeIn">
              <div>
                <h2 className="text-base sm:text-lg font-bold tracking-tight mb-3 sm:mb-4 flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span>VISÃO GERAL</span>
                  <span className="text-xs font-normal text-slate-500">(clique nos cartões para detalhes)</span>
                </h2>

                <div className="bg-blue-50/80 border-l-4 border-blue-600 rounded-xl p-4 sm:p-5 text-xs sm:text-sm md:text-base leading-relaxed text-slate-800 mb-6">
                  <b className="text-blue-700">Ciclo produtivo:</b> a Integração CQI x LASA avançou de 56% para <b>67%</b> — o DEVLASA-522 (Criação do protocolo e vinculação automática de testes) foi <b>concluído</b> e o DEVLASA-523 (Vinculação do protocolo CQI x LASA na importação) foi <b>iniciado</b>. Fora desse fluxo, 7 chamados/ajustes foram resolvidos ou avançaram na semana, incluindo o DEVLASA-530 (falha no termo aditivo por peso de embalagem). Uma nova ideia entrou no backlog. Verificação feita em 12/08 via board de ideias e chamados GLPI.
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {/* Backlog */}
                  <div
                    onClick={() => toggleKpi('backlog')}
                    className="bg-purple-50/70 hover:bg-purple-50 border border-purple-200/80 rounded-2xl p-4 sm:p-5 cursor-pointer transition-all hover:-translate-y-0.5 shadow-xs"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#7B3FC4] rounded-xl flex items-center justify-center text-white text-lg sm:text-xl flex-shrink-0 shadow-xs">
                        🗂️
                      </div>
                      <div className="flex-1">
                        <div className="text-[10px] sm:text-[11px] font-extrabold text-[#7B3FC4] tracking-wider uppercase">BACKLOG</div>
                        <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5 sm:mt-1 flex items-center gap-2">
                          17 <span className="text-xs font-bold text-rose-600">▲ 1</span>
                        </div>
                        <div className="text-[11px] sm:text-xs text-slate-600 mt-0.5">Todas as ideias pendentes</div>
                      </div>
                    </div>
                    {openKpi === 'backlog' && (
                      <div className="mt-3 sm:mt-4 pt-3 border-t border-dashed border-purple-200 text-xs text-slate-700 leading-relaxed animate-fadeIn">
                        1 nova ideia entrou no backlog neste ciclo: "Divergência na Seleção de Cliente ao Informar NF do Lote" (criada em 11/08). Os demais itens não tiveram variação.
                      </div>
                    )}
                  </div>

                  {/* Aguardando */}
                  <div
                    onClick={() => toggleKpi('aguardando')}
                    className="bg-amber-50/70 hover:bg-amber-50 border border-amber-200/80 rounded-2xl p-4 sm:p-5 cursor-pointer transition-all hover:-translate-y-0.5 shadow-xs"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-500 rounded-xl flex items-center justify-center text-white text-lg sm:text-xl flex-shrink-0 shadow-xs">
                        ⏱️
                      </div>
                      <div className="flex-1">
                        <div className="text-[10px] sm:text-[11px] font-extrabold text-amber-700 tracking-wider uppercase">AGUARDANDO</div>
                        <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5 sm:mt-1">4</div>
                        <div className="text-[11px] sm:text-xs text-slate-600 mt-0.5">Ideias priorizadas</div>
                      </div>
                    </div>
                    {openKpi === 'aguardando' && (
                      <div className="mt-3 sm:mt-4 pt-3 border-t border-dashed border-amber-200 text-xs text-slate-700 leading-relaxed animate-fadeIn">
                        Nenhuma variação em relação ao ciclo anterior. Composição: Primeiro Entendimento (1), Pronta para Documentação (1), Pronta para Desenvolvimento (1) e 1 item pendente de retorno.
                      </div>
                    )}
                  </div>

                  {/* Em Andamento */}
                  <div
                    onClick={() => toggleKpi('andamento')}
                    className="bg-blue-50/70 hover:bg-blue-50 border border-blue-200/80 rounded-2xl p-4 sm:p-5 cursor-pointer transition-all hover:-translate-y-0.5 shadow-xs"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white text-lg sm:text-xl flex-shrink-0 shadow-xs">
                        🚀
                      </div>
                      <div className="flex-1">
                        <div className="text-[10px] sm:text-[11px] font-extrabold text-blue-700 tracking-wider uppercase">EM ANDAMENTO</div>
                        <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5 sm:mt-1">1</div>
                        <div className="text-[11px] sm:text-xs text-slate-600 mt-0.5">Sendo desenvolvida</div>
                      </div>
                    </div>
                    {openKpi === 'andamento' && (
                      <div className="mt-3 sm:mt-4 pt-3 border-t border-dashed border-blue-200 text-xs text-slate-700 leading-relaxed animate-fadeIn">
                        Integração CQI x LASA — <b>67%</b> concluída (6/9 tarefas reais), 1 ticket em desenvolvimento (DEVLASA-523) e 2 pendentes.
                      </div>
                    )}
                  </div>

                  {/* Concluídas */}
                  <div
                    onClick={() => toggleKpi('concluidas')}
                    className="bg-emerald-50/70 hover:bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4 sm:p-5 cursor-pointer transition-all hover:-translate-y-0.5 shadow-xs"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white text-lg sm:text-xl flex-shrink-0 shadow-xs">
                        ✅
                      </div>
                      <div className="flex-1">
                        <div className="text-[10px] sm:text-[11px] font-extrabold text-emerald-700 tracking-wider uppercase">CONCLUÍDAS</div>
                        <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5 sm:mt-1 flex items-center gap-2">
                          1 <span className="text-xs font-bold text-emerald-600">▲ 1</span>
                        </div>
                        <div className="text-[11px] sm:text-xs text-slate-600 mt-0.5">Ideias concluídas no período</div>
                      </div>
                    </div>
                    {openKpi === 'concluidas' && (
                      <div className="mt-3 sm:mt-4 pt-3 border-t border-dashed border-emerald-200 text-xs text-slate-700 leading-relaxed animate-fadeIn">
                        DEVLASA-530 — Falha no termo aditivo – peso por embalagem, concluída em 10/08. Além dela, o DEVLASA-522 (Integração CQI x LASA) também foi finalizado.
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Outras Entregas Table */}
              <div>
                <h2 className="text-base sm:text-lg font-bold tracking-tight mb-3 sm:mb-4 flex flex-wrap items-center gap-2">
                  <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wider">CONCLUÍDO</span>
                  <span>OUTRAS ENTREGAS DA SEMANA</span>
                  <span className="text-xs font-normal text-slate-500">(fora do fluxo Integração CQI x LASA)</span>
                </h2>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-slate-100/80 text-slate-600 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider border-b border-slate-200">
                        <th className="p-2.5 sm:p-3">Ticket</th>
                        <th className="p-2.5 sm:p-3">Descrição</th>
                        <th className="p-2.5 sm:p-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr>
                        <td className="p-2.5 sm:p-3 font-bold whitespace-nowrap">DEVLASA-530</td>
                        <td className="p-2.5 sm:p-3">Falha no termo aditivo – peso por embalagem</td>
                        <td className="p-2.5 sm:p-3 whitespace-nowrap"><span className="px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">Concluído</span></td>
                      </tr>
                      <tr>
                        <td className="p-2.5 sm:p-3 font-bold whitespace-nowrap">91079</td>
                        <td className="p-2.5 sm:p-3">Checklist marcado como sem teste</td>
                        <td className="p-2.5 sm:p-3 whitespace-nowrap"><span className="px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">Concluído</span></td>
                      </tr>
                      <tr>
                        <td className="p-2.5 sm:p-3 font-bold whitespace-nowrap">91127</td>
                        <td className="p-2.5 sm:p-3">Talhão 3301-5 não integrou com o sistema Lasa</td>
                        <td className="p-2.5 sm:p-3 whitespace-nowrap"><span className="px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-slate-100 text-slate-600 border border-slate-300">Analisado e descartado</span></td>
                      </tr>
                      <tr>
                        <td className="p-2.5 sm:p-3 font-bold whitespace-nowrap">90228</td>
                        <td className="p-2.5 sm:p-3">Ajuste de sub-campo referente também ao 91127</td>
                        <td className="p-2.5 sm:p-3 whitespace-nowrap"><span className="px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-blue-100 text-blue-800 border border-blue-300">Análise concluída · repassado para Sistemas</span></td>
                      </tr>
                      <tr>
                        <td className="p-2.5 sm:p-3 font-bold whitespace-nowrap">91207</td>
                        <td className="p-2.5 sm:p-3">Ajuste no Mapa de reembalagem</td>
                        <td className="p-2.5 sm:p-3 whitespace-nowrap"><span className="px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">Concluído</span></td>
                      </tr>
                      <tr>
                        <td className="p-2.5 sm:p-3 font-bold whitespace-nowrap">—</td>
                        <td className="p-2.5 sm:p-3">Adição da assinatura digital no Mapa de Reembalagem</td>
                        <td className="p-2.5 sm:p-3 whitespace-nowrap"><span className="px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">Concluído</span></td>
                      </tr>
                      <tr>
                        <td className="p-2.5 sm:p-3 font-bold whitespace-nowrap">—</td>
                        <td className="p-2.5 sm:p-3">Melhoria de performance das consultas</td>
                        <td className="p-2.5 sm:p-3 whitespace-nowrap"><span className="px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">Concluído</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 italic mt-2 sm:mt-3">* Chamados/ajustes pontuais registrados fora do board de ideias e fora do escopo da Integração CQI x LASA.</p>
              </div>
            </div>
          )}

          {/* TAB 2: DEMANDAS */}
          {activeTab === 'demandas' && (
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 shadow-sm border border-slate-200/80 space-y-4 sm:space-y-6 animate-fadeIn">
              <h2 className="text-base sm:text-lg font-bold tracking-tight flex flex-wrap items-center gap-2">
                <span className="bg-purple-600 text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wider">DETALHE</span>
                <span>DEMANDAS PRIORIZADAS — POR ROTEIRO</span>
              </h2>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-200">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <div className="flex items-center gap-2">
                    <Filter className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-500 flex-shrink-0" />
                    <label className="text-xs font-bold text-slate-600 whitespace-nowrap">Setor:</label>
                    <select
                      value={filterSetor}
                      onChange={(e) => setFilterSetor(e.target.value)}
                      className="w-full sm:w-auto px-3 py-1.5 rounded-lg border border-slate-300 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                    >
                      <option value="">Todos os Setores</option>
                      <option value="Laboratório">Laboratório</option>
                      <option value="Indústria">Indústria</option>
                      <option value="PGO">PGO</option>
                      <option value="TI">TI</option>
                    </select>
                  </div>

                  <div className="relative w-full sm:w-64">
                    <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder="Buscar por nome..."
                      value={filterBusca}
                      onChange={(e) => setFilterBusca(e.target.value)}
                      className="w-full pl-8 sm:pl-9 pr-3 py-1.5 rounded-lg border border-slate-300 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                    />
                  </div>
                </div>

                <div className="text-xs text-slate-500 font-medium self-end sm:self-center">
                  {filteredDemandas.length} de {demandasData.length} demandas
                </div>
              </div>

              {/* Demandas Groups */}
              {['AGORA', 'PRÓXIMO', 'PENDENTE', 'SEM ROTEIRO DEFINIDO'].map(roteiroName => {
                const groupItems = filteredDemandas.filter(d => d.roteiro === roteiroName);
                if (groupItems.length === 0) return null;

                const getRoteiroHeaderClass = () => {
                  switch (roteiroName) {
                    case 'AGORA': return 'bg-emerald-600';
                    case 'PRÓXIMO': return 'bg-blue-600';
                    case 'PENDENTE': return 'bg-amber-600';
                    default: return 'bg-slate-600';
                  }
                };

                return (
                  <div key={roteiroName} className="border border-slate-200 rounded-xl overflow-hidden mb-4 sm:mb-6 shadow-2xs">
                    <div className={`${getRoteiroHeaderClass()} text-white font-extrabold text-xs sm:text-sm px-3.5 py-2.5 sm:px-4 sm:py-3 flex items-center justify-between`}>
                      <div className="flex items-center gap-2">
                        <span>{roteiroName === 'AGORA' ? '🟢 AGORA' : roteiroName === 'PRÓXIMO' ? '🔵 PRÓXIMO' : roteiroName === 'PENDENTE' ? '🟠 PENDENTE' : '⚪ SEM ROTEIRO DEFINIDO'}</span>
                        <span className="font-normal text-xs opacity-90">({groupItems.length})</span>
                      </div>
                      <span className="text-[10px] sm:hidden text-white/80">Deslize para ver tabelas →</span>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[550px]">
                        <thead>
                          <tr className="bg-slate-100 text-slate-600 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider border-b border-slate-200">
                            <th className="p-2.5 sm:p-3">Demanda</th>
                            <th className="p-2.5 sm:p-3">Setor Solicitante</th>
                            <th className="p-2.5 sm:p-3">Status</th>
                            <th className="p-2.5 sm:p-3">Chamado GLPI</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                          {groupItems.map(item => (
                            <tr key={item.id} className="hover:bg-slate-50/50">
                              <td className="p-2.5 sm:p-3 font-medium text-slate-900 leading-snug">
                                {item.name}
                                {item.isNew && (
                                  <span className="ml-2 px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-extrabold bg-amber-100 text-amber-800 border border-amber-300 inline-block">
                                    Nova
                                  </span>
                                )}
                              </td>
                              <td className="p-2.5 sm:p-3 text-slate-600 text-xs whitespace-nowrap">{item.setor}</td>
                              <td className="p-2.5 sm:p-3 whitespace-nowrap">
                                <span className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold ${getPillClass(item.statusType)}`}>
                                  {item.status}
                                </span>
                              </td>
                              <td className="p-2.5 sm:p-3 whitespace-nowrap">
                                {item.glpi ? (
                                  <a
                                    href={`https://itsm.attosementes.com.br/front/ticket.form.php?id=${item.glpi}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] sm:text-xs px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md transition-colors shadow-xs"
                                  >
                                    Ver chamado
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                ) : (
                                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[11px] sm:text-xs text-slate-500 bg-slate-100 border border-slate-200">
                                    Sem chamado
                                  </span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                );
              })}

              <p className="text-[11px] sm:text-xs text-slate-500 italic">
                * Agrupamento pelo campo "Roteiro" do CSV de priorização atualizado em 12/08 — 23 demandas ativas (a iniciativa "Integração CQI x LASA" é detalhada na aba "Em Andamento").
              </p>
            </div>
          )}

          {/* TAB 3: EM ANDAMENTO */}
          {activeTab === 'andamento' && (
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 shadow-sm border border-slate-200/80 space-y-4 sm:space-y-6 animate-fadeIn">
              <h2 className="text-base sm:text-lg font-bold tracking-tight flex flex-wrap items-center gap-2">
                <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wider">EM ANDAMENTO</span>
                <span>INTEGRAÇÃO CQI x LASA</span>
              </h2>

              {/* Progress Bar */}
              <div className="bg-slate-200/80 rounded-full h-8 sm:h-10 overflow-hidden flex items-center p-1">
                <div
                  className="bg-emerald-500 h-full rounded-full flex items-center justify-center text-white font-black text-xs sm:text-sm transition-all duration-500 shadow-xs"
                  style={{ width: '67%' }}
                >
                  67%
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                6/9 tarefas reais concluídas · 1 em desenvolvimento · 2 pendentes (4 tickets descartados não entram na conta — escopo real: 9 tarefas). O DEVLASA-522 foi <b>concluído</b> neste ciclo (56% → 67%) e o DEVLASA-523 foi <b>iniciado</b>.
              </p>

              {/* Step Accordion List */}
              <div className="divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden">
                {[
                  { num: 1, name: 'DEVLASA-511 — Integrar o lote do industriatto', status: 'CONCLUÍDO', date: '14/07/2026', type: 'done', resp: 'Equipe de Desenvolvimento' },
                  { num: 2, name: 'DEVLASA-519 — Integrar a criação do protocolo com o lote do industriatto', status: 'CONCLUÍDO', date: '16/07/2026', type: 'done', resp: 'Equipe de Desenvolvimento' },
                  { num: 3, name: 'DEVLASA-513 — Estruturar a Amostra Geral com as amostras derivadas', status: 'CONCLUÍDO', date: '28/07/2026', type: 'done', resp: 'Equipe de Desenvolvimento' },
                  { num: 4, name: 'DEVLASA-512 — Criar nova etiqueta das amostras derivadas', status: 'CONCLUÍDO', date: '04/08/2026', type: 'done', resp: 'Equipe de Desenvolvimento' },
                  { num: 5, name: 'DEVLASA-514 — Implementar as novas etiquetas no serviço de impressão', status: 'CONCLUÍDO', date: '10/08/2026', type: 'done', resp: 'Equipe de Desenvolvimento' },
                  { num: 6, name: 'DEVLASA-522 — Criação do protocolo e vinculação automática de testes', status: 'CONCLUÍDO', date: 'Concluído neste ciclo · Data limite: 21/08/2026', type: 'done', resp: 'Equipe de Desenvolvimento. Finalizado antes do prazo previsto.' },
                  { num: 7, name: 'DEVLASA-523 — Vinculação do protocolo CQI x LASA na importação', status: 'Em desenvolvimento', date: 'Em desenvolvimento · Iniciado neste ciclo · Data limite: 27/08/2026', type: 'dev', resp: 'Equipe de Desenvolvimento. Ticket iniciado neste ciclo, após a conclusão do DEVLASA-522.' },
                  { num: 8, name: 'DEVLASA-516 — Definir as regras de reprocessamento', status: 'Tarefas pendentes', date: 'Data limite: 02/09/2026', type: 'pending', resp: 'Equipe de Desenvolvimento' },
                  { num: 9, name: 'DEVLASA-517 — Definir as regras de TSI', status: 'Tarefas pendentes', date: 'Data limite: 15/09/2026', type: 'pending', resp: 'Equipe de Desenvolvimento' },
                ].map((step) => {
                  const isOpen = openSteps.includes(step.num);
                  return (
                    <div key={step.num} className="bg-white">
                      <div
                        onClick={() => toggleStep(step.num)}
                        className="p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-start sm:items-center gap-2.5 sm:gap-3">
                          <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[11px] sm:text-xs font-bold text-white flex-shrink-0 mt-0.5 sm:mt-0 ${
                            step.type === 'done' ? 'bg-emerald-500' : step.type === 'dev' ? 'bg-blue-600' : 'bg-slate-300'
                          }`}>
                            {step.num}
                          </div>
                          <div className="text-xs sm:text-sm font-semibold text-slate-900 flex flex-wrap items-center gap-1.5 sm:gap-2 leading-snug">
                            <span>{step.name}</span>
                            {step.type === 'done' && (
                              <span className="text-[9px] sm:text-[10px] font-bold text-emerald-600 uppercase bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">CONCLUÍDO</span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-2 text-[11px] sm:text-xs text-slate-500 pl-8 sm:pl-0">
                          <span>{step.date}</span>
                          {isOpen ? <ChevronUp className="w-4 h-4 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 flex-shrink-0" />}
                        </div>
                      </div>

                      {isOpen && (
                        <div className="pl-11 pr-4 sm:px-12 pb-3.5 sm:pb-4 text-xs text-slate-600 border-t border-slate-100 pt-2 animate-fadeIn">
                          <b>Responsável:</b> {step.resp}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Discarded Tickets */}
              <details className="mt-4 text-xs text-slate-600 bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-200">
                <summary className="font-bold cursor-pointer text-slate-700">Tickets descartados (4) — não contam no progresso</summary>
                <div className="mt-2 space-y-1 pl-3 sm:pl-4">
                  <div>• DEVLASA-430 — Documentação CQI x LASA</div>
                  <div>• DEVLASA-520 — Amostra geral com as amostras derivadas</div>
                  <div>• DEVLASA-521 — Impressão etiqueta amostra derivada</div>
                  <div>• DEVLASA-515 — Estruturar uma forma de reimprimir a etiqueta das derivadas</div>
                </div>
              </details>
            </div>
          )}

          {/* TAB 4: IMPEDIMENTOS */}
          {activeTab === 'impedimentos' && (
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 shadow-sm border border-slate-200/80 space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-base sm:text-lg font-bold tracking-tight mb-2 flex items-center gap-2">
                  <span className="bg-rose-600 text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wider">AÇÃO</span>
                  <span>IMPEDIMENTOS</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">Nenhum impedimento ativo neste ciclo.</p>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h2 className="text-base sm:text-lg font-bold tracking-tight mb-2 flex items-center gap-2">
                  <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wider">INFO</span>
                  <span>INFORMAÇÕES</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">Nenhuma informação adicional neste ciclo.</p>
              </div>
            </div>
          )}

          {/* TAB 5: PRÓXIMOS PASSOS */}
          {activeTab === 'proximos' && (
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 shadow-sm border border-slate-200/80 space-y-4 sm:space-y-6 animate-fadeIn">
              <h2 className="text-base sm:text-lg font-bold tracking-tight">PRÓXIMOS PASSOS</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="rounded-2xl p-4 sm:p-6 border-l-4 border-l-blue-600 border border-slate-200 bg-slate-50/50">
                  <div className="font-extrabold text-blue-700 text-xs sm:text-sm mb-2.5 sm:mb-3">EM DESENVOLVIMENTO</div>
                  <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0"></span>
                      <div>
                        <b className="block text-slate-900 font-semibold mb-0.5">DEVLASA-523 — Vinculação do protocolo CQI x LASA na importação</b>
                        Único ticket em desenvolvimento da Integração CQI x LASA no momento. Iniciado neste ciclo após a conclusão do DEVLASA-522.
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl p-4 sm:p-6 border-l-4 border-l-amber-500 border border-slate-200 bg-slate-50/50">
                  <div className="font-extrabold text-amber-700 text-xs sm:text-sm mb-2.5 sm:mb-3">PRÓXIMA A SER PUXADA</div>
                  <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 flex-shrink-0"></span>
                      <div>
                        <b className="block text-slate-900 font-semibold mb-0.5">DEVLASA-516 — Definir as regras de reprocessamento</b>
                        Após a conclusão da demanda em desenvolvimento. Data limite: 02/09/2026.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
