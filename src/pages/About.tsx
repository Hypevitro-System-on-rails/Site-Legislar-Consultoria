import React from "react";

export const About = () => {
  return (
    <div className="pt-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Sobre Nós</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            Com mais de 15 anos de experiência, nosso escritório se especializou em
            licitações públicas e consultoria jurídica empresarial, construindo uma
            sólida reputação baseada em resultados consistentes e atendimento
            personalizado.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Nossa Missão
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Oferecer soluções jurídicas eficientes e personalizadas, garantindo a
            segurança e o sucesso de nossos clientes em processos licitatórios e
            questões empresariais.
          </p>
        </div>
      </div>
    </div>
  );
};