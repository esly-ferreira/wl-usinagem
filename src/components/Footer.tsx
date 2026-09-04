import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contato" className="bg-dark text-white pt-20 pb-8 mt-20 border-t-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="text-white group-hover:scale-105 transition-transform opacity-90">
                <svg viewBox="0 0 1010 416" fill="currentColor" className="h-8">
                  <path d="M155.518 0C159.384 1.98258e-05 162.518 3.13402 162.518 7V199.728C162.518 206.827 171.868 209.417 175.52 203.329L295.478 3.39844C296.744 1.29005 299.023 3.20216e-05 301.481 0H385.575C389.79 2.14574e-05 393.05 3.69822 392.52 7.87988L368.865 194.63C367.93 202.011 377.632 205.561 381.682 199.32L508.948 3.18945C510.239 1.20046 512.449 3.08994e-05 514.82 0H1002.6C1010.47 0.000384562 1012.35 10.9849 1004.92 13.6016L931.889 39.3406C930.674 39.7688 929.629 40.5766 928.909 41.6446L748.878 308.586C745.743 313.235 749.074 319.5 754.682 319.5H960.222C966.294 319.5 969.486 326.704 965.407 331.202L890.602 413.702C889.275 415.165 887.391 416 885.416 416H524.109C518.516 416 515.182 409.764 518.288 405.112L539.171 373.84C539.568 373.881 539.977 373.877 540.391 373.818L559.639 371.102C564.049 370.479 565.506 364.834 561.947 362.155L552.053 354.708L572.387 351.958C576.798 351.336 578.254 345.691 574.695 343.012L564.799 335.562L585.134 332.812C589.545 332.19 591.001 326.546 587.442 323.867L577.547 316.42L597.882 313.67C602.293 313.047 603.749 307.402 600.19 304.724L590.297 297.277L590.299 297.276C590.297 297.277 590.297 297.277 590.297 297.277L610.631 294.525C615.042 293.903 616.498 288.259 612.939 285.58L603.07 278.152L623.378 275.382C627.789 274.759 629.245 269.115 625.686 266.437L615.865 258.991L636.125 256.235C640.536 255.613 641.993 249.969 638.434 247.29L628.645 239.85L648.874 237.093C653.285 236.47 654.742 230.825 651.183 228.146L641.458 220.727L661.621 217.949C666.032 217.327 667.489 211.682 663.93 209.003L654.214 201.564L674.368 198.805C678.779 198.182 680.236 192.537 676.677 189.858L666.93 182.521L687.117 179.661C691.528 179.039 692.985 173.395 689.426 170.716L679.702 163.396L699.866 160.518C704.277 159.895 705.734 154.251 702.175 151.572L692.475 144.271L708.001 121.022C708.675 120.013 709.498 119.112 710.442 118.35L778.801 63.1689C783.204 59.6148 780.691 52.5 775.032 52.5H619.518C612.89 52.5001 607.518 57.8726 607.518 64.5V111.84C607.518 113.247 607.094 114.622 606.301 115.784L590.607 138.788L573.676 139.056C569.222 139.126 567.076 144.547 570.275 147.646L578.878 155.982L560.616 157.988C556.162 158.059 554.017 163.479 557.216 166.579L565.906 175L547.558 176.922C543.104 176.992 540.958 182.412 544.157 185.512L552.935 194.017L534.497 195.854C530.043 195.924 527.898 201.345 531.097 204.444L539.963 213.035L521.437 214.786C516.984 214.857 514.838 220.277 518.037 223.377L526.99 232.052L508.379 233.719C503.925 233.789 501.779 239.21 504.978 242.31L514.019 251.068L495.316 252.651C490.863 252.722 488.717 258.142 491.916 261.242L501.045 270.088L482.257 271.584C477.803 271.654 475.658 277.074 478.856 280.174L488.074 289.105L469.197 290.517C464.743 290.587 462.598 296.008 465.797 299.107L475.101 308.122L456.138 309.449C451.684 309.52 449.538 314.939 452.737 318.039L462.129 327.139L443.077 328.382C438.623 328.452 436.478 333.872 439.677 336.972L449.156 346.157L430.018 347.314C425.564 347.385 423.418 352.806 426.617 355.905L436.185 365.176L405.091 410.762C402.855 414.039 399.144 416 395.177 416H272.638C265.238 416 259.601 409.367 260.795 402.064L285.044 253.675C286.325 245.835 275.626 242.26 271.936 249.295L187.888 409.573C185.815 413.524 181.722 416 177.261 416H51.0175C47.1517 416 44.0176 412.866 44.0175 409V44.1521C44.0175 42.1786 43.047 40.3313 41.422 39.2115L3.04098 12.7637C-2.6159 8.86528 0.142603 0.000337181 7.01266 0H155.518Z" />
                </svg>
              </div>
              <span className="font-heading font-bold text-xl uppercase tracking-wider">BoostFix Usinagem</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Especialistas em elementos de fixação e componentes de precisão para alta performance automotiva e linha pesada diesel.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider text-white">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><Link href="#catalogo" className="text-white/60 hover:text-primary transition-colors text-sm">Catálogo Completo</Link></li>
              <li><Link href="#aplicacoes" className="text-white/60 hover:text-primary transition-colors text-sm">Guia de Aplicações</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-primary transition-colors text-sm">Tabela de Torques</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-primary transition-colors text-sm">Política de Qualidade</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider text-white">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-primary shrink-0 mt-0.5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="text-white/60 text-sm">Complexo Industrial BoostFix Usinagem<br />Polo Automotivo, São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-primary shrink-0"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span className="text-white/60 text-sm">(11) 4000-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-primary shrink-0"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className="text-white/60 text-sm">vendas@boostfixusinagem.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; 2026 BoostFix Usinagem. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-white/40 hover:text-white transition-colors text-sm">Termos de Uso</Link>
            <Link href="#" className="text-white/40 hover:text-white transition-colors text-sm">Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
