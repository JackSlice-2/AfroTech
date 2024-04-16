import Navbar from '@/app/components/Navbar';
import Image from 'next/image';
import React from 'react';

const WebsitesInfo = [
 {
    title: 'Como um Site Pode Impulsionar o Seu Negócio?',
    description: ' Ter um site é essencial para qualquer empresa, pois ele serve como um ponto de contato com o mundo digital, aumentando a visibilidade e acessibilidade da sua marca. Um site bem projetado e otimizado pode atrair mais clientes, aumentar as vendas e fornecer uma plataforma para compartilhar informações valiosas sobre seus produtos ou serviços. Além disso, um site pode ser uma ferramenta poderosa para engajamento e interação com os clientes, construindo uma comunidade em torno da sua marca',
    img: '/img/test.png/',
 },
 {
    title: 'Vantagens de um Site para Vendas Online',
    description: 'Um site é uma plataforma ideal para expandir as vendas online, oferecendo uma experiência de compra conveniente e personalizada para os clientes. Com a capacidade de exibir produtos detalhadamente, fornecer descrições e imagens de alta qualidade, e oferecer opções de pagamento seguras, um site pode facilitar o processo de compra, aumentando a taxa de conversão e a satisfação do cliente. Além disso, um site pode ser integrado com sistemas de gerenciamento de pedidos e inventário, permitindo que as empresas gerenciem suas operações de vendas de forma eficiente.',
    img: '/img/test.png/',
 },
 {
    title: 'Como um Site Pode Aumentar a Credibilidade da Sua Marca',
    description: 'Um site bem estruturado e otimizado para SEO pode aumentar significativamente a credibilidade e a confiança dos clientes na sua marca. Ao fornecer informações detalhadas, testemunhos de clientes e conteúdo de alta qualidade, um site pode demonstrar a competência e a confiabilidade da sua empresa. Além disso, um site que se destaca em termos de design, usabilidade e conteúdo pode ser visto como um reflexo da sua marca, reforçando sua imagem positiva e atraindo mais clientes ',
    img: '/img/test.png/',
 },
 {
    title: 'Estratégias de Conteúdo para Sites',
    description: 'Criar e publicar conteúdo relevante e envolvente é crucial para aumentar o engajamento dos visitantes e melhorar a experiência do usuário em um site. Isso inclui a criação de blogs, vídeos de demonstração de produtos, FAQs e conteúdo interativo que responde às necessidades e interesses dos clientes. Um site que oferece valor e informações úteis pode atrair e reter visitantes, aumentando a probabilidade de conversão e a lealdade da marca',
    img: '/img/test.png/',
 },
 {
    title: 'Como Escolher o Tipo Certo de Site para o Seu Negócio',
    description: 'A escolha do tipo de site (por exemplo, blog, e-commerce, portfólio) deve ser baseada nas necessidades específicas do seu negócio. Um site de e-commerce é ideal para vendas online, enquanto um blog pode ser usado para compartilhar informações e insights sobre o setor. Um portfólio é perfeito para mostrar o trabalho de design ou fotografia, e um site corporativo pode servir como um hub central para informações da empresa. A escolha do tipo certo de site pode ter um impacto significativo na eficácia das suas estratégias de marketing e na experiência do usuário',
    img: '/img/test.png/',
 },
 {
  title: 'Como um Site Pode Apoiar o Marketing Digital',
  description: 'Integrar um site com outras estratégias de marketing digital, como SEO, mídias sociais e email marketing, pode ampliar o alcance e a eficácia do seu marketing. Um site otimizado para SEO pode atrair tráfego orgânico, enquanto as mídias sociais podem ser usadas para promover conteúdo do site e interagir com os clientes. O email marketing pode ser usado para enviar informações diretamente aos clientes, e a integração de todas essas estratégias pode criar um marketing digital integrado e eficaz que aumenta a visibilidade da sua marca e impulsiona o crescimento do negócio',
  img: '/img/test.png/',
},
];

const Websites = () => {
    return (
        <div className="flex flex-col justify-center items-center px-4 py-8 md:px-8">
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 rounded-3xl bg-gray-100/10">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-200 sm:text-5xl md:text-6xl pt-2">
            WebSites
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Um site é uma plataforma online que apresenta informações sobre uma empresa, seus produtos ou serviços, e permite que os visitantes interajam com ela. Ele serve como um espaço para publicar conteúdo, conectar-se com novas pessoas, alcançar mais clientes e oferecer um canal para venda de produtos ou serviços. Ter um site traz benefícios significativos para as empresas, incluindo maior visibilidade no mercado, controle total sobre a plataforma, e a capacidade de operar 24 horas por dia, sem restrições físicas.
            </p>
        </div>

        <div className="mt-5 grid gap-10 max-w-2xl mx-auto lg:max-w-none p-10">
          {WebsitesInfo.map((item, index) => (
            <div key={index} className={`flex  hover:scale-110 transition flex-col md:flex-row rounded-2xl shadow-lg overflow-hidden ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              <div className="flex-shrink-0 md:w-1/3 transition">
                <Image className="h-full w-full object-cover md:w-full" src={item.img} alt={item.title} width={10} height={10} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                 <p className="text-2xl font-medium text-indigo-600 p-2">
                    {item.title}
                 </p>
                 <p className="text-lg p-2 font-semibold text-gray-900">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
   };

export default Websites;
