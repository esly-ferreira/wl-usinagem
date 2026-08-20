export interface Product {
  id: string;
  sku: string;
  name: string;
  diameter: string;
  length: string;
  application: string;
  ref: string;
  inStock: boolean;
  price: number;
  category: string;
}

export const mockProducts: Product[] = [
  {
    id: 'prod-1',
    sku: '000.939.008.009',
    name: 'Prisioneiro 8X30',
    diameter: 'M8',
    length: '30mm',
    application: 'CARTER OLEO DO MOTOR',
    ref: '000.939.008.009 / 000.939.008.011',
    inStock: true,
    price: 12.90,
    category: 'Prisioneiros'
  },
  {
    id: 'prod-2',
    sku: '000.939.008.083',
    name: 'Prisioneiro 8X42',
    diameter: 'M8',
    length: '42mm',
    application: 'CUBO TOYOTA / TURBINA NO COLETOR ESCAPE',
    ref: '000.939.008.083 / 000.835.008.015',
    inStock: true,
    price: 15.50,
    category: 'Prisioneiros'
  },
  {
    id: 'prod-3',
    sku: '000.939.008.149',
    name: 'Prisioneiro 8X45',
    diameter: 'M8',
    length: '45mm',
    application: 'TURBINA NO COLETOR ESCAPE',
    ref: '000.939.008.149',
    inStock: true,
    price: 18.20,
    category: 'Prisioneiros'
  },
  {
    id: 'prod-4',
    sku: '000.939.010.050',
    name: 'Prisioneiro 10X37',
    diameter: 'M10',
    length: '37mm',
    application: 'TURBINA NO COLETOR ESCAPE',
    ref: '000.939.010.050 / 000.939.010.005',
    inStock: true,
    price: 22.90,
    category: 'Prisioneiros'
  },
  {
    id: 'prod-5',
    sku: '4.020.229.00',
    name: 'Prisioneiro 10X38',
    diameter: 'M10',
    length: '38mm',
    application: 'COLETOR ADMISSÃO - VW',
    ref: '4.020.229.00',
    inStock: false,
    price: 24.50,
    category: 'Prisioneiros'
  },
  {
    id: 'prod-6',
    sku: '000.990.6005',
    name: 'Prisioneiro 10X42',
    diameter: 'M10',
    length: '42mm',
    application: 'COLETOR ESCAPE NO CABEÇOTE',
    ref: '000.990.6005',
    inStock: true,
    price: 26.00,
    category: 'Prisioneiros'
  },
  {
    id: 'prod-7',
    sku: '000.939.010.026',
    name: 'Prisioneiro 10X45',
    diameter: 'M10',
    length: '45mm',
    application: 'COLETOR ESCAPE NO CABEÇOTE FIXAÇÃO DA TURBINA',
    ref: '000.939.010.026 / 159959',
    inStock: true,
    price: 28.90,
    category: 'Prisioneiros'
  },
  {
    id: 'prod-8',
    sku: '34414000016',
    name: 'Prisioneiro 10X46',
    diameter: 'M10',
    length: '46mm',
    application: 'TURBINA',
    ref: '34414000016',
    inStock: true,
    price: 30.50,
    category: 'Prisioneiros'
  },
  {
    id: 'prod-9',
    sku: '000.939.010.011',
    name: 'Prisioneiro 10X48',
    diameter: 'M10',
    length: '48mm',
    application: 'TURBINA NO COLETOR',
    ref: '000.939.010.011',
    inStock: true,
    price: 32.00,
    category: 'Prisioneiros'
  },
  {
    id: 'prod-10',
    sku: '800610',
    name: 'Prisioneiro 10X50',
    diameter: 'M10',
    length: '50mm',
    application: 'CARTER - SCANIA',
    ref: '800610',
    inStock: true,
    price: 35.90,
    category: 'Prisioneiros'
  },
  {
    id: 'prod-11',
    sku: '000.939.010.027',
    name: 'Prisioneiro 10X52',
    diameter: 'M10',
    length: '52mm',
    application: 'COLETOR DE ESCAPE',
    ref: '000.939.010.027',
    inStock: true,
    price: 38.50,
    category: 'Prisioneiros'
  },
  {
    id: 'prod-12',
    sku: '000.939.010.029',
    name: 'Prisioneiro 10X57',
    diameter: 'M10',
    length: '57mm',
    application: 'COLETOR DE ESCAPE',
    ref: '000.939.010.029',
    inStock: false,
    price: 42.00,
    category: 'Prisioneiros'
  },
  {
    id: 'prod-13',
    sku: '000.939.010.015',
    name: 'Prisioneiro 10X60',
    diameter: 'M10',
    length: '60mm',
    application: 'MOTOR DE PARTIDA NA CARCAÇA DA EMBR.',
    ref: '000.939.010.015 / 000.939.010.035',
    inStock: true,
    price: 45.90,
    category: 'Prisioneiros'
  },
  {
    id: 'prod-14',
    sku: '000.939.010.041',
    name: 'Prisioneiro 10X62',
    diameter: 'M10',
    length: '62mm',
    application: 'COLETOR ESCAPE NO CABEÇOTE',
    ref: '000.939.010.041 / 000.939.010.104',
    inStock: true,
    price: 48.00,
    category: 'Prisioneiros'
  },
  {
    id: 'prod-15',
    sku: '000.990.6005-1',
    name: 'Prisioneiro 10X65',
    diameter: 'M10',
    length: '65mm',
    application: 'MOTOR DE PARTIDA',
    ref: '000.990.6005 / 000.939.010.105',
    inStock: true,
    price: 52.50,
    category: 'Prisioneiros'
  },
  {
    id: 'prod-16',
    sku: '000.939.010.116',
    name: 'Prisioneiro 10X72',
    diameter: 'M10',
    length: '72mm',
    application: 'MOTOR DE PARTIDA',
    ref: '000.939.010.116 / 000.939.010.104 / 000.939.010.041',
    inStock: true,
    price: 58.90,
    category: 'Prisioneiros'
  },
  {
    id: 'prod-17',
    sku: '000.990.4805',
    name: 'Prisioneiro 10X75',
    diameter: 'M10',
    length: '75mm',
    application: 'MOTOR DE PARTIDA',
    ref: '000.990.4805',
    inStock: true,
    price: 65.00,
    category: 'Prisioneiros'
  },
  {
    id: 'prod-18',
    sku: 'WL-10X78',
    name: 'Prisioneiro 10X78',
    diameter: 'M10',
    length: '78mm',
    application: 'TURBINA NO COLETOR',
    ref: 'Consulte',
    inStock: true,
    price: 72.00,
    category: 'Prisioneiros'
  }
];
