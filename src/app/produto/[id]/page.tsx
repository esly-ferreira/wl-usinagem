'use client';

import { useParams } from 'next/navigation';
import { mockProducts } from '@/data/mockProducts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function ProdutoPage() {
  const params = useParams();
  const id = params?.id as string;
  const { addToCart } = useCart();
  
  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-[#f8f9fa]">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center p-8">
          <h1 className="text-2xl font-bold text-text-main mb-4">Produto não encontrado</h1>
          <Link href="/produtos" className="text-primary hover:underline">
            Voltar para a loja
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#ebebeb]">
      <Header />
      <CartDrawer />

      <main className="flex-1 container mx-auto px-4 py-8">
        
        {/* Breadcrumb */}
        <div className="text-sm text-muted mb-4 flex items-center gap-2">
          <Link href="/" className="hover:text-primary">Início</Link>
          <span>/</span>
          <Link href="/produtos" className="hover:text-primary">Produtos</Link>
          <span>/</span>
          <span className="text-text-main font-semibold truncate">{product.name}</span>
        </div>

        <div className="bg-white shadow-sm rounded-sm p-4 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Esquerda: Galeria de Imagens (lg:col-span-5) */}
            <div className="lg:col-span-5 flex flex-col-reverse md:flex-row gap-4">
              {/* Miniaturas */}
              <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
                {[1, 2, 3, 4].map(idx => (
                  <div key={idx} className={`w-12 h-12 md:w-16 md:h-16 border rounded-sm flex items-center justify-center cursor-pointer ${idx === 1 ? 'border-primary border-2' : 'border-border hover:border-zinc-400'}`}>
                    <span className="text-[10px] font-bold text-muted">{product.diameter}</span>
                  </div>
                ))}
              </div>
              
              {/* Imagem Principal */}
              <div className="flex-1 aspect-square bg-[#f3f4f6] rounded-sm flex items-center justify-center relative border border-border">
                <div className="text-center">
                  <span className="text-6xl md:text-8xl font-heading font-bold text-muted drop-shadow-sm uppercase">
                    {product.diameter}
                  </span>
                  <div className="text-muted text-lg mt-4 tracking-widest font-mono uppercase">
                    X {product.length}
                  </div>
                </div>
              </div>
            </div>

            {/* Centro: Informações do Produto (lg:col-span-4) */}
            <div className="lg:col-span-4 flex flex-col">
              <div className="text-xs text-muted mb-2 uppercase tracking-wide">
                Novo  |  +1000 vendidos
              </div>
              <h1 className="text-2xl font-bold text-text-main mb-2 leading-tight">
                {product.name}
              </h1>
              
              {/* Avaliação simulada */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-primary">
                  {[1, 2, 3, 4, 5].map(star => (
                    <svg key={star} viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-muted">(118)</span>
              </div>

              {/* Tag de destaque */}
              <div className="mb-6">
                <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-sm">
                  Mais vendido
                </span>
              </div>

              {/* Características */}
              <div className="mb-6">
                <h3 className="font-semibold text-text-main mb-3">Características principais</h3>
                <table className="w-full text-sm border border-border rounded-sm overflow-hidden">
                  <tbody>
                    <tr className="border-b border-border bg-surface/50">
                      <td className="py-2 px-3 font-semibold text-muted w-1/3">SKU</td>
                      <td className="py-2 px-3 text-text-main">{product.sku}</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 px-3 font-semibold text-muted">Diâmetro</td>
                      <td className="py-2 px-3 text-text-main">{product.diameter}</td>
                    </tr>
                    <tr className="border-b border-border bg-surface/50">
                      <td className="py-2 px-3 font-semibold text-muted">Comprimento</td>
                      <td className="py-2 px-3 text-text-main">{product.length}</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-semibold text-muted">Aplicação</td>
                      <td className="py-2 px-3 text-text-main">{product.application}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Informações adicionais */}
              <div>
                <h3 className="font-semibold text-text-main mb-3">O que você precisa saber</h3>
                <ul className="list-disc pl-5 text-sm text-muted space-y-2">
                  <li>Usinagem em CNC de precisão garantindo encaixe perfeito.</li>
                  <li>Liga metálica de alta resistência térmica e mecânica.</li>
                  <li>Compatível com as normas originais de fábrica (OEM).</li>
                  <li>Ideal para aplicações de alto estresse como turbinas automotivas.</li>
                </ul>
              </div>
            </div>

            {/* Direita: Buy Box (lg:col-span-3) */}
            <div className="lg:col-span-3">
              <div className="border border-border rounded-lg p-6 lg:sticky lg:top-24">
                
                {/* Preço */}
                <div className="mb-6">
                  {product.price && (
                    <>
                      <div className="text-4xl font-bold text-text-main tracking-tight">
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
                      </div>
                      <div className="text-sm text-green-600 font-medium mt-1">
                        em 10x de {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price / 10)} sem juros
                      </div>
                    </>
                  )}
                  <Link href="#" className="text-primary text-sm hover:underline block mt-2">
                    Ver os meios de pagamento
                  </Link>
                </div>

                {/* Frete e Estoque */}
                <div className="mb-6 space-y-4">
                  <div className="flex gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-green-600 flex-shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                    <div>
                      <div className="text-green-600 font-semibold text-sm">Chegará grátis amanhã</div>
                      <div className="text-muted text-xs">Comprando dentro das próximas 2 h</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-green-600 flex-shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <div className="text-green-600 font-semibold text-sm">Retire grátis amanhã</div>
                      <div className="text-muted text-xs">Em uma agência perto de você</div>
                    </div>
                  </div>
                </div>

                {/* Estoque */}
                <div className="mb-6 font-semibold text-text-main">
                  {product.inStock ? 'Estoque disponível' : <span className="text-red-500">Fora de estoque</span>}
                </div>

                {/* Botões */}
                <div className="flex flex-col gap-3 mb-6">
                  <button 
                    onClick={() => {
                      addToCart(product);
                      // TODO: Navigate to checkout ideally
                    }}
                    disabled={!product.inStock}
                    className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 px-4 rounded-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Comprar agora
                  </button>
                  <button 
                    onClick={() => addToCart(product)}
                    disabled={!product.inStock}
                    className="w-full bg-blue-50 hover:bg-blue-100 text-primary font-bold py-3 px-4 rounded-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Adicionar ao carrinho
                  </button>
                </div>

                {/* Garantias */}
                <div className="space-y-3 text-xs text-muted">
                  <div className="flex gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 text-zinc-400 flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span><span className="text-primary hover:underline cursor-pointer">Compra Garantida</span>, receba o produto que está esperando ou devolvemos o dinheiro.</span>
                  </div>
                  <div className="flex gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 text-zinc-400 flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    <span>Garantia de fábrica: 12 meses</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
