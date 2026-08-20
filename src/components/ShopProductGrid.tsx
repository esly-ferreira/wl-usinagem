'use client';

import { Product } from '@/data/mockProducts';
import ProductCard from './ProductCard';
import { useState } from 'react';

interface ShopProductGridProps {
  products: Product[];
}

type SortOption = 'relevance' | 'price_asc' | 'price_desc' | 'name_asc';

export default function ShopProductGrid({ products }: ShopProductGridProps) {
  const [sortBy, setSortBy] = useState<SortOption>('relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price_asc':
        return (a.price || 0) - (b.price || 0);
      case 'price_desc':
        return (b.price || 0) - (a.price || 0);
      case 'name_asc':
        return a.name.localeCompare(b.name);
      case 'relevance':
      default:
        return 0; // Keeping original order for 'relevance'
    }
  });

  return (
    <div className="flex-1 w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 border border-border mb-6 shadow-sm gap-4">
        <span className="text-sm font-semibold text-text-main">
          Mostrando {sortedProducts.length} produto{sortedProducts.length !== 1 ? 's' : ''}
        </span>
        
        <div className="flex items-center gap-4 text-sm w-full sm:w-auto justify-between sm:justify-end">
          
          {/* View Mode Toggles */}
          <div className="flex bg-surface border border-border rounded-sm overflow-hidden">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 transition-colors ${viewMode === 'grid' ? 'bg-primary text-white' : 'text-muted hover:text-primary hover:bg-zinc-100'}`}
              title="Visualização em Grade"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 transition-colors ${viewMode === 'list' ? 'bg-primary text-white' : 'text-muted hover:text-primary hover:bg-zinc-100'}`}
              title="Visualização em Lista"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-muted font-semibold uppercase tracking-wider">Ordenar por:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="border border-border bg-white text-text-main p-2 outline-none focus:border-primary transition-colors cursor-pointer"
            >
              <option value="relevance">Mais Relevantes</option>
              <option value="price_asc">Menor Preço</option>
              <option value="price_desc">Maior Preço</option>
              <option value="name_asc">Nome (A-Z)</option>
            </select>
          </div>
        </div>
      </div>

      {sortedProducts.length > 0 ? (
        <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6" : "flex flex-col gap-6"}>
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} viewMode={viewMode} />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-border p-12 text-center shadow-sm">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-surface text-muted mb-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-heading font-bold text-text-main mb-2">Nenhum produto encontrado</h3>
          <p className="text-muted max-w-md mx-auto">
            Não encontramos resultados para os filtros selecionados. Tente remover alguns filtros para ver mais produtos.
          </p>
        </div>
      )}
    </div>
  );
}
