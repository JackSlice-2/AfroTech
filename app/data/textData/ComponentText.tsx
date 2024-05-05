import { FaWhatsapp, FaTelegramPlane, FaLock, FaEnvelope, FaUserFriends } from 'react-icons/fa';

export const ContactInfo = [
  { 
  icon: <FaWhatsapp />, 
  type: 'Atendimento', 
  label: 'WhatsApp', 
  info: '+55 51 98579-0398', 
  url: 'https://wa.me/5551985790398'
},
  { icon: <FaTelegramPlane />, type: 'Atendimento', label: 'Telegram', info: '+55 51 98579-0398', 
  url: 'https://t.me/AfroTech', qrCode: '/img/AtendimentoWA.svg'},
  { icon: <FaLock />, type: 'Atendimento', label: 'Signal', info: '+55 51 98579-0398', 
  url: 'https://signal.me/#eu/7xSmnAgJoHlU2Z6SGzZTBPY2yFIYsmG-EhfXXfGRK7-zlfbbsEFCjomO7HnNL8DW', qrCode: '/img/AtendimentoSignal.svg'},
  { icon: <FaWhatsapp />, type: 'Suporte Técnico', label: 'WhatsApp', info: '+55 51 98559-0254', 
  url: 'https://wa.me/5551985590254', qrCode: '/img/SuporteTecnicoWA.svg'},
  { icon: <FaEnvelope />, type: 'Atendimento', label: 'Email', info: 'afrotech_admin@proton.me', 
  url: 'mailto:afrotech_admin@proton.me?subject=Inquiry&body=Hello,%20I%20have%20a%20question%20about%20your%20services.'},
];

import { Globe, Clipboard, Wrench, AppWindow } from 'lucide-react';
import { BsGoogle } from 'react-icons/bs';

export const ServiceInfo = [
  { icon: <Globe />, label: 'Websites', 
  description: 'Sites completos projetados para informar e/ou capturar usuários.', 
  url: '/services/pages/websites'},
  { icon: <FaUserFriends />, label: 'Consultoria para Iniciantes', 
  description: 'Nós entendemos que nem todos tem conhecimento técnico, e temos um setor decicado a auxiliar o desenvolvimento.', 
  url: '/services/pages/consult' },
  { icon: <BsGoogle />, label: 'Google Ads',
  description: 'Criamos campanhas no Google para exibir anúncios específicos para seu público-alvo e converetê-los em clientes.', 
  url: '/services/pages/googleAds' },
  { icon: <AppWindow />, label: 'WebApps',
  description: 'Aplicativos completos no navegador para interação, criação e uso.', 
  url: '/services/pages/webapps' },
  { icon: <Clipboard />, label: 'CRMs',
  description: 'Sistemas eficientes de gerenciamento de clientes e dados.', 
  url: '/services/pages/crms' },
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