'use client';

import { useCart } from '@/context/CartContext';
import { useEffect, useState } from 'react';

export default function CartDrawer() {
  const { isDrawerOpen, toggleDrawer, items, updateQuantity, removeFromCart } = useCart();
  const [clientName, setClientName] = useState('');

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

  const totalUnits = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce((acc, item) => acc + (item.price || 0) * item.quantity, 0);

  const handleSendWhatsApp = () => {
    if (items.length === 0) return;

    let message = `*NOVO PEDIDO - BOOSTFIX USINAGEM*\n`;
    message += `---------------------------------\n`;
    if (clientName.trim()) {
      message += `*Cliente/Empresa:* ${clientName.trim()}\n`;
    }
    message += `*Itens do Pedido:*\n`;

    items.forEach((item, index) => {
      const itemSubtotal = (item.price || 0) * item.quantity;
      const formattedSub = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(itemSubtotal);
      message += `${index + 1}. *${item.name}*\n   - SKU: ${item.sku}\n   - Qtd: ${item.quantity} un. (${formattedSub})\n`;
    });

    message += `---------------------------------\n`;
    message += `*RESUMO DA COMPRA:*\n`;
    message += `- Total de Itens: ${totalUnits} un.\n`;
    message += `- Valor Total Estimado: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalPrice)}\n`;
    message += `---------------------------------\n`;
    message += `Aguardo retorno com a cotação de frete e dados para faturamento.`;

    const phone = '5511999999999'; // Número comercial padrão da empresa
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity"
        onClick={toggleDrawer}
      />
      
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col animate-slide-in">
        
        {/* Header do Carrinho */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-surface">
          <h2 className="font-heading font-bold text-xl uppercase tracking-wider flex items-center gap-2">
            Seu Carrinho
            <div className="inline-block bg-primary px-2 py-0.5 -skew-x-12">
              <span className="block text-white text-xs font-bold skew-x-12">
                {items.length} ITENS
              </span>
            </div>
          </h2>
          <button 
            onClick={toggleDrawer}
            className="p-2 hover:bg-border transition-colors rounded-none"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Lista de Itens */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-muted space-y-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-16 h-16 opacity-20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="font-semibold uppercase tracking-wider text-sm">Seu carrinho está vazio.</p>
              <button 
                onClick={toggleDrawer}
                className="text-primary font-bold hover:underline uppercase text-xs tracking-wider"
              >
                Explorar Catálogo de Produtos
              </button>
            </div>
          ) : (
            items.map((item) => {
              const itemTotal = (item.price || 0) * item.quantity;
              return (
                <div key={item.id} className="flex gap-4 p-4 border border-border bg-surface relative group rounded-none">
                  <div className="w-20 h-20 bg-[#f3f4f6] flex flex-col items-center justify-center shrink-0 border border-border rounded-none">
                    <span className="text-text-main font-heading font-bold text-sm uppercase">{item.diameter}</span>
                    <span className="text-muted text-[10px] font-mono uppercase">x {item.length}</span>
                  </div>
                  
                  <div className="flex flex-col flex-1">
                    <span className="text-xs font-mono text-muted mb-1 uppercase">SKU: {item.sku}</span>
                    <h4 className="font-heading font-semibold text-text-main line-clamp-1 uppercase text-sm">{item.name}</h4>
                    
                    {item.price && (
                      <div className="text-xs text-muted mt-1">
                        Unidade: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}
                      </div>
                    )}

                    <div className="flex items-center justify-between mt-3">
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

                      {item.price && (
                        <span className="font-bold text-sm font-sans text-text-main">
                          {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(itemTotal)}
                        </span>
                      )}
                    </div>
                  </div>

                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="absolute top-2 right-2 text-muted hover:text-primary transition-all bg-white p-1 border border-border"
                    title="Remover item"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Resumo da Compra e Checkout WhatsApp */}
        {items.length > 0 && (
          <div className="p-6 border-t border-border bg-surface space-y-4">
            
            {/* Campo Nome/Empresa */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-muted mb-1">
                Nome ou Empresa (Opcional):
              </label>
              <input 
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Ex: João - Oficina Turbo"
                className="w-full bg-white border border-border px-3 py-2 text-sm focus:border-primary focus:outline-none rounded-none"
              />
            </div>

            {/* Resuminho da Compra */}
            <div className="bg-white border border-border p-4 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-primary border-b border-border pb-2">
                Resumo do Pedido
              </div>
              <div className="flex justify-between items-center text-xs text-muted">
                <span>Total de Unidades:</span>
                <span className="font-mono font-bold text-text-main">{totalUnits} un.</span>
              </div>
              <div className="flex justify-between items-center text-sm font-bold pt-1 border-t border-border/50">
                <span className="uppercase">Total Estimado:</span>
                <span className="text-primary text-base font-sans font-bold">
                  {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalPrice)}
                </span>
              </div>
            </div>

            {/* Botão Enviar WhatsApp */}
            <button 
              onClick={handleSendWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 px-4 font-heading font-bold tracking-wider transition-all flex items-center justify-center gap-2 uppercase text-sm rounded-none shadow-md"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.764.459 3.487 1.333 5.006l-1.417 5.176 5.297-1.389c1.474.803 3.14 1.226 4.773 1.227h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.668-1.038-5.176-2.925-7.064s-4.397-2.925-7.064-2.925zm5.952 14.286c-.25.703-1.455 1.341-2.008 1.408-.553.067-1.272.1-3.649-.838-2.862-1.129-4.707-4.041-4.85-4.232-.143-.191-1.162-1.547-1.162-2.95 0-1.403.734-2.094 1.01-2.372.276-.278.601-.347.801-.347.2 0 .4.002.576.01.188.008.439-.071.688.528.25.599.851 2.074.926 2.224.075.15.125.326.025.526-.1.2-.15.326-.299.501-.15.175-.315.391-.45.525-.15.15-.306.314-.131.614.175.3.777 1.284 1.67 2.08 1.15 1.025 2.119 1.343 2.419 1.493.3.15.476.125.651-.075.175-.2.751-.876.951-1.176.2-.3.4-.25.676-.15.275.1.751.876 2.051 1.526.3.15.5.225.576.35.075.125.075.725-.175 1.428z"/>
              </svg>
              Enviar Pedido no WhatsApp
            </button>
            <p className="text-center text-[11px] text-muted uppercase tracking-wider">
              Você será direcionado para o atendimento comercial da BoostFix Usinagem.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
