import React from "react";
import { Button } from "../components/ui/button";

export const Services = () => {
  return (
    <div className="pt-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Áreas de Atuação
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Licitações Públicas */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-navy-blue">
              Assessoria em Licitações Públicas
            </h2>
            <p className="text-gray-700">
              Oferecemos suporte completo em todas as etapas do processo licitatório, desde a análise inicial até a execução do contrato.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-navy-blue font-bold mr-2">•</span>
                <span>Análise preventiva de editais e orientação estratégica para participação</span>
              </li>
              <li className="flex items-start">
                <span className="text-navy-blue font-bold mr-2">•</span>
                <span>Elaboração de recursos administrativos e impugnações</span>
              </li>
              <li className="flex items-start">
                <span className="text-navy-blue font-bold mr-2">•</span>
                <span>Defesa em processos administrativos de penalização</span>
              </li>
              <li className="flex items-start">
                <span className="text-navy-blue font-bold mr-2">•</span>
                <span>Consultoria em compliance e regularização documental</span>
              </li>
            </ul>
          </div>

          {/* Consultoria Empresarial */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-navy-blue">
              Consultoria Jurídica Empresarial
            </h2>
            <p className="text-gray-700">
              Assessoria jurídica especializada para empresas que participam de licitações, garantindo segurança e conformidade em todas as operações.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-navy-blue font-bold mr-2">•</span>
                <span>Adequação legal e documental para participação em licitações</span>
              </li>
              <li className="flex items-start">
                <span className="text-navy-blue font-bold mr-2">•</span>
                <span>Gestão e acompanhamento de contratos administrativos</span>
              </li>
              <li className="flex items-start">
                <span className="text-navy-blue font-bold mr-2">•</span>
                <span>Análise de riscos e consultoria preventiva</span>
              </li>
              <li className="flex items-start">
                <span className="text-navy-blue font-bold mr-2">•</span>
                <span>Representação em processos administrativos e judiciais</span>
              </li>
            </ul>
          </div>

          {/* Defesas em Processos */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-navy-blue">
              Defesas em Processos Licitatórios
            </h2>
            <p className="text-gray-700">
              Atuação especializada na defesa dos direitos e interesses das empresas em todas as fases do processo licitatório.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-navy-blue font-bold mr-2">•</span>
                <span>Defesa em processos de inidoneidade</span>
              </li>
              <li className="flex items-start">
                <span className="text-navy-blue font-bold mr-2">•</span>
                <span>Recursos contra desclassificação ou inabilitação</span>
              </li>
              <li className="flex items-start">
                <span className="text-navy-blue font-bold mr-2">•</span>
                <span>Medidas judiciais para garantir direitos em licitações</span>
              </li>
              <li className="flex items-start">
                <span className="text-navy-blue font-bold mr-2">•</span>
                <span>Acompanhamento de diligências e perícias</span>
              </li>
            </ul>
          </div>

          {/* Consultoria Preventiva */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-navy-blue">
              Consultoria Preventiva
            </h2>
            <p className="text-gray-700">
              Orientação estratégica para prevenir problemas e maximizar o sucesso em licitações públicas.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-navy-blue font-bold mr-2">•</span>
                <span>Análise prévia de documentação e requisitos</span>
              </li>
              <li className="flex items-start">
                <span className="text-navy-blue font-bold mr-2">•</span>
                <span>Treinamento de equipes para participação em certames</span>
              </li>
              <li className="flex items-start">
                <span className="text-navy-blue font-bold mr-2">•</span>
                <span>Auditoria de processos internos</span>
              </li>
              <li className="flex items-start">
                <span className="text-navy-blue font-bold mr-2">•</span>
                <span>Consultoria em governança corporativa</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-navy-blue/5 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-semibold text-navy-blue mb-4">
            Precisa de assessoria especializada?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Nossa equipe está pronta para auxiliar sua empresa em todas as etapas do processo licitatório, garantindo segurança jurídica e maximizando suas chances de sucesso.
          </p>
          <Button className="bg-navy-blue text-white hover:bg-navy-blue/90 text-lg px-8 py-6">
            Agende uma Consulta Gratuita
          </Button>
        </div>
      </div>
    </div>
  );
};