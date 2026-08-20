'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import ShopSidebar from '@/components/ShopSidebar';
import ShopProductGrid from '@/components/ShopProductGrid';
import { mockProducts } from '@/data/mockProducts';

export default function ProdutosPage() {
  const [filters, setFilters] = useState({
    category: '',
    diameter: '',
    minPrice: '',
    maxPrice: '',
    inStockOnly: false
  });

  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return mockProducts.filter(product => {
      // Category filter
      if (filters.category && product.category !== filters.category) return false;
      
      // Diameter filter
      if (filters.diameter && product.diameter !== filters.diameter) return false;
      
      // Stock filter
      if (filters.inStockOnly && !product.inStock) return false;
      
      // Price filters
      if (filters.minPrice && product.price && product.price < parseFloat(filters.minPrice)) return false;
      if (filters.maxPrice && product.price && product.price > parseFloat(filters.maxPrice)) return false;

      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa]">
      <Header />
      <CartDrawer />

      <main className="flex-1">
        {/* Banner Loja */}
        <div className="bg-text-main text-white py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/10"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/20 to-transparent z-0"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="inline-block bg-primary px-3 py-1 mb-4 -skew-x-12">
              <span className="block text-white text-xs font-bold uppercase tracking-wider skew-x-12 italic">
                Compre Online
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold uppercase tracking-wide">
              Loja <span className="text-primary">Oficial</span>
            </h1>
            <p className="mt-4 text-zinc-300 max-w-xl">
              Catálogo completo de componentes de alta performance. Filtre, escolha e adicione ao carrinho.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-6">
            <button 
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              className="w-full flex items-center justify-center gap-2 bg-white border border-border p-3 font-heading font-bold uppercase text-sm text-text-main hover:border-primary transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              {isMobileFiltersOpen ? 'Ocultar Filtros' : 'Mostrar Filtros'}
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar (Filters) */}
            <div className={`lg:block ${isMobileFiltersOpen ? 'block' : 'hidden'}`}>
              <ShopSidebar filters={filters} setFilters={setFilters} />
            </div>

            {/* Product Grid */}
            <ShopProductGrid products={filteredProducts} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
