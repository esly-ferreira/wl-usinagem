'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import CatalogSection from '@/components/CatalogSection';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <CartDrawer />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section id="inicio" className="relative bg-[#f8f9fa] overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/bg.webp')" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/90 to-white z-0"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/80 to-transparent z-0"></div>

          <div className="container mx-auto px-4 relative z-10 pt-32 pb-24 lg:pt-40 lg:pb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col items-start">
                <div className="inline-block bg-primary px-4 py-1.5 mb-6 -skew-x-12">
                  <span className="block text-white text-sm font-bold uppercase tracking-wider skew-x-12 italic">
                    Engenharia de Alta Performance
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-text-main mb-6 uppercase tracking-tighter leading-[1.1]">
                  Precisão Absoluta.<br />
                  <span className="text-primary">Resistência Extrema.</span>
                </h1>
                <p className="text-lg md:text-xl text-muted mb-10 max-w-lg leading-relaxed">
                  Componentes de fixação desenvolvidos para suportar as mais severas condições de pressão e temperatura em turbinas automotivas e motores diesel.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link href="/produtos" className="bg-primary hover:bg-primary-hover text-white px-8 py-4 font-heading font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5 shadow-[0_4px_14px_0_rgba(211,47,47,0.39)] flex items-center gap-2">
                    Ver Catálogo
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <a href="#aplicacoes" className="bg-white hover:bg-text-main hover:text-white text-text-main border-2 border-text-main px-8 py-4 font-heading font-bold uppercase tracking-wider transition-all">
                    Especificações
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-16 pt-8 border-t border-border/60 w-full max-w-lg">
                  <div>
                    <div className="font-heading font-bold text-2xl text-text-main">316L / 8.8</div>
                    <div className="text-xs text-muted uppercase tracking-wider font-semibold">Ligas Certificadas</div>
                  </div>
                  <div className="hidden sm:block w-px h-10 bg-border"></div>
                  <div>
                    <div className="font-heading font-bold text-2xl text-text-main">+1050°C</div>
                    <div className="text-xs text-muted uppercase tracking-wider font-semibold">Resistência Térmica</div>
                  </div>
                  <div className="hidden sm:block w-px h-10 bg-border"></div>
                  <div>
                    <div className="font-heading font-bold text-2xl text-text-main">100% CNC</div>
                    <div className="text-xs text-muted uppercase tracking-wider font-semibold">Tolerância Exata</div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:flex relative h-[600px] w-full items-center justify-end">
                <div className="absolute w-[140%] aspect-square bg-primary/5 blur-3xl right-0 translate-x-1/4"></div>
                <img
                  src="/_legacy_imgs/img.webp"
                  alt="BoostFix Usinagem 3D Emblem"
                  className="relative z-10 w-full max-w-[500px] object-contain drop-shadow-2xl animate-float"
                />
              </div>
            </div>
          </div>
        </section>

        {/* TRUST SECTION */}
        <section className="py-20 bg-white border-y border-border">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="flex flex-col items-start gap-4">
                <div className="w-14 h-14 bg-surface flex items-center justify-center text-primary border border-border">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-xl text-text-main">Alta Resistência Térmica</h3>
                <p className="text-muted leading-relaxed">
                  Ligas metálicas tratadas para manter a integridade estrutural mesmo sob variações extremas de temperatura no ciclo de exaustão.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4">
                <div className="w-14 h-14 bg-surface flex items-center justify-center text-primary border border-border">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-xl text-text-main">Precisão Milimétrica</h3>
                <p className="text-muted leading-relaxed">
                  Usinagem CNC de última geração garantindo tolerâncias exatas para roscas perfeitas e vedação impecável.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4">
                <div className="w-14 h-14 bg-surface flex items-center justify-center text-primary border border-border">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-xl text-text-main">Pronta Entrega</h3>
                <p className="text-muted leading-relaxed">
                  Estoque inteligente e logística otimizada para reduzir o tempo de máquina parada do seu cliente final.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CATALOG SECTION (Client Component) */}
        <CatalogSection />

        {/* APPLICATIONS SECTION */}
        <section id="aplicacoes" className="py-24 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-16">
              <div className="inline-block bg-primary px-4 py-1.5 mb-4 -skew-x-12">
                <span className="block text-white text-sm font-bold uppercase tracking-wider skew-x-12 italic">
                  Engenharia Aplicada
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-main mb-6 uppercase tracking-wide">
                Aplicações & Setores
              </h2>
              <p className="text-muted text-lg">
                Nossos elementos de fixação são projetados para suportar regimes severos de vibração, choques térmicos e torque elevado em múltiplos setores industriais.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { num: '01', title: 'Turbocompressores', desc: 'Prisioneiros e porcas com tratamento cobreado para evitar o engripamento por dilatação térmica extrema em carcaças quentes.' },
                { num: '02', title: 'Linha Pesada & Diesel', desc: 'Fixações robustas para coletores de escape, flanges de turbina e sistemas de pós-tratamento em caminhões e máquinas agrícolas.' },
                { num: '03', title: 'Motorsport & Competição', desc: 'Ligas de alta resistência mecânica para suportar pressões extremas de sobrealimentação e acelerações violentas sem fadiga.' },
                { num: '04', title: 'Retíficas & Oficinas', desc: 'Kits completos de reposição técnica que garantem montagem ágil, vedação estanque e conformidade com as normas OEM.' }
              ].map((app, i) => (
                <div key={i} className="group relative p-8 bg-surface border border-border hover:border-primary hover:-translate-y-1 transition-all duration-300">
                  <span className="absolute top-8 right-8 font-heading font-extrabold text-5xl text-border group-hover:text-primary/20 transition-colors">{app.num}</span>
                  <h3 className="font-heading font-bold text-xl text-text-main mt-16 mb-4">{app.title}</h3>
                  <p className="text-muted leading-relaxed text-sm">{app.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
