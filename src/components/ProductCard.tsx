'use client';

import Link from 'next/link';
import { Product } from '@/data/mockProducts';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

export default function ProductCard({ product, viewMode = 'grid' }: ProductCardProps) {
  const { addToCart } = useCart();
  const isList = viewMode === 'list';

  const containerClasses = isList 
    ? 'flex flex-row items-stretch' 
    : 'flex flex-row md:flex-col items-stretch';

  const imageClasses = isList
    ? 'w-1/3 md:w-[220px] shrink-0 self-stretch min-h-[160px]'
    : 'w-2/5 md:w-full shrink-0 self-stretch md:aspect-square min-h-[160px] md:min-h-0';

  const infoClasses = isList
    ? 'w-2/3 md:w-full flex-grow p-4 md:p-6 justify-center'
    : 'w-3/5 md:w-full flex-grow p-4 md:p-6';

  return (
    <div className={`group bg-white border border-border shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_24px_rgba(211,47,47,0.08)] hover:border-primary hover:-translate-y-0.5 transition-all duration-300 ${containerClasses}`}>
      
      <Link href={`/produto/${product.id}`} className={`relative bg-[#f3f4f6] border-r md:border-r-0 md:border-b border-border overflow-hidden flex items-center justify-center cursor-pointer ${imageClasses}`}>
        <div className="text-center group-hover:scale-105 transition-transform duration-500 scale-75 md:scale-100 p-4">
          <span className="text-2xl md:text-4xl font-heading font-bold text-muted drop-shadow-sm uppercase">
            {product.diameter}
          </span>
          <div className="text-muted text-xs md:text-sm mt-1 md:mt-2 tracking-widest font-mono uppercase">
            X {product.length}
          </div>
        </div>
        
        <div className="hidden md:block absolute top-4 left-4 z-10">
          <div className="inline-block bg-dark px-2.5 py-1 -skew-x-12 shadow-sm">
            <span className="block text-white text-xs font-mono font-semibold uppercase tracking-wider skew-x-12">
              SKU: {product.sku}
            </span>
          </div>
        </div>
      </Link>

      <div className={`flex flex-col ${infoClasses}`}>
        <Link href={`/produto/${product.id}`} className="hover:text-primary transition-colors">
          <h3 className="font-heading font-bold text-sm md:text-lg uppercase text-text-main mb-1 md:mb-2 line-clamp-2 md:line-clamp-none">
            {product.name}
          </h3>
        </Link>
        
        {/* Avaliação Simulada */}
        <div className="flex items-center gap-1 mb-2 md:mb-3">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 md:w-4 md:h-4 text-primary">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
          </svg>
          <span className="text-xs text-muted">5.0</span>
        </div>

        {/* Hide specs on mobile unless in list view */}
        <ul className={`list-none text-xs md:text-sm text-muted mb-2 md:mb-4 ${isList ? 'hidden lg:block' : 'hidden md:block flex-grow'}`}>
          <li className="mb-1">
            <span className="text-text-main font-semibold">Aplicação:</span> {product.application}
          </li>
          <li className="mb-1 truncate">
            <span className="text-text-main font-semibold">Ref:</span> {product.ref}
          </li>
        </ul>

        <div className="mt-auto">
          {product.price && (
            <div className="mb-2 md:mb-4">
              <div className="text-lg md:text-2xl font-bold font-sans text-text-main leading-tight">
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
              </div>
              <div className="text-[10px] md:text-xs text-green-600 font-medium">
                em 10x de {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price / 10)} sem juros
              </div>
            </div>
          )}

          <div className="text-xs text-primary font-semibold mb-3 uppercase tracking-wider">
            Despacho Imediato
          </div>

          <Link 
            href={`/produto/${product.id}`}
            className={`block text-center w-full md:w-auto md:px-8 py-2 md:p-3 font-heading font-bold uppercase text-xs md:text-sm bg-primary border-transparent text-white cursor-pointer transition-all duration-300 hover:bg-primary-hover shadow-md hover:shadow-lg rounded-none ${isList ? 'lg:w-auto' : ''}`}
          >
            Ver Produto
          </Link>
        </div>
      </div>
    </div>
  );
}
