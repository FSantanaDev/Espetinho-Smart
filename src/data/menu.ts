import { Product } from '../types';

// =========================================================================================
// INSTRUÇÕES PARA TROCAR AS IMAGENS:
// As imagens atuais estão salvas na pasta 'public/img' do projeto.
// Para substituir por fotos reais:
// 1. Coloque suas fotos reais na pasta 'public/img'.
// 2. Mantenha os nomes dos arquivos abaixo ou atualize os caminhos neste arquivo.
// =========================================================================================

export const menuItems: Product[] = [
  // =========================================
  // ESPETINHOS SMART COMPLETOS
  // =========================================
  {
    id: '1',
    name: 'Carne Completo',
    description: 'Acompanha: Vatapá, Vinagrete, Batatonese, Farofa, Arroz',
    price: 29.00,
    category: 'complete',
    image: 'img/carne-completo.jpg'
  },
  {
    id: '2',
    name: 'Frango Completo',
    description: 'Acompanha: Vatapá, Vinagrete, Batatonese, Farofa, Arroz',
    price: 28.00,
    category: 'complete',
    image: 'img/frango-completo.jpg'
  },
  {
    id: '3',
    name: 'Misto (Carne e Calabresa) Completo',
    description: 'Acompanha: Vatapá, Vinagrete, Batatonese, Farofa, Arroz',
    price: 28.00,
    category: 'complete',
    image: 'img/misto-completo.jpg'
  },

  // =========================================
  // ESPETINHO SIMPLES COM FAROFA
  // =========================================
  {
    id: '4',
    name: 'Carne Simples',
    description: 'Com Farofa',
    price: 17.00,
    category: 'simple',
    image: 'img/carne-simples.jpg'
  },
  {
    id: '5',
    name: 'Misto Simples',
    description: 'Com Farofa',
    price: 17.00,
    category: 'simple',
    image: 'img/misto-simples.jpg'
  },
  {
    id: '6',
    name: 'Frango Simples',
    description: 'Com Farofa',
    price: 17.00,
    category: 'simple',
    image: 'img/frango-simples.jpg'
  },

  // =========================================
  // ESPETINHO SIMPLES COM FAROFA E VINAGRETE
  // =========================================
  {
    id: '7',
    name: 'Carne c/ Vinagrete',
    description: 'Com Farofa e Vinagrete',
    price: 20.00,
    category: 'simple-vinaigrette',
    image: 'img/carne-simples.jpg'
  },
  {
    id: '8',
    name: 'Frango c/ Vinagrete',
    description: 'Com Farofa e Vinagrete',
    price: 20.00,
    category: 'simple-vinaigrette',
    image: 'img/frango-simples.jpg'
  },
  {
    id: '9',
    name: 'Misto c/ Vinagrete',
    description: 'Com Farofa e Vinagrete',
    price: 20.00,
    category: 'simple-vinaigrette',
    image: 'img/misto-simples.jpg'
  },

  // =========================================
  // ESPETINHOS SIMPLES COM FAROFA E BATATONESE
  // =========================================
  {
    id: '10',
    name: 'Carne c/ Batatonese',
    description: 'Com Farofa e Batatonese',
    price: 20.00,
    category: 'simple-mayo',
    image: 'img/carne-simples.jpg'
  },
  {
    id: '11',
    name: 'Frango c/ Batatonese',
    description: 'Com Farofa e Batatonese',
    price: 20.00,
    category: 'simple-mayo',
    image: 'img/frango-simples.jpg'
  },
  {
    id: '12',
    name: 'Misto c/ Batatonese',
    description: 'Com Farofa e Batatonese',
    price: 20.00,
    category: 'simple-mayo',
    image: 'img/misto-simples.jpg'
  },

  // =========================================
  // ESPETINHOS SIMPLES COM FAROFA, BATATONESE E VINAGRETE
  // =========================================
  {
    id: '13',
    name: 'Carne Completo Simples',
    description: 'Com Farofa, Batatonese e Vinagrete',
    price: 23.00,
    category: 'simple-all',
    image: 'img/carne-completo.jpg'
  },
  {
    id: '14',
    name: 'Frango Completo Simples',
    description: 'Com Farofa, Batatonese e Vinagrete',
    price: 23.00,
    category: 'simple-all',
    image: 'img/frango-completo.jpg'
  },
  {
    id: '15',
    name: 'Misto Completo Simples',
    description: 'Com Farofa, Batatonese e Vinagrete',
    price: 23.00,
    category: 'simple-all',
    image: 'img/misto-completo.jpg'
  },

  // =========================================
  // PORÇÕES
  // =========================================
  {
    id: '16',
    name: 'Porção de Arroz',
    price: 9.00,
    category: 'portion',
    image: 'img/arroz.jpg'
  },
  {
    id: '17',
    name: 'Porção de Batatonese',
    price: 15.00,
    category: 'portion',
    image: 'img/batatonese.jpg'
  },
  {
    id: '18',
    name: 'Porção de Farofa',
    price: 10.00,
    category: 'portion',
    image: 'img/farofa.jpg'
  },
  {
    id: '19',
    name: 'Porção de Vinagrete',
    price: 12.00,
    category: 'portion',
    image: 'img/vinagrete.jpg'
  },
  {
    id: '20',
    name: 'Porção de Vatapá',
    price: 20.00,
    category: 'portion',
    image: 'img/vatapa.jpg'
  },
  {
    id: '21',
    name: 'Feijão Tropeiro',
    price: 20.00,
    category: 'portion',
    image: 'img/feijao.jpg'
  },
];
