import { FaWhatsapp, FaTelegramPlane, FaLock, FaEnvelope, FaUserFriends } from 'react-icons/fa';

export const ContactInfo = [
  { 
  icon: <FaWhatsapp />, 
  type: 'Atendimento', 
  label: 'WhatsApp', 
  info: '+55 51 98579-0398', 
  url: 'https://wa.me/5551985790398'
},
  { icon: <FaTelegramPlane />, 
    type: 'Atendimento', 
    label: 'Telegram', 
    info: '+55 51 98579-0398', 
  url: 'https://t.me/AfroTech', 
  qrCode: '/img/AtendimentoWA.svg'
},
{ 
  icon: <FaWhatsapp />, 
  type: 'Vendas', 
  label: 'WhatsApp', 
  info: '+55 51 98545-6394', 
  url: 'https://wa.me/5551985456394'
},
  { icon: <FaTelegramPlane />, 
    type: 'Vendas', 
    label: 'Telegram', 
    info: '+55 51 98545-6394', 
  url: 'https://t.me/AfroTech', 
  qrCode: '/img/AtendimentoWA.svg'
},
  { icon: <FaWhatsapp />, 
  type: 'Suporte Técnico', 
  label: 'WhatsApp', 
  info: '+55 51 98559-0254', 
  url: 'https://wa.me/5551985590254', 
  qrCode: '/img/SuporteTecnicoWA.svg'
},
  { icon: <FaEnvelope />, 
  type: 'Atendimento', 
  label: 'Email', 
  info: 'afrotech_admin@proton.me', 
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


export const Employees = [
  {
    name: 'Paulo Neto',
    alias: '(P.C)',
    specialty: 'Desenvolvedor Senior',
    job: 'Fundador & CEO',
    mission: 'Inovar e Criar',
    linkedIn: 'http://www.linkedin.com/in/pc-nunes-8a26a2248',
    imageSrc: '/img/hacker6.png',
  },
  {
    name: 'Bianca Nunes ',
    alias: '(Bia)',
    specialty: 'Analista de Marketing',
    job: 'Co-Fundadora & CMO',
    mission: 'Propagar e Divulgar',
    linkedIn: 'www.linkedin.com/in/fernanda-rodrigues-4276aa26a',
    imageSrc: '/img/fernanda.png',
  },
  {
    name: 'Marcello Andrade',
    alias: '(Cello)',
    specialty: 'Vendedor Senior',
    job: 'Co-Fundador & COS',
    mission: 'Conquistar e Fidelizar',
    linkedIn: 'https://www.linkedin.com/in/marcello-andrade-779174232/',
    imageSrc: '/img/Marcello.png',
  },
];