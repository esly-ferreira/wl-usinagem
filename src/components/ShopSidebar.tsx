'use client';

interface Filters {
  category: string;
  diameter: string;
  minPrice: string;
  maxPrice: string;
  inStockOnly: boolean;
}

interface ShopSidebarProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

export default function ShopSidebar({ filters, setFilters }: ShopSidebarProps) {
  const handleCategoryChange = (cat: string) => {
    setFilters(prev => ({ ...prev, category: prev.category === cat ? '' : cat }));
  };

  const handleDiameterChange = (diam: string) => {
    setFilters(prev => ({ ...prev, diameter: prev.diameter === diam ? '' : diam }));
  };

  return (
    <aside className="w-full lg:w-64 flex-shrink-0 bg-white border border-border p-6 shadow-sm h-fit sticky top-24">
      <h2 className="font-heading font-bold text-xl uppercase tracking-wider text-text-main mb-6 pb-4 border-b border-border">Filtros</h2>

      {/* Categorias */}
      <div className="mb-8">
        <h3 className="font-bold text-sm uppercase text-text-main mb-3">Categorias</h3>
        <div className="flex flex-col gap-2">
          {['Prisioneiros', 'Porcas', 'Kits'].map(cat => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer group">
              <input 
                type="checkbox" 
                checked={filters.category === cat}
                onChange={() => handleCategoryChange(cat)}
                className="w-4 h-4 text-primary rounded border-border focus:ring-primary focus:ring-offset-0 cursor-pointer" 
              />
              <span className="text-sm text-muted group-hover:text-text-main transition-colors">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Diâmetro */}
      <div className="mb-8">
        <h3 className="font-bold text-sm uppercase text-text-main mb-3">Diâmetro</h3>
        <div className="flex flex-col gap-2">
          {['M8', 'M10', 'M12'].map(diam => (
            <label key={diam} className="flex items-center gap-2 cursor-pointer group">
              <input 
                type="checkbox" 
                checked={filters.diameter === diam}
                onChange={() => handleDiameterChange(diam)}
                className="w-4 h-4 text-primary rounded border-border focus:ring-primary focus:ring-offset-0 cursor-pointer" 
              />
              <span className="text-sm text-muted group-hover:text-text-main transition-colors">{diam}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Preço */}
      <div className="mb-8">
        <h3 className="font-bold text-sm uppercase text-text-main mb-3">Preço</h3>
        <div className="flex items-center gap-2">
          <input 
            type="number" 
            placeholder="Mín" 
            value={filters.minPrice}
            onChange={(e) => setFilters(prev => ({ ...prev, minPrice: e.target.value }))}
            className="w-full p-2 border border-border text-sm outline-none focus:border-primary transition-colors"
          />
          <span className="text-muted">-</span>
          <input 
            type="number" 
            placeholder="Máx" 
            value={filters.maxPrice}
            onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: e.target.value }))}
            className="w-full p-2 border border-border text-sm outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      {/* Disponibilidade */}
      <div className="mb-8">
        <label className="flex items-center gap-2 cursor-pointer group">
          <input 
            type="checkbox" 
            checked={filters.inStockOnly}
            onChange={(e) => setFilters(prev => ({ ...prev, inStockOnly: e.target.checked }))}
            className="w-4 h-4 text-primary rounded border-border focus:ring-primary focus:ring-offset-0 cursor-pointer" 
          />
          <span className="text-sm text-text-main font-semibold">Apenas Pronta Entrega</span>
        </label>
      </div>

      <button 
        onClick={() => setFilters({ category: '', diameter: '', minPrice: '', maxPrice: '', inStockOnly: false })}
        className="w-full py-2 text-sm text-primary hover:text-white border border-primary hover:bg-primary uppercase font-bold tracking-wider transition-all"
      >
        Limpar Filtros
      </button>
    </aside>
  );
}
