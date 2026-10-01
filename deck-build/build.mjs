import fs from "node:fs/promises";
import path from "node:path";
import { Presentation, PresentationFile } from "@oai/artifact-tool";
import { pathToFileURL } from "node:url";
const root = process.cwd();
const build = path.join(root, "deck-build");
const finalPath = path.join(root, "output", "Deepfakes_VerificaAI_MTech2026_v2.pptx");
const skill = "C:/Users/educvv/.codex/plugins/cache/openai-primary-runtime/presentations/26.909.12148/skills/presentations";
const { resolvePresentationFont } = await import(pathToFileURL(path.join(skill, "container_tools/artifact_tool_utils.mjs")).href);
const FONT = resolvePresentationFont({ fontFamily: "Arial" });
const K = { bg:"#0A1020", text:"#F5F7FB", muted:"#A0AEC0", dim:"#708198", line:"#27354A", cyan:"#72EDDF", pink:"#FF7994", lime:"#CDF36F", dark:"#0A1821" };
const deck = Presentation.create({ slideSize:{width:1280,height:720} });
function shp(slide,geom,x,y,w,h,fill="none",stroke="none",sw=0){return slide.shapes.add({geometry:geom,position:{left:x,top:y,width:w,height:h},fill,line:{style:"solid",fill:stroke,width:sw}});}
function t(slide,value,x,y,w,h,size=20,color=K.text,bold=false,align="left"){
  const a=shp(slide,"textbox",x,y,w,h); a.text=value;
  a.text.style={typeface:FONT,fontSize:size,color,bold,alignment:align,verticalAlignment:"middle",wrap:"square",autoFit:"shrinkText",insets:{top:0,right:1,bottom:0,left:0}}; return a;
}
function rule(slide,x,y,w,color=K.line,h=1){shp(slide,"rect",x,y,w,h,color);}
function notes(slide,value){slide.speakerNotes.textFrame.setText(value);}
function page(section,title,n,size=40){
  const s=deck.slides.add(); s.background.fill=K.bg;
  t(s,"VERIFICA.AI",72,32,170,24,14,K.cyan,true);
  t(s,section.toUpperCase(),72,91,850,20,12,K.cyan,true);
  t(s,title,72,122,1136,83,size,K.text,true);
  rule(s,72,674,1136);
  t(s,"MARATONA TECH 2026  •  ENSINO MÉDIO / N3",72,682,800,18,11,K.dim,true);
  t(s,String(n).padStart(2,"0"),1162,682,46,18,12,K.cyan,true,"right"); return s;
}

// 01 Capa
{
 const s=deck.slides.add(); s.background.fill=K.bg;
 t(s,"VERIFICA.AI",72,44,190,27,16,K.cyan,true);
 t(s,"MARATONA TECH 2026   /   FASE 1   /   N3",72,94,650,22,13,K.muted,true);
 rule(s,72,143,82,K.cyan,3);
 t(s,"Deepfakes\ne desinformação",72,174,815,180,66,K.text,true);
 t(s,"Como verificar conteúdos que parecem reais",76,372,760,39,27,K.cyan);
 t(s,"PROJETO DE ANÁLISE E RECOMENDAÇÕES PÚBLICAS",76,434,680,23,14,K.muted,true);
 rule(s,76,492,1128);
 t(s,"Colégio Estadual Marechal Costa e Silva  •  Cidade Gaúcha, Paraná  •  3º ano D",76,511,1128,27,18,K.text,true);
 ["Eduardo Valentin Carneiro","Luiz Gabriel Alves dos Santos","Thiago Henrique Malta Garcia","Felype Justino da Silva","Paulo Ricardo Nunes da Silva","Adryan Vinicius de Almeida"].forEach((n,i)=>t(s,n,76+(i%3)*374,566+Math.floor(i/3)*31,355,24,14,K.muted));
 t(s,"ANTES DE COMPARTILHAR, CONFIRA.",76,653,650,21,13,K.lime,true);
 notes(s,"Abertura — Eduardo. Apresente grupo e tema. Diga que investigamos como conteúdos sintéticos podem parecer autênticos e propomos práticas de verificação. Não prometa detecção automática.");
}
// 02 Problema
{
 const s=page("01 / Problema","Deepfake: quando a aparência não basta",2,40);
 t(s,"Deepfakes são áudios, fotos ou vídeos criados ou modificados com IA generativa e alto grau de realismo.",72,238,760,104,29,K.text,true);
 t(s,"O problema aparece quando o conteúdo é apresentado sem contexto ou como registro verdadeiro — e circula antes de ser verificado.",72,365,730,80,21,K.muted);
 rule(s,858,238,2,K.cyan,300);
 t(s,"POR QUE INVESTIGAR?",895,248,300,20,12,K.pink,true);
 t(s,"Imagem e voz podem influenciar o que as pessoas acreditam.",895,278,300,67,20,K.text);
 rule(s,895,367,294);
 t(s,"Os riscos envolvem dados pessoais, reputação, golpes e confiança pública.",895,386,300,79,18,K.muted);
 t(s,"A ANPD analisa os impactos dos deepfakes sobre dados e segurança digital no Brasil.",72,544,1115,44,16,K.cyan);
 notes(s,"Eduardo. Explique a definição da ANPD. Nem toda edição é deepfake, e nem todo uso de IA é malicioso. Fontes: ANPD, Radar Tecnológico nº 6 (2026), https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-publica-radar-tecnologico-sobre-deepfakes ; Material do Estudante Maratona Tech 2026, Ensino Médio/N3.");
}
// 03 Artefato nacional
{
 const s=page("02 / Artefato digital • caso público","Vídeo de IA analisado pelo TSE em 2026",3,39);
 t(s,"CONVENÇÃO NACIONAL  ·  25 JUL 2026",72,230,510,20,13,K.pink,true);
 t(s,"Um vídeo gerado por IA recriou a imagem e a voz de Jair Bolsonaro declarando apoio à candidatura do filho.",72,267,650,104,27,K.text,true);
 t(s,"Uma federação partidária questionou o conteúdo. Em 1º de setembro, o TSE julgou o caso e definiu critérios para caracterizar deepfake nas eleições.",72,393,645,91,19,K.muted);
 rule(s,774,238,2,K.line,294);
 t(s,"POR QUE É UM ARTEFATO N3?",812,247,365,20,12,K.cyan,true);
 t(s,"Conteúdo audiovisual real, discutido em processo de alcance nacional e ligado à circulação de informação política.",812,283,365,105,20,K.text);
 rule(s,812,407,360);
 t(s,"A análise exige olhar para conteúdo, linguagem, público e contexto — não só para o realismo visual.",812,426,365,90,17,K.muted);
 t(s,"O TSE rejeitou o pedido de multa no caso concreto; isso não é autorização geral para qualquer uso de deepfake.",72,553,1115,44,15,K.lime,true);
 notes(s,"Luiz Gabriel. O vídeo, exibido na Convenção Nacional do PL, recriou Jair Bolsonaro declarando apoio à candidatura de Flávio Bolsonaro. A FE Brasil contestou. O TSE rejeitou o pedido de multa por 4 votos a 3 e fixou critérios; para a regra eleitoral discutida, a vedação pressupõe propaganda eleitoral. A decisão depende do contexto e não dá permissão geral. Fonte: TSE, “TSE fixa tese sobre deepfake e delimita regra para as Eleições 2026”, 1–2 set. 2026, https://www.tse.jus.br/comunicacao/noticias/2026/Setembro/tse-fixa-tese-sobre-deepfake-e-delimita-regra-para-as-eleicoes-2026");
}
// 04 Evidência e limites
{
 const s=page("03 / Relatório técnico","O que sabemos — e o que não podemos presumir",4,37);
 t(s,"CONFIRMADO NA FONTE PÚBLICA",72,244,505,20,12,K.cyan,true); rule(s,72,270,505,K.cyan,2);
 t(s,"• Vídeo gerado por IA.\n• Recriou imagem e voz de pessoa pública.\n• Foi exibido em convenção partidária.\n• A Justiça avaliou o contexto da comunicação.",72,292,505,180,20,K.text);
 t(s,"NÃO INFORMADO NA NOTÍCIA DO JULGAMENTO",657,244,551,20,12,K.pink,true); rule(s,657,270,551,K.pink,2);
 t(s,"• Arquivos usados para gerar o vídeo.\n• Como foi recomendado no feed.\n• Quantas pessoas viram ou compartilharam.\n• Se o público percebeu que era sintético.",657,292,551,180,20,K.text);
 t(s,"Conclusão técnica: separamos fatos confirmados de hipóteses sobre dados e alcance.",72,541,1110,48,19,K.lime,true);
 notes(s,"Luiz Gabriel. A notícia confirma a geração por IA e a recriação de imagem e voz. Não detalha dados de treinamento nem métricas de alcance algorítmico. Não inventem esses elementos. Fonte: TSE, https://www.tse.jus.br/comunicacao/noticias/2026/Setembro/tse-fixa-tese-sobre-deepfake-e-delimita-regra-para-as-eleicoes-2026");
}
// 05 Cadeia
{
 const s=page("04 / Funcionamento","Da matéria-prima ao conteúdo compartilhado",5,40);
 const steps=[["01","Dados disponíveis","Imagens, voz e vídeos podem compor o rastro digital."],["02","Alteração com IA","Um modelo gera ou modifica elementos audiovisuais."],["03","Publicação","Legenda e contexto influenciam a interpretação."],["04","Circulação","Repasses e recomendações podem ampliar a audiência."]];
 steps.forEach((a,i)=>{const x=72+i*286;t(s,a[0],x,253,43,28,14,i===2?K.pink:K.cyan,true);rule(s,x,294,262,i===2?K.pink:K.cyan,2);t(s,a[1],x,315,264,39,21,K.text,true);t(s,a[2],x,366,264,77,16,K.muted);if(i<3)t(s,"→",x+264,306,26,31,23,K.cyan,true,"center");});
 rule(s,72,488,1136);
 t(s,"A circulação pode ser rápida; por isso, a checagem precisa vir antes do compartilhamento.",72,514,1050,50,22,K.lime,true);
 notes(s,"Thiago. Percorra a cadeia sem atribuir ao caso informações que a fonte não traz. Imagens e voz podem servir de insumo em fluxos de geração, mas a matéria consultada não especifica quais dados foram usados. Fonte: ANPD, Radar Tecnológico nº 6, https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-publica-radar-tecnologico-sobre-deepfakes");
}
// 06 Causa-raiz
{
 const s=page("05 / Relatório técnico • causa-raiz","A causa não é só a existência da IA",6,40);
 t(s,"CAUSA-RAIZ",72,241,220,22,13,K.pink,true);
 t(s,"Conteúdo convincente pode circular sem origem clara e sem verificação antes do repasse.",72,280,1050,83,31,K.text,true);
 rule(s,72,394,1136);
 const f=[["TECNOLOGIA","Ferramentas facilitam criar ou alterar mídia realista."],["CONTEXTO","A publicação pode omitir autoria, data ou aviso de síntese."],["HÁBITO","Pressa e compartilhamento impulsivo reduzem a checagem."]];
 f.forEach((a,i)=>{const x=72+i*382;t(s,a[0],x,423,340,20,12,i===1?K.pink:K.cyan,true);t(s,a[1],x,454,330,59,17,K.muted);if(i<2)rule(s,x+347,421,1,K.line,112);});
 t(s,"Recomendadores podem contribuir para o alcance, mas não são a causa isolada.",72,556,1080,34,17,K.lime,true);
 notes(s,"Thiago. Causa-raiz: mídia sintética realista junto a falta de proveniência/contexto e circulação antes da checagem. Recomendações algorítmicas podem influenciar distribuição, mas não são causa única. Fonte: ANPD, Radar Tecnológico nº 6, https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-publica-radar-tecnologico-sobre-deepfakes");
}
// 07 Dados e rastro
{
 const s=page("06 / Dados e rastro digital","Imagem e voz também pedem cuidado",7,40);
 t(s,"FOTOS",72,247,130,24,14,K.cyan,true);t(s,"VÍDEOS",252,247,130,24,14,K.pink,true);t(s,"ÁUDIOS",430,247,130,24,14,K.lime,true);
 t(s,"Quando permitem identificar alguém, esses registros podem ser dados pessoais.",72,294,490,90,24,K.text,true);
 t(s,"Publicar em perfil aberto não significa consentir com qualquer reutilização.",72,411,490,65,18,K.muted);
 rule(s,626,240,2,K.line,315);
 t(s,"RASTRO DIGITAL",670,247,485,20,12,K.cyan,true);
 t(s,"Publicações • cópias • repostagens • gravações",670,286,485,35,19,K.text,true);
 t(s,"Quanto mais registros circulam, mais importante é cuidar da privacidade e da autorização de uso.",670,344,485,73,18,K.muted);
 rule(s,670,439,465);
 t(s,"Nuance: fotos e áudios identificáveis são dados pessoais; biometria vinculada a alguém tem proteção especial na LGPD.",670,459,472,90,15,K.lime,true);
 notes(s,"Felype. Relacione o rastro digital a fotos, áudios e publicações que podem permanecer disponíveis ou ser replicados. A LGPD define dado pessoal como informação ligada a pessoa identificada ou identificável. Não diga que toda foto é automaticamente dado biométrico: biometria vinculada à pessoa é dado sensível. Fontes: ANPD, Titular de Dados, https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados ; ANPD, Perguntas Frequentes, https://www.gov.br/anpd/pt-br/acesso-a-informacao/perguntas-frequentes ; Lei 13.709/2018, art. 5º, https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm");
}
// 08 Algoritmos
{
 const s=page("07 / Algoritmos","Recomendação organiza o feed; não verifica a verdade",8,37);
 [["Sinais de interesse",72],["Seleção de conteúdo",353],["Feed personalizado",638],["Mais exposição",920]].forEach((a,i)=>{t(s,a[0],a[1],270,225,42,19,i===3?K.pink:K.text,true,"center");if(i<3)t(s,"→",a[1]+229,271,42,40,26,i===2?K.pink:K.cyan,true,"center");});
 rule(s,72,339,1074);
 t(s,"PODE FAZER",72,374,477,20,12,K.cyan,true);
 t(s,"Personalizar a ordem e a recomendação a partir de sinais de interesse.",72,403,477,66,19,K.text);
 t(s,"NÃO FAZ POR SI SÓ",657,374,481,20,12,K.pink,true);
 t(s,"Confirmar autoria, provar veracidade ou substituir a checagem humana.",657,403,481,66,19,K.text);
 t(s,"A notícia do TSE não mede o efeito do algoritmo sobre o alcance daquele vídeo.",72,530,1075,40,15,K.lime,true);
 notes(s,"Felype. Sistemas de recomendação personalizam o que aparece conforme possíveis interesses; isso pode influenciar visibilidade, mas não checa a veracidade. A notícia do TSE não mede o alcance algorítmico do vídeo do caso, então este é um mecanismo geral. Fonte: SECOM, “Conhecendo os riscos”, https://www.gov.br/secom/pt-br/assuntos/uso-de-telas-por-criancas-e-adolescentes/guia/capitulos/conhecendo-os-riscos ; TSE, https://www.tse.jus.br/comunicacao/noticias/2026/Setembro/tse-fixa-tese-sobre-deepfake-e-delimita-regra-para-as-eleicoes-2026");
}
// 09 Riscos
{
 const s=page("08 / Diagnóstico dos riscos sociais","O impacto vai além de uma tela",9,40);
 const r=[["01","INFORMACIONAL","Uma fala falsa pode ser tomada como registro verdadeiro.",K.cyan],["02","REPUTAÇÃO E BEM-ESTAR","A pessoa retratada pode sofrer exposição ou desconfiança.",K.pink],["03","ECONÔMICO","Imagem ou voz clonada pode dar credibilidade a fraudes.",K.lime],["04","COLETIVO","Conteúdo enganoso pode confundir o debate público.",K.cyan]];
 r.forEach((a,i)=>{const x=72+(i%2)*578,y=248+Math.floor(i/2)*157;t(s,a[0],x,y,42,32,14,a[3],true);t(s,a[1],x+57,y,435,23,12,a[3],true);t(s,a[2],x+57,y+34,447,68,17,K.text);rule(s,x,y+119,520);});
 t(s,"A ANPD destaca riscos de fraude, violência digital e desinformação eleitoral no Brasil.",72,584,1090,36,16,K.muted);
 notes(s,"Paulo. Apresente os eixos informacional, reputacional/emocional, econômico e coletivo. A ANPD relaciona uso indevido de deepfakes a golpes, fraudes, violência de gênero e manipulação eleitoral; não diga que todos ocorreram no caso do TSE. Fonte: ANPD, Radar Tecnológico nº 6, https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-publica-radar-tecnologico-sobre-deepfakes");
}
// 10 Profissional
{
 const s=page("09 / Perfil profissional","Engenharia de software pode apoiar a verificação",10,36);
 t(s,"A contribuição não é prometer um detector infalível: é criar ferramentas transparentes e responsáveis.",72,241,1036,66,24,K.text,true);
 rule(s,72,340,1136);
 const p=[["PROCEDÊNCIA","Ajudar a localizar fonte original e preservar contexto."],["TRANSPARÊNCIA","Mostrar limites e incertezas do sistema."],["PRIVACIDADE","Evitar recolher imagem e voz sem necessidade."]];
 p.forEach((a,i)=>{const x=72+i*382;t(s,a[0],x,376,330,21,12,[K.cyan,K.pink,K.lime][i],true);t(s,a[1],x,410,330,70,17,K.muted);if(i<2)rule(s,x+350,374,1,K.line,128);});
 t(s,"O Verifica.AI é um protótipo educativo; não analisa arquivos nem classifica vídeos.",72,548,1120,45,17,K.lime,true);
 notes(s,"Paulo. Área escolhida: Engenharia de Software. O profissional pode desenvolver soluções para buscar proveniência e contexto e explicar limites. Modelos podem errar e não substituem confirmação por fontes. O site da equipe é protótipo educativo sem análise real de arquivos. Fonte: Governo Digital, Guia IA Generativa, https://www.gov.br/governodigital/pt-br/infraestrutura-nacional-de-dados/inteligencia-artificial-1/publicacoes/guia-ia-generativa");
}
// 11 Recomendações públicas
{
 const s=page("10 / Guia de análise e recomendações públicas","PARE. VERIFIQUE. PENSE. CONTEXTUALIZE.",11,37);
 const w=[["01","PARE","Não repasse por impulso.",K.pink],["02","VERIFIQUE","Encontre a publicação original.",K.cyan],["03","PENSE","Compare data, contexto e fontes.",K.lime],["04","CONTEXTUALIZE","Só compartilhe com confirmação.",K.cyan]];
 w.forEach((a,i)=>{const x=72+i*286;t(s,a[0],x,251,40,27,13,a[3],true);t(s,a[1],x,291,260,28,19,a[3],true);t(s,a[2],x,336,252,59,17,K.text);if(i<3)rule(s,x+269,250,1,K.line,140);});
 rule(s,72,433,1136);
 t(s,"NA ESCOLA",72,462,335,20,12,K.cyan,true);t(s,"Usem exemplos identificados e conversem sobre contexto.",72,491,335,66,16,K.text);
 t(s,"NAS PLATAFORMAS",457,462,335,20,12,K.pink,true);t(s,"Peçam transparência, origem e canais de denúncia.",457,491,335,66,16,K.text);
 t(s,"SE ALGUÉM FOR PREJUDICADO",842,462,333,20,12,K.lime,true);t(s,"Guardem evidências, denunciem e busquem apoio.",842,491,333,66,16,K.text);
 t(s,"Um sinal estranho pede checagem; sozinho, não prova manipulação.",72,584,1090,30,15,K.muted,true);
 notes(s,"Adryan. Apresente o guia: pausar, buscar fonte, comparar contexto e só compartilhar com confirmação. Na escola, usem exemplos identificados; se houver dano, preservem evidências e busquem apoio. A ANPD ressalta letramento e educação midiática e transparência algorítmica. Fonte: ANPD Radar Tecnológico nº 6, https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-publica-radar-tecnologico-sobre-deepfakes");
}
// 12 Campanha
{
 const s=deck.slides.add();s.background.fill=K.cyan;
 t(s,"VERIFICA.AI  /  CAMPANHA DIGITAL",72,42,820,21,13,K.dark,true);
 t(s,"NEM TUDO QUE\nVOCÊ VÊ É REAL.",72,120,775,166,58,K.dark,true);
 t(s,"Antes de compartilhar, confira.",76,305,685,36,25,"#0D6970",true);
 rule(s,76,376,1115,"#0D6970",2);
 [["01","PARE"],["02","VERIFIQUE"],["03","PENSE"],["04","COMPARTILHE"]].forEach((a,i)=>{const x=76+i*280;t(s,a[0],x,408,55,29,14,"#0D6970",true);t(s,a[1],x,451,270,42,a[1]==="COMPARTILHE"?21:26,K.dark,true);});
 t(s,"VERIFICA.AI",76,548,195,32,17,K.dark,true);
 t(s,"Protótipo educativo: guia de checagem + desafio “Real ou IA?”",76,586,865,30,17,"#14424A");
 t(s,"NÃO É UM DETECTOR DE DEEPFAKES",76,635,700,19,12,"#14515A",true);
 t(s,"MARATONA TECH 2026  •  3º ANO D",865,635,336,19,11,"#14515A",true,"right");
 notes(s,"Adryan. Apresente a campanha visual: pare, verifique, pense e compartilhe apenas com contexto confirmado. O site reúne um guia e um desafio educativo; não analisa arquivos nem detecta deepfakes. Para demonstrar exemplos, usem vídeos e imagens com origem conhecida, permissão de uso e aviso claro quando forem sintéticos ou encenados. Evitem usar colegas sem autorização.");
}
// 13 Conclusão
{
 const s=page("11 / Conclusão","A confiança começa antes do compartilhamento",13,40);
 t(s,"A tecnologia pode fabricar aparência.\nA verificação recupera a origem e o contexto.",72,250,1040,100,31,K.text,true);
 rule(s,72,394,1136,K.cyan,2);
 t(s,"O QUE APRENDEMOS",72,426,270,22,13,K.cyan,true);
 t(s,"Deepfakes envolvem dados, ferramentas, escolhas humanas e formas de circulação. Nenhum detalhe visual substitui uma boa checagem.",72,461,855,68,19,K.muted);
 t(s,"Antes de compartilhar, verifique.",72,563,950,46,25,K.lime,true);
 t(s,"Obrigado. Perguntas?",72,625,400,28,16,K.text,true);
 notes(s,"Adryan. Feche retomando a ideia central. Pergunte: “Que fonte você procuraria primeiro antes de compartilhar este vídeo?” Convide a turma a experimentar o desafio do site.");
}
// 14 Referências
{
 const s=page("12 / Referências","Fontes para continuar a investigação",14,40);
 const refs=[["ANPD · Radar Tecnológico nº 6: Deepfakes (2026)","Definição, funcionamento, proteção de dados e riscos.",K.cyan],["TSE · Tese sobre deepfake e Eleições 2026 (set. 2026)","Caso público, critérios jurídicos e contexto.",K.pink],["SECOM · Guia “Conhecendo os riscos”","IA generativa e recomendação de conteúdo.",K.lime],["ANPD · Titular de Dados / Perguntas Frequentes","Dado pessoal, aparência e biometria na LGPD.",K.cyan],["Lei nº 13.709/2018 · LGPD, art. 5º","Definições legais de dado pessoal e sensível.",K.pink],["Maratona Tech 2026 · Material do Estudante, N3","Requisitos do relatório e das recomendações.",K.lime]];
 refs.forEach((a,i)=>{const col=i<3?0:1,row=i%3,x=72+col*585,y=234+row*119;rule(s,x,y,4,a[2],65);t(s,a[0],x+20,y+1,520,27,15,K.text,true);t(s,a[1],x+20,y+35,515,43,14,K.muted);});
 t(s,"Links completos e roteiro de fala estão nas notas do apresentador.",72,608,1120,28,13,K.cyan,true);
 notes(s,"Fontes consultadas em 30/09/2026. 1) ANPD, “ANPD publica Radar Tecnológico sobre deepfakes”, 29 jul. 2026. https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-publica-radar-tecnologico-sobre-deepfakes\n2) TSE, “TSE fixa tese sobre deepfake e delimita regra para as Eleições 2026”, 1–2 set. 2026. https://www.tse.jus.br/comunicacao/noticias/2026/Setembro/tse-fixa-tese-sobre-deepfake-e-delimita-regra-para-as-eleicoes-2026\n3) SECOM, “Conhecendo os riscos”, Guia sobre uso de telas por crianças e adolescentes. https://www.gov.br/secom/pt-br/assuntos/uso-de-telas-por-criancas-e-adolescentes/guia/capitulos/conhecendo-os-riscos\n4) ANPD, “Titular de Dados”. https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados ; ANPD, “Perguntas Frequentes”. https://www.gov.br/anpd/pt-br/acesso-a-informacao/perguntas-frequentes\n5) Brasil. Lei nº 13.709, de 14 ago. 2018 (LGPD), art. 5º. https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm\n6) Maratona Tech. Material do Estudante — Fase 1 2026, Ensino Médio/N3, fornecido pela equipe.");
}

await fs.mkdir(build,{recursive:true});await fs.mkdir(path.dirname(finalPath),{recursive:true});
const candidate=path.join(build,"candidate.pptx");await(await PresentationFile.exportPptx(deck)).save(candidate);
for(let i=0;i<deck.slides.items.length;i++){const preview=await deck.export({slide:deck.slides.items[i],format:"png",scale:0.65});await fs.writeFile(path.join(build,"slide-"+String(i+1).padStart(2,"0")+".png"),new Uint8Array(await preview.arrayBuffer()));}
console.log(JSON.stringify({candidate,finalPath,slides:deck.slides.items.length,font:FONT}));
