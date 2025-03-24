import React from "react";
import { Button } from "../components/ui/button";

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="flex min-h-screen">
        <div className="flex flex-col justify-between w-full lg:w-1/2 p-8 pt-24">
          <div className="text-xl font-semibold tracking-wide text-navy-blue">
            ESCRITÓRIO DE ADVOCACIA ESPECIALIZADO
          </div>
          
          <div className="space-y-6 my-12">
            <h1 className="text-5xl font-bold">
              Especialistas em Licitações Públicas
            </h1>
            <p className="text-sm font-medium tracking-wider text-gray-600">
              CONSULTORIA JURÍDICA EMPRESARIAL
            </p>
            <p className="text-lg text-gray-700 max-w-md">
              Assessoria especializada em licitações públicas e direito empresarial, 
              com foco em resultados e excelência no atendimento.
            </p>
            <Button className="mt-8 bg-navy-blue text-white hover:bg-navy-blue/90 text-lg px-8 py-6">
              Agende uma Consulta
            </Button>
          </div>
          
          <div className="flex space-x-8">
            <div>
              <p className="text-4xl font-bold text-navy-blue">500+</p>
              <p className="text-sm text-gray-600">Clientes Atendidos</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-navy-blue">95%</p>
              <p className="text-sm text-gray-600">Taxa de Sucesso</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-navy-blue">15+</p>
              <p className="text-sm text-gray-600">Anos de Experiência</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative w-1/2 bg-navy-blue">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Advogado especialista"
            className="h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-navy-blue/30 mix-blend-multiply"></div>
        </div>
      </div>

      {/* Por que nos escolher */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher nosso escritório?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-navy-blue mb-4">Experiência Comprovada</h3>
              <p className="text-gray-600">Mais de 15 anos de atuação exclusiva em licitações públicas, com histórico comprovado de sucesso.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-navy-blue mb-4">Atendimento Personalizado</h3>
              <p className="text-gray-600">Cada cliente recebe atenção individualizada, com estratégias específicas para suas necessidades.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-navy-blue mb-4">Equipe Especializada</h3>
              <p className="text-gray-600">Profissionais altamente qualificados e constantemente atualizados sobre legislação e jurisprudência.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Depoimentos */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">O que dizem nossos clientes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-2xl text-gray-600">M</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Maria Silva</h4>
                  <p className="text-sm text-gray-600">Diretora Comercial</p>
                </div>
              </div>
              <p className="text-gray-700">"Excelente assessoria em todo o processo licitatório. A equipe é muito competente e nos deu total suporte, resultando em grande sucesso em nossas participações."</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-2xl text-gray-600">J</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">João Santos</h4>
                  <p className="text-sm text-gray-600">Empresário</p>
                </div>
              </div>
              <p className="text-gray-700">"Profissionais extremamente capacitados que nos ajudaram a resolver questões complexas em licitações. Recomendo fortemente seus serviços."</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="bg-navy-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para ter a melhor assessoria em licitações?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como podemos ajudar sua empresa a ter sucesso em licitações públicas.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button className="bg-white text-navy-blue hover:bg-gray-100 text-lg px-8 py-6">
              Agende uma Consulta Gratuita
            </Button>
            <Button className="bg-transparent border-2 border-white hover:bg-white/10 text-lg px-8 py-6">
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};