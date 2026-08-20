'use client';

import { Product } from '@/data/mockProducts';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group flex flex-col bg-white border border-border shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_24px_rgba(211,47,47,0.08)] hover:border-primary hover:-translate-y-0.5 transition-all duration-300">
      
      <div className="relative aspect-square bg-[#f3f4f6] p-8 overflow-hidden flex items-center justify-center">
        {/* Placeholder text mimicking old placehold.co images */}
        <div className="text-center">
          <span className="text-4xl font-heading font-bold text-muted drop-shadow-sm uppercase">
            {product.diameter}
          </span>
          <div className="text-muted text-sm mt-2 tracking-widest font-mono uppercase">
            X {product.length}
          </div>
        </div>
        
        {/* SKU Badge */}
        <div className="absolute top-4 left-4 bg-dark px-2 py-1 font-heading text-xs font-semibold uppercase tracking-wider text-white z-10">
          SKU: {product.sku}
        </div>
        
        {/* Status indicator as small text, not intrusive */}
        <div className="absolute bottom-4 right-4 z-10">
          <div className={`text-[10px] font-bold uppercase tracking-wider ${product.inStock ? 'text-green-600' : 'text-zinc-500'}`}>
            {product.inStock ? '● Pronta Entrega' : 'Sob Encomenda'}
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-grow p-6">
        <h3 className="font-heading font-bold text-lg uppercase text-text-main mb-2">
          {product.name}
        </h3>
        
        <ul className="list-none text-sm text-muted mb-6 flex-grow">
          <li className="mb-1">
            <span className="text-text-main font-semibold">Aplicação:</span> {product.application}
          </li>
          <li className="mb-1">
            <span className="text-text-main font-semibold">Ref:</span> {product.ref}
          </li>
        </ul>

        <button 
          onClick={() => addToCart(product)}
          className="w-full p-3 font-heading font-bold uppercase text-sm bg-surface border border-border text-text-main cursor-pointer transition-all duration-300 hover:bg-primary hover:border-primary hover:text-white"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}
