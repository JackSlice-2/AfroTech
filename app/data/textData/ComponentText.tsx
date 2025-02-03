import { FaWhatsapp, FaTelegramPlane, FaEnvelope } from 'react-icons/fa';

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
    info: '+55 51 98559-0254', 
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

import { Globe, Clipboard, AppWindow } from 'lucide-react';

export const ServiceInfo = [
  { icon: <Globe />, label: 'Websites', 
  description: 'Sites completos projetados para informar e/ou capturar usuários.', 
  url: '/services/pages/websites'},
  { icon: <AppWindow />, label: 'WebApps',
  description: 'Aplicativos completos no navegador para interação, criação e uso.', 
  url: '/services/pages/webapps' },
  { icon: <Clipboard />, label: 'CRMs',
  description: 'Sistemas eficientes de gerenciamento de clientes e dados.', 
  url: '/services/pages/crms' }
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
    mission: 'Arquitetar e Inovar',
    linkedIn: 'https://www.linkedin.com/in/pc-nunes-8a26a2248',
    imageSrc: '/img/hacker6.png',
  },
  {
    name: 'Bianca Nunes ',
    alias: '(Bia)',
    specialty: 'Designer Gráphico',
    job: 'Co-Fundadora & CDO',
    mission: 'Criar e Inspirar',
    linkedIn: 'https://www.linkedin.com/in/fernanda-rodrigues-4276aa26a',
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