'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import CatalogSection from '@/components/CatalogSection';

export default function Home() {
  return (
    <>
      <Header />
      <CartDrawer />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section id="inicio" className="relative bg-[#f8f9fa] overflow-hidden">
          {/* Watermark Logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-[1400px] text-zinc-100 opacity-60 pointer-events-none z-0">
            <svg viewBox="0 0 1010 416" fill="currentColor">
              <path d="M155.518 0C159.384 1.98258e-05 162.518 3.13402 162.518 7V199.728C162.518 206.827 171.868 209.417 175.52 203.329L295.478 3.39844C296.744 1.29005 299.023 3.20216e-05 301.481 0H385.575C389.79 2.14574e-05 393.05 3.69822 392.52 7.87988L368.865 194.63C367.93 202.011 377.632 205.561 381.682 199.32L508.948 3.18945C510.239 1.20046 512.449 3.08994e-05 514.82 0H1002.6C1010.47 0.000384562 1012.35 10.9849 1004.92 13.6016L931.889 39.3406C930.674 39.7688 929.629 40.5766 928.909 41.6446L748.878 308.586C745.743 313.235 749.074 319.5 754.682 319.5H960.222C966.294 319.5 969.486 326.704 965.407 331.202L890.602 413.702C889.275 415.165 887.391 416 885.416 416H524.109C518.516 416 515.182 409.764 518.288 405.112L539.171 373.84C539.568 373.881 539.977 373.877 540.391 373.818L559.639 371.102C564.049 370.479 565.506 364.834 561.947 362.155L552.053 354.708L572.387 351.958C576.798 351.336 578.254 345.691 574.695 343.012L564.799 335.562L585.134 332.812C589.545 332.19 591.001 326.546 587.442 323.867L577.547 316.42L597.882 313.67C602.293 313.047 603.749 307.402 600.19 304.724L590.297 297.277L590.299 297.276C590.297 297.277 590.297 297.277 590.297 297.277L610.631 294.525C615.042 293.903 616.498 288.259 612.939 285.58L603.07 278.152L623.378 275.382C627.789 274.759 629.245 269.115 625.686 266.437L615.865 258.991L636.125 256.235C640.536 255.613 641.993 249.969 638.434 247.29L628.645 239.85L648.874 237.093C653.285 236.47 654.742 230.825 651.183 228.146L641.458 220.727L661.621 217.949C666.032 217.327 667.489 211.682 663.93 209.003L654.214 201.564L674.368 198.805C678.779 198.182 680.236 192.537 676.677 189.858L666.93 182.521L687.117 179.661C691.528 179.039 692.985 173.395 689.426 170.716L679.702 163.396L699.866 160.518C704.277 159.895 705.734 154.251 702.175 151.572L692.475 144.271L708.001 121.022C708.675 120.013 709.498 119.112 710.442 118.35L778.801 63.1689C783.204 59.6148 780.691 52.5 775.032 52.5H619.518C612.89 52.5001 607.518 57.8726 607.518 64.5V111.84C607.518 113.247 607.094 114.622 606.301 115.784L590.607 138.788L573.676 139.056C569.222 139.126 567.076 144.547 570.275 147.646L578.878 155.982L560.616 157.988C556.162 158.059 554.017 163.479 557.216 166.579L565.906 175L547.558 176.922C543.104 176.992 540.958 182.412 544.157 185.512L552.935 194.017L534.497 195.854C530.043 195.924 527.898 201.345 531.097 204.444L539.963 213.035L521.437 214.786C516.984 214.857 514.838 220.277 518.037 223.377L526.99 232.052L508.379 233.719C503.925 233.789 501.779 239.21 504.978 242.31L514.019 251.068L495.316 252.651C490.863 252.722 488.717 258.142 491.916 261.242L501.045 270.088L482.257 271.584C477.803 271.654 475.658 277.074 478.856 280.174L488.074 289.105L469.197 290.517C464.743 290.587 462.598 296.008 465.797 299.107L475.101 308.122L456.138 309.449C451.684 309.52 449.538 314.939 452.737 318.039L462.129 327.139L443.077 328.382C438.623 328.452 436.478 333.872 439.677 336.972L449.156 346.157L430.018 347.314C425.564 347.385 423.418 352.806 426.617 355.905L436.185 365.176L405.091 410.762C402.855 414.039 399.144 416 395.177 416H272.638C265.238 416 259.601 409.367 260.795 402.064L285.044 253.675C286.325 245.835 275.626 242.26 271.936 249.295L187.888 409.573C185.815 413.524 181.722 416 177.261 416H51.0175C47.1517 416 44.0176 412.866 44.0175 409V44.1521C44.0175 42.1786 43.047 40.3313 41.422 39.2115L3.04098 12.7637C-2.6159 8.86528 0.142603 0.000337181 7.01266 0H155.518Z" />
            </svg>
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/80 to-white z-0"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/50 to-transparent z-0"></div>

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
                  <a href="#catalogo" className="bg-primary hover:bg-primary-hover text-white px-8 py-4 font-heading font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5 shadow-[0_4px_14px_0_rgba(211,47,47,0.39)] flex items-center gap-2">
                    Ver Catálogo
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a href="#aplicacoes" className="bg-white hover:bg-text-main hover:text-white text-text-main border-2 border-text-main px-8 py-4 font-heading font-bold uppercase tracking-wider transition-all">
                    Especificações
                  </a>
                </div>

                <div className="flex items-center gap-6 mt-16 pt-8 border-t border-border/60 w-full max-w-lg">
                  <div>
                    <div className="font-heading font-bold text-2xl text-text-main">316L / 8.8</div>
                    <div className="text-xs text-muted uppercase tracking-wider font-semibold">Ligas Certificadas</div>
                  </div>
                  <div className="w-px h-10 bg-border"></div>
                  <div>
                    <div className="font-heading font-bold text-2xl text-text-main">+1050°C</div>
                    <div className="text-xs text-muted uppercase tracking-wider font-semibold">Resistência Térmica</div>
                  </div>
                  <div className="w-px h-10 bg-border"></div>
                  <div>
                    <div className="font-heading font-bold text-2xl text-text-main">100% CNC</div>
                    <div className="text-xs text-muted uppercase tracking-wider font-semibold">Tolerância Exata</div>
                  </div>
                </div>
              </div>

              <div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center lg:justify-end mt-10 lg:mt-0">
                <div className="absolute w-[140%] aspect-square bg-primary/5 rounded-full blur-3xl right-0 translate-x-1/4"></div>
                <img
                  src="/_legacy_imgs/img.webp"
                  alt="WL Precision 3D Emblem"
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
