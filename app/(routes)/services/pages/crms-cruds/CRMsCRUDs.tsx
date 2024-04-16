import Navbar from '@/app/components/Navbar';
import Image from 'next/image';
import React from 'react';

const CRMsCRUDsInfo = [
 {
    title: 'Melhoria na Eficiência',
    description: 'A adoção de CRMs e CRUDs traz uma melhora significativa na eficiência operacional das empresas. Através da automatização de processos e da gestão eficiente de dados, as empresas podem reduzir o tempo gasto em tarefas manuais, aumentar a produtividade e otimizar os recursos. Isso permite que as empresas se concentrem em atividades mais estratégicas, como o desenvolvimento de novos produtos ou aprimoramento de serviços, em vez de gastarem tempo e recursos em tarefas repetitivas e desnecessárias.',
    img: '/img/test.png/',
 },
 {
    title: 'Análise de Dados',
    description: 'A análise de dados é uma ferramenta poderosa que os CRMs oferecem, permitindo que as empresas coletem, analisem e interpretem dados do cliente de forma eficaz. Isso pode levar a insights valiosos que podem ser usados para melhorar a tomada de decisões, personalizar a experiência do cliente e identificar oportunidades de vendas. A análise de dados também pode ser usada para aprimorar a segmentação do cliente, permitindo que as empresas direcionem suas campanhas de marketing e vendas para os segmentos mais relevantes e lucrativos',
    img: '/img/test.png/',
 },
 {
    title: 'Melhor Atendimento ao Cliente',
    description: 'Os CRMs são essenciais para melhorar o atendimento ao cliente, pois permitem que as empresas gerenciem informações do cliente de forma mais eficaz. Com um CRM, as empresas podem acessar facilmente os detalhes do cliente, histórico de compras e interações anteriores, o que permite um atendimento mais personalizado e eficiente. Isso pode levar a uma maior satisfação do cliente e retenção, além de aumentar a probabilidade de vendas recorrentes',
    img: '/img/test.png/',
 },
 {
    title: 'Aumento das Vendas',
    description: 'Os CRMs podem ajudar as empresas a aumentar as vendas de várias maneiras. Eles permitem que as empresas identifiquem oportunidades de vendas, automatizem processos de vendas e melhorem a comunicação com os clientes. Além disso, a análise de dados realizada através de CRMs pode revelar padrões de compra e preferências do cliente, permitindo que as empresas personalizem suas ofertas e promoções para atender melhor às necessidades dos clientes. Isso pode levar a um aumento nas vendas e na receita geral',
    img: '/img/test.png/',
 },
 {
    title: 'Personalização',
    description: 'A personalização é uma das principais vantagens da integração de CRMs com automação de marketing. Ao combinar os dados do CRM com ferramentas de automação de marketing, as organizações ganham a capacidade de criar campanhas de marketing altamente personalizadas, adaptadas às preferências individuais dos clientes, comportamentos ou histórico de compras. Essa comunicação personalizada melhora o engajamento e ajuda a construir relações mais fortes com clientes e prospectos. A segmentação e personalização são fundamentais para aumentar a relevância e o engajamento, utilizando os dados do CRM para segmentar o público com base em demografia, comportamento ou outros critérios relevantes. Com a automação de marketing, é possível entregar mensagens e ofertas personalizadas a diferentes segmentos, tornando a comunicação mais eficaz e direcionada ',
    img: '/img/test.png/',
 },
 {
    title: 'Automatização',
    description: 'A automatização é uma ferramenta poderosa que permite aprimorar a eficiência operacional e a produtividade das empresas. Ao integrar CRMs e sistemas de automação de marketing, as organizações podem coletar e armazenar dados sobre prospectos e clientes e, em seguida, utilizar esses dados para impulsionar o crescimento do negócio. A automatização de fluxos de trabalho, baseada em ações de gatilho com base no comportamento do cliente, permite guiar os prospectos através do funil de vendas de forma mais eficaz e fornecer uma experiência contínua em todos os pontos de contato e canais. Além disso, a integração de CRMs melhora a gestão de leads, permitindo a transferência fluida de dados de leads entre vendas e a equipe de marketing, garantindo que os leads sejam devidamente nutridos e recebam o acompanhamento correto. A automação de marketing também automatiza processos de pontuação e nutrição de leads com base em critérios predefinidos, permitindo que a organização priorize leads e concentre recursos nos mais propensos a converter',
    img: '/img/test.png/',
 },
];

const CRMsCRUDs = () => {
    return (
        <div className="flex flex-col justify-center items-center px-4 py-8 md:px-8">
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 rounded-3xl bg-gray-100/10">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-200 sm:text-5xl md:text-6xl pt-2">
            CRMs e CRUDs
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          CRMs (Customer Relationship Management) são sistemas que ajudam as empresas a gerenciar e analisar interações e relacionamentos com clientes e potenciais clientes. Eles são projetados para melhorar a eficiência e a eficácia das vendas, marketing e atendimento ao cliente. CRUDs (Create, Read, Update, Delete), por outro lado, são operações fundamentais em programação que permitem a criação, leitura, atualização e exclusão de dados em um banco de dados. Essas operações são essenciais para o gerenciamento eficaz de dados em aplicações de software.
          </p>
        </div>

        <div className="mt-5 grid gap-10 max-w-2xl mx-auto lg:max-w-none p-10">
          {CRMsCRUDsInfo.map((item, index) => (
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

export default CRMsCRUDs;
