'use client';

import { useState } from 'react';
import FilterBar from './FilterBar';
import ProductCard from './ProductCard';
import { mockProducts } from '@/data/mockProducts';

export default function CatalogSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts = mockProducts.filter((product) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'm8') return product.diameter === 'M8';
    if (activeFilter === 'm10') return product.diameter === 'M10';
    if (activeFilter === 'kits') return product.application.toLowerCase().includes('kit');
    if (activeFilter === 'accessories') return product.name.toLowerCase().includes('porca') || product.name.toLowerCase().includes('acessório');
    return true;
  });

  return (
    <section id="catalogo" className="py-24 bg-surface/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-block bg-primary px-4 py-1.5 mb-4 -skew-x-12">
              <span className="block text-white text-sm font-bold uppercase tracking-wider skew-x-12 italic">
                Linha de Fixação
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-main mb-4 uppercase tracking-wide">
              Catálogo Técnico
            </h2>
            <p className="text-muted text-lg max-w-2xl">
              Componentes usinados com precisão micrométrica para alta performance.
            </p>
          </div>
          
          <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-muted text-lg">Nenhum componente encontrado para este filtro.</p>
          </div>
        )}
      </div>
    </section>
  );
}
