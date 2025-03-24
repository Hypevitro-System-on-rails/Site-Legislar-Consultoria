import React from "react";
import { Button } from "../components/ui/button";

export const Contact = () => {
  return (
    <div className="pt-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contato</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-md"
                  rows={4}
                  placeholder="Como podemos ajudar?"
                />
              </div>
              
              <Button className="w-full bg-navy-blue text-white hover:bg-navy-blue/90">
                Enviar Mensagem
              </Button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Informações de Contato
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>Telefone: (11) 1234-5678</p>
              <p>Email: contato@escritorio.com</p>
              <p>
                Endereço: Av. Paulista, 1000<br />
                São Paulo - SP
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};