export const FESTIVAL = {
  name: "Rock in Jew",
  tagline: "O ruído encontra a estrela.",
  dateLabel: "22 de novembro de 2026",
  dateShort: "22.11.26",
  doors: "14h",
  ends: "00h30",
  weekday: "Domingo",
  city: "São Paulo",
  venue: "Parque Villa-Lobos",
  address: "Av. Prof. Fonseca Rodrigues, 2001 — Alto de Pinheiros",
  cep: "05461-010",
  email: "shalom@rockinjew.com",
  phone: "+55 11 4002-1818",
  eventAt: "2026-11-22T14:00:00-03:00",
} as const;

export type Artist = {
  id: string;
  name: string;
  image: string;
  day: string;
  time: string;
  stage: string;
  bio: string;
  featured?: boolean;
  houseBand?: boolean;
  members?: string[];
};

export const ARTISTS: Artist[] = [
  {
    id: "the-crown",
    name: "The Crown",
    image: "/images/the-crown.jpg",
    day: "22/11",
    time: "18:40",
    stage: "Palco Magen",
    featured: true,
    houseBand: true,
    members: ["Kai", "MC PR", "MC Jão do Pão"],
    bio: "A banda da casa. Gótica com rap, três homens no palco: Kai no vocal, MC PR nas rimas e MC Jão do Pão no rock. Pouco conhecida — ainda. No Rock in Jew ela sobe entre os gigantes.",
  },
  {
    id: "linkin-park",
    name: "Linkin Park",
    image: "/images/linkin-park.jpg",
    day: "22/11",
    time: "22:40",
    stage: "Palco Magen",
    featured: true,
    bio: "O fechamento da noite. Nu-metal, coros em uníssono e a última chama do Palco Magen.",
  },
  {
    id: "iron-maiden",
    name: "Iron Maiden",
    image: "/images/iron-maiden.jpg",
    day: "22/11",
    time: "20:20",
    stage: "Palco Magen",
    featured: true,
    bio: "Heavy metal em estado puro. Fogo, ferro e o hino que o parque inteiro vai cantar.",
  },
  {
    id: "disturbed",
    name: "Disturbed",
    image: "/images/disturbed.jpg",
    day: "22/11",
    time: "17:10",
    stage: "Palco Magen",
    bio: "Industrial, grave e cerimonial. David Draiman traz o rugido — e a bênção — para a pista.",
  },
  {
    id: "orphaned-land",
    name: "Orphaned Land",
    image: "/images/orphaned-land.jpg",
    day: "22/11",
    time: "18:50",
    stage: "Palco Sinai",
    bio: "Folk metal de Israel. Oud, guitarra e a oração que vira mosh pit.",
  },
  {
    id: "sepultura",
    name: "Sepultura",
    image: "/images/sepultura.jpg",
    day: "22/11",
    time: "16:20",
    stage: "Palco Sinai",
    bio: "O metal brasileiro em casa. Tambor, riff e a terra batendo junto.",
  },
  {
    id: "mashina",
    name: "Mashina",
    image: "/images/mashina.jpg",
    day: "22/11",
    time: "15:00",
    stage: "Palco Sinai",
    bio: "Lendas do rock israelense. Canções que atravessaram Tel Aviv e agora atravessam o Pinheiros.",
  },
  {
    id: "pitty",
    name: "Pitty",
    image: "/images/pitty.jpg",
    day: "22/11",
    time: "17:00",
    stage: "Palco Shalom",
    bio: "Rock brasileiro de pulso aberto. Guitarra, verdade e o meio da tarde pegando fogo.",
  },
  {
    id: "cpm22",
    name: "CPM 22",
    image: "/images/cpm22.jpg",
    day: "22/11",
    time: "15:30",
    stage: "Palco Shalom",
    bio: "Skate punk, coro e chão tremendo. A abertura que não pede licença.",
  },
];

export const FEATURED = ARTISTS.filter((a) => a.featured);

export type Ticket = {
  id: string;
  name: string;
  hebrew: string;
  price: number;
  blurb: string;
  includes: string[];
  highlight?: boolean;
};

export const TICKETS: Ticket[] = [
  {
    id: "pista",
    name: "Pista Shalom",
    hebrew: "שלום",
    price: 190,
    blurb: "O chão, o coro, a estrela acima da fumaça.",
    includes: [
      "Acesso à pista dos três palcos",
      "Food court kosher",
      "Água nos pontos oficiais",
      "Posto de kippah e souvenir",
    ],
  },
  {
    id: "cadeira",
    name: "Cadeira Magen",
    hebrew: "מגן",
    price: 360,
    blurb: "Assento numerado de frente para o Palco Magen.",
    includes: [
      "Assento numerado no Palco Magen",
      "Fila expressa na entrada",
      "Kit bandeira de Israel",
      "Acesso ao food court kosher",
      "Ponto de recarga",
    ],
  },
  {
    id: "camarote",
    name: "Camarote Menorá",
    hebrew: "מנורה",
    price: 780,
    blurb: "O lounge da estrela. Open bar kosher e The Crown de perto.",
    highlight: true,
    includes: [
      "Lounge elevado com vista dos três palcos",
      "Open bar kosher",
      "Meet & greet com The Crown",
      "Estacionamento reservado",
      "Credencial VIP e fila própria",
      "Kit bandeira + pulseira Chai",
    ],
  },
];

export const STAGES = [
  { name: "Palco Magen", note: "Principal · headliners" },
  { name: "Palco Sinai", note: "Metal e rock de Israel" },
  { name: "Palco Shalom", note: "Punk e rock nacional" },
] as const;

export const NAV = [
  { to: "/", label: "Início" },
  { to: "/lineup", label: "Line-up" },
  { to: "/ingressos", label: "Ingressos" },
  { to: "/informacoes", label: "Informações" },
  { to: "/faq", label: "Dúvidas" },
] as const;

export const ALLOWED = [
  "Bandeira de Israel (haste flexível, sem ponta)",
  "Kippah, talit pequeno e hamsa de uso pessoal",
  "Água em garrafa plástica lacrada (até 500 ml)",
  "Protetor solar e boné",
  "Carregador portátil",
  "Medicamento com receita",
  "Protetor auricular",
];

export const FORBIDDEN = [
  "Garrafas de vidro, latinhas e bebidas de fora",
  "Câmera profissional com lente destacável",
  "Drones, lasers e fogos",
  "Armas, sprays e objetos cortantes",
  "Cadeiras na pista",
  "Coolers e caixas de som",
  "Animais (exceto cão-guia)",
];

export const FAQ = [
  {
    q: "Quando abre o parque e quando acaba o show?",
    a: "Os portões abrem às 14h do dia 22 de novembro de 2026. O último acorde no Palco Magen está previsto para 00h30. Recomendamos chegar cedo: a fila da Pista Shalom anda, mas o pátio kosher vale o tempo.",
  },
  {
    q: "The Crown é quem, exatamente?",
    a: "A banda da casa. Três homens — Kai no vocal gótico, MC PR nas rimas e MC Jão do Pão no rock. Pouco conhecida fora do circuito, mas no Rock in Jew ela sobe no Palco Magen às 18h40, entre Disturbed e Iron Maiden. Leva o meet & greet no Camarote Menorá.",
  },
  {
    q: "A comida é kosher?",
    a: "Sim. Todo o food court é kosher, com supervisão no local. Há opções lácteas e cárneas em filas separadas, falafel, pão, e um ponto só de água e chá. O open bar do Camarote Menorá também é kosher.",
  },
  {
    q: "Posso levar a bandeira de Israel?",
    a: "Pode e deve. Haste flexível, sem ponta metálica. É o tecido do festival: azul, branco e o vento do Pinheiros. Bandeiras de outros países também entram, desde que não cubram a visão da pista.",
  },
  {
    q: "Crianças podem entrar?",
    a: "Menores de 16 anos apenas com responsável legal. Menores de 5 anos não pagam na Pista Shalom, sem assento próprio. O volume é de festival de rock — leve protetor auricular.",
  },
  {
    q: "Tem acessibilidade?",
    a: "Sim. Há rampa na entrada principal, sanitários acessíveis, plataforma elevada no Palco Magen e staff treinado. Escreva para shalom@rockinjew.com se precisar de acompanhante ou lugar reservado.",
  },
  {
    q: "Como chego de transporte público?",
    a: "Metrô Vila Madalena (Linha 2-Verde) + ônibus ou app até o parque. CPTM Pinheiros também serve. De carro, o estacionamento do Villa-Lobos é pago e o Camarote Menorá tem vaga reservada. Detalhes na página Informações.",
  },
  {
    q: "E se eu precisar cancelar o ingresso?",
    a: "Reembolso integral até 15 dias antes do evento. Depois disso, apenas transferência de titularidade. Este site é uma demonstração: os botões de compra não processam pagamento de verdade.",
  },
];
