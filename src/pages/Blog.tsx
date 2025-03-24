import React from "react";

export const Blog = () => {
  return (
    <div className="pt-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
        <div className="grid gap-8">
          <article className="border-b pb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Como participar de licitações públicas com sucesso
            </h2>
            <p className="text-gray-600 mb-4">Publicado em 15 de Janeiro, 2024</p>
            <p className="text-gray-700">
              Guia completo sobre os principais aspectos a serem considerados ao
              participar de licitações públicas...
            </p>
          </article>
          
          <article className="border-b pb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Mudanças recentes na lei de licitações
            </h2>
            <p className="text-gray-600 mb-4">Publicado em 10 de Janeiro, 2024</p>
            <p className="text-gray-700">
              Análise das principais alterações na legislação e seus impactos...
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};