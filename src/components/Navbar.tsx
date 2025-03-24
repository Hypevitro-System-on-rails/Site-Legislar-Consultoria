import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-gray-900">
          Escritório de Advocacia
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/sobre" className="text-gray-600 hover:text-gray-900">
            Sobre
          </Link>
          <Link to="/areas-de-atuacao" className="text-gray-600 hover:text-gray-900">
            Áreas de Atuação
          </Link>
          <Link to="/blog" className="text-gray-600 hover:text-gray-900">
            Blog
          </Link>
          <Link to="/contato" className="text-gray-600 hover:text-gray-900">
            Contato
          </Link>
          <Button className="bg-navy-blue text-white hover:bg-navy-blue/90">
            Agende uma Consulta
          </Button>
        </div>
      </div>
    </nav>
  );
};