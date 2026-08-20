'use client';

import { useCart } from '@/context/CartContext';
import { useEffect } from 'react';

export default function CartDrawer() {
  const { isDrawerOpen, toggleDrawer, items, updateQuantity, removeFromCart } = useCart();

  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isDrawerOpen]);

  if (!isDrawerOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity"
        onClick={toggleDrawer}
      />
      
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col animate-slide-in">
        <div className="flex items-center justify-between p-6 border-b border-border bg-surface">
          <h2 className="font-heading font-bold text-xl uppercase tracking-wider flex items-center gap-2">
            Seu Carrinho
            <span className="bg-primary text-white text-xs px-2 py-0.5">
              {items.length}
            </span>
          </h2>
          <button 
            onClick={toggleDrawer}
            className="p-2 hover:bg-border transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-muted space-y-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-16 h-16 opacity-20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p>Seu carrinho está vazio.</p>
              <button 
                onClick={toggleDrawer}
                className="text-primary font-semibold hover:underline"
              >
                Continuar explorando
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 border border-border bg-surface relative group">
                <div className="w-20 h-20 bg-[#f3f4f6] flex flex-col items-center justify-center shrink-0 border border-border">
                  <span className="text-text-main font-heading font-bold text-sm uppercase">{item.diameter}</span>
                  <span className="text-muted text-[10px] font-mono uppercase">x {item.length}</span>
                </div>
                
                <div className="flex flex-col flex-1">
                  <span className="text-xs font-mono text-muted mb-1 uppercase">SKU: {item.sku}</span>
                  <h4 className="font-heading font-semibold text-text-main line-clamp-1 uppercase">{item.name}</h4>
                  
                  <div className="flex items-center justify-between mt-auto pt-2">
                    <div className="flex items-center gap-3 bg-white border border-border px-2 py-1">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="text-muted hover:text-primary transition-colors px-1 font-bold"
                      >
                        -
                      </button>
                      <span className="font-mono text-sm font-semibold min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-muted hover:text-primary transition-colors px-1 font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="absolute top-2 right-2 text-muted hover:text-primary opacity-0 group-hover:opacity-100 transition-all bg-white p-1 shadow-sm border border-border"
                  title="Remover item"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-border bg-surface">
            <div className="flex justify-between items-center mb-4 text-sm font-semibold uppercase">
              <span className="text-muted">Total de Itens</span>
              <span className="text-text-main text-lg font-mono">{items.reduce((a, b) => a + b.quantity, 0)} un.</span>
            </div>
            <button className="w-full bg-primary text-white py-4 font-heading font-bold tracking-wider hover:bg-primary-hover active:scale-[0.98] transition-all border-2 border-primary hover:border-primary-hover">
              SOLICITAR COTAÇÃO
            </button>
            <p className="text-center text-xs text-muted mt-3 uppercase tracking-wider">
              Valores sob consulta. Nossa equipe entrará em contato.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
