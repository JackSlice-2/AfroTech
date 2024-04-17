export const DiscountButtonText = {
  title: '10% Discount',
  description: 'For Payments in',
  paymentMethods: ['BTC(Bitcoin) ', ' XMR(Monero) ', ' MATIC(Polygon) ', ' BNB(BinanceCoin)'],
};

import { FaWhatsapp, FaTelegramPlane, FaLock, FaEnvelope } from 'react-icons/fa';

export const ContactInfo = [
  { icon: <FaWhatsapp />, label: 'WhatsApp', info: '+55 51 98559-0254', url: 'https://wa.me/5551985590254'},
  { icon: <FaWhatsapp />, label: 'WhatsApp', info: '+55 51 98579-0398', url: 'https://wa.me/5551985790398'},
  { icon: <FaTelegramPlane />, label: 'Telegram', info: '+55 51 98559-0254', url: 'https://t.me/AfroTech'},
  { icon: <FaLock />, label: 'Signal', info: '+55 51 98559-0254', url: 'https://signal.org/'},
  { icon: <FaEnvelope />, label: 'Email', info: 'AfroTech@proton.me', url: 'mailto'},
];

import { Home, Globe, Database, Clipboard, Wrench, AppWindow } from 'lucide-react';

export const ServiceInfo = [
  { icon: <Home />, label: 'Landing Page', 
  description: 'Páginas de destino rápidas e simples, para capturar clientes com um clique!', 
  url: '/services/pages/landingPages' },
  { icon: <Globe />, label: 'Websites', 
  description: 'Sites completos projetados para informar e/ou capturar usuários.', 
  url: '/services/pages/websites' },
  { icon: <AppWindow />, label: 'WebApps', 
  description: 'Aplicativos completos no navegador, para interação, criação e uso.', 
  url: '/services/pages/webapps' },
  { icon: <Database />, label: 'Banco de Dados', 
  description: 'Gestão, manutenção e criação de bancos de dados para otimização.', 
  url: '/services/pages/databases' },
  { icon: <Clipboard />, label: 'CRMs e CRUDs', 
  description: 'Sistemas eficientes de gerenciamento de clientes e dados.', 
  url: '/services/pages/crms-cruds' },
  { icon: <Wrench />, label: 'Manutenção', 
  description: 'Manutenção, edição e atualização de sites e aplicativos.', 
  url: '/services/pages/maintainence' },
];

export const TextImageCardText = {
  title: 'Patience is Key When Troubleshooting.',
  pink: 'What we do',
  description: 'We strive to create the most intuitive and sophisticated User Interface for the best User Experience, in Web, iOS & Android applications.',
};

export const ImageTextCardText = {
  title: "Patience is Key When Troubleshooting.",
  pink: "What we do",
  description: "We strive to create the most intuitive and sophisticated User Interface for the best User Experience, in Web, iOS & Android applications."
}